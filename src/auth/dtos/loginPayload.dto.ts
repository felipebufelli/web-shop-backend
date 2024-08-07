import { UserEntity } from '../../user/entities/user.entity';

export class LoginPayloadDto {
  id: number;
  type: number;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.type = user.type_user;
  }

  toJson() {
    return { id: this.id, type: this.type };
  }
}
