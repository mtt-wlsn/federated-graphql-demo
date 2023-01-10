import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateShopperInput {
  @Field(() => String, { description: 'First Name' })
  firstName: string;

  @Field(() => String, { description: 'Last Name' })
  lastName: string;

  @Field(() => String, { description: 'Email Address' })
  emailAddress: string;
}
