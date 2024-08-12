import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from '../category.service';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { categoryMock } from '../__mocks__/category.mock';

describe('CategoryService', () => {
  let service: CategoryService;
  let categoryRepository: Repository<CategoryEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: getRepositoryToken(CategoryEntity),
          useValue: {
            find: jest.fn().mockResolvedValue([categoryMock]),
            save: jest.fn().mockResolvedValue(categoryMock),
          },
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    categoryRepository = module.get<Repository<CategoryEntity>>(
      getRepositoryToken(CategoryEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(categoryRepository).toBeDefined();
  });

  it('should be return list of category', async () => {
    const categories = await service.findAll();
    expect(categories).toEqual([categoryMock]);
  });

  it('should be return error if list category empty', async () => {
    jest.spyOn(categoryRepository, 'find').mockResolvedValue([]);
    expect(service.findAll()).rejects.toThrow();
  });

  it('should be return error if list category excpetion', async () => {
    jest.spyOn(categoryRepository, 'find').mockRejectedValue(new Error());
    expect(service.findAll()).rejects.toThrow();
  });

});
