import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Shopper {
  @Field(() => ID, { description: 'Identifier' })
  id: string;

  @Field(() => String, { description: 'First Name' })
  firstName: string;

  @Field(() => String, { description: 'Last Name' })
  lastName: string;

  @Field(() => String, { description: 'Email Address' })
  emailAddress: string;
}
