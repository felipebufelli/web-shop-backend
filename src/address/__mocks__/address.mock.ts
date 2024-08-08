import { faker } from '@faker-js/faker';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { cityMock } from '../../city/__mocks__/city.mock';

export const addressMock: AddressEntity = {
  id: faker.number.int(),
  userId: userEntityMock.id,
  cityId: cityMock.id,
  numberAddress: Number(faker.location.buildingNumber()),
  complement: faker.location.streetAddress({ useFullAddress: true }),
  createdAt: faker.date.past(),
  updateAt: faker.date.recent(),
  cep: faker.string.numeric(8),
};
