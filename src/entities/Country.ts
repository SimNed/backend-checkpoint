import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateCountry } from "./Country.args";

@Entity("Country")
@ObjectType()
class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column({ unique: true, length: 2 })
  @Field()
  countryCode!: string;

  @Column({ unique: true })
  @Field()
  label!: string;

  @Column({ unique: true })
  @Field()
  logo!: string;

  constructor(country?: CreateCountry) {
    super();

    if (country) {
      this.countryCode = country.countryCode;
      this.label = country.label;
      this.logo = country.logo;
    }
  }

  static async getCountries(): Promise<Country[]> {
    const countries = await Country.find();
    return countries;
  }

  static async getCountryByCode(countryCode: string): Promise<Country> {
    const country = await Country.findOne({
      where: { countryCode },
    });
    if (!country) {
      throw new Error(
        `Country with country code ${countryCode} does not exist.`
      );
    }
    return country;
  }

  static async createCountry(countryData: CreateCountry): Promise<Country> {
    const newCountry = new Country(countryData);
    const savedCountry = await newCountry.save();
    return savedCountry;
  }
}

export default Country;
