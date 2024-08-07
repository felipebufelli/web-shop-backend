import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ReturnUserDto } from '../user/dtos/returnUser.dto';
import { ReturnLoginDto } from './dtos/returnLogin.dto';
import { LoginPayloadDto } from './dtos/loginPayload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
    const user = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);
    const isMatch = await compare(loginDto.password, user?.password ?? '');

    if (!user) {
      throw new NotFoundException('Email or password invalid');
    }

    if (!isMatch) {
      throw new NotFoundException('Email or password invalid');
    }

    const payload = new LoginPayloadDto(user).toJson();

    return new ReturnLoginDto(
      new ReturnUserDto(user),
      this.jwtService.sign(payload),
    );
  }
}
