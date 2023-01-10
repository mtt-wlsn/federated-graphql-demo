import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveReference,
} from '@nestjs/graphql';
import { ShoppersService } from './shoppers.service';
import { Shopper } from './entities/shopper.entity';
import { CreateShopperInput } from './dto/create-shopper.input';
import { UpdateShopperInput } from './dto/update-shopper.input';

@Resolver(() => Shopper)
export class ShoppersResolver {
  constructor(private readonly shoppersService: ShoppersService) {}

  @Mutation(() => Shopper)
  createShopper(
    @Args('createShopperInput') createShopperInput: CreateShopperInput,
  ): Shopper {
    return this.shoppersService.create(createShopperInput);
  }

  @Query(() => [Shopper], { name: 'shoppers' })
  findAll(): Shopper[] {
    return this.shoppersService.findAll();
  }

  @Query(() => Shopper, { name: 'shopper' })
  findOne(@Args('id', { type: () => String }) id: string): Shopper {
    return this.shoppersService.findOne(id);
  }

  @Mutation(() => Shopper)
  updateShopper(
    @Args('updateShopperInput') updateShopperInput: UpdateShopperInput,
  ): Shopper {
    return this.shoppersService.update(
      updateShopperInput.id,
      updateShopperInput,
    );
  }

  @Mutation(() => Shopper)
  removeShopper(@Args('id', { type: () => String }) id: string) {
    return this.shoppersService.remove(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.shoppersService.findOne(reference.id);
  }
}
