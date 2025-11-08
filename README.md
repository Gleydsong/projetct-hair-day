# 💇‍♂️ Hair Day

<p align="center">
  <img src="./src/assets/logo.svg" alt="Hair Day Logo" width="200"/>
</p>

<p align="center">
  Sistema de agendamento para salão de beleza
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/license-ISC-green.svg" alt="License">
</p>

## 📋 Sobre o Projeto

**Hair Day** é um sistema web moderno e intuitivo para gerenciamento de agendamentos de salão de beleza. Permite que usuários agendem horários, visualizem agendamentos por período (manhã, tarde e noite) e cancelem reservas de forma simples e eficiente.

### ✨ Funcionalidades

- 📅 **Agendamento de Horários**: Selecione data e horário disponível para criar um agendamento
- 👤 **Cadastro de Clientes**: Informe o nome do cliente para cada agendamento
- 🕐 **Visualização por Períodos**: Os agendamentos são organizados por manhã, tarde e noite
- ❌ **Cancelamento**: Cancele agendamentos com confirmação de segurança
- 🔄 **Atualização em Tempo Real**: A lista de horários disponíveis é atualizada automaticamente
- 📱 **Interface Responsiva**: Design moderno e adaptável a diferentes dispositivos

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e layout responsivo
- **JavaScript (ES6+)** - Lógica da aplicação e interatividade
- **Day.js** - Manipulação de datas
- **Webpack** - Bundler de módulos
- **JSON Server** - API REST fake para desenvolvimento
- **Babel** - Transpilação de código JavaScript

## 📁 Estrutura do Projeto

```
hair-day/
├── src/
│   ├── assets/          # Imagens e ícones
│   ├── libs/            # Bibliotecas externas (Day.js)
│   ├── modules/
│   │   ├── form/        # Módulos do formulário
│   │   │   ├── date-change.js
│   │   │   ├── hours-click.js
│   │   │   ├── hours-load.js
│   │   │   └── submit.js
│   │   ├── schedules/   # Módulos de agendamentos
│   │   │   ├── cancel.js
│   │   │   ├── load.js
│   │   │   └── show.js
│   │   └── page-load.js
│   ├── services/        # Serviços de API
│   │   ├── api-config.js
│   │   ├── schedule-cancel.js
│   │   ├── schedule-fetch-by-day.js
│   │   └── schedule-new.js
│   ├── styles/          # Arquivos CSS
│   │   ├── form.css
│   │   ├── global.css
│   │   └── schedule.css
│   ├── utils/           # Utilitários
│   │   └── opening-hours.js
│   └── main.js          # Arquivo principal
├── dist/                # Arquivos compilados
├── index.html           # Página principal
├── server.json          # Banco de dados JSON
├── package.json         # Dependências do projeto
└── webpack.config.js    # Configuração do Webpack
```

## 🔧 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 💻 Instalação e Uso

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/Gleydsong/hair-day.git
```

### 2️⃣ Entre na pasta do projeto

```bash
cd hair-day
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Inicie o servidor JSON

Em um terminal, execute:

```bash
npm run server
```

O servidor será iniciado em `http://localhost:3333`

### 5️⃣ Inicie o servidor de desenvolvimento

Em outro terminal, execute:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:8080`

### 6️⃣ Build para produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## 📖 Como Usar

1. **Selecione uma data** no campo de data
2. **Escolha um horário disponível** na lista de horários
3. **Digite o nome do cliente** 
4. **Clique em "Agendar"** para confirmar o agendamento
5. **Visualize os agendamentos** organizados por período (manhã, tarde, noite)
6. **Cancele um agendamento** clicando no ícone ❌ ao lado do horário

## 🕐 Horários de Funcionamento

- **Manhã**: 08:00 às 12:00
- **Tarde**: 13:00 às 18:00
- **Noite**: 19:00 às 21:00

## 🎨 Paleta de Cores

O projeto utiliza uma paleta de cores moderna e profissional, ideal para salões de beleza.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**GuiDev**

---

<p align="center">
  Feito com ❤️ e ☕
</p>

