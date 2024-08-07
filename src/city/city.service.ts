import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    private readonly cacheService: CacheService,
  ) {}

  async findAllByStateId(stateId: number): Promise<CityEntity[]> {
    const key = `state_${stateId}`;

    return this.cacheService.getCache<CityEntity[]>(key, () =>
      this.cityRepository.find({
        where: {
          stateId: stateId,
        },
      }),
    );
  }

  async findCityById(cityId: number): Promise<CityEntity> {
    const city = await this.cityRepository.findOne({
      where: {
        id: cityId,
      },
    });
    if (!city) {
      throw new NotFoundException(`City ${cityId} not found.`);
    }

    return city;
  }
}
