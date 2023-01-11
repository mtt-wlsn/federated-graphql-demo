import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Shopper {
  @Field(() => ID)
  @Directive('@external')
  id: string;
}
