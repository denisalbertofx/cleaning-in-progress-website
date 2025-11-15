# Guía de Deploy Automático en Vercel

## 📋 Pasos para Configurar Deploy Automático

### 1. Verificar que el código esté en GitHub

El repositorio está en: `https://github.com/denisalbertofx/cleaning-in-progress-website.git`

Si el push tuvo problemas, intenta:
```bash
git push origin main
```

### 2. Conectar Repositorio a Vercel

#### Opción A: Desde el Dashboard de Vercel (Recomendado)

1. **Ve a Vercel Dashboard:**
   - Abre: https://vercel.com/dashboard
   - Inicia sesión con tu cuenta (GitHub, GitLab, o Bitbucket)

2. **Importar Proyecto:**
   - Click en el botón **"Add New Project"** o **"Import Project"**
   - Selecciona el repositorio: `cleaning-in-progress-website`
   - Si no aparece, click en **"Adjust GitHub App Permissions"** y autoriza el acceso

3. **Configurar el Proyecto:**
   - **Framework Preset:** Next.js (debería detectarse automáticamente)
   - **Root Directory:** `./` (raíz del proyecto)
   - **Build Command:** `npm run build` (automático)
   - **Output Directory:** `.next` (automático)
   - **Install Command:** `npm install` (automático)

4. **Variables de Entorno (si las hay):**
   - Por ahora no hay variables de entorno necesarias
   - Si en el futuro necesitas agregar alguna, puedes hacerlo aquí

5. **Deploy:**
   - Click en **"Deploy"**
   - Vercel comenzará a construir y desplegar tu aplicación

### 3. Configurar Deploy Automático

Una vez conectado, Vercel automáticamente:
- ✅ Detecta pushes a la rama `main`
- ✅ Hace build automático
- ✅ Despliega automáticamente
- ✅ Genera una URL de producción (ej: `cleaning-in-progress.vercel.app`)
- ✅ Genera URLs de preview para cada PR

### 4. Verificar el Deploy

Después del deploy, verifica:
- ✅ El sitio carga correctamente
- ✅ El logo aparece en Header y Footer
- ✅ El favicon muestra "CP"
- ✅ Los mapas de Google Maps funcionan
- ✅ La información de contacto es correcta
- ✅ Las imágenes se cargan correctamente

### 5. Dominio Personalizado (Opcional)

Si quieres usar un dominio personalizado:
1. Ve a **Settings** → **Domains**
2. Agrega tu dominio (ej: `cleaninginprogress.com`)
3. Sigue las instrucciones para configurar DNS

## 🔧 Troubleshooting

### Si el build falla:
- Revisa los logs en Vercel Dashboard
- Verifica que `npm run build` funcione localmente
- Asegúrate de que todas las dependencias estén en `package.json`

### Si las imágenes no cargan:
- Verifica que las rutas sean correctas (`/images/...`)
- Asegúrate de que los archivos estén en `/public/images/`

### Si el mapa no aparece:
- Verifica que el iframe de Google Maps tenga la URL correcta
- Revisa la consola del navegador para errores

## 📝 Notas Importantes

- **Deploy Automático:** Se activa automáticamente al hacer push a `main`
- **Preview Deploys:** Cada PR genera una URL de preview
- **Build Time:** Típicamente 2-5 minutos
- **Cache:** Vercel cachea builds para acelerar deploys futuros

## 🔗 Enlaces Útiles

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Documentación de Vercel](https://vercel.com/docs)
- [Next.js en Vercel](https://vercel.com/docs/frameworks/nextjs)

---

**Última actualización:** Noviembre 2024

