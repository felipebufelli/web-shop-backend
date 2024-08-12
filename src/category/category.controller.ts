import { Controller, Get } from '@nestjs/common';
import { CategoryEntity } from './entities/category.entity';
import { CategoryService } from './category.service';
import { ReturnCategoryDto } from './dtos/return-category.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Roles(UserType.Admin, UserType.User)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<ReturnCategoryDto[]> {
    const categories = await this.categoryService.findAll();
    return categories.map((category) => new ReturnCategoryDto(category));
  }
}
