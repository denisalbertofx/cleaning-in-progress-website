# Configuración de Google Search Console

**Tiempo estimado:** 5-10 minutos  
**Importancia:** 🔴 CRÍTICA para SEO

---

## 📋 Paso 1: Acceder a Google Search Console

1. Ve a: **https://search.google.com/search-console**
2. Inicia sesión con tu cuenta de Google (preferiblemente la misma que usas para Google Analytics)
3. Si es tu primera vez, acepta los términos y condiciones

---

## 📋 Paso 2: Agregar tu Propiedad (Sitio Web)

### Opción A: Verificación por Dominio (Recomendada)
1. En la pantalla principal, haz clic en **"Agregar propiedad"**
2. Selecciona **"Dominio"** (no URL de prefijo)
3. Ingresa: `cleaninginprogressmiami.com` (sin www, sin https)
4. Haz clic en **"Continuar"**

### Opción B: Verificación por URL de Prefijo (Alternativa)
1. Selecciona **"URL de prefijo"**
2. Ingresa: `https://www.cleaninginprogressmiami.com`
3. Haz clic en **"Continuar"**

---

## 📋 Paso 3: Verificar la Propiedad

Google te pedirá verificar que eres el dueño del sitio. Tienes varias opciones:

### Método 1: Verificación por HTML (Más Fácil)
1. Google te dará un **archivo HTML** para descargar
2. Descarga el archivo (ejemplo: `google1234567890.html`)
3. **NO necesitas hacer nada más** - Next.js puede manejar esto automáticamente si configuramos una ruta especial

### Método 2: Verificación por Meta Tag (Recomendada para Next.js)
1. Google te dará un **meta tag** como este:
   ```html
   <meta name="google-site-verification" content="CODIGO_DE_VERIFICACION_AQUI" />
   ```
2. **Ya está configurado automáticamente** - El sitio ya tiene la estructura para esto
3. Solo necesitas copiar el código de verificación

### Método 3: Verificación por Google Analytics (Más Rápida)
1. Si ya tienes Google Analytics configurado (que ya lo tienes ✅)
2. Selecciona **"Google Analytics"**
3. Google verificará automáticamente usando tu código de GA

### Método 4: Verificación por DNS (Más Técnica)
1. Agrega un registro TXT en tu proveedor de DNS
2. Google te dará el valor exacto a agregar

**Recomendación:** Usa el **Método 3 (Google Analytics)** si ya lo tienes configurado, es el más rápido.

---

## 📋 Paso 4: Enviar el Sitemap

Una vez verificada la propiedad:

1. En el menú lateral, ve a **"Sitemaps"** (o "Mapas del sitio")
2. En el campo "Agregar un nuevo sitemap", ingresa:
   ```
   sitemap.xml
   ```
3. Haz clic en **"Enviar"**
4. Espera unos minutos y verifica que aparezca como "Correcto"

**URL completa del sitemap:**
```
https://www.cleaninginprogressmiami.com/sitemap.xml
```

---

## 📋 Paso 5: Solicitar Indexación (Opcional pero Recomendado)

Para acelerar la indexación de tus páginas principales:

1. Ve a **"Inspecciòn de URL"** en el menú lateral
2. Ingresa la URL de tu página principal: `https://www.cleaninginprogressmiami.com`
3. Haz clic en **"Solicitar indexación"**
4. Repite para páginas importantes:
   - `/servicios`
   - `/contacto`
   - `/nosotros`

---

## 📋 Paso 6: Configurar Notificaciones (Opcional)

1. Ve a **"Configuración"** → **"Usuarios y permisos"**
2. Agrega tu email para recibir notificaciones sobre:
   - Errores de indexación
   - Problemas de seguridad
   - Cambios importantes

---

## ✅ Verificación de que Todo Funciona

Después de 24-48 horas, deberías ver:

1. **Cobertura:** Páginas indexadas en "Cobertura"
2. **Rendimiento:** Datos de búsquedas en "Rendimiento"
3. **Sitemap:** Estado "Correcto" en "Sitemaps"

---

## 🔍 Qué Puedes Hacer con Google Search Console

### Monitoreo Diario/Semanal:
- **Rendimiento:** Ver qué palabras clave te traen tráfico
- **Cobertura:** Verificar que todas tus páginas estén indexadas
- **Mejoras:** Ver sugerencias de SEO
- **Errores:** Detectar y corregir problemas de indexación

### Información Valiosa:
- Qué buscan las personas que encuentran tu sitio
- Qué páginas son más populares en búsquedas
- Errores que impiden que Google indexe páginas
- Problemas de móvil/usabilidad

---

## 🚨 Problemas Comunes y Soluciones

### "No se puede verificar"
- **Solución:** Asegúrate de que el sitio esté en vivo y accesible
- Verifica que el código de Google Analytics esté correctamente instalado

### "Sitemap no encontrado"
- **Solución:** Verifica que `https://www.cleaninginprogressmiami.com/sitemap.xml` sea accesible
- Espera 24 horas después de verificar la propiedad

### "Páginas no indexadas"
- **Solución:** Usa "Inspección de URL" para solicitar indexación manual
- Verifica que `robots.txt` no esté bloqueando páginas

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que el sitio esté en vivo
2. Espera 24-48 horas para que Google procese todo
3. Revisa la documentación oficial: https://support.google.com/webmasters

---

**¡Listo!** Con esto tendrás visibilidad completa de cómo Google ve y indexa tu sitio web.

