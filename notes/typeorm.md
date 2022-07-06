# TYPEORM

- https://typeorm.io/

- Object Relational Mapper

> _"ORM é uma técnica de mapeamento objeto relacional que permite fazer uma relação dos bjetos com os dados que os mesmos represntam"_

**O que?**

Pois é, essa definção pode não soar um pouco confusa, mas veja se fica mais claro:

> ORM é uma técnica para **aproximar** o paradigma de dsenvolvimento OO (Oriantado a Objetos) ao paradigma do banco de dados relacional

Veja que, você precisa dar uma lida sobre os dois paradigmas (OO e Relacional) para entender melhor a necessidade dos ORMs

> Em essência o ORM define o modo como os dados serão mapeados entre os ambientes, como serão acessados e gravados.

Isso para diminuir o tmepo de desenvolvimento, uma vez que não é mais necessário desenvolver toda essa parte.

Ele vai nos permitir relacionar nossas classes JS com as tabelas relacionais

### Pratica

Na Prática o que vamos fazer é criar _entidades_ que vão ser as representações de dados de uma tabelas, e _repositórios_ para manipular os dados.

> Então as operações de inserir, alterar, remover registros, vamos fazer com os repositŕios


### Entidades

> see https://orkhan.gitbook.io/typeorm/docs/entities

Uma entidade é uma classe que mapeia pra uma tabela ou uma coleção(em noSQL)