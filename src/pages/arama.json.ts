import type { APIRoute } from 'astro';
import { searchIndex } from '../lib/products';

// Derleme anında statik dosya olarak üretilir: /arama.json
export const GET: APIRoute = () =>
  new Response(JSON.stringify(searchIndex()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
