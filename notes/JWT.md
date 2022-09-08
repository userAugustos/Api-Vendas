#### JWT

*JSON WEB TOKEN*

Json Web Token é um padrão da indústria que transmite ou armazena de forma compacta e segura objetos JSON entre diferentes aplicações. o JWT é assinado com uma chave secreta ou um par de chaves, sendo uma publica e outra privada.

- https://jwt.io/

**Atenticação na API**
 _Para se criar autenticação na API, recomenda-se o uso do metodo POST, por que efetivamente esse processo ta criando uma nova seção, mesmo que não estamos implementando algo, estamos fazendo a criação de uma sessão, para controlar o acesso do usuario_

Nesse projeto vou usar o _jsonwebtoken_ biblioteca mais usada pra jwt no nodejs. 
Docs: https://github.com/auth0/node-jsonwebtoken