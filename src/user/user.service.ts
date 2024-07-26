import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import {hash}from 'bcrypt';

@Injectable()
export class UserService {

    private users: User[] = [];

    async create(createUserDto: CreateUserDto): Promise<User> {

        
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        const user = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHashed,
        }

        this.users.push(user);
        return user;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }
}
