import { Controller, Get } from '@nestjs/common';
import { ShopperGqlApiService } from './shopper-gql-api.service';

@Controller()
export class ShopperGqlApiController {
  constructor(private readonly shopperGqlApiService: ShopperGqlApiService) {}

  @Get()
  getHello(): string {
    return this.shopperGqlApiService.getHello();
  }
}
