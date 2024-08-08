import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AddressEntity } from '../entities/address.entity';
import { AddressService } from '../address.service';
import { addressMock } from '../__mocks__/address.mock';
import { UserService } from '../../user/user.service';
import { CityService } from '../../city/city.service';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { cityMock } from '../../city/__mocks__/city.mock';
import { createAddressMock } from '../__mocks__/create-address.mock';

describe('AddressService', () => {
  let service: AddressService;
  let addressRepository: Repository<AddressEntity>;
  let userService: UserService;
  let cityService: CityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,
        {
          provide: UserService,
          useValue: {
            findUserbyId: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
        {
          provide: CityService,
          useValue: {
            findCityById: jest.fn().mockResolvedValue(cityMock),
          },
        },
        {
          provide: getRepositoryToken(AddressEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(addressMock),
          },
        },
      ],
    }).compile();

    service = module.get<AddressService>(AddressService);
    userService = module.get<UserService>(UserService);
    cityService = module.get<CityService>(CityService);
    addressRepository = module.get<Repository<AddressEntity>>(
      getRepositoryToken(AddressEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
    expect(cityService).toBeDefined();
    expect(addressRepository).toBeDefined();
  });

  it('should be return address to createAddress', async () => {
    const address = await service.createAddress(
      createAddressMock,
      userEntityMock.id,
    );

    expect(address).toEqual(addressMock);
  });

  it('should return error if exception in userService', async () => {
    jest.spyOn(userService, 'findUserbyId').mockRejectedValueOnce(new Error());

    await expect(
      service.createAddress(createAddressMock, userEntityMock.id),
    ).rejects.toThrow();
  });

  it('should be return error if cityService excpetion', async () => {
    jest.spyOn(cityService, 'findCityById').mockRejectedValueOnce(new Error());
    
    await expect(service.createAddress(
      createAddressMock,
      userEntityMock.id,
    )).rejects.toThrow();
  });
});
