import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
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
