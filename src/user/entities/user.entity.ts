import { BookEntity } from 'src/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @OneToMany(() => BookEntity, (book) => book.user)
  books: BookEntity[];
}
