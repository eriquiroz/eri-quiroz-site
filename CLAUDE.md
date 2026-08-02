# CLAUDE.md

Guía para trabajar en este repo. Contexto completo del proyecto en [PROJECT.md](PROJECT.md); el detalle de copy/estructura de la v3 vive en [eriquiroz-landing-v3-delta.md](eriquiroz-landing-v3-delta.md) — ese documento manda sobre cualquier resumen, incluido este archivo.

## Qué es este repo

Landing page estática para Erika Quiroz (eriquiroz.com), más un post de blog heredado. Sin build, sin framework, sin dependencias de paquetes: HTML + CSS + JS plano por página, todo inline. Cualquier implementación final debe seguir ese mismo patrón (sin bundler) salvo que se pida explícitamente lo contrario.

**Este repo ES `eriquiroz/eri-quiroz-site` en GitHub** (remote `origin`), conectado al proyecto de Vercel que sirve `eriquiroz.com` en producción. La rama es **`master`** (no `main`) — así estaba configurada de antes, y cambiarla implicaría reconectar Vercel manualmente. Un push a `master` deploya solo. No crear un repo nuevo para este proyecto — ya existe y está en vivo.

## Los dos formatos de HTML en este repo — no confundirlos

- **HTML plano** (`index.html`): el formato de producción. Autocontenido, sirve directo desde cualquier host estático. Es el único archivo que se deploya.
- **`.dc.html`** (`reference/hero-punto-q-canvas.dc.html`, `reference/canvas-empty.dc.html`): exports del Canvas/Artifacts de Claude.ai. Usan un custom element `<x-dc>`, bindings de plantilla `{{ variable }}`, atributos `style-hover`/`style-focus`, y una clase `class Component extends DCLogic { ... }` al final. Solo funcionan con `reference/support.js` cargado, así que **no son deployables tal cual** — pero `hero-punto-q-canvas.dc.html` **es la fuente de verdad del diseño visual**, no solo una referencia histórica. `index.html` es un port 1:1 de ese borrador: mismo color de ink (`#211E19`), mismo nav flotante pill + hamburguesa, mismo efecto shine en "se acuerde", mismo footer oscuro con CTA propio, mismo price-block claro. Los bindings `{{ }}`/`style-hover`/`style-focus`/`onClick` se tradujeron a CSS (`:hover`, `:focus-visible`, clases) y JS vanilla — nada del *diseño* se cambió a propósito.
- **`reference/eriquiroz-landing-v2-live.html`**: la generación anterior al borrador de Canvas. Ya no es la referencia de diseño — se mantiene solo como historial. No usar sus valores de color/estilo para "corregir" `index.html`.

**Si el `.dc.html` y el delta ("no tocar...") entran en conflicto en algo visual** (color, nav, footer, animaciones), el `.dc.html` gana — es la iteración de diseño más reciente que Erika aprobó. Ya pasó una vez: una versión de `index.html` priorizó literalmente la lista "no tocar" del delta por sobre el borrador de Canvas, y Erika la reportó como "versión antigua" porque se sentía como un paso atrás visualmente. No repetir ese error.

## Placeholders y contenido pendiente — convención en `index.html`

- Valores numéricos que Erika no ha confirmado (precio piso `$·······`, contadores `__ proyectos` / `__ rubros`) quedan con el subrayado punteado tal como los muestra el borrador de Canvas — visibles a propósito, no ocultos.
- Notas editoriales que no son copy de cliente (la "línea humana" pendiente en Quién soy, la nota "reemplaza el piso de precio", la confirmación de las últimas 3 respuestas del FAQ) están como comentarios `<!-- pendiente: ... -->` en el HTML, no como texto visible — no exponer notas internas a quien visita el sitio real, aunque el borrador de Canvas sí las muestre en pantalla (esa es la única categoría de contenido donde no seguimos al `.dc.html` al pie de la letra).
- El WhatsApp está removido del todo (cierre y footer) — no había número real y el delta autoriza "sacarlo" en vez de dejar uno falso, a diferencia del borrador de Canvas que sí lo deja con el placeholder `56900000000`. Si Erika da un número real, agregar de vuelta `https://wa.me/<numero>` junto al botón "Conversemos" del cierre y el ítem "WhatsApp" en el footer.

## Qué no tocar sin permiso explícito

- El sistema de color/tipografía/logo de `index.html` (ver PROJECT.md, "Sistema de diseño") — viene del borrador de Canvas, no de v2.
- Los tres verbos de "qué te dejo funcionando": respondiendo, persiguiendo, recuperando.
- El botón "Quiero saber cuánto estoy perdiendo" y el párrafo de cierre sobre la primera conversación gratis.
- El patrón de reveal-on-scroll (`IntersectionObserver`, clase `.reveal`).

## Copy: reglas de tono

- Segunda persona, concreto, sin jerga de agencia. Ver glosario de reemplazos en la sección 13 del delta (ej.: "entregables" → "lo que queda funcionando", "cadencia" → "ritmo") y aplicarlo en todo texto nuevo.
- Género neutro: evitar frases que asuman que quien lee es mujer (sección 14 del delta tiene los dos casos ya detectados).
- **Nunca inventar cifras ni compromisos nuevos.** El precio piso, los contadores de proyectos/rubros, el número de WhatsApp y la "línea humana" de Quién soy son placeholders explícitos hasta que Erika los confirme (ver PROJECT.md, "Pendientes que solo Erika puede resolver"). Si falta un valor real, dejarlo marcado como pendiente en vez de rellenarlo con algo plausible.
- Las respuestas 5, 6 y 7 del FAQ nuevo (sección 9 del delta) contienen compromisos que Claude propuso pero Erika no ha confirmado — no darlas por definitivas.

## El blog y el formulario de contacto

- `blog/el-dinero-que-ya-ganaste.html` es contenido heredado del sitio anterior (dental-only), conservado a pedido de Erika y enlazado desde el nav/footer de `index.html`. Su copy no sigue el giro a "negocios de servicios en general" del delta — no reescribirlo por iniciativa propia, es una decisión de contenido aparte.
- El formulario de contacto en `#contacto` usa [Web3Forms](https://web3forms.com) (`access_key` hardcodeado en el HTML — es un identificador público de formulario, no un secreto, así funciona Web3Forms). Mismo endpoint y patrón que ya funcionaba en el sitio anterior. Si se edita, mantener el mismo `access_key` salvo que Erika pida uno nuevo.

## Convenciones al editar

- Un solo archivo HTML por página, CSS en `<style>` inline, JS en `<script>` inline al final.
- Breakpoint de nav (pill de escritorio vs. hamburguesa mobile): `768px`, viene del propio borrador de Canvas (`isMobile = innerWidth < 768` en su lógica original) — no cambiarlo sin motivo.
- Antes de dar por terminado un cambio visual, levantarlo en navegador (server estático simple, ej. `python3 -m http.server`) y revisar tanto el flujo principal como el responsive — no hay suite de tests que lo valide por ti. Ojo con secciones que usan `min-height:100vh` (el hero) al tomar capturas de página completa con una ventana artificialmente alta: los `vh` se recalculan contra esa altura y la sección se estira, mostrando de más antes de llegar al resto del contenido.
