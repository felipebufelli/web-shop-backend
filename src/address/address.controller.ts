import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { UserId } from '../decorators/user-id.decorator';
import { ReturnAddressDto } from './dtos/returnAddress.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Roles(UserType.User)
  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<CreateAddressDto> {
    //console.log('address-controller: UserId: ', userId);
    return this.addressService.createAddress(createAddressDto, userId);
  }

  @Roles(UserType.User, UserType.Admin)
  @Get()
  async findAddressByUserId(
    @UserId() userId: number,
  ): Promise<ReturnAddressDto[]> {
    const addresses = await this.addressService.findAddressByUserId(userId);
    return addresses.map((address) => new ReturnAddressDto(address));
  }
}
