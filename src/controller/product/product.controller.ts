import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  getProduct() {
    return { message: 'product' };
  }
  @Get('detail')
  getProductDetail() {
    return { message: 'product detail' };
  }
}
