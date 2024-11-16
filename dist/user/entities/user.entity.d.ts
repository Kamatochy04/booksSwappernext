import { BookEntity } from 'src/book/entities/book.entity';
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    fullname: string;
    books: BookEntity[];
}
