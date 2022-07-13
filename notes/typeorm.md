# [TYPEORM](https://typeorm.io/)

**Object Relational Mapper**

  _"ORM é uma técnica de mapeamento objeto relacional que permite fazer uma relação dos bjetos com os dados que os mesmos represntam"_

**O que?**

Pois é, essa definção pode não soar um pouco confusa, mas veja se fica mais claro:

> ORM é uma técnica para **aproximar** o paradigma de dsenvolvimento OO (Oriantado a Objetos) ao paradigma do banco de dados relacional 

Veja que, você precisa dar uma lida sobre os dois paradigmas (OO e Relacional) para entender melhor a necessidade dos ORMs

> Em essência o ORM define o modo como os dados serão mapeados entre os ambientes, como serão acessados e gravados.

Isso para diminuir o tmepo de desenvolvimento, uma vez que não é mais necessário desenvolver toda essa parte.

Ele vai nos permitir relacionar nossas classes JS com as tabelas relacionais

#### Entities

[Typeorm - Entities](https://orkhan.gitbook.io/typeorm/docs/entities)

Uma entidade é uma classe que mapeia pra uma tabela ou uma coleção(em noSQL)

#### Repository

[Typeorm - Repository](https://orkhan.gitbook.io/typeorm/docs/repository-api)

Os Repositorios permitem fazer operações em uma entidade, como todas as opreações de um CRUD

_claro, typorm tem seus metodos pre definidos para repositorys, como ```findOne()```, ```save()```, ```query()``` e etc_

- Podemos também criar [repositorios customizados](https://typeorm.io/custom-repository)
#### Pratica

Na Prática o que vamos fazer é criar **entidades** que vão ser as representações de dados de uma tabelas, e **repositórios** para manipular os dados.

> Então as operações de inserir, alterar, remover registros, vamos fazer com os repositŕios


