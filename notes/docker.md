# Docker

 **Conceitos básicos**

  A principal utilidade do Docker é a criação de ambientes isolados através dos **containers**. Ao utilizar container você garante que não haverá conflito entre ferramentas no seu PC ou em servidores

 **Containers**

> Container é um processo em execução, com alguns recursos adicionais encapsulados para mentê-lo isolado do host edo outros containers

_esse container vem com recursos para atender a demanda especifica pela qual foi criado, ele é minificado e customizado para aquilo_

Um dos aspectos mais importantes desse isolamento é que cada container interage com seu próprio sistema de arquivos privado; esse sistema de arquivos é fornecido por uma imagem docker

**Imagem**

Uma imagem inclui tudo que é necessário para executar um aplicativo

> O código binário, dependências e quaisquer outros objetos necessários.

o Docker Hub é o repositório oficial para armazenamento das imagens

**Comandos basicos do docker**
_[Imagem dos comandos](https://imgur.com/a/Z7FdtiW)_

- Docker(s) em execução
  ```docker ps```
<br/>
- Excluir um container
  ```docker rm <container-name>```
<br/>
- Iniciar um container já criado
  ```docker start <container-name>```
<br/>
- Lista todas as informações do container
  ```docker inspect <container-name> || <container-id>```

<br/>
##### Exemplo de um comando completo

```js
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Então aqui rodamos pela primeira vez um docker de postgres
criamos o container :docker run:
passamos o ```--name``` do docker
o parâmetro ```:-e:``` para definir uma variavel de ambiente, no caso:```POSTGRES_PASSWORD```
o parâmetro ```:-p:``` para definir uma porta do docker 
> _(importante que, a porta do lado esquedo do ```:``` é a porta no nosso computador no caso 5432 e a porta do lado direito do ```:``` é a porta no container, que nunca pode mudar)_