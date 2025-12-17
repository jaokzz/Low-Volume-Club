#!/usr/bin/env node

/**
 * Script de Verificação de Instalação
 * LOW VOLUME CLUB - Alex Lipreri
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 Verificando instalação do LOW VOLUME CLUB...\n');

const checks = [
  {
    name: 'package.json existe',
    check: () => fs.existsSync('./package.json'),
    solution: 'Certifique-se de estar na pasta "frontend"'
  },
  {
    name: 'node_modules existe',
    check: () => fs.existsSync('./node_modules'),
    solution: 'Execute: yarn install ou npm install'
  },
  {
    name: '.env configurado',
    check: () => fs.existsSync('./.env'),
    solution: 'Copie .env.example para .env'
  },
  {
    name: 'Arquivo src/App.js existe',
    check: () => fs.existsSync('./src/App.js'),
    solution: 'Verifique se os arquivos do projeto foram extraídos corretamente'
  },
  {
    name: 'Arquivo src/pages/Home.jsx existe',
    check: () => fs.existsSync('./src/pages/Home.jsx'),
    solution: 'Verifique se os arquivos do projeto foram extraídos corretamente'
  },
  {
    name: 'Arquivo src/mock.js existe',
    check: () => fs.existsSync('./src/mock.js'),
    solution: 'Verifique se os arquivos do projeto foram extraídos corretamente'
  }
];

let allPassed = true;

checks.forEach((check, index) => {
  const passed = check.check();
  const icon = passed ? '✅' : '❌';
  console.log(`${icon} ${check.name}`);
  
  if (!passed) {
    console.log(`   💡 Solução: ${check.solution}\n`);
    allPassed = false;
  }
});

console.log('\n' + '='.repeat(60) + '\n');

if (allPassed) {
  console.log('🎉 Tudo pronto! Você pode executar:');
  console.log('');
  console.log('   yarn start    (ou npm start)');
  console.log('');
  console.log('O site abrirá em: http://localhost:3000');
  console.log('');
} else {
  console.log('⚠️  Alguns problemas foram encontrados.');
  console.log('Por favor, siga as soluções acima e tente novamente.');
  console.log('');
}

console.log('📞 Precisa de ajuda?');
console.log('   WhatsApp: +55 49 91353-3593');
console.log('   Instagram: @alex_lipreri');
console.log('');
