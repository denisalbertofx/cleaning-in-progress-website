#!/bin/bash

# Script para configurar despliegue automático en Vercel
# Este script configura el proyecto para despliegue automático

set -e

echo "🚀 Configurando despliegue automático en Vercel..."
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto."
    exit 1
fi

# Verificar que el código esté en GitHub
echo -e "${BLUE}📦 Verificando estado de Git...${NC}"
if ! git remote get-url origin &> /dev/null; then
    echo "❌ Error: No se encontró un repositorio remoto. Configura GitHub primero."
    exit 1
fi

REMOTE_URL=$(git remote get-url origin)
echo -e "${GREEN}✓${NC} Repositorio remoto: $REMOTE_URL"

# Verificar que hay commits para hacer push
if [ "$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)" -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Hay commits pendientes de push.${NC}"
    echo "¿Deseas hacer push ahora? (s/n)"
    read -r response
    if [[ "$response" =~ ^[Ss]$ ]]; then
        echo "Haciendo push a GitHub..."
        git push origin main || {
            echo "❌ Error al hacer push. Intenta manualmente: git push origin main"
            exit 1
        }
        echo -e "${GREEN}✓${NC} Push completado"
    fi
fi

# Verificar que Vercel CLI esté instalada
echo ""
echo -e "${BLUE}🔧 Verificando Vercel CLI...${NC}"
if ! command -v vercel &> /dev/null; then
    echo "Instalando Vercel CLI..."
    npm install -g vercel@latest || {
        echo "❌ Error al instalar Vercel CLI. Instala manualmente: npm install -g vercel"
        exit 1
    }
fi

VERCEL_VERSION=$(vercel --version)
echo -e "${GREEN}✓${NC} Vercel CLI instalada: $VERCEL_VERSION"

# Verificar si el proyecto ya está vinculado a Vercel
echo ""
echo -e "${BLUE}🔗 Verificando vinculación con Vercel...${NC}"
if [ -d ".vercel" ]; then
    echo -e "${GREEN}✓${NC} Proyecto ya vinculado a Vercel"
    echo "¿Deseas re-vincular el proyecto? (s/n)"
    read -r response
    if [[ "$response" =~ ^[Ss]$ ]]; then
        echo "Re-vinculando proyecto..."
        vercel link --yes || {
            echo "❌ Error al re-vincular. Intenta manualmente: vercel link"
            exit 1
        }
    fi
else
    echo "Vinculando proyecto a Vercel..."
    echo -e "${YELLOW}⚠️  Se abrirá el navegador para autenticación.${NC}"
    vercel link --yes || {
        echo "❌ Error al vincular. Intenta manualmente: vercel link"
        exit 1
    }
fi

# Hacer deploy
echo ""
echo -e "${BLUE}🚀 Iniciando despliegue...${NC}"
vercel --prod --yes || {
    echo "❌ Error en el despliegue. Revisa los logs arriba."
    exit 1
}

echo ""
echo -e "${GREEN}✅ ¡Despliegue completado exitosamente!${NC}"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ve a https://vercel.com/dashboard para ver tu proyecto"
echo "2. El despliegue automático ya está configurado"
echo "3. Cada push a 'main' desplegará automáticamente"
echo ""

