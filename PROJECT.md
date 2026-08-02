# eriquiroz.com — Landing page de Erika Quiroz

## Qué es esto

Landing page personal/profesional de Erika Quiroz, ingeniera civil industrial que construye sistemas (respuesta automática, seguimiento de presupuestos, reactivación de clientes) para negocios de servicios en general. No es una agencia ni un producto de software: es consultoría + implementación, con alcance y precio cerrados antes de empezar.

Nota de alcance: las clínicas dentales son un rubro más entre varios. **DentalGrowStack** (dentalgrowstack.com) es un proyecto hermano con sitio propio — esta landing solo lo enlaza como calculadora gratuita para visitantes de clínicas, no lo reemplaza.

## Estado del deploy

**En producción, verificado.** [eriquiroz.com](https://eriquiroz.com) sirve el `index.html` de este repo tal cual — confirmado por curl que el HTML en vivo es byte-idéntico al local (último commit `66a050a`, 2026-08-02). Repo = `eriquiroz/eri-quiroz-site` en GitHub, rama `master`, proyecto Vercel `eri-quiroz-site` — un `git push origin master` deploya solo, no hace falta nada más en Vercel ni en Hostinger (el dominio ya apuntaba ahí antes de este trabajo).

**Lo que falta no es técnico — es contenido.** El sitio funciona de punta a punta (nav, formulario, blog, fotos), pero tiene placeholders visibles a un visitante real (precio, contadores) hasta que Erika dé los valores — ver "Pendientes que solo Erika puede resolver" abajo.

## Estado actual

- **[index.html](index.html) — sitio v3, en producción.** HTML/CSS/JS plano, sin build, autocontenido. Port fiel de [reference/hero-punto-q-canvas.dc.html](reference/hero-punto-q-canvas.dc.html) — ese borrador de Canvas **es** el diseño real que Erika aprobó y espera ver en producción, no una referencia opcional. `index.html` reproduce su sistema de color (`#211E19` de ink, no el `#1a1a1a` de v2), su nav flotante tipo pill con menú hamburguesa en mobile, el efecto "shine" animado en "se acuerde", el footer oscuro con bloque de CTA propio, y el price-block claro (`#F5EFE2`) — todo convertido de los bindings `{{ }}` / `style-hover` / `style-focus` del formato Canvas a CSS y JS planos.
- **reference/eriquiroz-landing-v2-live.html** — baseline anterior (v2), ya no es la referencia de diseño. Se mantiene solo como historial.

**Importante — lección de esta iteración:** un primer intento de `index.html` reconstruyó el sitio priorizando la lista "no tocar" del delta (sistema de color, footer, animación del orbit) por sobre el borrador de Canvas, revirtiendo varias de sus decisiones visuales (color de ink, nav, footer, price-block). Erika lo reportó como "versión antigua". La lista "no tocar" del delta describe el sistema de v2 en el momento en que se escribió el delta; el borrador de Canvas es una iteración posterior de ese mismo sistema (misma paleta base, misma tipografía, mismo logo) y es la que manda. Ante una discrepancia entre el delta y un artefacto de diseño más reciente que Erika comparte directamente, el artefacto más reciente gana — no relitigar contra el delta.

Placeholders visibles a propósito en `index.html` (no se inventó ningún valor): precio piso (`$·······`), contadores de proyectos y rubros (`__`). El WhatsApp se quitó (no había número real; el propio delta autoriza "sacarlo" si no hay número) — es la única omisión deliberada respecto al borrador de Canvas, que sí lo incluye con el número placeholder `56900000000`. La "línea humana" de Quién soy, la nota de confirmación de las últimas 3 respuestas del FAQ, y la nota "reemplaza el piso de precio" se dejaron fuera del HTML visible (son notas editoriales de Canvas dirigidas a Erika, no copy de cliente) — quedan marcadas con comentarios HTML en el código, en el lugar exacto donde van.

## El repo de GitHub ya existía — se reusó, no se creó uno nuevo

`eriquiroz.com` ya estaba en producción antes de este trabajo, servido desde el proyecto de Vercel `eri-quiroz-site`, conectado al repo `eriquiroz/eri-quiroz-site` (rama `master`, sin tocar desde el 18 de junio). Ese sitio vivo era una generación anterior — enfocado 100% en clínicas dentales, con un diseño distinto (mismos tokens de color, layout diferente) — que quedó desactualizado cuando el trabajo de rediseño siguió en Claude Canvas (v2 → delta → v3) sin volver a subirse a git.

Este repo local (`personal-site/`) se conectó como ese mismo `eri-quiroz-site` (`git remote origin`) y el `index.html` v3 reemplazó al `index.html` viejo sobre la rama `master` existente, para no perder el historial ni la conexión con Vercel — un push a `master` deploya solo.

De ese sitio viejo se conservaron dos cosas, a pedido de Erika:

- **`blog/el-dinero-que-ya-ganaste.html` + `blog-posts/blog-post-calculadora-fuga.md`** — el único post publicado, enfocado en clínicas dentales. Se mantiene enlazado desde el nav y el footer de `index.html` (`Blog →`), con sus links internos corregidos para apuntar a las anclas del sitio nuevo (`#inicio`, `#casos`, `#quien-soy`, `#contacto`) en vez de las viejas (`#top`, `#proyectos`, `#blog`, `#sobre`) que ya no existen. Su copy sigue siendo dental-only — no se reescribió — porque contradice el giro a "negocios de servicios en general" del delta; si se quiere alinear, es trabajo de copy aparte.
- **El formulario de contacto (Web3Forms)** — se portó al cierre de `index.html`, restyleado para el sistema de diseño de v3 (fondo oscuro de `.close-section`), conservando el mismo access key y el mismo endpoint (`https://api.web3forms.com/submit`) que ya estaba funcionando en producción. Queda como alternativa al botón "Conversemos" (mailto), no lo reemplaza.

## Qué cambia en v3 (resumen — el detalle vive en el delta)

- Reordena secciones: "Quién soy" sube del puesto 8 al 3; "Lo que no hago" desaparece y sus puntos se absorben en una nueva sección "Preguntas que me hacen".
- Header/footer: `ERIKA QUIROZ` (mono, versalitas) → `Erika Quiroz` (Hanken Grotesk, caja baja). El monograma "EQ" se reemplaza por una foto real.
- Hero: saludo nuevo ("Hola, soy Erika."), h1 y subtítulo reescritos, línea de "primera conversación gratis" sube desde el cierre.
- Nueva sección de precio con piso numérico visible (hoy es texto sin cifra).
- Glosario de reemplazos de copy (sección 13 del delta) y dos ajustes de género neutro (sección 14).
- Lista completa de qué NO tocar: sistema de color, logo Punto Q, tipografía, footer, CSS base, animación del orbit, reveal on scroll.

Ver [eriquiroz-landing-v3-delta.md](eriquiroz-landing-v3-delta.md) para el detalle sección por sección — es el documento que manda sobre cualquier resumen.

## Inventario de archivos

```
index.html                             sitio de producción — este es el que se deploya
eriquiroz-landing-v3-delta.md          spec de v3, fuente de verdad del copy/estructura
Animación anillo Punto Q.zip           export original de Claude Canvas (archivo histórico)
blog/el-dinero-que-ya-ganaste.html     post heredado del sitio viejo, se mantiene enlazado
blog-posts/blog-post-calculadora-fuga.md  fuente markdown del post de arriba

reference/
  eriquiroz-landing-v2-live.html       baseline anterior, HTML/CSS/JS plano
  hero-punto-q-canvas.dc.html          borrador visual de v3 (formato Canvas, NO producción)
  canvas-empty.dc.html                 canvas vacío, sin contenido, ignorar
  support.js                           runtime necesario solo para previsualizar los .dc.html
  screenshots/                         8 capturas de iteraciones del diseño del hero y otras cards

assets/
  images/
    erika-cutout.png                   foto de producción: original tal cual, SIN retocar (ver nota abajo)
    punto-q-ring-render.webp           render 3D del isotipo (anillo + punto), sin integrar aún
  originals/
    erika-photo-raw-cutout.png         mismo archivo que assets/images/erika-cutout.png — fuente
    erika-photo-yellow-bg.png          foto original con fondo amarillo sólido — fuente del recorte de arriba
```

El video del isotipo (`Using_the_attached_image_as_th.mp4` dentro del zip) se descartó — Erika decidió no usarlo. Sigue disponible dentro del zip original si hace falta recuperarlo, pero no se copió a `assets/`.

**Sobre las fotos — historial:** solo existe una foto real de Erika (la de fondo amarillo, 912×1181). El "cutout" es esa misma foto con el fondo removido. El pendiente #2 (una foto distinta para "Quién soy") sigue abierto — ambas secciones usan la misma imagen.

Primero se intentó un retoque con Pillow (autocontraste, chroma-key por HSV, despill, upscale 2x) porque la cuenta de Higgsfield conectada tenía 0 créditos. Erika revisó el resultado en producción y pidió revertir: el upscale casero se veía borroso/con artefactos a tamaño real, peor que el original sin tocar. **Se volvió al archivo original tal cual** (`assets/images/erika-cutout.png` = copia exacta de `assets/originals/erika-photo-raw-cutout.png`, sin ningún procesamiento). Sigue teniendo el halo/fleco amarillo de un recorte de fondo imperfecto y baja resolución nativa (912×1181) — el arreglo real pendiente es un upscale con IA vía Higgsfield (ver sección de créditos abajo), no otro intento casero con Pillow.

## Sistema de diseño (no negociable salvo instrucción explícita)

Tokens de color reales de `index.html` (tomados del borrador de Canvas, fuente de verdad actual):
`--beige:#F4F1EA` `--ink:#211E19` `--deep:#A8967D` `--deep2:#806A49` `--alt:#ECE7DC` `--cream-card:#F5EFE2` `--cierre-bg:#E4DAC8`

Tipografía: Hanken Grotesk (texto, pesos 400–800) + JetBrains Mono (eyebrows, mono labels, nav). Logo: anillo + punto (círculo trazo + círculo relleno en `--deep`/`--ink`). Reveal-on-scroll: mantener. La animación de "anillo que orbita" (SVG `animateTransform`) de v2 **no** está en el diseño de Canvas — el hero usa en su lugar un blob radial-gradient estático detrás del contenido; no reintroducir el orbit sin que Erika lo pida explícitamente.

## Pendientes que solo Erika puede resolver

El sitio ya está en producción (ver "Estado del deploy" abajo); esto es lo que falta para que el copy quede terminado — ver sección 15 del delta para contexto completo. Buscar `<!-- pendiente: ... -->` en `index.html` para ubicar los tres que quedan como comentario HTML; los otros están inline con subrayado punteado (`border-bottom:2px dashed`), visibles en la página.

1. **Precio piso** de la implementación de tres semanas — `index.html` línea ~378, hoy dice `Desde $······· + IVA`.
2. **Segunda foto para "Quién soy"** — hoy reusa la misma foto del hero porque es la única que existe.
3. **Resolución de la foto** (`assets/images/erika-cutout.png`, 912×1181, con halo amarillo de un recorte de fondo imperfecto) — pendiente un upscale real vía Higgsfield (`upscale_image`, ~2 créditos). La cuenta conectada tiene 0 créditos. Opciones que ya se le presentaron a Erika: trial gratis de 3 días de Higgsfield Plus (100 créditos, $0 hoy, tarjeta requerida, se renueva a $49/mes si no se cancela antes) o comprar un pack de créditos. **No repetir el intento de upscale casero con Pillow** — ya se probó, Erika lo rechazó por verse borroso a tamaño real (ver "Sobre las fotos — historial" arriba). Si se retoma: la imagen fuente ya está subida a Higgsfield (`media_id: c7f431ee-de1c-4061-9074-4bc21fecab4c`, puede haber expirado — resubir si es necesario) — correr `upscale_image` con `resolution:"4k"` sobre ella y volver a recortar/despillar el resultado con el mismo método HSV que ya está probado (ver historial de esta sesión o rehacer: autocontraste → chroma-key HSV con umbral de saturación/valor, no distancia RGB pura → despill proporcional).
4. **La "línea humana"** en Quién soy — `index.html` línea ~288 (comentario HTML), una frase personal de Erika sin relación con el trabajo.
5. **Los dos contadores** de "Lo que he construido" — `index.html` líneas ~400-401, `__ proyectos` y `__ rubros`.
6. **Número real de WhatsApp** — se sacó del cierre y del footer por no tener uno real (el delta autoriza esta opción). Si Erika quiere reactivarlo, agregar de vuelta `https://wa.me/<numero>` junto al botón "Conversemos" del cierre y como ítem "WhatsApp" en el footer (ver CLAUDE.md).
7. **Confirmar las 7 respuestas del FAQ**, especialmente las últimas tres — `index.html` línea ~423 (comentario HTML).

## Próximos pasos sugeridos

1. Resolver los pendientes de arriba con Erika y editar `index.html` directamente (son ediciones de texto puntuales sobre los puntos marcados arriba).
2. Decidir si se integra el render del isotipo (`assets/images/punto-q-ring-render.webp`) — hoy no está usado en `index.html`.
3. Si se quiere alinear el blog con el posicionamiento "negocios de servicios en general" (hoy es 100% dental), es trabajo de copy aparte — no se ha tocado.
