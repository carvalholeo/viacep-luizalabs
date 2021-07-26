# Estratégias para o app

Pensando no desafio proposto, a ideia foi utilizar o padrão MVC (Model-View-Controller), sem usar, no entanto, a camada de View.

A passagem de informações acontece numa arquitetura de camadas, através de middlewares.

Num primeiro momento, passa-se por um middleware global que adiciona o objeto de HashMap (usado para cachear informações) aos próximos middlewares e funções.

Então, foram configurados os middlewares de proteção, como o Helmet, o HPP, e, em ambiente de produção, o Bouncer, para ativar limitação de chamadas à API, além do CORS.

Se a requisição para aquela determinada URL tiver sido incluída no objeto `Map` anteriormente, o middleware que faz essa verificação já responde ao usuário com aquela informação anterior, popupando tempo de processamento e diminuindo tempo de consulta à APIs de terceiros.

As requisições para entregar as informações do CEP foram colocadas numa rota como prefixo `cep`, para facilitar a identificação e troca de nome em um único ponto do código, se no futuro isso for necessário.

O CEP chega através de Route Params. Então, passam por uma validação do Express Validator, que já possui integrado dentro dele uma validação específica para códigos postais de diferentes países. Se passar por essa validação, o pedido é despachado para o controller.

Dentro do controller, o CEP é despachado para a service que cuida de chamar a API do ViaCEP. Ainda no controller, ele verifica se a resposta do service está de acordo com o esperado. Caso sim, a resposta é armazenada no HashMap e retornada ao usuário. Caso contrário, o controller faz novas tentativas de conseguir os dados relacionados ao CEP, até que tentativas se esgotem, momento em que a resposta é guardada no HashMap e uma resposta enviada ao usuário.

Para Log, foram utilizados os pacotes Morgan, Morgan JSON e Winston, para configurar os arquivos de log e em quais momentos isso acontece.
