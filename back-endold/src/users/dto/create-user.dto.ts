import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Matches,
  MaxLength,
  MinLength,
  minLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User wallet address',
    example: '0x1234567890abcdef1234567890abcdef12345678',
    minLength: 42,
    maxLength: 42,
  })
  @IsNotEmpty()
  @IsString()
  @Length(42, 42, { message: 'Wallet address must be exactly 42 characters.' })
  @Matches(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid wallet address format.' })
  wallet_address: string;

  @ApiProperty({
    description: 'Username of the user',
    example: 'john_doe',
    minLength: 3,
    maxLength: 30,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'Username must have at least 3 characters.' })
  @MaxLength(30, { message: 'Username must not exceed 30 characters.' })
  username: string;

  @ApiProperty({
    description: 'User bio',
    example: 'Software developer and crypto enthusiast',
    maxLength: 160,
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(160, { message: 'Bio must not exceed 160 characters.' })
  bio?: string;

  @ApiProperty({
    description: 'URL of profile picture',
    example: 'https://example.com/profile.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsUrl({}, { message: 'Profile picture must be a valid URL.' })
  profile_pic_url?: string;
}