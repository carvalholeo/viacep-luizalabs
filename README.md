# BuscaCEP Luizalabs

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

## Como executar testes

Testes foram criados com o Jest, tecnologia open source do Facebook. Após a instalação das dependências, execute `npm test`, para que a biblioteca faça os testes e gere os relatórios.

## Tecnologias utilizadas

Este projeto foi criado utilizado uma versão personalizada do [Express Generator](https://www.npmjs.com/package/express-generator), o [Express Generator DH](https://www.npmjs.com/package/express-generator-dh).
Os principais pacotes de produção utilizados são:

- Express 4.17.1: manipulação das requisições HTTP
- Dotenv 8.2.0: trabalhar com variáveis de ambiente, sem senhas e tokens _hard coded_
- Express Validator 6.10.1: validação de informações recebidas na requisição
- Helmet 4.4.1: limpeza e validações de segurança do ambiente Node
- HPP 0.2.3: limpeza de _query strings_, para evitar ataques de _Parameter Pollution_
- Toobusy JS 0.5.1: middleware de resposta para o usuário, para quando o Node estiver sobrecarregado

Já no ambiente de desenvolvimento, há os seguintes pacotes instalados:

- Nodemon 2.0.7: criação de servidor com reinício automático, após cada alteração de arquivos do projeto
- Babel 7.14.6: transpilação de código Javascript de versões mais atuais para a versão ES5
- ESLint 7.31.0: manutenção de estilo de código
- Jest 27.0.6: biblioteca de testes, para execução de testes automatizados
- Supertest/Request 6.1.3: execução de testes HTTP, com verificação de código de status e resposta enviada ao usuário

## Licença

Este projeto está licenciado pela licença MIT, disponível no arquivo [LICENSE](LICENSE), disponível na raiz do projeto.
