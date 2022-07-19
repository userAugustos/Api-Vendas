import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products') //decorator Entity, and the name of the table where my entity (class) refer
class Product {
  constructor() {
    // so, for each attribute, will return an error of initializer
    // u can fix it initializing ur attr, ex: **this.id = '';**
    // or, change in tsconfig (that's what i did)
  }

  // then define the attributes, and pass them the configs to each columns(attributes)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // stirng are default config to columns in typeorm, so no need to define them
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @CreateDateColumn() // these both are especials types, u can learn all especials in typeorm docs
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
