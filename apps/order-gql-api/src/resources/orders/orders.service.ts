import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  create(createOrderInput: CreateOrderInput): Order {
    const order: Order = {
      id: crypto.randomUUID(),
      shopperId: createOrderInput.shopperId,
      productId: createOrderInput.productId,
      quantity: createOrderInput.quantity,
      totalPrice: createOrderInput.totalPrice,
    };

    this.orders.push(order);

    return order;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: string): Order {
    return this.orders.find((x) => x.id == id);
  }

  update(id: string, updateOrderInput: UpdateOrderInput): Order {
    const order = this.orders.find((x) => x.id == id);

    if (!order) return;

    order.shopperId = updateOrderInput.shopperId ?? order.shopperId;
    order.productId = updateOrderInput.productId ?? order.productId;
    order.quantity = updateOrderInput.quantity ?? order.quantity;
    order.totalPrice = updateOrderInput.totalPrice ?? order.totalPrice;

    return order;
  }

  remove(id: string) {
    const orderIndex = this.orders.findIndex((x) => x.id == id);

    if (orderIndex < 0) return;

    this.orders.splice(orderIndex, 1);
  }

  orders: Order[] = [
    {
      id: '37c02561-b18a-491e-ad34-d8f153c60496',
      shopperId: 'cce5e76e-7d22-4195-bc09-0570d12f5a9a',
      productId: '03ead9df-e1b4-47a8-b6b7-9aae72178ea2',
      quantity: 3,
      totalPrice: 12.47,
    },
    {
      id: 'e7447e61-1c37-4015-afbb-8677808c1ca0',
      shopperId: '2719d7e8-5252-4756-a085-b3f9f5ef848b',
      productId: '700b4761-c6df-4778-b084-0bceed3aa478',
      quantity: 23,
      totalPrice: 2.17,
    },
    {
      id: '202c83af-d603-4064-9327-8617485269da',
      shopperId: 'a5211f13-3672-44d3-9683-26d741e0eab0',
      productId: '035b1f05-509a-4e37-a4f0-2fafe3e70d6c',
      quantity: 1,
      totalPrice: 22.25,
    },
  ];
}
