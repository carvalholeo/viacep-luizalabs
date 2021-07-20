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

- Axios 0.21.1: fazer requisições HTTP para outros serviços
- Express 4.17.1: manipulação das requisições HTTP de clientes
- Cors 2.8.5: habilitador de segurança para evitar uso indevido da API
- Cross Env 7.0.3: coloca variáveis de ambiente antes da execução de qualquer código
- Dotenv 8.2.0: trabalhar com variáveis de ambiente, sem senhas e tokens _hard coded_
- Express Bouncer 0.2.0: aplicação de limites de consultas à API
- Express Validator 6.10.1: validação de informações recebidas na requisição
- Helmet 4.4.1: limpeza e validações de segurança do ambiente Node
- HPP 0.2.3: limpeza de _query strings_, para evitar ataques de _Parameter Pollution_
- Toobusy JS 0.5.1: middleware de resposta para o usuário, para quando o Node estiver sobrecarregado

Já no ambiente de desenvolvimento, há os seguintes pacotes instalados:

- Babel 7.14.6: transpilação de código Javascript de versões mais atuais para a versão ES5
- ESLint 7.31.0: manutenção de estilo de código
- Jest 27.0.6: biblioteca de testes, para execução de testes automatizados
- Nodemon 2.0.7: criação de servidor com reinício automático, após cada alteração de arquivos do projeto
- Supertest/Request 6.1.3: execução de testes HTTP, com verificação de código de status e resposta enviada ao usuário

## Licença

Este projeto está licenciado pela licença MIT, disponível no arquivo [LICENSE](LICENSE), disponível na raiz do projeto.
