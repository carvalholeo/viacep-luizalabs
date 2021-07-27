# Pergunta técnica sobre HTTP

Ao acessar uma página qualquer, a primeira coisa que o computador faz é procurar a tradução do nome de domínio para um endereço IP, através do DNS.

De posse dessa informação, é realizada uma conexão com o servidor por meio do IP fornecido, através da porta padrão do HTTP, que é a porta 80. O programa servidor de HTTP verifica as regras de acesso, através dos arquivos de configuração. Nos dias atuais, em geral, a conexão é redirecionada para a porta 443, que é a porta padrão para o serviço HTTPS (HTTP com uma camada TLS, para segurança da comunicação). Esse redirecionamento automático pode acontecer do lado cliente, quando o navegador tenta acessar diretamente a página por meio do HTTPS (como ocorre nas versões mais recentes do Google Chrome e Microsoft Edge), como do lado do servidor, por meio dos arquivos de configuração.

Passando por todas a regras, o servidor HTTP, então, entra no diretório descrito na configuração e procura por um arquivo chamado index (isso se o arquivo já não tiver sido informado antes, no arquivo de configuração). Se for uma página dinâmica, ela é enviada ao pré-processador, como o PHP ou ASP.Net, que transforma em HTML. Sendo estático, é enviado diretamente para o navegador, para o usuário utilizar.

Quando o arquivo HTML chega ao cliente, o navegador começa a tentar renderizar o documento e, se tiver algum recurso adicional, como imagens, scripts e folhas de estilo, o navegador, automaticamente, fará novas requisições ao servidor. Este, por sua vez, validará novamente se o navegador pode solicitar aquele recurso e, após as verificações, enviará para o browser. Este processo se repete até que todos os recursos descritos na página HTML estejam baixados, momento em que o navegador processa as regras do CSS, executa os scripts e renderiza os elementos HTML na tela, para o usuário.

Por ser um protocolo sem estado (stateless), a próxima requisição (como uma mudança da página inicial para a de contato) fará com que o servidor começo o processo do zero, mas agora buscando uma outra página.
