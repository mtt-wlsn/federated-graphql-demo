import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Shopper {
  @Field(() => ID, { description: 'Identifier' })
  id: string;

  @Field(() => String, { nullable: true, description: 'First Name' })
  firstName?: string;

  @Field(() => String, { nullable: true, description: 'Last Name' })
  lastName?: string;

  @Field(() => String, { nullable: true, description: 'Email Address' })
  emailAddress?: string;
}
