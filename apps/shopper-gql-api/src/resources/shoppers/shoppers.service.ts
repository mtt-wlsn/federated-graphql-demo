import { Injectable } from '@nestjs/common';
import { CreateShopperInput } from './dto/create-shopper.input';
import { UpdateShopperInput } from './dto/update-shopper.input';

@Injectable()
export class ShoppersService {
  create(createShopperInput: CreateShopperInput) {
    return 'This action adds a new shopper';
  }

  findAll() {
    return `This action returns all shoppers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopper`;
  }

  update(id: number, updateShopperInput: UpdateShopperInput) {
    return `This action updates a #${id} shopper`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopper`;
  }
}
