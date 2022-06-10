import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';
import { JoiValidationPipe } from 'src/pipe/joi-validation.pipe';
import { ParseArrayNumberPipe } from 'src/pipe/parse-array-number.pipe';

class IUser {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  age: number;
}

@Controller('user')
export class UserController {
  @Post()
  post(
    @Query('int', ParseIntPipe) int: number,
    @Query('float', ParseFloatPipe) float: number,
    @Query('bool', ParseBoolPipe) bool: boolean,
    @Query('arr', ParseArrayPipe) arr: string[],
    @Body('bodyArr', ParseArrayPipe) bodyArr: string[] | number[],
    @Query('parseArr', ParseArrayNumberPipe) parseArr: string,
    @Query('uuid', ParseUUIDPipe) uuid: string,
    // @Body('enumerable', new ParseEnumPipe<Type>('test'))
    // enumerable: Type,
  ) {
    return {
      int,
      float,
      bool,
      arr,
      bodyArr,
      parseArr,
      uuid,
      // enumerable,
    };
  }

  // @Post('create')
  // @UsePipes(new JoiValidationPipe(user))
  // getUser(@Body() user: IUser) {
  //   return user;
  // }

  /*
  # Validation Pipe
  Validation Pipe will work with class using class-validator.
  */
  @Post('validate')
  validateUser(@Body(new ValidationPipe()) user: IUser) {
    return user;
  }
}
