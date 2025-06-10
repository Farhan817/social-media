import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreatePostDto {
  @ApiProperty({
    description: 'Wallet address of the post creator',
    example: '0x1234567890abcdef1234567890abcdef12345678',
    minLength: 42,
    maxLength: 42,
  })
  @IsNotEmpty()
  @IsString()
  @Length(42, 42, { message: 'Wallet address must be a valid 42-character address' })
  wallet_address: string;

  @ApiProperty({ description: 'Post content', example: 'This is a post.' })
  @IsNotEmpty()
  @IsString()
  content: string;
}