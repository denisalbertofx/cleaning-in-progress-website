# Guía Oficial de Imágenes para el Sitio "Cleaning in Progress"
**Estilo visual:** Híbrido Profesional  
**Fotografías limpias, claras, bien iluminadas.**  
**Complementadas con íconos vectoriales minimalistas en azul + verde.**  
**Fondo blanco predominante, estética seria y confiable.**

---

## 1. Paleta de Colores (aplicada a imágenes e íconos)

| Uso | Color | Hex | Notas |
|-----|-------|-----|-------|
| Primario Marca | Azul Profesional | #0056A6 | Encabezados, textos destacados, íconos |
| Acento Acción | Verde Limpieza | #00A884 | Botones, detalles, bordes activos |
| Fondo base | Blanco | #FFFFFF | Mantener limpio, sin ruido |
| Texto | Gris Oscuro | #1A1A1A | Legible y serio |

---

## 2. Estilo General de Imágenes

- Fotografías deben mostrar espacios reales, bien iluminados, limpios, modernos.
- Nada de stock cliché con sonrisas falsas o gente posando exagerado.
- Usar cocinas, salas, oficinas, edificios, terrazas, pisos, baños reales.
- Claridad > edición dramática.
- Evitar: bokeh exagerado, saturación fuerte, filtros cálidos.

---

## 3. Iconografía

- Íconos vectoriales con fondo transparente
- Trazo lineal 2px
- Esquinas semiredondas (no geométricas duras)
- Color primario: #0056A6
- Hover/acento: #00A884
- **Formato:** PNG o SVG (actualmente en PNG)

---

## 4. Ubicación de Imágenes (Inventario Real)

### 4.1. HOME (Inicio)

| Nombre de la imagen | Página / Ruta | Sección | Archivo Real |
|---------------------|---------------|---------|--------------|
| Hero Principal | `/` (Home) | Hero principal | `hero-home.jpg` |
| Sección Confianza | `/` (Home) | "Somos Locales" | `hero-building-exterior.png` |
| Antes (lado izquierdo) | `/` (Home) | Bloque "Antes y Después" | `before-room-messy.png` |
| Después (lado derecho) | `/` (Home) | Bloque "Antes y Después" | `after-room-clean.png` |

### 4.2. Páginas de Servicios

| Imagen | Página | Sección | Archivo Real |
|--------|--------|---------|--------------|
| Hero servicio | `/servicios/limpieza-residencial-miami` | Hero de servicio | `servicio-residencial.jpg` |
| Hero servicio | `/servicios/limpieza-comercial-miami` | Hero de servicio | `servicio-comercial.jpg` |
| Hero servicio | `/servicios/limpieza-de-oficinas-miami` | Hero de servicio | `servicio-oficinas.jpg` |
| Hero servicio | `/servicios/limpieza-profunda-miami` | Hero de servicio | `servicio-limpieza-profunda.jpg` |
| Hero servicio | `/servicios/limpieza-post-construccion-miami` | Hero de servicio | `servicio-post-construccion.jpg` |
| Hero servicio | `/servicios/limpieza-de-alfombras-miami` | Hero de servicio | `servicio-alfombras.jpg` |

### 4.3. Íconos de Servicios

**Se usan en:** `/` (Home) → Sección de servicios y en `/servicios`

| Ícono | Representa | Archivo Real | Estado |
|-------|------------|--------------|--------|
| `icon-residencial.png` | Limpieza residencial | ⚠️ **FALTA** | Por crear |
| `icon-comercial.png` | Limpieza comercial | ✅ `icon-comercial.png` | Disponible |
| `icon-oficinas.png` | Limpieza de oficinas | ✅ `icon-oficinas.png` | Disponible |
| `icon-limpieza-profunda.png` | Limpieza profunda | ✅ `icon-limpieza-profunda.png` | Disponible |
| `icon-alfombras.png` | Limpieza de alfombras | ✅ `icon-alfombras.png` | Disponible |
| `icon-post-construccion.png` | Limpieza post construcción | ✅ `icon-post-construccion.png` | Disponible |

### 4.4. Testimonios

| Imagen | Página | Sección | Fondo | Archivo Real |
|--------|--------|---------|-------|--------------|
| Cliente 1 | `/testimonios` y `/` | Tarjeta de cliente 1 | No transparente | `testimonial-person-portrait-1.png` |
| Cliente 2 | `/testimonios` y `/` | Tarjeta de cliente 2 | No transparente | `testimonial-person-portrait-2.png` |
| Avatar por defecto | `/testimonios` y `/` | Cuando no hay foto real | ✅ Transparente | `testimonial-avatar-plain.png` |

### 4.5. Blog (Portadas para Artículos)

| Imagen | Página | Sección | Archivo Real |
|--------|--------|---------|--------------|
| Portada artículo | `/blog` y `/blog/limpieza-en-casa` | Portada | `blog-cleaning-tips.png` |
| Portada artículo | `/blog` y `/blog/higiene-en-oficinas` | Portada | `blog-office-hygiene.png` |
| Portada artículo | `/blog` y `/blog/limpieza-antes-de-mudarse` | Portada | `blog-moving-cleaning.png` |
| Portada artículo | `/blog` y `/blog/cuidado-de-alfombras` | Portada | `blog-carpet-care.png` |
| Portada artículo | `/blog` y `/blog/productos-ecologicos` | Portada | `blog-eco-clean-products.png` |

---

## 5. Organización de Carpetas (Actual)

```
public/images/
├── hero/
│   ├── hero-home.jpg
│   ├── hero-building-exterior.png
│   └── hero-office-clean.png
├── services/
│   ├── servicio-residencial.jpg
│   ├── servicio-comercial.jpg
│   ├── servicio-oficinas.jpg
│   ├── servicio-limpieza-profunda.jpg
│   ├── servicio-post-construccion.jpg
│   └── servicio-alfombras.jpg
├── icons/
│   ├── icon-comercial.png
│   ├── icon-oficinas.png
│   ├── icon-limpieza-profunda.png
│   ├── icon-alfombras.png
│   └── icon-post-construccion.png
├── testimonials/
│   ├── testimonial-person-portrait-1.png
│   ├── testimonial-person-portrait-2.png
│   └── testimonial-avatar-plain.png
├── blog/
│   ├── blog-cleaning-tips.png
│   ├── blog-office-hygiene.png
│   ├── blog-moving-cleaning.png
│   ├── blog-carpet-care.png
│   └── blog-eco-clean-products.png
└── before-after/
    ├── before-room-messy.png
    └── after-room-clean.png
```

---

## 6. Formatos Finales (Reales)

| Uso | Formato Encontrado | Notas |
|-----|-------------------|-------|
| Fotografías Hero | JPG, PNG | Mezcla de formatos |
| Servicios | JPG | ✅ Correcto |
| Íconos | PNG | Funciona, pero SVG sería mejor |
| Testimonios | PNG | ✅ Correcto |
| Blog | PNG | ✅ Correcto |
| Before-After | PNG | ✅ Correcto |

---

## 7. Imágenes Faltantes

⚠️ **IMPORTANTE:** Falta crear/agregar:
- `icon-residencial.png` - Ícono para limpieza residencial
  - Ubicación: `public/images/icons/`
  - Formato: PNG con fondo transparente
  - Estilo: Casa simple con brillo, trazo 2px, color #0056A6

---

## 8. Resumen de Inventario

- **Total de imágenes:** 24 imágenes cargadas
- **Faltantes:** 1 ícono (icon-residencial.png)
- **Formatos:** JPG (fotografías), PNG (íconos, blog, testimonios)
- **Estado:** ✅ Estructura completa, listo para integrar en código

---

**Última actualización:** Basado en archivos reales encontrados en el proyecto
