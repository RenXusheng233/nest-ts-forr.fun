import { Controller, Get } from '@nestjs/common'
import { WelcomeService } from './welcome.service'

@Controller('welcome')
export class WelcomeController {
  constructor(private welcomeService: WelcomeService) {}

  @Get()
  async fetchWelcomeWord(): Promise<string> {
    return this.welcomeService.fetchWelcomeWord()
  }
}
