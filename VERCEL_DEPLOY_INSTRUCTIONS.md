# 🚀 Instrucciones Rápidas para Deploy en Vercel

## ✅ Estado Actual
- ✅ Commits locales listos: 2 commits pendientes de push
- ✅ Código listo para deploy
- ⚠️ Push a GitHub tiene problemas (puede ser por archivos grandes)

## 📋 Pasos para Deploy Automático

### Paso 1: Resolver el Push a GitHub

**Opción A: Push manual desde terminal**
```bash
cd /Users/denisalbertoalfajarrin/Documents/DEV_WEB/Cleaning-in-Progress
git push origin main
```

**Opción B: Si hay archivos grandes, usar Git LFS o subirlos manualmente**
- Algunas imágenes pueden ser muy grandes
- Considera optimizarlas antes de hacer push

**Opción C: Push desde GitHub Desktop o tu IDE**
- Usa la interfaz gráfica de GitHub Desktop
- O el panel de Git en tu IDE

### Paso 2: Conectar a Vercel (Una vez que el código esté en GitHub)

1. **Ve a:** https://vercel.com/dashboard
2. **Inicia sesión** con tu cuenta (puedes usar GitHub)
3. **Click en:** "Add New Project" o "Import Project"
4. **Selecciona el repositorio:** `cleaning-in-progress-website`
5. **Configuración automática:**
   - Framework: Next.js (detectado automáticamente)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. **Click en:** "Deploy"

### Paso 3: Deploy Automático Configurado

Una vez conectado, Vercel automáticamente:
- ✅ Detecta cada push a `main`
- ✅ Hace build automático
- ✅ Despliega en producción
- ✅ Genera URL: `cleaning-in-progress.vercel.app` (o tu dominio)

## 🎯 Lo que se Desplegará

- ✅ Información de contacto actualizada (teléfono, email)
- ✅ Logo de Cleaning in Progress en Header y Footer
- ✅ Favicon con iniciales "CP"
- ✅ Mapas de Google Maps en Footer y página de Contacto
- ✅ Áreas de servicio configuradas
- ✅ Horarios actualizados
- ✅ Schema.org para SEO

## 🔍 Verificar Después del Deploy

1. Abre la URL de producción de Vercel
2. Verifica:
   - Logo visible
   - Favicon "CP" en la pestaña
   - Mapas funcionando
   - Información de contacto correcta

## 💡 Nota sobre el Push

Si el push sigue fallando, puedes:
1. Hacer push de commits individuales
2. Usar GitHub Desktop
3. Verificar que no haya archivos > 100MB
4. Contactar soporte de GitHub si persiste

---

**Repositorio:** https://github.com/denisalbertofx/cleaning-in-progress-website.git

