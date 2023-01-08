import { Module } from '@nestjs/common';
import { ShopperGqlApiController } from './shopper-gql-api.controller';
import { ShopperGqlApiService } from './shopper-gql-api.service';

@Module({
  imports: [],
  controllers: [ShopperGqlApiController],
  providers: [ShopperGqlApiService],
})
export class ShopperGqlApiModule {}
