import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common'
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  // NOTE: 正常返回
  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll()
  // }
  // NOTE: 异常返回
  @Get()
  async findAll() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'this is a custom message',
      },
      HttpStatus.FORBIDDEN,
    )
  }
}
