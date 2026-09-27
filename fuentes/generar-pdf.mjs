// Genera recursos/lista-verificacion-ia.pdf desde fuentes/lista-verificacion-ia.html.
// Uso (desde la raíz del repo, con un servidor estático en :8765 y Playwright disponible):
//   python3 -m http.server 8765 &   node fuentes/generar-pdf.mjs
import { chromium } from 'playwright';
const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const p = await b.newPage();
await p.goto('http://localhost:8765/fuentes/lista-verificacion-ia.html', { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.pdf({ path: 'recursos/lista-verificacion-ia.pdf', preferCSSPageSize: true, printBackground: true, tagged: true });
await b.close();
