import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
const html = await readFile('dist/client/index.html', 'utf8');
await mkdir('dist/server', { recursive: true });
await mkdir('dist/.openai', { recursive: true });
await cp('.openai/hosting.json', 'dist/.openai/hosting.json');
await writeFile('dist/server/index.js', `const fallback=${JSON.stringify(html)};export default{async fetch(request,env){const url=new URL(request.url);if(env?.ASSETS?.fetch){const response=await env.ASSETS.fetch(request);if(response.status!==404)return response;}if(url.pathname==='/'||url.pathname==='/index.html')return new Response(fallback,{headers:{'content-type':'text/html; charset=utf-8'}});return new Response('Not found',{status:404});}};`);
