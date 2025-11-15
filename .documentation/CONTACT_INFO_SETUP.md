# Configuración de Información de Contacto

## Archivo Centralizado

Todos los datos de contacto están centralizados en: **`src/lib/contact-info.ts`**

## Cómo Actualizar los Datos

Para actualizar los datos de contacto, edita el archivo `src/lib/contact-info.ts`:

```typescript
export const contactInfo = {
  phone: '+1 (305) 555-0123',           // Teléfono formateado para mostrar
  phoneFormatted: '(305) 555-0123',     // Teléfono formateado alternativo
  phoneRaw: '13055550123',              // Solo números, sin espacios ni caracteres especiales
  whatsapp: '+13055550123',             // Formato internacional con +
  whatsappRaw: '13055550123',           // Solo números para wa.me
  email: 'info@cleaninginprogress.com', // Email de contacto
  address: '123 Main Street, Miami, FL 33101',
  businessHours: 'Lunes - Viernes: 8:00 AM - 6:00 PM | Sábados: 9:00 AM - 4:00 PM',
}
```

## Funciones Disponibles

### `getWhatsAppUrl(message?: string)`
Genera la URL de WhatsApp con mensaje opcional prellenado.

**Ejemplo:**
```typescript
getWhatsAppUrl('Hola, me gustaría solicitar información')
// Retorna: https://wa.me/13055550123?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n
```

### `getPhoneUrl()`
Genera la URL de teléfono para usar en enlaces `tel:`.

**Ejemplo:**
```typescript
getPhoneUrl()
// Retorna: tel:13055550123
```

### `getEmailUrl(subject?: string, body?: string)`
Genera la URL de email con asunto y cuerpo opcionales.

**Ejemplo:**
```typescript
getEmailUrl('Consulta', 'Hola, me gustaría...')
// Retorna: mailto:info@cleaninginprogress.com?subject=Consulta&body=Hola%2C%20me%20gustar%C3%ADa...
```

## Componentes Actualizados

Los siguientes componentes ya están usando el sistema centralizado:

- ✅ `src/components/FloatingCTA.tsx` - Botones flotantes de WhatsApp y teléfono
- ✅ `src/components/Footer.tsx` - Información de contacto en el footer
- ✅ `src/app/page.tsx` - Botones de WhatsApp en la página principal
- ✅ `src/app/contacto/page.tsx` - Formulario y enlaces de contacto
- ✅ `src/app/servicios/[slug]/page.tsx` - Páginas de servicios individuales
- ✅ `src/app/blog/[slug]/page.tsx` - Páginas de artículos del blog
- ✅ `src/lib/seo.ts` - Datos estructurados para SEO

## Formato de Números

### Teléfono
- **Formato mostrado**: `+1 (305) 555-0123` (con espacios y paréntesis)
- **Formato para tel:** `13055550123` (solo números)

### WhatsApp
- **Formato internacional**: `+13055550123` (con + y código de país)
- **Formato para wa.me**: `13055550123` (solo números, sin +)

## Notas Importantes

1. **Actualiza ambos formatos**: Cuando cambies el teléfono, actualiza tanto `phone` como `phoneRaw`
2. **WhatsApp**: Asegúrate de que `whatsappRaw` solo contenga números
3. **Email**: Verifica que el email esté correctamente escrito
4. **Prueba los enlaces**: Después de actualizar, prueba que todos los enlaces funcionen correctamente

## Ejemplo de Actualización

Si quieres cambiar el teléfono a `+1 (786) 555-9876`:

```typescript
export const contactInfo = {
  phone: '+1 (786) 555-9876',
  phoneFormatted: '(786) 555-9876',
  phoneRaw: '17865559876',        // Solo números
  whatsapp: '+17865559876',
  whatsappRaw: '17865559876',     // Solo números
  // ... resto de datos
}
```

