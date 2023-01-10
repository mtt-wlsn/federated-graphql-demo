import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Shopper } from './shopper.entity';

@ObjectType()
export class Order {
  @Field(() => ID, { description: 'Identifier' })
  id: string;

  @Field(() => String, {
    description: 'Id of the Shopper purchasing the order.',
  })
  shopperId: string;

  @Field(() => Shopper)
  shopper: Shopper;

  @Field(() => String, { description: 'Id of the product being purchased.' })
  productId: string;

  @Field(() => Float, {
    description: 'The amount of products being purchased.',
  })
  quantity: number;

  @Field(() => Float, {
    description: 'The total amount the shopper will be charged for the order.',
  })
  totalPrice: number;
}
