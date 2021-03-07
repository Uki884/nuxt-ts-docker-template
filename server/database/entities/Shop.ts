import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn
} from 'typeorm'

@Entity()
export class Shop extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number

  @Column('varchar', {
    name: 'name',
    nullable: true
  })
  public name: string = ''

  @Column('varchar', {
    name: 'access_token',
    nullable: true
  })
  public access_token: string = ''

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', precision: 0 })
  readonly created_at?: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', precision: 0 })
  readonly updated_at?: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', precision: 0 })
  readonly deleted_at?: Date

  constructor(name: string, access_token: string) {
    super()
    this.name = name
    this.access_token = access_token
  }
}

export default Shop
