import { Injectable, UnauthorizedException } from '@nestjs/common';
import { VerifyDto } from './dto/auth.dto';
import {  verifyMessage } from 'ethers';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
   constructor(private readonly jwtService: JwtService) {}
  async verifySignature(verifyDto: VerifyDto): Promise<{token:string}> {
    const recoveredAddress = verifyMessage(
      verifyDto.message,
      verifyDto.signature,
    );

    if (
      recoveredAddress.toLowerCase() !== verifyDto.wallet_address.toLowerCase()
      
    ) {
      throw new UnauthorizedException('Invalid signature for wallet address');
    }
     const payload = { wallet: recoveredAddress };
    const token = await this.jwtService.signAsync(payload);

    return { token };
  }
}
