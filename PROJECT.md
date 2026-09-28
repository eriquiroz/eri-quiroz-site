# eriquiroz.com — sitio personal de Erika Quiroz

## Qué es

Una sola página, cinco bloques con anclas: `#inicio`, `#como-pienso`, `#formacion`, `#recursos`, `#sobre-mi`. Posicionamiento: **"Enseño a decidir cuándo aplicar IA en el trabajo, y cuándo no."** Firma: **"Decidir antes de aplicar."** Objetivo: que quien llega desde LinkedIn, YouTube o una búsqueda del nombre entienda en segundos quién es y qué enseña, y deje su correo para recibir la lista de verificación.

Brief completo (estrategia, textos finales, restricciones): [brief-eriquiroz.md](brief-eriquiroz.md). Diseño aprobado: [reference/diseno-sitio.html](reference/diseno-sitio.html).

## Deploy

Repo `eriquiroz/eri-quiroz-site`, rama `master`, proyecto Vercel `eri-quiroz-site`. Push a `master` = deploy. Qué archivos se publican: ver `.vercelignore` y CLAUDE.md.

## Archivos

```
index.html              el sitio
privacidad.html         política de privacidad (se sirve en /privacidad gracias a cleanUrls)
assets/erika-quiroz.jpg foto (960×1200, 4:5, sin metadatos)
assets/fonts/           Hanken Grotesk (normal variable + itálica) e IBM Plex Mono, subconjunto latino, licencia OFL
vercel.json             cleanUrls y redirecciones del blog anterior a /
.vercelignore           lista de lo que se publica
brief-eriquiroz.md      brief (manda sobre el contenido)
reference/diseno-sitio.html   diseño aprobado
recursos/               PDF publicados (lista de verificación)
fuentes/                fuente HTML del PDF y script para generarlo; no se publica
archivo/                sitio anterior (v3) y su material; no se publica
assets/originals, assets/images   fotos del sitio anterior; no se publican
```

## Formulario de la lista

Conectado a **Brevo** (cuenta gratuita de Erika, remitente `hola@eriquiroz.com`, dominio autenticado en Brevo).

- El formulario de `#recursos` hace POST a la dirección del formulario de Brevo (atributo `action` del `<form>`, `…sibforms.com/serve/…?isAjax=1`) con los campos `EMAIL`, `email_address_check` (trampa para bots, vacío) y `locale`.
- En Brevo: el formulario agrega el contacto a la lista **"Lista de verificación"**, sin confirmación (la cuenta no tiene activados los correos transaccionales). La **automatización de bienvenida** se activa al entrar a esa lista y envía el correo con el enlace al PDF.
- **Probado de punta a punta en producción (septiembre 2026):** suscripción desde el sitio → contacto en la lista → correo de bienvenida → descarga del PDF.
- Automatización de bienvenida: disparador "contacto agregado a la lista Lista de verificación", envío inmediato, con reingreso permitido. La plantilla no usa campos personalizados (el formulario solo pide el correo; un `{{ contact.FIRSTNAME }}` vacío puede impedir el envío). Enlace al PDF en texto plano.
- Para repetir una prueba con el mismo correo: borrar primero ese contacto en Brevo (si ya está en la lista, volver a suscribirse no dispara la automatización).
- Cuenta de Brevo verificada; mientras una cuenta nueva no está verificada, Brevo retiene los envíos aunque el flujo figure como terminado.
- Si se cambia el formulario en Brevo, copiar la nueva dirección del `action` desde *Compartir → Código HTML* y reemplazarla en `index.html`.
- Brevo gratis: 300 envíos al día. Suficiente para la lista; un boletín a más de 300 contactos se reparte en varios días o requiere plan pagado.
- Correo entrante: `hola@eriquiroz.com` se reenvía a Gmail con ImprovMX (registros MX y `v=spf1` en Hostinger). Los registros de Brevo (`brevo-code`, DKIM `brevo1/2._domainkey`, `_dmarc`) conviven con esos; si se agrega otro servicio que pida SPF, combinar en un solo `v=spf1`.
- DNS: el dominio usa los servidores de Hostinger (no los de Vercel). Todo registro se agrega allá.

## Política de privacidad

- `privacidad.html`, publicada en `https://eriquiroz.com/privacidad`, texto aprobado por Erika (septiembre 2026). Enlazada desde la nota del formulario y desde el pie de página.
- **Si el sitio agrega analítica (Google Analytics u otra), archivos de seguimiento o un servicio nuevo que trate datos, hay que actualizar la política** (secciones "Dónde se guardan" y "Este sitio") y la fecha de actualización, con el texto aprobado por Erika.
- No es asesoría legal: si se ofrece algo pagado o se recogen más datos, conviene revisión especializada (nueva ley chilena de datos personales vigente desde diciembre de 2026).

## Lista de verificación (PDF)

- Publicada en `https://eriquiroz.com/recursos/lista-verificacion-ia.pdf` (no se enlaza desde la página; es lo que envía el servicio de correo).
- Fuente: `fuentes/lista-verificacion-ia.html`, con el mismo sistema visual del sitio (A4, 4 páginas). El texto es el de Erika, sin cambios (su versión original está en `archivo/lista-verificacion-ia-original.pdf`).
- Para regenerar tras editar el texto: desde la raíz, `python3 -m http.server 8765` y en otra terminal `node fuentes/generar-pdf.mjs` (requiere Playwright; con `CHROMIUM=/ruta/a/chrome` si no tiene su navegador descargado). Revisar que siga en 4 páginas.

## Pendientes para lanzar del todo (solo Erika puede resolverlos)

Buscar `pendiente:` en `index.html` para ubicar cada uno.

1. **og:image** 1200×630 para cuando se comparte el enlace.
2. Actualizar encabezado y "Acerca de" de LinkedIn para que coincidan con el sitio.
