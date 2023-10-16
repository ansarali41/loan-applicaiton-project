import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { failed, success } from 'src/helper/response';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/registration')
  async registration(@Body() body: CreateUserDto, @Res() res: any) {
    try {
      const find_user = await this.userService.find_existing_user(
        body.mobile,
        body.email,
      );

      if (find_user)
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json(failed(400, 'User already registered'));

      const data = await this.userService.registration(body);

      return res
        .status(HttpStatus.CREATED)
        .json(success(data, 'User Registered Successfully.', 201));
    } catch (error) {
      console.log(error);
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(failed(500, 'Internal Server Error', error));
    }
  }

  @Post('/login')
  async login(@Body() body: any, @Res() res: any) {
    try {
      const data = await this.userService.login(body.email, body.password);

      if (!data)
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json(failed(400, 'Email or Password is wrong !'));

      return res
        .status(HttpStatus.OK)
        .json(success(data, 'User Login Successfully.'));
    } catch (error) {
      console.log(error);
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(failed(500, 'Internal Server Error', error));
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
