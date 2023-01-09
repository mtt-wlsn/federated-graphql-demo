import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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
  ) {
    return this.shoppersService.create(createShopperInput);
  }

  @Query(() => [Shopper], { name: 'shoppers' })
  findAll() {
    return this.shoppersService.findAll();
  }

  @Query(() => Shopper, { name: 'shopper' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shoppersService.findOne(id);
  }

  @Mutation(() => Shopper)
  updateShopper(
    @Args('updateShopperInput') updateShopperInput: UpdateShopperInput,
  ) {
    return this.shoppersService.update(
      updateShopperInput.id,
      updateShopperInput,
    );
  }

  @Mutation(() => Shopper)
  removeShopper(@Args('id', { type: () => Int }) id: number) {
    return this.shoppersService.remove(id);
  }
}
