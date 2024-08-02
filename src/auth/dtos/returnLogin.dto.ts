import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';

export class ReturnLoginDto {
  accessToken: string;
  user: ReturnUserDto;

  constructor(user: ReturnUserDto, accessToken: string) {
    this.accessToken = accessToken;
    this.user = user;
  }
}
