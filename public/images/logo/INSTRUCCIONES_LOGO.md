# ⚠️ INSTRUCCIONES URGENTES: Subir el Logo

## El logo NO está cargado - Por eso no aparece

Para que el logo y el favicon funcionen, necesitas subir los siguientes archivos:

### 📁 Archivos Necesarios

#### 1. Logo Principal (para el Header)
- **Ubicación:** `/public/images/logo/logo-cleaning-in-progress.png`
- **Tamaño recomendado:** 200x200px o proporción similar
- **Formato:** PNG con fondo transparente (preferido) o JPG
- **Peso máximo:** 100KB

#### 2. Favicon (icono del navegador)
**OPCIÓN A - En la raíz (recomendado para Next.js):**
- **Ubicación:** `/public/favicon.ico`
- **Tamaño:** 32x32px o 16x16px
- **Formato:** ICO o PNG

**OPCIÓN B - En la carpeta logo:**
- **Ubicación:** `/public/images/logo/favicon.ico`
- **Tamaño:** 32x32px o 16x16px
- **Formato:** ICO o PNG

#### 3. Apple Touch Icon (para dispositivos Apple)
- **Ubicación:** `/public/images/logo/apple-touch-icon.png`
- **Tamaño:** 180x180px
- **Formato:** PNG

### 🚀 Pasos Rápidos

1. **Toma el logo que tienes** (el que me mostraste con "Cleaning in Progress INC")
2. **Crea 3 versiones:**
   - Logo grande (200x200px) → `logo-cleaning-in-progress.png`
   - Favicon pequeño (32x32px) → `favicon.ico` (o `.png`)
   - Apple icon (180x180px) → `apple-touch-icon.png`
3. **Coloca los archivos en:**
   - `/public/images/logo/logo-cleaning-in-progress.png`
   - `/public/favicon.ico` (o `/public/images/logo/favicon.ico`)
   - `/public/images/logo/apple-touch-icon.png`

### 💡 Herramientas para Crear el Favicon

Puedes usar:
- **Online:** https://favicon.io/ (convierte PNG a ICO)
- **Online:** https://realfavicongenerator.net/
- **Desde el logo:** Usa el logo y redimensiona a 32x32px

### ✅ Verificación

Después de subir los archivos:
1. Reinicia el servidor de desarrollo (`npm run dev`)
2. Recarga la página con `Ctrl+Shift+R` (hard refresh)
3. Verifica que:
   - El logo aparece en el Header (arriba a la izquierda)
   - El favicon aparece en la pestaña del navegador

### 📝 Nota

Actualmente el sitio muestra un fallback (una "C" azul) mientras no esté el logo. Una vez que subas el logo, se mostrará automáticamente.

