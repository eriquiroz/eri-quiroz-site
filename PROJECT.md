# eriquiroz.com — Landing page de Erika Quiroz

## Qué es esto

Landing page personal/profesional de Erika Quiroz, ingeniera civil industrial que construye sistemas (respuesta automática, seguimiento de presupuestos, reactivación de clientes) para negocios de servicios en general. No es una agencia ni un producto de software: es consultoría + implementación, con alcance y precio cerrados antes de empezar.

Nota de alcance: las clínicas dentales son un rubro más entre varios. **DentalGrowStack** (dentalgrowstack.com) es un proyecto hermano con sitio propio — esta landing solo lo enlaza como calculadora gratuita para visitantes de clínicas, no lo reemplaza.

## Estado actual

- **[index.html](index.html) — sitio v3, en producción.** HTML/CSS/JS plano, sin build, autocontenido (mismo patrón que v2). Aplica el delta completo: orden de secciones, copy nuevo, foto de Erika en hero y Quién soy, sección de preguntas frecuentes, nav con anclas, footer mínimo respetado tal como pide el delta. Construido a partir de v2 (para no perder el sistema de color/tipografía/footer/animación del orbit, todos protegidos por el delta) más las mejoras estructurales del borrador de Canvas donde no entraban en conflicto con el "no tocar" del delta.
- **reference/eriquiroz-landing-v2-live.html** — baseline anterior, se mantiene como referencia histórica.
- **reference/hero-punto-q-canvas.dc.html** — borrador visual de v3 en formato Canvas de Claude.ai (no deployable). Sirvió de inspiración para `index.html` pero se descartaron sus desvíos del delta: cambiaba el color `--ink`, quitaba la animación del orbit y rediseñaba el footer — las tres cosas que el delta protege explícitamente. Se conserva solo como referencia.

Placeholders visibles a propósito en `index.html` (no se inventó ningún valor): precio piso (`$______`), contadores de proyectos y rubros (`__`). El WhatsApp del cierre se quitó (no había número real; el propio delta autoriza "sacarlo" si no hay número). La "línea humana" de Quién soy y la confirmación de las 3 últimas respuestas del FAQ se dejaron fuera del HTML visible (son notas editoriales para Erika, no copy de cliente) — quedan marcadas con comentarios HTML en el código, en el lugar exacto donde van.

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

Tokens de color (de v2, ya usados también en v3-canvas):
`--beige:#f4f1ea` `--paper:#faf8f3` `--ink:#1a1a1a` `--graphite:#3a3a3a` `--muted:#7a7266` `--sand:#c9bca8` `--deep:#a8967d` `--line:#e4ddd0`

Tipografía: Hanken Grotesk (texto) + JetBrains Mono (eyebrows, mono labels). Logo: anillo + punto (círculo trazo + círculo relleno en `--deep`/`--ink`). Animación de órbita del hero y reveal-on-scroll: mantener tal cual.

## Pendientes que solo Erika puede resolver

Ya no bloquean el deploy (el sitio está en producción con placeholders visibles y honestos), pero sí bloquean que el copy quede terminado — ver sección 15 del delta para contexto completo:

1. Precio piso de la implementación de tres semanas — hoy en `index.html` dice `Desde $______ + IVA` con subrayado punteado.
2. Segunda foto para "Quién soy" (hoy reusa la misma foto del hero, porque es la única que existe).
   - **Resolución de la foto:** pendiente un upscale real vía Higgsfield (`upscale_image`, ~2 créditos). La cuenta conectada tiene 0 créditos — hay que decidir top-up o el trial gratis de 3 días de Higgsfield Plus (100 créditos, $0 hoy, tarjeta requerida, se renueva a $49/mes si no se cancela antes) antes de poder correrlo. Mientras tanto el sitio usa la foto original sin procesar (decisión explícita de Erika, ver commit correspondiente).
3. La "línea humana" en Quién soy — omitida del HTML visible, marcada con un comentario en el código donde debe ir.
4. Los dos contadores de "Lo que he construido": `__ proyectos` y `__ rubros` (placeholder visible).
5. Número real de WhatsApp — se sacó del cierre por no tener uno real (el delta autoriza esta opción). Si Erika quiere reactivarlo, hay que agregar el link de vuelta con el número real.
6. Confirmar las 7 respuestas del FAQ, especialmente las últimas tres — nota dejada como comentario HTML en `index.html` junto a la sección de preguntas.

## Próximos pasos sugeridos

1. Resolver los pendientes de arriba con Erika y editar `index.html` directamente (son ediciones de texto puntuales, buscar `class="ph"` para los placeholders y los comentarios `<!-- pendiente: ... -->`).
2. Decidir si se integra el render del isotipo (`assets/images/punto-q-ring-render.webp`) — hoy no está usado en `index.html`.
3. Deploy a eriquiroz.com (GitHub + Vercel + dominio en Hostinger — ver abajo).
