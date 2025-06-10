import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/utils/public.decorator';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  
  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto)
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @Get(':wallet_address')
  findOne(@Param('wallet_address') wallet_address: string) {
    return this.usersService.viewUser(wallet_address);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
