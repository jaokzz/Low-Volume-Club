#!/bin/bash

# Script de Inicialização - LOW VOLUME CLUB
# Alex Lipreri

clear

echo ""
echo "========================================"
echo "  LOW VOLUME CLUB - Alex Lipreri"
echo "========================================"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo ""
    echo "Por favor, instale o Node.js de:"
    echo "https://nodejs.org/"
    echo ""
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo ""

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    echo "Isso pode levar alguns minutos na primeira vez..."
    echo ""
    
    # Tentar yarn primeiro, depois npm
    if command -v yarn &> /dev/null; then
        echo "Usando Yarn..."
        yarn install
    else
        echo "Usando npm..."
        npm install
    fi
    
    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Erro na instalação!"
        echo "Tente rodar manualmente: npm install"
        echo ""
        exit 1
    fi
    
    echo ""
    echo "✅ Dependências instaladas com sucesso!"
    echo ""
fi

echo "🚀 Iniciando o servidor..."
echo ""
echo "O site abrirá automaticamente no navegador."
echo "Para parar o servidor, pressione Ctrl+C"
echo ""

# Iniciar o servidor
if command -v yarn &> /dev/null; then
    yarn start
else
    npm start
fi
