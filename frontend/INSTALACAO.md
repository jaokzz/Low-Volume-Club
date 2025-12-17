# 🚀 Guia Rápido de Instalação - LOW VOLUME CLUB

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

1. **Node.js** (versão 18 ou superior)
   - Download: https://nodejs.org/
   - Verifique a instalação: `node --version`

2. **npm** (vem com Node.js) ou **Yarn**
   - npm: `npm --version`
   - Yarn (opcional): `npm install -g yarn`

## 🎯 Passos de Instalação

### 1️⃣ Baixar/Extrair os Arquivos

Após baixar o projeto, extraia todos os arquivos em uma pasta de sua preferência.

```
📁 Sua Pasta/
  └── 📁 frontend/
      ├── 📁 src/
      ├── 📁 public/
      ├── package.json
      ├── .env
      └── ...
```

### 2️⃣ Abrir o Terminal na Pasta do Projeto

**Windows:**
- Abra a pasta `frontend` no Explorador de Arquivos
- Digite `cmd` na barra de endereços e pressione Enter
- Ou clique com botão direito na pasta e selecione "Abrir no Terminal"

**Mac/Linux:**
- Abra o Terminal
- Use `cd` para navegar até a pasta:
  ```bash
  cd caminho/para/frontend
  ```

### 3️⃣ Instalar Dependências

Execute UM dos comandos abaixo:

**Opção A - Usando Yarn (recomendado):**
```bash
yarn install
```

**Opção B - Usando npm:**
```bash
npm install
```

⏳ **Aguarde**: A instalação pode levar de 2 a 5 minutos dependendo da sua internet.

### 4️⃣ Iniciar o Servidor de Desenvolvimento

Após a instalação, execute:

**Com Yarn:**
```bash
yarn start
```

**Com npm:**
```bash
npm start
```

✅ **Pronto!** O navegador abrirá automaticamente em:
```
http://localhost:3000
```

## 🔧 Comandos Úteis

### Iniciar o servidor
```bash
yarn start      # ou: npm start
```

### Criar versão de produção
```bash
yarn build      # ou: npm run build
```

### Parar o servidor
Pressione `Ctrl + C` no terminal

## ❓ Problemas Comuns

### ❌ Erro: "command not found: node"
**Solução:** Instale o Node.js de https://nodejs.org/

### ❌ Erro: "Cannot find module"
**Solução:** Rode novamente `yarn install` ou `npm install`

### ❌ Porta 3000 já está em uso
**Solução:** 
- Feche outros processos usando a porta 3000
- Ou o terminal perguntará se quer usar outra porta (digite `y`)

### ❌ Erro: "EACCES" ou permissões
**Mac/Linux Solução:**
```bash
sudo chown -R $USER ~/.npm
sudo chown -R $USER ~/.yarn
```

## 📱 Acessar de Outro Dispositivo (Opcional)

Para acessar o site do seu celular na mesma rede Wi-Fi:

1. No terminal, encontre a URL que aparece como:
   ```
   On Your Network:  http://192.168.x.x:3000
   ```

2. Acesse essa URL no navegador do seu celular

## 🎨 Personalizar o Site

### Atualizar Links e Contatos
Edite o arquivo `src/mock.js`:

```javascript
export const clubInfo = {
  whatsapp: "seu-numero",
  instagram: "seu-instagram",
  checkoutLink: "seu-link-kiwify"
};
```

### Alterar Cores
Edite `tailwind.config.js` ou `src/App.css`

### Modificar Textos
Todos os textos estão em `src/mock.js` e `src/pages/Home.jsx`

## 📞 Precisa de Ajuda?

**Contato:**
- WhatsApp: +55 49 91353-3593
- Instagram: [@alex_lipreri](https://www.instagram.com/alex_lipreri/)

---

## 🎯 Checklist de Sucesso

- [ ] Node.js instalado e funcionando
- [ ] Arquivos extraídos na pasta correta
- [ ] Terminal aberto na pasta `frontend`
- [ ] `yarn install` ou `npm install` executado com sucesso
- [ ] `yarn start` ou `npm start` rodando
- [ ] Site aberto em http://localhost:3000
- [ ] ✅ Tudo funcionando!

---

**💡 Dica:** Mantenha o terminal aberto enquanto estiver usando o site. Para parar, use `Ctrl + C`.

**🔥 Boa sorte com o LOW VOLUME CLUB!**
