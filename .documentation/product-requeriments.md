# product-requeriments.md  
**Proyecto:** Cleaning in Progress – Sitio Web SEO + Blog + Captación de Leads  
**Meta Principal:** Generar clientes en Miami mediante posicionamiento SEO + conversión clara (llamadas / WhatsApp / formularios).

---

## 1. Elevator Pitch
El proyecto consiste en crear un sitio web moderno, rápido, profesional y optimizado para SEO local que permita a **Cleaning in Progress** captar clientes de limpieza residencial y comercial en Miami. El sitio debe convertir el tráfico orgánico en cotizaciones directas y disponer de un panel de administración simple para publicar artículos de blog (Markdown), mejorando el posicionamiento en Google de manera constante.

---

## 2. Público Objetivo
- Familias y residentes en Miami.
- Oficinas, locales comerciales y empresas pequeñas.
- Constructoras, inmobiliarias y administradores de propiedades.
- Comunidad hispanohablante, con expansión opcional a inglés.

---

## 3. Objetivos Principales del Producto
| Objetivo | Resultado Esperado |
|---------|-------------------|
| Captación de leads | Aumentar solicitudes de cotización y contactos |
| Posicionamiento SEO | Aparición en primeras posiciones en búsquedas locales |
| Reputación profesional | Transmitir confianza mediante testimonios reales |
| Contenido creciente | Publicar artículos sin depender de programadores |

---

## 4. Propuesta de Valor
- Limpieza garantizada con resultados verificables.
- Servicio confiable, profesional y puntual.
- Atención directa y clara.
- Empresa local enfocada en calidad, no volumen.

---

## 5. Funcionalidades Principales

### Sitio Público
- **Página de Inicio** con CTA visibles + beneficios + testimonios.
- **Páginas de Servicios** optimizadas para SEO (con palabra clave + “Miami”).
- **Sección de Testimonios** y/o antes/después.
- **Blog** para contenido evergreen de posicionamiento.
- **Página de Contacto** con formulario + WhatsApp + Google Maps.

### Panel Administrativo (solo para el dueño)
- Acceso protegido con **Clerk** → `/admin`.
- Crear / editar / publicar artículos con **editor Markdown + vista previa**.
- Subida de imágenes a **Supabase Storage**.
- Control de:
  - Título
  - Slug (URL amigable)
  - Portada
  - SEO Title / SEO Description
  - Estado (Borrador / Publicado)
- Publicar → **Regeneración automática** de blog y home (ISR).

### Generación de Leads
- Formulario guarda datos en Supabase.
- Opcional: enviar al CRM **GoHighLevel** vía Webhook.

---

## 6. Requisitos SEO
- URLs orientadas a búsqueda: `/servicios/limpieza-residencial-miami`.
- Estructura semántica correcta (H1, H2, H3).
- Meta título y descripción por página.
- Schema.org `LocalBusiness`, `Service`, `Article`.
- Sitemap automático + robots.txt.
- Imágenes optimizadas con texto alternativo.
- Velocidad móvil optimizada.

---

## 7. User Stories

| Usuario | Necesidad | Acción | Resultado |
|--------|----------|--------|-----------|
| Residente | Encontrar limpieza confiable | Ve servicios y CTA | Envía formulario / WhatsApp |
| Dueño de oficina | Necesita proveedor estable | Lee beneficios + testimonios | Solicita cotización |
| Visitante indeciso | Quiere confianza | Revisa blog + casos | Contacta luego de informarse |
| Administrador | Publicar artículos sin código | Usa panel admin | Posiciona SEO continuamente |

---

## 8. Estética y Experiencia de Usuario
- Estilo **moderno, limpio y profesional**.
- Micro-interacciones suaves (hover, elevaciones ligeras).
- Diseñado para **claridad + confianza + acción**.

**Paleta:**
- Azul `#0056A6` (confianza / marca)
- Verde `#00A884` (acción / acento)
- Blanco `#FFFFFF`
- Gris texto `#1A1A1A`

**Tipografías:**
- Inter / Montserrat (legibilidad + elegancia).

---

## 9. Estructura del Sitio (Sitemap)
/
/nosotros
/servicios
/servicios/[slug]
/testimonios
/blog
/blog/[slug]
/contacto
/preguntas-frecuentes
/admin (privado)
/admin/posts
/admin/posts/new
/admin/posts/[id]/edit

---

## 10. KPIs (Indicadores de Éxito)
- ≥ 3 solicitudes de cotización por día.
- CTR elevado en servicios + blog.
- Tiempo promedio en artículo ≥ 1 minuto.
- Incremento semanal de tráfico de búsqueda orgánica.
- Subida progresiva de posiciones de palabras clave locales.

---

## 11. Alcances y No Alcances (v1)
**Incluye**
- Blog con Markdown + Admin Panel.
- Captura de leads + almacenamiento + webhook opcional.
- SEO técnico completo.
- Diseño responsive + UX orientado a conversión.

**No incluye (v1)**
- Pasarela de pago online.
- Panel de reservas automatizadas.
- Sistema de clientes recurrentes.
- Portal para empleados o logística interna.

---
