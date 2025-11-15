/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de rendimiento
  compress: true,
  poweredByHeader: false,
  
  // Optimización de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: true, // Deshabilitar optimización en desarrollo para debugging
  },
  
  // Optimización de compilación
  swcMinify: true,
  
  // Experimental features para mejor rendimiento
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig

