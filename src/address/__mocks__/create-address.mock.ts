import { faker } from '@faker-js/faker';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { cityMock } from '../../city/__mocks__/city.mock';
import { CreateAddressDto } from '../dtos/createAddress.dto';

export const createAddressMock: CreateAddressDto = {
  cityId: cityMock.id,
  numberAddress: Number(faker.location.buildingNumber()),
  complement: faker.location.streetAddress({ useFullAddress: true }),
  cep: faker.string.numeric(8),
};
