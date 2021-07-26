# BuscaCEP Luizalabs

[![Code Coverage](https://github.com/carvalholeo/viacep-luizalabs/actions/workflows/coveralls.yml/badge.svg)](https://github.com/carvalholeo/viacep-luizalabs/actions/workflows/coveralls.yml)
[![Windows](https://github.com/carvalholeo/viacep-luizalabs/actions/workflows/test-windows.yml/badge.svg)](https://github.com/carvalholeo/viacep-luizalabs/actions/workflows/test-windows.yml)
[![Coverage Status](https://coveralls.io/repos/github/carvalholeo/viacep-luizalabs/badge.svg?branch=main)](https://coveralls.io/github/carvalholeo/viacep-luizalabs?branch=main)

Este projeto foi criado no contexto de um processo seletivo para trabalhar como Pessoa Desenvolvedora Back-end em Node.

É um desafio técnico, que consiste em receber um CEP, verificar se há uma informação de endereço válida e, caso não haja, tentar alternativas até que se possa ter um endereço completo válido. Caso não seja possível, a API responde ao cliente com um erro e código HTTP de requisição inválida.

## Como executar projeto?

- Faça o clone do repositório e entre no diretório
- Execute `npm install`, para instalação das dependências
- Executar o comando `npm start`

Isso colocará o servidor no ar. Para visualizar as informações de um CEP, entre em `http://localhost:3000/cep/{numero-do-cep}`, onde `{numero-do-cep}` é o endereço a ser localizado por meio do código.

## Requisitos de ambiente

- Node 10.24.0 ou superior
- NPM 6.14.11

### Motivação de usar o Node

Além de ser uma das tecnologias sugeridas, é a tecnologia que mais domino atualmente. Também, pensando em como as APIs funcionam, é uma plataforma que trabalha bem com requisições assíncronas, ideal para cenários como o proposto.

## Como visualizar a documentação

Com as dependências instaladas, inicie o projeto com o comando `npm start`. No navegador, entre na página [http://localhost:3000/api-docs](http://localhost:3000/api-docs). Você será capaz de visualizar a documentação, com a utilização de Swagger.

## Como executar testes

Testes foram criados com o Jest, tecnologia open source do Facebook. Após a instalação das dependências, execute `npm test`, para que a biblioteca faça os testes e gere os relatórios.

## Tecnologias utilizadas

Este projeto foi criado utilizado uma versão personalizada do [Express Generator](https://www.npmjs.com/package/express-generator), o [Express Generator DH](https://www.npmjs.com/package/express-generator-dh).
Os principais pacotes de produção utilizados são:

- Axios 0.21.1: fazer requisições HTTP para outros serviços
- Express 4.17.1: manipulação das requisições HTTP de clientes
- Cors 2.8.5: habilitador de segurança para evitar uso indevido da API
- Cross Env 7.0.3: coloca variáveis de ambiente antes da execução de qualquer código
- Express Bouncer 0.2.0: aplicação de limites de consultas à API
- Express Validator 6.10.1: validação de informações recebidas na requisição
- Helmet 4.4.1: limpeza e validações de segurança do ambiente Node
- HPP 0.2.3: limpeza de _query strings_, para evitar ataques de _Parameter Pollution_
- HTTP Errors 1.8.0: usado para disparar trabalhar corretamente com os erros em função das requisições HTTP
- Morgan 1.10.10: registrador de log para requisições HTTP
- Morgan JSON 1.1.0: transformação das mensagens padrão de log em JSON
- Swagger UI Express 4.1.6: documentação da API, através de interface Web
- Winston 3.3.3: pacote para configurar os logs do sistema

Já no ambiente de desenvolvimento, há os seguintes pacotes instalados:

- Babel 7.14.6: transpilação de código Javascript de versões mais atuais para a versão ES5
- ESLint 7.31.0: manutenção de estilo de código
- Jest 27.0.6: biblioteca de testes, para execução de testes automatizados
- Nodemon 2.0.7: criação de servidor com reinício automático, após cada alteração de arquivos do projeto
- Supertest/Request 6.1.3: execução de testes HTTP, com verificação de código de status e resposta enviada ao usuário

## Licença

Este projeto está licenciado pela licença MIT, disponível no arquivo [LICENSE](LICENSE), disponível na raiz do projeto.
