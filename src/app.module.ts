import { Module } from '@nestjs/common'
import { CatsModule } from './modules/cats/cats.module'
import { WelcomeModule } from './modules/welcome/welcome.module'
@Module({
  imports: [CatsModule, WelcomeModule],
})
export class AppModule {}
