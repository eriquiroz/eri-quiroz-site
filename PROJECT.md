# eriquiroz.com — sitio personal de Erika Quiroz

## Qué es

Una sola página, cinco bloques con anclas: `#inicio`, `#como-pienso`, `#formacion`, `#recursos`, `#sobre-mi`. Posicionamiento: **"Enseño a decidir cuándo aplicar IA en el trabajo, y cuándo no."** Firma: **"Decidir antes de aplicar."** Objetivo: que quien llega desde LinkedIn, YouTube o una búsqueda del nombre entienda en segundos quién es y qué enseña, y deje su correo para recibir la lista de verificación.

Brief completo (estrategia, textos finales, restricciones): [brief-eriquiroz.md](brief-eriquiroz.md). Diseño aprobado: [reference/diseno-sitio.html](reference/diseno-sitio.html).

## Deploy

Repo `eriquiroz/eri-quiroz-site`, rama `master`, proyecto Vercel `eri-quiroz-site`. Push a `master` = deploy. Qué archivos se publican: ver `.vercelignore` y CLAUDE.md.

## Servicios externos

Todas las cuentas son de Erika. Salvo el dominio (Hostinger), todo funciona con planes gratuitos.

| Servicio | Para qué | Dónde se configura |
|---|---|---|
| **GitHub** `eriquiroz/eri-quiroz-site` | Código del sitio | Rama `master` = producción |
| **Vercel** proyecto `eri-quiroz-site` | Hospeda el sitio; deploy automático desde `master` | Dominios `eriquiroz.com` y `www.eriquiroz.com` (este último redirige 308 al primero) |
| **Hostinger** | Registro del dominio y **todo el DNS** (nameservers `*.dns-parking.com`, no los de Vercel) | *Dominios → eriquiroz.com → DNS* |
| **ImprovMX** (gratis) | Reenvía `hola@eriquiroz.com` a Gmail (solo recibir) | improvmx.com; filtro en Gmail "nunca enviar a spam" para `to:hola@eriquiroz.com` |
| **Brevo** (gratis) | Lista de contactos, formulario y correo de bienvenida con la lista de verificación | brevo.com; ver "Formulario de la lista" |

### Registros DNS en Hostinger

| Tipo | Nombre | Valor | Para qué |
|---|---|---|---|
| A / CNAME | `@` | (los que apuntan a Vercel, configurados antes de septiembre 2026) | Sitio. **No tocar** |
| CNAME | `www` | `cname.vercel-dns.com` (o el valor que indique Vercel en *Settings → Domains*) | `www` → Vercel, que redirige a `eriquiroz.com` |
| MX | `@` | `mx1.improvmx.com` (10), `mx2.improvmx.com` (20) | Correo entrante vía ImprovMX |
| TXT | `@` | `v=spf1 include:spf.improvmx.com ~all` | SPF de ImprovMX. **Solo puede haber un `v=spf1`**: si otro servicio pide SPF, combinar en ese mismo registro |
| TXT | `@` | `brevo-code:506f6e18d83a5620620270f021d29128` | Verificación del dominio en Brevo |
| CNAME | `brevo1._domainkey` | `b1.eriquiroz-com.dkim.brevo.com` | DKIM de Brevo |
| CNAME | `brevo2._domainkey` | `b2.eriquiroz-com.dkim.brevo.com` | DKIM de Brevo |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com` | DMARC (solo uno por dominio) |

(Valores de ImprovMX tal como se indicaron al configurarlo; si su panel muestra otros, mandan los del panel.)

## Archivos

```
index.html              el sitio
privacidad.html         política de privacidad (se sirve en /privacidad gracias a cleanUrls)
assets/erika-quiroz.jpg foto (960×1200, 4:5, sin metadatos)
assets/og-image.jpg     imagen para compartir el enlace (1200×630), generada desde fuentes/og-image.html
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
- Remitente `hola@eriquiroz.com` validado en Brevo; dominio autenticado con los registros DNS listados en "Servicios externos".
- El texto del correo de bienvenida vive en Brevo (no en este repo). Borrador base: asunto "Tu lista de verificación antes de aplicar IA", saludo "Hola:", enlace al PDF, "Más adelante avisaré por este medio cuando publique un recurso nuevo; nada más.", firma "Erika Quiroz / Decidir antes de aplicar." Si Erika lo cambia en Brevo, lo que manda es lo de Brevo.

## Política de privacidad

- `privacidad.html`, publicada en `https://eriquiroz.com/privacidad`, texto aprobado por Erika (septiembre 2026). Enlazada desde la nota del formulario y desde el pie de página.
- **Si el sitio agrega analítica (Google Analytics u otra), archivos de seguimiento o un servicio nuevo que trate datos, hay que actualizar la política** (secciones "Dónde se guardan" y "Este sitio") y la fecha de actualización, con el texto aprobado por Erika.
- No es asesoría legal: si se ofrece algo pagado o se recogen más datos, conviene revisión especializada (nueva ley chilena de datos personales vigente desde diciembre de 2026).

## Lista de verificación (PDF)

- Publicada en `https://eriquiroz.com/recursos/lista-verificacion-ia.pdf` (no se enlaza desde la página; es lo que envía el servicio de correo).
- Fuente: `fuentes/lista-verificacion-ia.html`, con el mismo sistema visual del sitio (A4, 4 páginas). El texto es el de Erika, sin cambios (su versión original está en `archivo/lista-verificacion-ia-original.pdf`).
- Para regenerar tras editar el texto: desde la raíz, `python3 -m http.server 8765` y en otra terminal `node fuentes/generar-pdf.mjs` (requiere Playwright; con `CHROMIUM=/ruta/a/chrome` si no tiene su navegador descargado). Después, `python3 fuentes/metadatos-pdf.py` para escribir autor, asunto y palabras clave (Chromium no los pone). Revisar que siga en 4 páginas.

## Metadatos de las páginas

- `index.html` y `privacidad.html` declaran autor (`<meta name="author">`, `article:author` con el LinkedIn) y fechas (`article:published_time` / `article:modified_time`, y `datePublished` / `dateModified` en el JSON-LD), en hora de Chile.
- **Al cambiar el contenido de una página, actualizar `article:modified_time` y `dateModified`** en esa página. La fecha de publicación no se toca.

## Imagen para compartir

- `assets/og-image.jpg` (1200×630): foto, nombre, mensaje principal y firma. Declarada en `og:image` de `index.html` y `privacidad.html`.
- Fuente: `fuentes/og-image.html`. Regenerar (si cambia la foto o el mensaje) con `python3 -m http.server 8765` y `node fuentes/generar-og.mjs`.
- LinkedIn guarda en caché la vista previa: tras cambiar la imagen, forzar la actualización en https://www.linkedin.com/post-inspector/ .

## Tareas frecuentes

Todas terminan igual: probar local (`python3 -m http.server 8765` desde la raíz; escritorio y ~390px), commit, push a `master` y revisar en https://eriquiroz.com.

- **Agregar un recurso nuevo**: PDF en `recursos/`; en `#recursos` de `index.html` copiar el bloque comentado `<li class="recurso">` con título, una línea y enlace. Si se quiere avisar a los suscriptores, se hace desde Brevo (campaña), no desde el sitio. Actualizar `dateModified`/`article:modified_time`.
- **Activar YouTube**: descomentar el enlace reservado en el pie de `index.html` (y agregarlo en el pie de `privacidad.html`) con la URL del canal; agregar la URL al `sameAs` del JSON-LD. Según el brief, va como enlace secundario: el sitio nunca dirige al canal.
- **Cambiar la foto**: reemplazar `assets/erika-quiroz.jpg` (recortar a 4:5, 960×1200, sin EXIF) y regenerar `assets/og-image.jpg` (ver "Imagen para compartir").
- **Cambiar el texto de la lista de verificación**: editar `fuentes/lista-verificacion-ia.html`, regenerar el PDF y sus metadatos (ver "Lista de verificación"), revisar que siga en 4 páginas. La URL del PDF no cambia, así que el correo de Brevo no hay que tocarlo.
- **Agregar analítica** (Google Analytics u otra): actualizar `privacidad.html` en el mismo cambio, con texto aprobado por Erika. Considerar que GA usa archivos de seguimiento; una alternativa sin ellos (p. ej. Vercel Web Analytics) cambia menos la política.
- **Cambiar el formulario en Brevo**: copiar la nueva dirección del `action` desde *Compartir → Código HTML* y reemplazarla en `index.html`. El formulario de Brevo debe seguir sin captcha y sin confirmación.
- **Probar el flujo de la lista**: borrar el contacto de prueba en Brevo, suscribirse en eriquiroz.com en incógnito, revisar bandeja, spam y Promociones, abrir el enlace al PDF.
- **Vista previa en redes desactualizada**: LinkedIn → https://www.linkedin.com/post-inspector/ ; WhatsApp/Facebook → https://developers.facebook.com/tools/debug/ ("Volver a extraer").

## Decisiones tomadas (y por qué)

- **Sitio nuevo en vez de editar el anterior** (septiembre 2026): el sitio v3 (negocios de servicios / clínicas dentales) se reemplazó por completo según el brief. Todo su material quedó en `archivo/`; el post del blog anterior se sacó de publicación y `/blog/*` redirige a `/` porque el brief pide una sola página y prohíbe mencionar DentalGrow y la calculadora.
- **Documentación fuera de la publicación**: antes `PROJECT.md`, `CLAUDE.md` y el material viejo eran públicos en eriquiroz.com; `.vercelignore` ahora publica solo el sitio.
- **Fuentes alojadas en el dominio**, no en Google Fonts: sin dependencia externa y sin enviar datos de visitantes a terceros (permite decir en la política que el sitio no usa servicios de seguimiento).
- **Foto**: se usó una foto nueva (fondo de piedra, camisa celeste). La del sitio anterior (fondo amarillo, con marca de edición) se descartó por no calzar con el diseño.
- **Correo entrante con ImprovMX**: `hola@eriquiroz.com` nunca había tenido buzón; Hostinger no incluye correo en el plan. ImprovMX reenvía gratis a Gmail. Para *responder* desde `hola@`, configurar "Enviar como" en Gmail con los datos SMTP de ImprovMX (plan de pago) o de Brevo.
- **Brevo para la lista**: Kit costaba 39 USD/mes para lo necesario; MailerLite bajó su plan gratis a 250 contactos (junio 2026); la subcuenta de GoHighLevel de Imperio Agéntico se descartó porque la lista quedaría en una cuenta que no es de Erika. Brevo es gratis, en español, con contactos ilimitados y automatizaciones para 2.000 contactos.
- **Formulario propio conectado a Brevo** (no el iframe de Brevo): mantiene el diseño del sitio. Brevo no envía correo de confirmación (la cuenta no tiene activados los transaccionales); el correo lo manda la automatización de bienvenida.
- **Política de privacidad**: texto propuesto y aprobado por Erika; no está en el brief. Revisar si se agrega analítica o si cambian los datos que se recogen.

## Pendientes

Ninguno. Todo lo del brief está resuelto (septiembre 2026), incluidos el encabezado y el "Acerca de" de LinkedIn.

Reservado para cuando exista: enlace al canal de YouTube en el pie de página (comentado en `index.html`).
