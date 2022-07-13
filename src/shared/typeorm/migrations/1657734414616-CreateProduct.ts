import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProduct1657734414616 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // here we execute operations, create, delete, etc
    await queryRunner.createTable(
      new Table({
        // creating new table
        name: 'products',
        columns: [
          // creating columns, all columns that we need
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()', // here is the pattern see the typeorm docs for more info
          },
          {
            name: 'name',
            type: 'varchar', // there is no need to specify he is a mandatory row, only when it's not mandatory
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10, // see typeorm docs, but this is for decimal rows
            scale: 2,
          },
          {
            name: 'quantity',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
