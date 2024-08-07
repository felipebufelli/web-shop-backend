import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { userEntityMock } from '../__mocks__/user.mock';
import { createUserMock } from '../__mocks__/createUser.mock';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(userEntityMock),
            save: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return user in findUserByEmail', async () => {
    //console.log(userEntityMock);
    const user = await service.findUserByEmail(userEntityMock.email);
    expect(user).toEqual(userEntityMock);
  });

  it('should return error in findUserByEmail', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

    expect(service.findUserByEmail(userEntityMock.email)).rejects.toThrow();
  });

  it('should return error in findUserByEmail (DB)', async () => {
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());

    expect(service.findUserByEmail(userEntityMock.email)).rejects.toThrow();
  });

  it('should return user in findUserbyId', async () => {
    //console.log(userEntityMock);
    const user = await service.findUserbyId(userEntityMock.id);
    expect(user).toEqual(userEntityMock);
  });

  it('should return error in findUserbyId', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

    expect(service.findUserbyId(userEntityMock.id)).rejects.toThrow();
  });

  it('should return error in findUserbyId (DB)', async () => {
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());

    expect(service.findUserbyId(userEntityMock.id)).rejects.toThrow();
  });

  it('should return user in findUserByIdUsingRelations', async () => {
    //console.log(userEntityMock);
    const user = await service.findUserbyId(userEntityMock.id);
    expect(user).toEqual(userEntityMock);
  });
  
  it('should return error if user exist', async () => {
    
    expect(service.create(createUserMock)).rejects.toThrow()
  });
  /*
  TODO - CONFIRMAR ESSE TESTE UNITÁRIO
  it('should return user if user not exist', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

    const user = await service.create(createUserMock);

    expect(user).toEqual(userEntityMock);
  });
  */
});
