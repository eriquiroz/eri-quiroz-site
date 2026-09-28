# CLAUDE.md

Guía para trabajar en este repo. Contexto y pendientes en [PROJECT.md](PROJECT.md). El contenido y las reglas del sitio viven en [brief-eriquiroz.md](brief-eriquiroz.md) — ese documento manda sobre cualquier resumen, incluido este archivo.

## Qué es este repo

Sitio personal de Erika Quiroz (eriquiroz.com): una sola página estática sobre cómo decidir cuándo aplicar IA en el trabajo. Sin build, sin framework, sin dependencias de paquetes: `index.html` con CSS y JS inline. Mantener ese patrón.

**Este repo ES `eriquiroz/eri-quiroz-site` en GitHub** (remote `origin`), conectado al proyecto de Vercel `eri-quiroz-site` que sirve `eriquiroz.com`. La rama de producción es **`master`** (no `main`). Un push a `master` deploya solo. No crear un repo nuevo.

## Qué se publica

`.vercelignore` funciona como lista permitida: solo se suben a Vercel los `.html` de la raíz, `vercel.json`, `assets/` (menos `assets/originals` y `assets/images`, fotos del sitio anterior) y `recursos/`. Todo lo demás (este archivo, PROJECT.md, el brief, `reference/`, `archivo/`) queda en el repo pero **no** es público. Si agregas una carpeta nueva que deba publicarse, agrégala a `.vercelignore` con `!carpeta`.

`vercel.json` redirige `/blog` y `/blog/*` (post del sitio anterior) a `/`.

## Fuentes de diseño

- `reference/diseno-sitio.html` — el diseño aprobado (Claude Design). `index.html` es un port fiel; las únicas diferencias son de producción: fuentes alojadas en `assets/fonts/`, formulario conectado a Brevo, y los elementos que dependen de un dato pendiente (enlace a política de privacidad) quedan como comentarios `<!-- pendiente: ... -->` en vez de mostrarse vacíos o con `href="#"`.
- `archivo/` — el sitio anterior (v3, negocios de servicios / dental) y todo su material. Solo historial: no usar su diseño ni su copy.

## Reglas de contenido (del brief)

- Todo texto visible sale del brief. **No redactar texto nuevo sin confirmación de Erika.** Si falta un dato, dejar un comentario `<!-- pendiente: ... -->` en vez de rellenarlo.
- Español, sin anglicismos, sobrio, sin adjetivos sobre Erika, cifras solo verificables.
- No mencionar: RūfCheck, Adjudica, DentalGrow, Kira, la calculadora. No mencionar clientes ni instituciones en ejemplos. No ofrecer consultoría en salud.
- Un solo llamado a la acción: recibir la lista. Sin casos, portafolio ni cifras. Solo modo claro.
- Enlaces externos con `target="_blank" rel="noopener"`.

## Convenciones al editar

- **Agregar un recurso**: copiar el bloque comentado `<li class="recurso">` en `#recursos`. Los PDF van en `recursos/`.
- **Lista de verificación**: el PDF `recursos/lista-verificacion-ia.pdf` se genera desde `fuentes/lista-verificacion-ia.html` (ver PROJECT.md). El texto es de Erika: no cambiarlo sin que ella lo pida; editar el HTML y regenerar, nunca el PDF a mano.
- **Foto**: `assets/erika-quiroz.jpg` (960×1200, 4:5, sin metadatos EXIF), en `.foto` dentro de `#inicio`. Para cambiarla, reemplazar el archivo con el mismo tamaño y proporción. Una sola foto en el sitio.
- **Formulario**: Brevo (ver PROJECT.md, "Formulario de la lista"). La dirección del `action` del formulario es pública (así funcionan los formularios de Brevo), no es un secreto. El envío del PDF lo hace la automatización de bienvenida en Brevo, no el sitio.
- Antes de dar por terminado un cambio visual, levantarlo en navegador (`python3 -m http.server` desde la raíz; las rutas de fuentes son absolutas `/assets/...`) y revisar escritorio y celular (~390px).
