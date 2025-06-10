
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCommentDto {
  // swagger discription
  @ApiProperty({ description: 'ID of the post', type: String, example: 123 })
  @IsNumber()
  post_id: string; 


  @ApiProperty({ description: 'Wallet address of the commenter', example: '0x1234567890abcdef1234567890abcdef12345678' })
  @IsString()
  @IsNotEmpty()
  wallet_address: string;

  @ApiProperty({ description: 'Comment content', example: 'This is a comment.' })
  @IsString()
  @IsNotEmpty()
  content: string;
}
