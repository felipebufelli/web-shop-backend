import { faker } from '@faker-js/faker';
import { StateEntity } from '../entities/state.entity';

export const stateMock: StateEntity = {
  id: faker.number.int(),
  name: faker.location.state(),
  createdAt: faker.date.past(),
  updateAt: faker.date.recent(),
};
