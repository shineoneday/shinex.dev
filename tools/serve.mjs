// Local preview only: node tools/serve.mjs [folder] [port]
//   node tools/serve.mjs   ->  serves docs/ at http://localhost:4173
// GitHub Pages serves the same files in production, this script is not deployed logic.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = resolve(fileURLToPath(new URL('..', import.meta.url)));
const root = resolve(project, process.argv[2] ?? 'docs');
const port = Number(process.argv[3]) || 4173;
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
};

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = normalize(join(root, path));
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-store' });
    res.end(body);
  } catch {
    const body = await readFile(join(root, '404.html')).catch(() => 'Not found');
    res.writeHead(404, { 'content-type': types['.html'] });
    res.end(body);
  }
}).listen(port, () => console.log(`${root} -> http://localhost:${port}`));
