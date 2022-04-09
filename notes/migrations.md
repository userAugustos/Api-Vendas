## Migrations

based on https://orkhan.gitbook.io/typeorm/docs/migrations

As migrations nos permite gerenciar nosso banco de dados.

Com elas podemos definir a estrutura do banco de dados, como

> Criar tabelas, adicionar campos a tabela, adicionar foregin key

Pra criar uma migração, precisamos adicionar no arquivo de configuração do typeorm(ormconfig.json) onde o typeorm vai achar nossas migrations
Então adicionamos um array "migrations" que vai servir pro tyeporm saber onde estão as migrations que queremos rodar
E um objeto "cli" que vai servir pra nossa linha de comando
Então criamos um script no package.json para rodar o cli do typeorm
