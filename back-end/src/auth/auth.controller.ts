// src/auth/auth.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { VerifyDto } from './dto/auth.dto';
import { Public } from 'src/utils/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('verify')
  async verify(@Body() verifyDto: VerifyDto) {
    const validWallet = await this.authService.verifySignature(verifyDto);

    return validWallet;
  }
}
