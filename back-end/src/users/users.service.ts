import { PartialType } from '@nestjs/mapped-types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService{

constructor(
    @InjectRepository(User) private readonly userRepository : Repository<User>,

){}


createUser(CreateUserDto:CreateUserDto): Promise<User>{
    const user: User = new User();
    user.wallet_address= CreateUserDto.wallet_address;
    user.usename= CreateUserDto.username;
    user.bio= CreateUserDto.bio??"";
    user.profile_pic_url= CreateUserDto.profile_pic_url??"";
    return this.userRepository.save(user)
}

 viewUser(wallet_address: string): Promise<User|null> {
    return this.userRepository.findOneBy({ wallet_address });
  }
}
