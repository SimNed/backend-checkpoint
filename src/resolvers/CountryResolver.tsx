import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";

import Country from "../entities/Country";

@Resolver()
export class CountryResolver {
  @Query(() => [Ride])
  rides() {
    return Ride.getRides();
  }

  @Query(() => Ride)
  ride(@Arg("id", () => ID) id: string) {
    return Ride.getRideById(id);
  }

  @Mutation(() => Country)
  createCountry(@Args() args: CreateOrUpdateRide) {
    return Ride.createRide({ ...args });
  }

  @Mutation(() => Ride)
  updateRide(
    @Arg("id", () => ID) id: string,
    @Args() args: CreateOrUpdateRide
  ) {
    return Ride.updateRide(id, args);
  }

  @Mutation(() => Ride)
  async deleteRide(@Arg("id", () => ID) id: string) {
    return Ride.deleteRide(id);
  }
}
