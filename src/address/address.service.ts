import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { UserService } from '../user/user.service';
import { CityService } from '../city/city.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UserService,
    private readonly cityService: CityService,
  ) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
    userId: number,
  ): Promise<CreateAddressDto> {
    //Valida se o usuário existe. Caso não exista executa uma exceção.
    await this.userService.findUserbyId(userId);
    await this.cityService.findCityById(createAddressDto.cityId);
    return this.addressRepository.save({
      ...createAddressDto,
      userId,
    });
  }

  async findAddressByUserId(userId: number): Promise<AddressEntity[]> {
    const addresses = await this.addressRepository.find({
      where: {
        userId: userId,
      },
      relations: {
        city: {
          state:true,
        }
      }
    });
    if (!addresses || addresses.length === 0) {
      throw new NotFoundException(`Addresses not found for userId: ${userId}`);
    }
    return addresses;
  }
}
