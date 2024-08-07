import { faker } from "@faker-js/faker";
import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
    id: faker.number.int(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.string.numeric(11),
    cpf: faker.string.numeric(11),
    password: faker.internet.password(),
    type_user: UserType.User, // Assume 1-3 como tipos de usuários
    createdAt: faker.date.past(),
    updateAt: faker.date.recent(),
    addresses: [],
}