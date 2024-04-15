import { Arg, Mutation, Query, Resolver } from "type-graphql";

import Country from "../entities/Country";
import { CreateCountry } from "../entities/Country.args";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  countries() {
    return Country.getCountries();
  }

  @Query(() => Country)
  countriesByContinent(@Arg("countryCode") countryCode: string) {
    return Country.getCountryByCountryCode(countryCode);
  }

  @Query(() => Country)
  country(@Arg("countryCode") countryCode: string) {
    return Country.getCountryByCountryCode(countryCode);
  }

  @Mutation(() => Country)
  createCountry(countryData: CreateCountry) {
    return Country.createCountry(countryData);
  }
}
