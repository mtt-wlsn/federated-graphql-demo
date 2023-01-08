import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopperGqlApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
