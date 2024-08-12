import { faker } from '@faker-js/faker';
import { CategoryEntity } from '../entities/category.entity';

export const categoryMock: CategoryEntity = {
  id: faker.number.int(),
  name: faker.person.fullName(),
  createdAt: faker.date.past(),
  updateAt: faker.date.past(),
};
