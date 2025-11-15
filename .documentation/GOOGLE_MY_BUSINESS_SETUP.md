# Guía para Vincular Google My Business con la Página Web

## ✅ Información Actualizada en el Sitio

### Datos de Contacto
- **Teléfono:** +1 (786) 912-0996
- **Email:** anicelperez417@gmail.com
- **CEO:** Anisel Perez
- **Email CEO:** anicelperez417@gmail.com

### Schema.org Implementado
El sitio ya incluye datos estructurados (Schema.org) que Google puede leer:
- ✅ LocalBusiness schema
- ✅ Información de contacto
- ✅ Horarios de atención
- ✅ Áreas de servicio
- ✅ Servicios ofrecidos
- ✅ Calificaciones agregadas

## 📋 Requisitos para Vincular Google My Business

### 1. Verificar/Actualizar Perfil de Google My Business

#### Información que debe coincidir:
- ✅ **Nombre del negocio:** "Cleaning in Progress Miami"
- ✅ **Teléfono:** +1 (786) 912-0996
- ✅ **Email:** anicelperez417@gmail.com
- ✅ **Tipo de servicio:** Servicio móvil (sin dirección física fija)
- ✅ **Horarios:** 
  - Lunes - Sábado: 8:00 AM - 5:30 PM
  - Domingo: 8:00 AM - 2:00 PM
- ✅ **Categoría:** Servicios de Limpieza / Cleaning Services
- ✅ **Descripción:** Debe mencionar servicios de limpieza residencial y comercial en Miami
- ✅ **Áreas de servicio:** Wynwood, Brickell, Key Miami Gardens, Miami Brickell, Hollywood, Coral Gables, Doral, Hialeah, Hialeah Gardens, Kendall, Key Biscayne, Miami Beach, North Miami Beach
- ✅ **Link del perfil:** https://www.google.com/maps/place/Cleaning+in+Progress+Miami/@25.8611161,-80.2371751,10.13z/data=!4m6!3m5!1s0x6f0f82ee6ac68d83:0x5fa01743d70c3070!8m2!3d25.8516535!4d-80.2459345!16s%2Fg%2F11zkmnvt7r?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D

### 2. Agregar URL del Sitio Web en Google My Business

1. Inicia sesión en [Google Business Profile](https://business.google.com/)
2. Selecciona tu negocio "Cleaning in Progress"
3. Ve a **"Información"** → **"Sitio web"**
4. Agrega la URL de tu sitio web (ej: `https://cleaninginprogress.com` o tu dominio)
5. Guarda los cambios

### 3. Verificar que el Sitio Web Mencione Google My Business

#### Opciones para vincular:

**Opción A: Botón "Solicitar Cotización" en Google My Business**
- Google puede mostrar un botón que enlace directamente a tu página de contacto
- Configura esto en Google My Business → "Acciones" → "Sitio web"

**Opción B: Agregar enlace a Google Reviews en el sitio**
- Agregar un botón/enlace en el footer o página de contacto que dirija a las reseñas de Google
- URL típica: `https://g.page/r/[TU_ID_DE_GOOGLE]/review` o similar

**Opción C: Widget de Google Reviews**
- Puedes agregar un widget que muestre las reseñas de Google directamente en el sitio
- Requiere la API de Google My Business o servicios de terceros

### 4. Datos Estructurados (Schema.org) - ✅ Ya Implementado

El sitio ya incluye:
- ✅ `LocalBusiness` schema con toda la información
- ✅ `Service` schemas para cada servicio
- ✅ `Review` schemas para testimonios
- ✅ Información de contacto actualizada

**Ubicación en el código:**
- `src/lib/seo.ts` - Contiene todos los schemas
- `src/app/layout.tsx` - Incluye el schema principal

### 5. Verificar Coherencia de Información

Asegúrate de que esta información sea **idéntica** en ambos lugares:

| Campo | Google My Business | Sitio Web |
|-------|-------------------|-----------|
| Nombre | Cleaning in Progress Miami | Cleaning in Progress |
| Teléfono | +1 (786) 912-0996 | +1 (786) 912-0996 |
| Email | anicelperez417@gmail.com | anicelperez417@gmail.com |
| Tipo | Servicio móvil | Servicio móvil |
| Horarios | L-S: 8AM-5:30PM, D: 8AM-2PM | L-S: 8AM-5:30PM, D: 8AM-2PM |
| Áreas | Ver perfil de Google Maps | 13 áreas listadas |

### 6. Pasos Adicionales Recomendados

#### A. Agregar Botón de Reseñas de Google
Puedes agregar un botón en el footer o página de contacto que dirija a las reseñas:

```tsx
// Ejemplo de botón para agregar en Footer.tsx
<a 
  href="https://g.page/r/[TU_GOOGLE_BUSINESS_ID]/review" 
  target="_blank" 
  rel="noopener noreferrer"
  className="..."
>
  Dejar una Reseña en Google
</a>
```

#### B. Verificar con Google Search Console
1. Registra tu sitio en [Google Search Console](https://search.google.com/search-console)
2. Verifica la propiedad del sitio
3. Envía el sitemap: `https://tudominio.com/sitemap.xml`
4. Verifica que Google pueda leer los datos estructurados

#### C. Agregar Google Analytics (Opcional pero Recomendado)
- Permite rastrear visitas desde Google My Business
- Ver qué páginas visitan los usuarios que vienen de Google

### 7. Información Actualizada en el Sitio

✅ **Completado:**
- ✅ **Servicio móvil** - Configurado correctamente (sin dirección física)
- ✅ **Horarios actualizados** - Lunes-Sábado: 8AM-5:30PM, Domingo: 8AM-2PM
- ✅ **Áreas de servicio** - 13 áreas listadas y mostradas en el sitio
- ✅ **Link de Google Maps** - Integrado en Footer y página de contacto
- ✅ **Schema.org** - Actualizado para servicio móvil con áreas de servicio

### 8. Cómo Obtener el ID de Google My Business

1. Ve a tu perfil de Google My Business
2. La URL será algo como: `https://www.google.com/maps/place/Cleaning+in+Progress/@25.7617,-80.1918`
3. O busca en la configuración de Google Business Profile
4. También puedes usar herramientas como [Google Business Profile Manager](https://business.google.com/)

### 9. Verificación Final

Una vez completado, verifica:

- [ ] Información idéntica en Google My Business y el sitio web
- [ ] URL del sitio web agregada en Google My Business
- [ ] Datos estructurados (Schema.org) funcionando (verificar con [Google Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Sitio registrado en Google Search Console
- [ ] Sitemap enviado a Google Search Console
- [ ] Dirección física actualizada (si aplica)

## 🔗 Enlaces Útiles

- [Google Business Profile](https://business.google.com/)
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)

## 📝 Notas Importantes

1. **Coherencia es clave:** La información debe ser **exactamente igual** en ambos lugares
2. **Verificación puede tardar:** Google puede tardar varios días en indexar y verificar los cambios
3. **Dirección física:** Si no tienes una dirección física (solo servicio móvil), marca "No tengo una ubicación física" en Google My Business
4. **Reseñas:** Anima a clientes satisfechos a dejar reseñas en Google My Business

---

**Última actualización:** Noviembre 2024
**Contacto técnico:** Para actualizar información, edita `src/lib/contact-info.ts`

