import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private reporetory: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string) {
    return this.reporetory.findOneBy({
      email,
    });
  }

  async findById(id: number) {
    return this.reporetory.findOneBy({
      id,
    });
  }

  async create(dto: CreateUserDto) {
    return this.reporetory.save(dto);
  }
}
