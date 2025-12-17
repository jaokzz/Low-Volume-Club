@echo off
chcp 65001 > nul
cls

echo.
echo ========================================
echo   LOW VOLUME CLUB - Alex Lipreri
echo ========================================
echo.

REM Verificar se Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js não encontrado!
    echo.
    echo Por favor, instale o Node.js de:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js encontrado: 
node --version
echo.

REM Verificar se node_modules existe
if not exist "node_modules" (
    echo 📦 Instalando dependências...
    echo Isso pode levar alguns minutos na primeira vez...
    echo.
    
    REM Tentar yarn primeiro, depois npm
    where yarn >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo Usando Yarn...
        call yarn install
    ) else (
        echo Usando npm...
        call npm install
    )
    
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ❌ Erro na instalação!
        echo Tente rodar manualmente: npm install
        echo.
        pause
        exit /b 1
    )
    
    echo.
    echo ✅ Dependências instaladas com sucesso!
    echo.
)

echo 🚀 Iniciando o servidor...
echo.
echo O site abrirá automaticamente no navegador.
echo Para parar o servidor, pressione Ctrl+C
echo.

REM Iniciar o servidor
where yarn >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    call yarn start
) else (
    call npm start
)

pause
