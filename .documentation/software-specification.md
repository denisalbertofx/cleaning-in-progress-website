# software-specification.md  
**Proyecto:** Cleaning in Progress — Sitio Web SEO + Blog + Captación de Leads  
**Stack confirmado:** Next.js + TypeScript + Tailwind + shadcn/ui + Supabase (Postgres/Storage) + Clerk (Admin) + Vercel + Webhook → GoHighLevel (opcional)

---

## System Design
- Aplicación web enfocada en tráfico orgánico y conversión (llamadas, WhatsApp y formularios).
- Páginas de servicios con SEO local, blog administrable y testimonios.
- Panel `/admin` protegido para crear/editar/publicar artículos en **Markdown**.
- Publicación de nuevo contenido dispara **ISR (Incremental Static Regeneration)** para refrescar el sitio.
- Formularios crean leads en Supabase y pueden enviarse automáticamente a GoHighLevel.

---

## Architecture Pattern
- **Next.js App Router** con **Server Components** para rendimiento y SEO.
- **Jamstack / SSR / SSG / ISR híbrido**:
  - Servicios y blog → render estático con revalidación.
  - Panel admin → páginas protegidas con auth + server actions CRUD.
- **Server Actions** reemplazan necesidad de API REST interna, excepto webhooks.

---

## State Management
- Público:
  - Sin estado global.
  - Renderizado basado en RSC + fetch directo desde DB (select optimizado).
- Panel Admin:
  - `react-hook-form` + Zod (validación).
  - Previsualización Markdown (sin estado global).
  - TanStack Query *solo si se requiere refinamiento en listado dinámico*.

---

## Data Flow
1. Visitante entra → página servida por **ISR**.
2. Usuario envía formulario de contacto:
   - Validación Zod → Inserción `leads` en Supabase → webhook a GoHighLevel (si está activo) → mensaje de éxito.
3. Admin inicia sesión en `/admin`.
4. Admin crea post:
   - Título + portada (upload → Supabase Storage).
   - Contenido en Markdown + metadatos SEO.
   - Guardar → si `status = published`, se ejecuta `revalidate('/blog')` + `revalidate('/blog/[slug]')`.
5. Visitante visualiza artículo estático ya regenerado.

---

## Technical Stack
| Área | Tecnología |
|------|------------|
| Framework | Next.js (App Router) + TypeScript |
| Estilos | TailwindCSS + shadcn/ui |
| Blog | Markdown + Vista previa + procesador MDX |
| Base de Datos | Supabase Postgres |
| Storage | Supabase Storage (portadas e imágenes de artículos) |
| Autenticación Admin | Clerk |
| Hosting | Vercel (ISR habilitado) |
| CRM (opcional) | GoHighLevel Webhook |
| Versionamiento | GitHub (PRs y control de cambios) |

---

## Authentication Process
- Sitio público sin login.
- Clerk protege `/admin/*`.
- Roles:
  - `admin` → acceso CRUD completo.
- Auditoría:
  - `posts.created_by` y `posts.updated_by` enlazados al `clerk_user_id`.

---

## Route Design

**Público**
/
/nosotros
/servicios
/servicios/[slug]
/blog
/blog/[slug]
/testimonios
/contacto
/preguntas-frecuentes

**Admin (Protegido)**
/admin
/admin/posts
/admin/posts/new
/admin/posts/[id]/edit

**APIs / Server Actions**
createPost()
updatePost()
deletePost()
uploadImageToSupabase()
createLead()
revalidate(path | paths[])

**Opcional**
/api/webhooks/gohighlevel

---

## API Design (Server Actions)

### `createPost(input)`
input: { title, slug, markdown, cover_image_url?, seo_title?, seo_description?, status }
validación: Zod
proceso:
insert into posts
if status == 'published' → revalidate('/blog', /blog/${slug})
output: { ok, id }

### `updatePost(id, input)`
- Similar a `createPost`, con `update`.
- Revalida si cambia `status` o `slug`.

### `uploadImageToSupabase(file)`
- Sube archivo a bucket `blog/uuid.ext`
- Retorna URL pública.

### `createLead(input)`
input: { full_name, phone, email?, message?, service_interest }
proceso:
insert into leads
optional: POST webhook → GHL

---

## Database Design ERD

posts
id (uuid pk)
title (text)
slug (text unique)
excerpt (text)
markdown (text)
cover_image_url (text)
seo_title (text)
seo_description (text)
status (draft | published)
published_at (timestamptz)
created_by (uuid)
updated_by (uuid)
created_at (timestamptz)
updated_at (timestamptz)
leads
id (uuid pk)
full_name (text)
phone (text)
email (text)
message (text)
service_interest (text)
utm_source (text)
utm_medium (text)
utm_campaign (text)
created_at (timestamptz)
users (shadow for admin tracking)
id (uuid pk)
clerk_user_id (text unique)
role (text)
created_at (timestamptz)

**Supabase Storage**
bucket: blog
file paths: blog/<uuid>.<ext>

**RLS Policies**
- `posts.status = 'published'` → lectura pública
- CRUD completo solo mediante JWT Clerk → Rol Admin

---

**Fin del Documento**