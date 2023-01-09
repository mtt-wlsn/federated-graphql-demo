import { Module } from '@nestjs/common';
import { ShoppersService } from './shoppers.service';
import { ShoppersResolver } from './shoppers.resolver';

@Module({
  providers: [ShoppersResolver, ShoppersService],
})
export class ShoppersModule {}
