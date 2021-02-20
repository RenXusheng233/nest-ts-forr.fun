import { Module } from '@nestjs/common'
import { CatsModule } from './modules/cats/cats.module'
import { CatsController } from './modules/cats/cats.controller'
import { CatsService } from './modules/cats/cats.service'
@Module({
  imports: [CatsModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
