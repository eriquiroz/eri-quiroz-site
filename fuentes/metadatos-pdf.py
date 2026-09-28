# Completa los metadatos de recursos/lista-verificacion-ia.pdf (Chromium no escribe autor ni asunto).
# Uso, después de node fuentes/generar-pdf.mjs:  python3 fuentes/metadatos-pdf.py   (requiere pypdf)
from pypdf import PdfReader, PdfWriter

RUTA = "recursos/lista-verificacion-ia.pdf"
lector = PdfReader(RUTA)
escritor = PdfWriter(clone_from=lector)
fecha = lector.metadata.get("/CreationDate")
escritor.add_metadata({
    "/Title": "Lista de verificación antes de aplicar IA a un proceso",
    "/Author": "Erika Quiroz",
    "/Subject": "Una guía breve para decidir, antes de probar cualquier herramienta, si un proceso vale la pena intervenir con IA y cómo saber si aportó.",
    "/Keywords": "IA, inteligencia artificial, procesos, decidir antes de aplicar, eriquiroz.com",
    "/Creator": "eriquiroz.com",
    **({"/CreationDate": fecha, "/ModDate": fecha} if fecha else {}),
})
with open(RUTA, "wb") as f:
    escritor.write(f)
print(PdfReader(RUTA).metadata)
