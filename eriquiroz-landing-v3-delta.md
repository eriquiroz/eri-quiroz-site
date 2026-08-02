# eriquiroz.com — Landing v3 · Delta de copy y estructura

**Sobre:** `eriquiroz-landing.html`
**Qué cambia:** orden de secciones, copy de casi todas, dos secciones nuevas, una sección absorbida
**Qué no tocar:** sistema de color, logo Punto Q, tipografía, footer, CSS base, animación del orbit, reveal on scroll

**Decisión de audiencia (define todo lo demás):** negocios de servicios en general. Las clínicas dentales son un rubro más entre otros, y DentalGrow sigue viviendo en su propio sitio. Consecuencia práctica: los ejemplos rotan entre rubros y la calculadora dental **no** se usa como puerta gratis de esta página. La puerta gratis acá es la revisión de las tres fugas.

---

## 1. ORDEN NUEVO DE SECCIONES

| Hoy | Nuevo |
|---|---|
| 1. Hero | 1. Hero *(con foto y saludo)* |
| 2. Las tres fugas | 2. Las tres fugas *(+ CTA al cierre)* |
| 3. Qué te dejo funcionando | **3. Quién soy** *(sube desde el puesto 8)* |
| 4. Cómo son las tres semanas | 4. Qué te dejo funcionando |
| 5. Lo que no hago | 5. Cómo son las tres semanas *(+ precio con número)* |
| 6. Lo que he construido | 6. Lo que he construido *(reescrita)* |
| 7. Atelier Digital | **7. Preguntas que me hacen** *(nueva — absorbe "Lo que no hago")* |
| 8. Quién soy | 8. Atelier Digital |
| 9. Cierre | 9. Cierre |

"Lo que no hago" desaparece como sección y sus cuatro puntos pasan a ser respuestas en la sección 7.

---

## 2. HEADER

- **Marca:** cambiar `ERIKA QUIROZ` (mono, versalitas, letter-spacing .14em) por **`Erika Quiroz`** en Hanken Grotesk, caja baja, peso 500. El lockup en versalitas espaciadas lee como logo de empresa, no como nombre de persona.
- **CTA:** `Conversemos` (sin cambio)
- El mismo cambio aplica al footer.

---

## 3. HERO

**Foto:** retrato tuyo, a la derecha del bloque de texto en desktop, bajo el titular en mobile. El monograma "EQ" desaparece de todo el sitio.

- **Saludo (reemplaza `.hero-pretitle`):** `Hola, soy Erika.`
  Ya no en mono 14px. Hanken Grotesk, tamaño real (~20–22px), peso 500. Es lo primero que se lee.

- **Titular h1** — el énfasis `.hl` va en `se acuerde`:
```html
Te dejo funcionando lo que hoy depende de que alguien <span class="hl">se acuerde</span>.
```

- **Subtítulo `.h1sub`:**
```
Un sistema que contesta a quien te escribe, hace seguimiento a los presupuestos que entregaste y trae de vuelta a los clientes que dejaron de venir. Tres semanas, precio cerrado antes de partir.
```

- **Botones:**
  - Primario: `Quiero saber cuánto estoy perdiendo` (sin cambio — es el mejor botón que tienes)
  - Secundario: `Primero cuéntame cómo funciona` → ancla a `#entregables`

- **Línea nueva bajo los botones** (texto chico, color `--muted`):
```
La primera conversación es gratis y dura menos de una hora. Te lleves el trabajo conmigo o no, el diagnóstico es tuyo.
```
Esa promesa hoy está en el último párrafo de la página. Sube arriba: es lo que baja el riesgo de apretar el botón.

---

## 4. LAS TRES FUGAS

La sección mejor escrita del sitio. Solo dos cambios:

- El bloque de ejemplos de la fuga 03 dice `Tratamientos con ciclo de cuatro meses.` — mantener. Rotar rubros es justamente lo que hace creíble el "todos los negocios de servicios".

- **Agregar al final de la sección, después de la fuga 03:**
```
¿Cuál de las tres te suena más? Escríbeme y la revisamos con tus números. →
```
Enlaza a `#contacto`. Hoy hay cerca de dos mil palabras entre el hero y el cierre sin un solo punto de contacto.

- **Línea discreta para visitantes de clínicas** (tamaño chico, bajo lo anterior):
```
Si tienes una clínica dental, hay una calculadora que estima esto en números concretos. Calcular →
```
Enlaza a dentalgrowstack.com, `target="_blank"`.

---

## 5. QUIÉN SOY *(sube al puesto 3, reescrita)*

- **Eyebrow:** `Quién soy`
- **Foto:** la misma o una segunda, no el cuadro "EQ".

**Cuerpo:**
```
Soy ingeniera civil industrial. Llevo quince años metida en operaciones y procesos — primero dentro de empresas, después por mi cuenta, construyendo lo que les faltaba.

Empecé a hacer esto porque me tocó ver el mismo cuadro muchas veces: negocios buenos, con clientes que vuelven y equipos que se esfuerzan, perdiendo plata en cosas que nadie alcanzaba a hacer. No por flojera. Por falta de tiempo y de algo que se acuerde por ellos.

No vendo software ni licencias, y no te dejo con una herramienta que tienes que aprender por tu cuenta. Construyo lo que tu negocio necesita, te lo dejo andando y te enseño a operarlo.

Trabajo con pocos clientes a la vez. Por eso puedo cerrar alcance, precio y plazo antes de empezar — y por eso a veces digo que no.

[LÍNEA HUMANA — la tienes que poner tú]
```

**Sobre la línea humana:** los cinco sitios que revisaste tienen una. Erin cuenta que caza decoración vintage de Halloween. Michal se define como neoyorquina y Tipo A extremo. Es lo que separa "consultora" de "persona". Una frase, sin explicación, sin que tenga relación con el trabajo. No te la puedo inventar yo.

**Cierre del bloque, alineado a la izquierda bajo el texto:**
```
Erika Quiroz — Santiago, Chile
hola@eriquiroz.com
```
El correo a la vista, no detrás de un botón. Es el movimiento de ROCSHIP y es de las cosas que más acercan.

---

## 6. QUÉ TE DEJO FUNCIONANDO

- **Eyebrow:** `Tres cosas quedan funcionando. Tres semanas. Precio cerrado.`
  *(sale la palabra "entregables")*

**01 · Te dejo respondiendo**
```
Cuando alguien te escribe —a la hora que sea, por donde sea— recibe respuesta en segundos, con tu información y tu forma de hablar. Lo que no se puede resolver solo te llega ordenado y con contexto, no como una notificación más.
```

**02 · Te dejo persiguiendo**
```
Cada presupuesto que entregas entra en un seguimiento que corre solo, con el ritmo que definamos. Nada vuelve a quedar en "lo voy a pensar" sin que alguien pregunte de nuevo.
```

**03 · Te dejo recuperando**
```
Ordeno tu base de clientes —esté en un cuaderno, una planilla o la cabeza de alguien— y la pongo a trabajar: avisos cuando toca volver, contacto a los que llevan tiempo sin aparecer.
```

**Además, incluido:**
```
Un panel donde ves en vivo qué está entrando, qué se está siguiendo y cuánto recuperaste.
Le enseño a tu equipo a operarlo, para que no dependan de mí.
30 días de ajustes después de que queda andando.
```

---

## 7. CÓMO SON LAS TRES SEMANAS

```
SEMANA 1 — Miro cómo funciona tu negocio hoy: por dónde te llegan los clientes, qué se pierde y en qué parte. Al terminar la semana tienes por escrito qué entra y qué queda fuera.

SEMANA 2 — Construyo y pruebo con tus casos reales, no con ejemplos.

SEMANA 3 — Lo dejo andando, le enseño a tu equipo y ajusto en vivo.

DESPUÉS — Te acompaño 30 días más, incluidos.
```

**Bloque de precio (`.price-block`):**
```
Desde $______ + IVA, cerrado antes de empezar.

Te doy el precio en la primera conversación y queda por escrito. No cobro por hora. Lo que no está en el alcance escrito no lo cobro ni lo hago — si aparece algo nuevo, te paso un precio aparte y tú decides.
```

El número lo tienes que poner tú y no es opcional. Prometer "precio cerrado, sin sorpresas" y después no mostrar ninguna cifra es exactamente lo que hace una agencia. ROCSHIP pone sus planes mensuales en el home. Erin dice desde cuánto parte y cuántos meses toma. Un piso basta.

---

## 8. LO QUE HE CONSTRUIDO *(reescrita)*

- **Eyebrow:** `Lo que he construido` (sin cambio)
- **Lede nuevo** — reemplaza la disculpa por confidencialidad:
```
Casi todo lo que he hecho corre dentro de empresas que no publican con quién trabajan. Si quieres ver un caso completo —con nombre, con números y con lo que salió mal también— escríbeme y te lo muestro en la llamada.
```
Es el movimiento de Ninia: la restricción se convierte en un motivo para contactarte. Hoy tu sección abre diciendo lo que no hay.

- **Los cuatro casos**, con la consecuencia agregada:
```
01 · Chatbot en producción — atiende a toda hora y deriva a una persona cuando corresponde.
02 · Sistema comercial completo — captación, seguimiento y ficha de cliente en un solo lugar.
03 · Campañas activas — gestión y optimización de publicidad en marcha.
04 · Aplicación de licitaciones públicas — lee y analiza las bases automáticamente.
```

- **Contadores** (fila de tres, estilo mono, sobre los casos):
```
15 años  ·  en operaciones y procesos
__ proyectos  ·  entregados y funcionando
__ rubros  ·  distintos
```
Los dos números en blanco los tienes que llenar. Ninia usa exactamente esta estructura y funciona porque son cifras chicas y verificables, no "cientos de clientes".

---

## 9. PREGUNTAS QUE ME HACEN *(nueva — absorbe "Lo que no hago")*

- **Eyebrow:** `Preguntas que me hacen`
- Acordeón o lista simple. Pregunta en la voz del cliente, respuesta en primera persona.

```
¿Vas a reemplazar a mi equipo?
No. Respondo primero y filtro. Las conversaciones que importan siguen siendo de ustedes.

¿De dónde salen las respuestas?
Solo de la información que tú apruebas. Si algo no está en ese material, no se inventa nada: se deriva a una persona.

¿Me vas a traer clientes nuevos?
No hago publicidad para captar. Recupero los que ya te llegaron y se estaban perdiendo. Si lo que necesitas es captación, te lo digo de frente y te derivo.

¿Qué necesito tener listo antes de partir?
Poco: por dónde te escriben hoy, tus precios o presupuestos tipo, y quién de tu equipo lo va a operar. El resto lo armo yo.

¿Y si en tres semanas no está listo?
El alcance se cierra antes de partir justamente para que eso no pase. Si el atraso es mío, lo termino igual sin cobrarte más.

¿Qué pasa después de los 30 días?
Queda tuyo y funcionando, operado por tu equipo. Si quieres que siga a cargo, lo conversamos aparte. No dejo nada amarrado a mí.

¿Por qué no es más barato?
Porque no te vendo una herramienta para que la configures tú. Construyo sobre tu operación, la pruebo con tus casos y te la dejo andando. Si lo que buscas es una licencia mensual barata, hay opciones mejores que yo y te las nombro.
```

**Importante:** las respuestas 5, 6 y 7 contienen compromisos concretos que yo asumí desde tu forma de trabajar, pero no me los has confirmado. Revísalas una por una y cambia lo que no sea verdad. Una promesa que no puedes cumplir hace más daño que no tener FAQ.

---

## 10. ATELIER DIGITAL

Sin cambios de fondo. Un solo ajuste de registro en el segundo párrafo:

```
Eso lo trabajo en el Atelier. Proyectos únicos, definidos caso a caso, pocos a la vez.
```
*(sale "alcance definido caso a caso")*

Mantener el piso de USD 1.500 y la línea de que evalúas antes de aceptar.

---

## 11. CIERRE

Sin cambios de texto — es la mejor sección de cierre que tienes. Dos agregados:

- Debajo del botón `Conversemos`, el correo visible: `hola@eriquiroz.com`
- El link de WhatsApp sigue apuntando a `56900000000`. Hay que reemplazarlo por el número real o sacarlo.

---

## 12. FOOTER

No se toca, salvo el wordmark (`ERIKA QUIROZ` → `Erika Quiroz`, mismo criterio que el header).
La línea `© 2026 eriquiroz.com — hecho con criterio, no con prisa.` queda exactamente igual.

---

## 13. GLOSARIO DE REEMPLAZOS

Aplicar en todo el sitio. Esto es lo que hace que la página lea como licitación y no como persona.

| Sale | Entra |
|---|---|
| entregables | lo que queda funcionando |
| puesta en marcha | cuando queda andando |
| capacito a tu equipo | le enseño a tu equipo |
| operación real | cómo funciona tu negocio hoy |
| cadencia | ritmo |
| secuencia de seguimiento | seguimiento que corre solo |
| canal donde te escriben | por dónde te escriben |
| derivación a humano | deriva a una persona |
| pauta | publicidad |
| lo cotizo aparte | te paso un precio aparte |

**Se queda "alcance"** solo cuando hablas del documento que firman antes de empezar. Ahí es la palabra correcta.

---

## 14. DETALLE DE GÉNERO

Dos frases del sitio actual asumen que quien te lee es mujer:
- `con la cadencia que definimos juntas` → `con el ritmo que definamos`
- `una herramienta que tienes que aprender sola` → `una herramienta que tienes que aprender por tu cuenta`

---

## 15. PENDIENTES QUE SOLO PUEDES RESOLVER TÚ

1. **El número del precio piso** para la implementación de tres semanas.
2. **La foto.** Una para el hero, idealmente otra para Quién soy.
3. **La línea humana** en Quién soy.
4. **Los dos contadores:** proyectos entregados y rubros distintos.
5. **El número de WhatsApp.**
6. **Confirmar las siete respuestas de la FAQ**, en especial las tres últimas.

---

## 16. LO QUE NO HAY QUE TOCAR

- La sección de las tres fugas: está bien escrita, en segunda persona y con ejemplos concretos de tres rubros distintos.
- Los tres verbos: respondiendo, persiguiendo, recuperando.
- El botón `Quiero saber cuánto estoy perdiendo`.
- El párrafo del cierre sobre la primera conversación gratis.
- El footer.
