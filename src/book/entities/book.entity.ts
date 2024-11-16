import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.books)
  user: UserEntity;
}
