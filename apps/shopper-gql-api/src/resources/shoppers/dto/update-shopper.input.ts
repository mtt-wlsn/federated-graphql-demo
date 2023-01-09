import { CreateShopperInput } from './create-shopper.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShopperInput extends PartialType(CreateShopperInput) {
  @Field(() => Int)
  id: number;
}
