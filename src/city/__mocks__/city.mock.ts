import { faker } from '@faker-js/faker';
import { CityEntity } from '../entities/city.entity';
import { stateMock } from '../../state/__mocks__/state.mock';

export const cityMock: CityEntity = {
  id: faker.number.int(),
  name: faker.location.city(),
  stateId: stateMock.id,
  createdAt: faker.date.past(),
  updateAt: faker.date.recent(),
};
