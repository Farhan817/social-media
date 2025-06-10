import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class VerifyDto {
  @ApiProperty({
    description: 'The wallet address of the user',
    example: '0x1234abcd5678ef90123456789abcdef012345678',
  })
  @IsString()
  @IsNotEmpty()
  wallet_address: string;

  @ApiProperty({
    description: 'The message that was signed by the user',
    example: 'Login to MyApp at 2025-06-08T16:00:00Z',
  })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    description: 'The signature generated from signing the message',
    example: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef12345678901b',
  })
  @IsString()
  @IsNotEmpty()
  signature: string;
}