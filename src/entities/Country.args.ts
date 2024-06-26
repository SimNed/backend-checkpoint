import { Field, ArgsType } from "type-graphql";
@ArgsType()
export class CreateCountry {
  @Field()
  countryCode!: string;

  @Field()
  continentCode!: string;

  @Field()
  label!: string;

  @Field()
  logo!: string;
}
