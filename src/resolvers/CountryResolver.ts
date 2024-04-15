import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";

import Country from "../entities/Country";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  countries() {
    return Country.getCountries();
  }

  @Query(() => Country)
  country(@Arg("countryCode") countryCode: string) {
    return Country.getCountryByCode(countryCode);
  }

  // @Mutation(() => Country)
  // createCountry(countryCode: String, label: String, logo: String) {
  //   return Country.createCountry(coutryCode, label, logo);
  // }
}
