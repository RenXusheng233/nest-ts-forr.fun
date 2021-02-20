import { Injectable } from '@nestjs/common'

@Injectable()
export class WelcomeService {
  private readonly welcomeWord: string = 'Hi there'

  fetchWelcomeWord(): string {
    return this.welcomeWord
  }
}
