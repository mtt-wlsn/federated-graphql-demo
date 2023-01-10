import { Injectable } from '@nestjs/common';
import { CreateShopperInput } from './dto/create-shopper.input';
import { UpdateShopperInput } from './dto/update-shopper.input';
import { Shopper } from './entities/shopper.entity';
import * as crypto from 'crypto';

@Injectable()
export class ShoppersService {
  create(createShopperInput: CreateShopperInput): Shopper {
    const shopper: Shopper = {
      id: crypto.randomUUID(),
      firstName: createShopperInput.firstName,
      lastName: createShopperInput.lastName,
      emailAddress: createShopperInput.emailAddress,
    };

    this.shoppers.push(shopper);

    return shopper;
  }

  findAll(): Shopper[] {
    return this.shoppers;
  }

  findOne(id: string): Shopper {
    return this.shoppers.find((x) => x.id == id);
  }

  update(id: string, updateShopperInput: UpdateShopperInput) {
    const shopper = this.shoppers.find((x) => x.id == id);

    if (!shopper) return;

    shopper.firstName = updateShopperInput.firstName ?? shopper.firstName;
    shopper.lastName = updateShopperInput.lastName ?? shopper.lastName;
    shopper.emailAddress =
      updateShopperInput.emailAddress ?? shopper.emailAddress;

    return shopper;
  }

  remove(id: string) {
    const shopperIndex = this.shoppers.findIndex((x) => x.id == id);

    if (shopperIndex < 0) return;

    this.shoppers.splice(shopperIndex, 1);
  }

  shoppers: Shopper[] = [
    {
      id: 'cce5e76e-7d22-4195-bc09-0570d12f5a9a',
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'john.doe@fakemail.com',
    },
    {
      id: '2719d7e8-5252-4756-a085-b3f9f5ef848b',
      firstName: 'Jane',
      lastName: 'Doe',
      emailAddress: 'jane.doe@fakemail.com',
    },
    {
      id: 'a5211f13-3672-44d3-9683-26d741e0eab0',
      firstName: 'Mark',
      lastName: 'Doe',
      emailAddress: 'mark.doe@fakemail.com',
    },
  ];
}
