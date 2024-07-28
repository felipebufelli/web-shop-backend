import { Inject, Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from 'src/cache/cache.service';

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
}
