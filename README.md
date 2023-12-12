# Calculadora Web.TS

  Este projeto consiste em uma aplicação web de calculadora simples, desenvolvida utilizando HTML, CSS e TypeScript. 
A calculadora suporta operações aritméticas básicas, como adição, subtração, multiplicação e divisão. Além disso, possui 
funcionalidades como limpar a operação atual, limpar todas as operações, apagar o último dígito e tratar pontos decimais.

## Sumário

- [Começando](#começando)
- [Pré-requisitos](#pré-requisitos)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Funcionalidades](#funcionalidades)
- [Documentação](#documentação)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Começando

### Pré-requisitos

Antes de executar a calculadora, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (para compilação TypeScript)
- Um navegador web moderno

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- TypeScript

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-nome/calculadora-web.git
2. **Navegue até o diretório do projeto:**

   ```bash
   cd calculadora-web
3. **Instale as dependências:**
   
   ```bash
   npm install
4. **Compile TypeScript para JavaScript:**

   ```bash
   npx tsc
5. **Abra o arquivo index.html em seu navegador web.**

### Utilização
Basta clicar nos botões da calculadora para realizar cálculos. A calculadora suporta operações aritméticas básicas, e 
você pode usar os botões para dígitos (0-9), ponto decimal (.), e operações (+, -, *, /). Além disso, é possível limpar 
a operação atual, limpar todas as operações, apagar o último dígito e calcular o resultado.

### Funcionalidades
Operações aritméticas básicas (adição, subtração, multiplicação, divisão)
Suporte para ponto decimal
Limpar operação atual
Limpar todas as operações
Apagar o último dígito
Design responsivo para diversos tamanhos de tela
### Documentação
Classe Calculator
A classe Calculator é responsável por lidar com as operações da calculadora e atualizar o visor. Ela inclui métodos para 
adicionar dígitos, processar operações, atualizar o visor, alterar a operação e muito mais.

Ouvintes de Eventos
Ouvintes de eventos são adicionados aos botões da calculadora para capturar a entrada do usuário. Dígitos são adicionados à 
operação atual, e operações acionam os métodos correspondentes na classe Calculator.

### Contribuição
Contribuições são bem-vindas! Se encontrar um bug, tiver alguma crítica construtiva, ou tiver uma melhoria em mente, abra 
uma issue ou crie um pull request com suas alterações.

### Licença
Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para obter detalhes.
