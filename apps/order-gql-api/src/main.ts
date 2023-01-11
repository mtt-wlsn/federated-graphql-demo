import { NestFactory } from '@nestjs/core';
import { OrderGqlApiModule } from './order-gql-api.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderGqlApiModule);
  await app.listen(3000);
}
bootstrap();
