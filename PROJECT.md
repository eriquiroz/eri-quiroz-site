# eriquiroz.com — sitio personal de Erika Quiroz

## Qué es

Una sola página, cinco bloques con anclas: `#inicio`, `#como-pienso`, `#formacion`, `#recursos`, `#sobre-mi`. Posicionamiento: **"Enseño a decidir cuándo aplicar IA en el trabajo, y cuándo no."** Firma: **"Decidir antes de aplicar."** Objetivo: que quien llega desde LinkedIn, YouTube o una búsqueda del nombre entienda en segundos quién es y qué enseña, y deje su correo para recibir la lista de verificación.

Brief completo (estrategia, textos finales, restricciones): [brief-eriquiroz.md](brief-eriquiroz.md). Diseño aprobado: [reference/diseno-sitio.html](reference/diseno-sitio.html).

## Deploy

Repo `eriquiroz/eri-quiroz-site`, rama `master`, proyecto Vercel `eri-quiroz-site`. Push a `master` = deploy. Qué archivos se publican: ver `.vercelignore` y CLAUDE.md.

## Archivos

```
index.html              el sitio
assets/erika-quiroz.jpg foto (960×1200, 4:5, sin metadatos)
assets/fonts/           Hanken Grotesk (normal variable + itálica) e IBM Plex Mono, subconjunto latino, licencia OFL
vercel.json             redirecciones del blog anterior a /
.vercelignore           lista de lo que se publica
brief-eriquiroz.md      brief (manda sobre el contenido)
reference/diseno-sitio.html   diseño aprobado
archivo/                sitio anterior (v3) y su material; no se publica
assets/originals, assets/images   fotos del sitio anterior; no se publican
```

## Formulario de la lista

Hoy envía a **Web3Forms** (mismo `access_key` del sitio anterior): cada solicitud llega como correo al buzón asociado a ese formulario, con el asunto "Nueva solicitud de la lista de verificación (eriquiroz.com)". **No envía la lista automáticamente**: mientras no se configure el servicio definitivo, hay que enviarla a mano. La confirmación en pantalla ("La lista va en camino… Si no llega en unos minutos…") es el texto del brief y asume envío automático.

El brief pide un servicio de envío de correo que: guarde los contactos fuera de una base propia, envíe la lista automáticamente al suscribirse, y permita más adelante avisos o un boletín sin migrar la lista. Candidatos razonables: MailerLite, Brevo o Kit (todos con plan gratuito, formulario embebible o API, y correo de bienvenida automático con adjunto o enlace). Requiere que Erika cree la cuenta; después basta con reemplazar el `fetch` al final de `index.html`.

## Pendientes para lanzar del todo (solo Erika puede resolverlos)

Buscar `pendiente:` en `index.html` para ubicar cada uno.

1. **PDF de la lista de verificación** (la lista está escrita; falta maquetarla). Guardarlo en `recursos/`.
2. **Servicio de envío de correo** (ver arriba).
3. **Política de privacidad**: el diseño la enlazaba desde la nota del formulario, pero el brief no trae el texto. Se quitó el enlace para no apuntar a una página inexistente. Recomendable tenerla al recolectar correos.
4. **og:image** 1200×630 para cuando se comparte el enlace.
5. Actualizar encabezado y "Acerca de" de LinkedIn para que coincidan con el sitio.
