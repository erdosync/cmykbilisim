// Tarayıcı tarafı arama yardımcıları (ModelSearch ve Ürünler sayfası ortak kullanır)

export type Entry = { s: string; n: string; b: string; c: string; k: string; m: string[] };
export type Hit = { entry: Entry; model?: string; score: number };

export function normalize(s: string) {
  return s
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u')
    .replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]/g, '');
}

let cache: Promise<Entry[]> | null = null;
export function loadIndex() {
  cache ??= fetch('/arama.json').then((r) => r.json());
  return cache;
}

/** Ürün adı, kodu, markası ve uyumlu yazıcı modellerinde arar */
export function search(index: Entry[], query: string, limit = Infinity): Hit[] {
  const q = normalize(query);
  if (q.length < 2) return [];
  const hits: Hit[] = [];
  for (const entry of index) {
    let score = 0;
    let model: string | undefined;
    const code = normalize(entry.c);
    const name = normalize(entry.n);
    if (code === q) score = 100;
    else if (code.includes(q)) score = 80;
    else if (name.includes(q)) score = 60;
    const m = entry.m.find((x) => normalize(x).includes(q));
    if (m) {
      const exact = normalize(m) === q;
      if ((exact ? 90 : 70) > score) {
        score = exact ? 90 : 70;
        model = m;
      }
    }
    if (!score && normalize(`${entry.b}${entry.k}`).includes(q)) score = 20;
    if (score) hits.push({ entry, model, score });
  }
  return hits.sort((a, b) => b.score - a.score || a.entry.n.localeCompare(b.entry.n, 'tr')).slice(0, limit);
}

const FOLD: Record<string, string> = { i: '[iıİI]', s: '[sşŞS]', g: '[gğĞG]', u: '[uüÜU]', o: '[oöÖO]', c: '[cçÇC]' };

/** Eşleşen kısmı <mark> ile sarar; boşluk, tire gibi ayraçları yok sayar */
export function highlight(text: string, query: string) {
  const esc = (s: string) => s.replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]!);
  const q = normalize(query);
  if (!q) return esc(text);
  const pattern = [...q].map((ch) => FOLD[ch] ?? ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('[\\s\\-_./]*');
  const m = new RegExp(pattern, 'i').exec(text);
  if (!m) return esc(text);
  return esc(text.slice(0, m.index)) + '<mark>' + esc(m[0]) + '</mark>' + esc(text.slice(m.index + m[0].length));
}
