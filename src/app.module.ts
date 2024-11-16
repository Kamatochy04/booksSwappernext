import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { BookEntity } from './book/entities/book.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    BookModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_NOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity, BookEntity],
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
