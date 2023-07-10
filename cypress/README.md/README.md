#
# Cenários de Teste Utilizando BDD:

**Funcionalidade:** Compra de Produtos.

Como um herói, quero realizar a compra de produtos no ecommerce.
## Cenário 1: Compra da camisa vermelha
<br>

Dado que eu preciso de um usuário e senha corretos para acessar a página de produtos

Quando eu procurar pela camisa vermelha

E eu selecionar a opção camisa vermelha

E eu adicionar o item ao carrinho

E eu seguir para página de pagamento

E eu preencher os dados corretos

E finalizar a compra

Então devo ver a tela de agradecimento e voltar a página inicial


## Cenário 2: Compra da Bolsa
<br>
Dado que preciso de usuário e senha para acessar página de produtos

Quando encontrar uma bolsa

E adicionar ao carrinho

E seguir para a página de pagamento

E preencher os dados corretos

E finalizar a compra

Então devo ver a tela de agradecimento e voltar a página inicial

## Cenário 3: Ordenar os valores do menor para o maior e comprar os dois menores

Dado que preciso de usuário e senha para acessar página de produtos

Quando selecionar o filtro do produto menor para o maior

E adicionar os dois mais baratos ao carrinho

E seguir para página de pagamento

E preencher corretamente os dados

E finalizar a compra

Então devo ver a tela de agradecimento e voltar a página inicial

# 

# Documentação do Projeto/Código

A escrita do código foi feita na IDE VScode, onde foram executados os pacotes do Node.js, criando o projeto Node inicial(npm init --yes) executado no terminal, adicionando nele a dependência de desenvolvimento do Cypress(npm install -D cypress), desta forma inicializando também a estrutura de pasta padrão do cypress(npx cypress open).
O Browser escolhido nas execuções foi o Google Chrome, foi realizado uma limpezas das pastas com código nativo que vem como exemplo para utilização do cypress, visto que não havia necessidade.

A linguagem de programação usada foi o JavaScript. A princípio o código foi escrito de forma livre, e ao finalizar foi feito o refactor, mantendo sua funcionalidade com objetivo de testar o que foi solicitado, deixando o mesmo no modelo de PageObject. O produto foram 4 pastas (bolsa, camisaVermelha, Login e ProdutosMenorPreco) que estão inseridas na pasta "suporte > pages", nas quais contém o index.js comportando as classes e funções, demonstrando as ações e interações e elements.js guardando os elementos de rastreio e emios de interação com a página. O código principal ficou na pasta e2e, contendo o arquivo swaglabs.cy.js. Para rodar o projeto basta ter o Node.js e o cypress instalados na máquina e inicializá-lo. Ao abrir a interface gráfica do Cypress, a spec estará disponível, bastando apenas executá-la. 