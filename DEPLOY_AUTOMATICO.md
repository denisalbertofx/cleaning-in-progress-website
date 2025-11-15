# 🚀 Guía de Despliegue Automático en Vercel

## ✅ Configuración Lista

El proyecto está configurado para despliegue automático en Vercel. Cada vez que hagas `git push` a la rama `main`, Vercel automáticamente:
- ✅ Detecta los cambios
- ✅ Hace build del proyecto
- ✅ Despliega en producción
- ✅ Genera una URL de producción

## 📋 Opciones para Configurar el Despliegue

### Opción 1: Script Automático (Recomendado) 🎯

Ejecuta el script que automatiza todo el proceso:

```bash
cd /Users/denisalbertoalfajarrin/Documents/DEV_WEB/Cleaning-in-Progress
./scripts/deploy-vercel.sh
```

Este script:
1. Verifica que el código esté en GitHub
2. Hace push si hay commits pendientes
3. Instala Vercel CLI si no está instalada
4. Vincula el proyecto a tu cuenta de Vercel
5. Hace el despliegue inicial

### Opción 2: Desde el Dashboard de Vercel (Más Fácil) 🌐

1. **Ve a:** https://vercel.com/dashboard
2. **Inicia sesión** con tu cuenta (puedes usar GitHub)
3. **Click en:** "Add New Project" o "Import Project"
4. **Selecciona el repositorio:** `cleaning-in-progress-website`
5. **Configuración:**
   - Framework: **Next.js** (detectado automáticamente)
   - Build Command: `npm run build` (automático)
   - Output Directory: `.next` (automático)
   - Install Command: `npm install` (automático)
6. **Click en:** "Deploy"

**¡Listo!** Vercel configurará el despliegue automático automáticamente.

### Opción 3: Usando Vercel CLI Manualmente 💻

Si prefieres hacerlo paso a paso:

```bash
# 1. Instalar Vercel CLI (si no está instalada)
npm install -g vercel@latest

# 2. Iniciar sesión en Vercel
vercel login

# 3. Vincular el proyecto
cd /Users/denisalbertoalfajarrin/Documents/DEV_WEB/Cleaning-in-Progress
vercel link

# 4. Hacer el primer despliegue
vercel --prod
```

## 🔄 Despliegue Automático

Una vez configurado, el despliegue automático funciona así:

1. **Haces cambios** en tu código local
2. **Haces commit:**
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   ```
3. **Haces push:**
   ```bash
   git push origin main
   ```
4. **Vercel automáticamente:**
   - Detecta el push
   - Inicia el build (2-5 minutos)
   - Despliega en producción
   - Te notifica por email (opcional)

## 📊 Verificar el Estado del Despliegue

### Desde el Dashboard de Vercel:
- Ve a: https://vercel.com/dashboard
- Selecciona tu proyecto
- Verás el historial de despliegues y su estado

### Desde la Terminal:
```bash
vercel ls
```

## 🔧 Configuración del Proyecto

El archivo `vercel.json` contiene la configuración optimizada:

- **Framework:** Next.js
- **Región:** `iad1` (US East)
- **Build Command:** `npm run build`
- **Headers de Seguridad:** Configurados
- **Cache de Imágenes:** Optimizado

## 🌐 URLs Generadas

Después del despliegue, tendrás:

- **Producción:** `https://cleaning-in-progress.vercel.app` (o tu dominio personalizado)
- **Preview:** Cada PR genera una URL única de preview

## 🎯 Verificar Después del Despliegue

1. Abre la URL de producción
2. Verifica:
   - ✅ Logo visible en Header y Footer
   - ✅ Favicon "CP" en la pestaña del navegador
   - ✅ Mapas de Google Maps funcionando
   - ✅ Información de contacto correcta
   - ✅ Todas las páginas cargan correctamente
   - ✅ Imágenes se muestran correctamente

## 🐛 Troubleshooting

### Si el build falla en Vercel:

1. **Revisa los logs:**
   - Ve a Vercel Dashboard → Tu Proyecto → Deployments → Click en el deploy fallido → Ver logs

2. **Verifica que el build funcione localmente:**
   ```bash
   npm run build
   ```

3. **Problemas comunes:**
   - **Error de dependencias:** Asegúrate de que todas las dependencias estén en `package.json`
   - **Error de TypeScript:** Ejecuta `npm run lint` localmente
   - **Error de Tailwind:** Verifica `postcss.config.js` y `tailwind.config.js`

### Si el despliegue no se activa automáticamente:

1. Verifica que el repositorio esté conectado:
   - Vercel Dashboard → Settings → Git
   - Debe mostrar tu repositorio de GitHub

2. Verifica que estés haciendo push a la rama correcta:
   - Por defecto, Vercel despliega desde `main` o `master`

3. Re-vincula el proyecto:
   ```bash
   vercel link
   ```

## 📝 Notas Importantes

- **Deploy Automático:** Se activa automáticamente al hacer push a `main`
- **Preview Deploys:** Cada PR genera una URL de preview automáticamente
- **Build Time:** Típicamente 2-5 minutos
- **Cache:** Vercel cachea builds para acelerar deploys futuros
- **Variables de Entorno:** Si necesitas agregar alguna, ve a Settings → Environment Variables

## 🔗 Enlaces Útiles

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Documentación de Vercel](https://vercel.com/docs)
- [Next.js en Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Repositorio GitHub](https://github.com/denisalbertofx/cleaning-in-progress-website)

---

**Última actualización:** Noviembre 2024

