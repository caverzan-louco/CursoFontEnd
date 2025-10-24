import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Render } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @Render('product')
  async findAll(@Query('search') search?: string) {
    let products;
    if (search) {
      products = await this.productService.search(search);
    } else {
      products = await this.productService.findAll();
    }
    return { products };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() product: any) {
    return this.productService.create(product);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() product: any) {
    return this.productService.update(id, product);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
