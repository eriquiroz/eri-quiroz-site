// Genera assets/og-image.jpg (1200×630) desde fuentes/og-image.html.
// Uso (desde la raíz, con un servidor estático en :8765): node fuentes/generar-og.mjs
import { chromium } from 'playwright';
const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.goto('http://localhost:8765/fuentes/og-image.html', { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: 'assets/og-image.jpg', type: 'jpeg', quality: 88 });
await b.close();
