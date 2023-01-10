import { CreateShopperInput } from './create-shopper.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateShopperInput extends PartialType(CreateShopperInput) {
  @Field(() => ID, { description: 'Identifier' })
  id: string;
}
