# Guía de Carga de Imágenes

## 📁 Estructura de Carpetas Creada

```
public/images/
├── hero/              ✅ Listo para imágenes del hero
├── services/          ✅ Listo para imágenes de servicios
├── icons/            ✅ Listo para íconos SVG
├── testimonials/     ✅ Listo para fotos de testimonios
├── blog/             ✅ Listo para portadas de artículos
└── before-after/     ✅ Listo para comparaciones
```

## 📋 Checklist de Imágenes Necesarias

### 1. Hero Principal (`/hero`)
- **Archivo:** `hero-home.jpg` o `hero-home-desktop.jpg`
- **Tamaño:** 1600x900px (desktop)
- **Tamaño móvil (opcional):** `hero-home-mobile.jpg` - 1080x1350px
- **Descripción:** Sala/cocina limpia, iluminación natural, moderno minimalista

### 2. Servicios (`/services`)
Crea una imagen por cada servicio con el nombre del slug:

- `limpieza-residencial-miami.jpg` (1600x900px)
- `limpieza-comercial-miami.jpg` (1600x900px)
- `limpieza-post-construccion-miami.jpg` (1600x900px)
- `limpieza-alfombras-miami.jpg` (1600x900px)

### 3. Íconos SVG (`/icons`)
Íconos vectoriales con fondo transparente:

- `icon-home.svg` - Casa (Limpieza Residencial)
- `icon-building.svg` - Edificio (Limpieza Comercial)
- `icon-office.svg` - Escritorio (Limpieza de Oficinas)
- `icon-deep-cleaning.svg` - Gota/Burbujas (Limpieza Profunda)
- `icon-carpet.svg` - Alfombra (Limpieza de Alfombras)
- `icon-construction.svg` - Casco/Herramientas (Post-Construcción)

**Especificaciones de íconos:**
- Formato: SVG
- Trazo: 2px lineal
- Color: #0056A6 (azul primario)
- Esquinas: semiredondas
- Fondo: transparente

### 4. Blog (`/blog`)
Portadas de artículos (1200x630px - formato OG social):

- `post-1.jpg` - Para "5 Consejos para Mantener tu Hogar Limpio en Miami"
- `post-2.jpg` - Para "Por qué la Limpieza Profesional es Esencial para Oficinas"
- `post-3.jpg` - Para "Guía Completa de Limpieza Post-Construcción en Miami"

### 5. Testimonios (`/testimonials`) - Opcional
Fotos de clientes o avatares:

- `maria.jpg` - María González
- `carlos.jpg` - Carlos Rodríguez
- `ana.jpg` - Ana Martínez
- `roberto.jpg` - Roberto Silva

**Alternativa:** Si no tienes fotos, se usarán avatares con iniciales.

### 6. Antes y Después (`/before-after`) - Opcional
Comparaciones:

- `before-1.jpg` / `after-1.jpg`
- `before-2.jpg` / `after-2.jpg`
- etc.

## 🎨 Especificaciones Técnicas

### Fotografías (JPG)
- **Compresión:** Optimizada para web (calidad 80-85%)
- **Tamaño máximo:** 500KB por imagen
- **Resolución:** Según especificaciones por tipo
- **Color:** sRGB
- **Estilo:** Limpio, claro, bien iluminado, sin filtros dramáticos

### Íconos (SVG)
- **Formato:** SVG con código limpio
- **Tamaño viewBox:** Recomendado 24x24 o 32x32
- **Color:** #0056A6 (se puede cambiar con CSS)
- **Estilo:** Lineal, 2px stroke, esquinas redondeadas

## 📝 Nomenclatura

Usa nombres descriptivos en **minúsculas con guiones**:
- ✅ `limpieza-residencial-miami.jpg`
- ✅ `hero-home-desktop.jpg`
- ✅ `icon-home.svg`
- ❌ `Limpieza_Residencial_Miami.jpg` (evitar mayúsculas y guiones bajos)
- ❌ `hero home.jpg` (evitar espacios)

## 🚀 Cómo Cargar las Imágenes

1. **Copia tus imágenes** a las carpetas correspondientes según el tipo
2. **Usa los nombres sugeridos** o nombres descriptivos consistentes
3. **Optimiza las imágenes** antes de subirlas (usa herramientas como TinyPNG, Squoosh, etc.)
4. **Verifica los formatos:**
   - Fotografías → JPG
   - Íconos → SVG
   - Logos → PNG o SVG (con fondo transparente)

## 📍 Rutas en el Código

Las imágenes se referencian desde `/images/` (Next.js automáticamente sirve desde `public/`):

```tsx
// Ejemplo de uso en código:
<Image src="/images/hero/hero-home.jpg" alt="Hero" />
<Image src="/images/services/limpieza-residencial-miami.jpg" alt="Servicio" />
```

## ✅ Checklist Final

Antes de considerar las imágenes listas:

- [ ] Todas las imágenes están en las carpetas correctas
- [ ] Nombres de archivos son descriptivos y consistentes
- [ ] Imágenes están optimizadas para web
- [ ] Tamaños coinciden con las especificaciones
- [ ] Íconos SVG tienen fondo transparente
- [ ] Colores coinciden con la paleta (#0056A6, #00A884)

