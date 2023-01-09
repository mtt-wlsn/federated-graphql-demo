import { Module } from '@nestjs/common';
import { ShoppersModule } from './shoppers/shoppers.module';

@Module({
  imports: [ShoppersModule],
})
export class ResourcesModule {}
