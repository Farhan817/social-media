import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length, Matches } from 'class-validator';

export class CreateLikeDto {
  @ApiProperty({ description: 'ID of the post to like', type: String, example: 123 })
  @IsNotEmpty()
  @IsNumber()
  post_id: string;

  @ApiProperty({
    description: 'Wallet address of the liker',
    example: '0x1234567890abcdef1234567890abcdef12345678',
    minLength: 42,
    maxLength: 42,
  })
  @IsNotEmpty()
  @IsString()
  @Length(42, 42, { message: 'Wallet address must be 42 characters long.' })
  @Matches(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid wallet address format.' })
  wallet_address: string;
}