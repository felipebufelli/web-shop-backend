import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { AuthService } from './auth.service';
import { ReturnLoginDto } from './dtos/returnLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async login(@Body() loginDto: LoginDto): Promise<ReturnLoginDto> {
    return await this.authService.login(loginDto);
  }
}
