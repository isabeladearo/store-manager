## Store Manager

Essa aplicação foi um dos projetos avaliativos do módulo de backend no curso de desenvolvimento web na Trybe. 
O objetivo foi desenvolver uma API utilizando a arquitetura MSC (model-service-controller)!
A API é um sistema de gerenciamento de vendas em que é possível criar, visualizar, deletar e atualizar produtos e vendas.

---

## Rodando o projeto com docker:
  1. Rode os serviços `node` e `db` com o comando `docker-compose up -d`;
  2. A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code;
  3. Use o comando `docker exec -it store_manager bash` para rodar via CLI. Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano;
  4. Instale as dependências com `npm install` (Instale dentro do container);
  5. Insira o comando `npm run debug` para rodar a aplicação;
  6. Para rodar os testes, rode o comando `npm run test:mocha`;
  7. Para restaurar o banco de dados, rode o comando `npm run restore`;

---

## Requisitos do Projeto
  1. Escreva testes para cobrir 35% das camadas da sua aplicação
  2. Crie endpoints para listar os produtos e as vendas
  3. Crie middlewares de validação para as rotas `/products` e `/sales`
  4. Crie um endpoint para o cadastro de produtos
  5. Crie um endpoint para atualizar um produto
  6. Crie um endpoint para deletar um produto
  7. Crie um endpoint para cadastrar vendas
  8. Crie um endpoint para atualizar uma venda
  9. Escreva testes para cobrir 40% das camadas da sua aplicação
  10. Crie um endpoint para deletar uma venda
  11. Atualize a quantidade de produtos
  12. Valide a quantidade de produtos
  13. Escreva testes para cobrir 50% das camadas da sua aplicação
  14. Escreva testes para cobrir 60% das camadas da sua aplicação
 