# LOW VOLUME CLUB - Alex Lipreri

Site institucional moderno e responsivo para o personal trainer Alex Lipreri, apresentando o método revolucionário Low Volume.

## 🎯 Sobre o Projeto

Website profissional com design minimalista dark (Amarelo + Preto + Branco) focado em conversão e apresentação do método de treinamento Low Volume.

### ✨ Funcionalidades

- ✅ Hero section impactante com tipografia moderna
- ✅ Apresentação completa do método Low Volume
- ✅ Seções de Princípios e Fundamentos
- ✅ Sistema de depoimentos (mock - aguardando backend)
- ✅ Links para WhatsApp e Instagram
- ✅ CTA para checkout (Kiwify)
- ✅ Design totalmente responsivo
- ✅ Animações CSS dinâmicas

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para UI
- **React Router** - Navegação SPA
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/UI** - Componentes UI modernos
- **Lucide React** - Ícones
- **Axios** - Cliente HTTP
- **CRACO** - Configuração do Create React App

## 🚀 Como Executar Localmente

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (vem com Node.js) ou **yarn**

### ⚡ Instalação Rápida (3 passos)

```bash
# 1. Entre na pasta do projeto
cd frontend

# 2. Instale as dependências
yarn install
# ou: npm install

# 3. Inicie o servidor
yarn start
# ou: npm start
```

✅ **Pronto!** O site abrirá automaticamente em: **http://localhost:3000**

### 🔍 Verificar Instalação

Antes de iniciar, você pode verificar se está tudo OK:

```bash
node verificar-instalacao.js
```

### 📖 Guia Completo

Para instruções detalhadas passo a passo, consulte: [INSTALACAO.md](./INSTALACAO.md)

## 📝 Scripts Disponíveis

### `yarn start` ou `npm start`
Inicia o servidor de desenvolvimento.
Abrirá automaticamente em [http://localhost:3000](http://localhost:3000)

### `yarn build` ou `npm run build`
Cria uma build otimizada para produção na pasta `build/`.

### `yarn test` ou `npm test`
Executa os testes no modo interativo.

## 📂 Estrutura de Pastas

```
frontend/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/
│   │   └── ui/          # Componentes Shadcn/UI
│   ├── pages/
│   │   ├── Home.jsx     # Página principal
│   │   └── animations.css
│   ├── mock.js          # Dados mockados
│   ├── App.js           # Componente raiz
│   ├── App.css          # Estilos globais
│   ├── index.css        # Tailwind e estilos base
│   └── index.js         # Entry point
├── .env                 # Variáveis de ambiente
├── package.json
├── tailwind.config.js
└── craco.config.js
```

## ⚙️ Configurações

### Atualizar Links

Edite o arquivo `src/mock.js` para atualizar:

```javascript
export const clubInfo = {
  whatsapp: "https://wa.me/554991353593",
  instagram: "https://www.instagram.com/alex_lipreri/",
  checkoutLink: "https://checkout.kiwify.com.br/"
};
```

### Personalizar Conteúdo

Todos os textos e dados estão centralizados no arquivo `src/mock.js`:
- Informações do clube
- Princípios do método
- Foco técnico
- Resultados
- Depoimentos mockados

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📲 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🎨 Paleta de Cores

- **Amarelo Principal**: `#FACC15` (Yellow-400)
- **Preto**: `#000000`
- **Branco**: `#FFFFFF`
- **Cinza Escuro**: `#18181B` (Zinc-900/950)

## 🔧 Próximos Passos (Backend)

Para implementar persistência dos depoimentos:
1. Configurar backend FastAPI
2. Conectar MongoDB
3. Criar endpoints de API
4. Integrar frontend com backend

## 📝 Licença

© 2024 Low Volume Club by Alex Lipreri. Todos os direitos reservados.

## 📞 Suporte

Para dúvidas ou suporte:
- WhatsApp: +55 49 91353-3593
- Instagram: [@alex_lipreri](https://www.instagram.com/alex_lipreri/)

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**
