import { Controller, Get, Post, Body, UseGuards, Render } from '@nestjs/common';
import { StockService } from './stock.service';
import { ProductService } from '../product/product.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('stock')
export class StockController {
  constructor(
    private readonly stockService: StockService,
    private readonly productService: ProductService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @Render('stock')
  async findAll() {
    const products = await this.productService.findAll();
    const movements = await this.stockService.getMovements();
    return { products: products.sort((a, b) => a.name.localeCompare(b.name)), movements };
  }

  @UseGuards(JwtAuthGuard)
  @Post('movement')
  async addMovement(@Body() body: { productId: string; type: string; quantity: number; responsible: string }) {
    return this.stockService.addMovement(body.productId, body.type, body.quantity, body.responsible);
  }
}
