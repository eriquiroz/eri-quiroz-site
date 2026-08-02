# CLAUDE.md

Guía para trabajar en este repo. Contexto completo del proyecto en [PROJECT.md](PROJECT.md); el detalle de copy/estructura de la v3 vive en [eriquiroz-landing-v3-delta.md](eriquiroz-landing-v3-delta.md) — ese documento manda sobre cualquier resumen, incluido este archivo.

## Qué es este repo

Landing page estática para Erika Quiroz (eriquiroz.com), más un post de blog heredado. Sin build, sin framework, sin dependencias de paquetes: HTML + CSS + JS plano por página, todo inline. Cualquier implementación final debe seguir ese mismo patrón (sin bundler) salvo que se pida explícitamente lo contrario.

**Este repo ES `eriquiroz/eri-quiroz-site` en GitHub** (remote `origin`), conectado al proyecto de Vercel que sirve `eriquiroz.com` en producción. La rama es **`master`** (no `main`) — así estaba configurada de antes, y cambiarla implicaría reconectar Vercel manualmente. Un push a `master` deploya solo. No crear un repo nuevo para este proyecto — ya existe y está en vivo.

## Los dos formatos de HTML en este repo — no confundirlos

- **HTML plano** (`index.html`, `reference/eriquiroz-landing-v2-live.html`): el formato de producción. Autocontenido, sirve directo desde cualquier host estático. `index.html` es el sitio que se deploya.
- **`.dc.html`** (`reference/hero-punto-q-canvas.dc.html`, `reference/canvas-empty.dc.html`): exports del Canvas/Artifacts de Claude.ai. Usan un custom element `<x-dc>`, bindings de plantilla `{{ variable }}`, atributos `style-hover`/`style-focus`, y una clase `class Component extends DCLogic { ... }` al final. Solo funcionan con `reference/support.js` cargado. **No son deployables tal cual** y son solo referencia histórica — `index.html` ya incorporó lo útil de ese borrador (nav con anclas, foto en hero/quién-soy, acordeón de FAQ, contadores) y descartó lo que violaba el "no tocar" del delta (color `--ink` distinto, orbit ausente, footer rediseñado).

## Placeholders y contenido pendiente — convención en `index.html`

- Valores numéricos que Erika no ha confirmado (precio piso, contadores de proyectos/rubros) usan `<span class="ph">` con subrayado punteado — visible a propósito, no oculto. Buscar `class="ph"` para encontrarlos todos.
- Notas editoriales que no son copy de cliente (la "línea humana" pendiente en Quién soy, la confirmación de las últimas 3 respuestas del FAQ) están como comentarios `<!-- pendiente: ... -->` en el HTML, no como texto visible — no exponer notas internas a quien visita el sitio real.
- El WhatsApp del cierre está removido (no había número real; el delta mismo autoriza "sacarlo" en vez de dejar un número falso). Si Erika da un número real, agregar de vuelta un link `https://wa.me/<numero>` junto al botón "Conversemos".

## Qué no tocar sin permiso explícito

Del delta (sección "Lo que no hay que tocar") y confirmado en el código de v2:

- Sistema de color: `--beige #f4f1ea` `--paper #faf8f3` `--ink #1a1a1a` `--graphite #3a3a3a` `--muted #7a7266` `--sand #c9bca8` `--deep #a8967d` `--line #e4ddd0`
- El logo Punto Q (círculo trazo + círculo punto relleno) y su animación de órbita (`animateTransform`, 46s, se elimina completa si `prefers-reduced-motion`).
- Tipografía: Hanken Grotesk (texto) + JetBrains Mono (eyebrows/mono).
- El footer y el patrón de reveal-on-scroll (`IntersectionObserver`, clase `.reveal`/`data-reveal`).
- Los tres verbos de "qué te dejo funcionando": respondiendo, persiguiendo, recuperando.
- El botón "Quiero saber cuánto estoy perdiendo" y el párrafo de cierre sobre la primera conversación gratis.

## Copy: reglas de tono

- Segunda persona, concreto, sin jerga de agencia. Ver glosario de reemplazos en la sección 13 del delta (ej.: "entregables" → "lo que queda funcionando", "cadencia" → "ritmo") y aplicarlo en todo texto nuevo.
- Género neutro: evitar frases que asuman que quien lee es mujer (sección 14 del delta tiene los dos casos ya detectados).
- **Nunca inventar cifras ni compromisos nuevos.** El precio piso, los contadores de proyectos/rubros, el número de WhatsApp y la "línea humana" de Quién soy son placeholders explícitos hasta que Erika los confirme (ver PROJECT.md, "Pendientes que solo Erika puede resolver"). Si falta un valor real, dejarlo marcado como pendiente en vez de rellenarlo con algo plausible.
- Las respuestas 5, 6 y 7 del FAQ nuevo (sección 9 del delta) contienen compromisos que Claude propuso pero Erika no ha confirmado — no darlas por definitivas.

## El blog y el formulario de contacto

- `blog/el-dinero-que-ya-ganaste.html` es contenido heredado del sitio anterior (dental-only), conservado a pedido de Erika y enlazado desde el nav/footer de `index.html`. Su copy no sigue el giro a "negocios de servicios en general" del delta — no reescribirlo por iniciativa propia, es una decisión de contenido aparte.
- El formulario de contacto en `#contacto` usa [Web3Forms](https://web3forms.com) (`access_key` hardcodeado en el HTML — es un identificador público de formulario, no un secreto, así funciona Web3Forms). Mismo endpoint y patrón que ya funcionaba en el sitio anterior. Si se edita, mantener el mismo `access_key` salvo que Erika pida uno nuevo.

## Convenciones al editar

- Un solo archivo HTML por página, CSS en `<style>` inline, JS en `<script>` inline al final — así está v2.
- Mobile-first breakpoints ya definidos en v2 (`@media(max-width:760px)`, `@media(max-width:680px)`) — reusar esos cortes, no inventar nuevos sin necesidad.
- Antes de dar por terminado un cambio visual, levantarlo en navegador (server estático simple, ej. `python3 -m http.server`) y revisar tanto el flujo principal como el responsive — no hay suite de tests que lo valide por ti.
