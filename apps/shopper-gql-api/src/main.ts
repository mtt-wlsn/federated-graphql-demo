import { NestFactory } from '@nestjs/core';
import { ShopperGqlApiModule } from './shopper-gql-api.module';

async function bootstrap() {
  const app = await NestFactory.create(ShopperGqlApiModule);
  await app.listen(3000);
}
bootstrap();
