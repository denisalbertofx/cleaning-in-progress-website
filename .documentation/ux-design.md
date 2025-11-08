# ux-design.md  
**Proyecto:** Cleaning in Progress — Sitio Web SEO + Blog  
**Estilo seleccionado:** Opción 1 — Moderno, limpio, profesional, con detalles sutiles y micro-interacciones.

---

## Design Principles
- Minimalismo profesional (nada recargado, nada ruidoso).
- Jerarquía visual clara con uso consistente de espaciamiento.
- Micro-interacciones suaves: hover, fade, slide-in sutil.
- Enfoque en tipografía elegante + estética limpia + contenido legible.
- Páginas deben transmitir **confianza y profesionalismo** al instante.

---

## Layout Structure (Global)

**Header (sticky)**
- Logo a la izquierda.
- Menú centrado.
- Botón CTA a la derecha (fijo en desktop / flotante en mobile).
- Efecto transparente → sólido al hacer scroll.

**Footer**
- Distribución en 3 columnas:
  - Información + dirección
  - Navegación secundaria
  - Mapa / enlace a Google Maps
- Línea final con redes y derechos legales.

**CTA flotante móvil**
- Botón WhatsApp/Call siempre visible en borde inferior.

---

## Home Page Layout

1. **Hero Principal**
   - Fondo claro o foto suave ligeramente difuminada.
   - Título (H1): claro, directo, local (“Limpieza Profesional en Miami”).
   - Subtítulo: mensaje empático de servicio + garantía.
   - Dos CTAs:
     - **Primario:** “Solicitar Cotización”
     - **Secundario:** “Hablar por WhatsApp”
   - Badge de confianza: ★4.9+ en clientes verificados (si aplica).
   - Pequeña animación: fade-in stagger en entradas.

2. **Servicios Principales (Grid 3 o 2 columnas según dispositivo)**
   - Tarjetas con:
     - Icono limpio estilo lineal.
     - Título corto.
     - 2–4 bullets de valor.
     - Botón: “Ver servicio”.
   - Hover con sutil elevación + borde resaltado + sombra suave.

3. **“¿Por qué Nosotros?” (Sección diferenciadora)**
   - 3–4 columnas con iconos ligeros pero modernos (animación hover scale 1.05).
   - Textos simples orientados a beneficio.

4. **Testimonios**
   - Carrusel suave (snap con animación ligera).
   - Foto pequeña del cliente y nombre/área.
   - Opcional: capturas reales (validación social).

5. **Antes & Después (Opcional visual)**
   - Slider comparativo o galería swipe.

6. **Blog Preview**
   - Lista de 3 posts recientes con imagen + título + extracto.
   - Botón "Ver más artículos".

7. **FAQ**
   - Acordeones con transición suave.

8. **CTA Final**
   - Bloque centrado, fondo sólido o degradado suave.
   - “Solicita tu limpieza hoy”.

---

## Services Page Layout (`/servicios` & `/servicios/[slug]`)

**Página de categoría (`/servicios`):**
- Grid de servicios en tarjetas homogéneas.
- CTA visible en cada tarjeta.

**Página individual de servicio:**
- H1 <palabra clave + Miami>
- Breve párrafo introductorio.
- Sección “¿Qué incluye?” → lista clara
- Proceso en 3 pasos (ilustraciones o íconos delgados)
- Testimonios relacionados
- Áreas de servicio en chips linkeables
- CTA destacado

---

## Blog Layout

**Listado `/blog`:**
- Tarjetas verticales:
  - Imagen portada (recorte 4:3 o 16:9)
  - Título
  - Extracto
  - Tiempo de lectura
- Filtro simple por categorías (chips)

**Artículo `/blog/[slug]`:**
- Título grande, serio, limpio.
- Fecha, tiempo lectura, categoría (chips).
- **Cuerpo Markdown** renderizado con tipografía editorial:
  - Interlineado amplio
  - Column width limitada (~65-75 caracteres)
  - Imágenes centradas, con borde suave y sombra ligera
- CTA al final: “Habla con nosotros / Solicitar Cotización”

---

## Interaction Patterns
| Acción | Micro-interacción |
|------|-------------------|
| Hover sobre tarjeta | Elevación sutil + sombra + borde resaltado |
| CTA botones | Hover → color más profundo + ligera expansión |
| Carruseles | Deslizamiento suave + transición fade |
| Acordeones FAQ | Expand/collapse con animación 150–250ms |
| Scroll inicial | Header pasa de transparente → sólido |

---

## Visual Design Elements & Color Scheme

| Uso | Color | Nota |
|-----|-------|------|
| Primario marca | `#0056A6` Azul | Autoridad + confianza |
| Acento | `#00A884` Verde | Acción/positivo |
| Fondo claro | `#FFFFFF` | Pureza |
| Secciones alternadas | `#F7F9FA` gris muy claro | Ritmo visual |
| Texto | `#1A1A1A` | Legible y serio |

**Iconos:** Lineal delgado, 2px, esquinas suaves.  
**Sombras:** muy suaves (`shadow-sm` → `shadow-md` en hover).  
**Bordes:** redondeo ligero (`rounded-lg`).

---

## Mobile / Desktop Considerations

- **Mobile**
  - Contenido vertical, tarjetas apiladas.
  - Botón flotante WhatsApp fijo.
  - Menú hamburguesa simple.

- **Desktop**
  - Grid de 3 columnas en servicios y artículos.
  - Hero con imagen lateral o ilustración sutil.

---

## Typography
| Elemento | Fuente | Peso |
|---------|--------|------|
| Encabezados | **Inter** o **Montserrat** | 600–700 |
| Cuerpo | Inter | 400–500 |
| Botones | Semibold | Claridad y acción |

- Líneas de texto 1.6–1.8 de interlineado.
- **Máximo 2 tamaños fuertes por sección** para no saturar.

---

## Accessibility
- Contrast AA garantizado.
- Focus states visibles (outline claro).
- Etiquetas y aria para formularios.
- Texto `alt` en imágenes.
- HTML semántico: `<section>`, `<article>`, `<nav>`, `<header>`, `<main>`, `<footer>`.

---

# Resumen
El sitio será:
- **Moderno**
- **Limpio**
- **Elegante**
- **Con micro-interacciones suaves**
- **Sin ruidos visuales**
- Totalmente orientado a **conversión** + **SEO local**.
