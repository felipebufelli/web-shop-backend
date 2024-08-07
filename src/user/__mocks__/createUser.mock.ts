import { faker } from "@faker-js/faker";
import { UserType } from "../enum/user-type.enum";
import { CreateUserDto } from "../dtos/createUser.dto";

export const createUserMock: CreateUserDto = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.string.numeric(11),
    cpf: faker.string.numeric(11),
    password: faker.internet.password()
}