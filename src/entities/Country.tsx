import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  name!: string;

  @Column({ unique: true })
  @Field()
  logo!: string;

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
}

export default Country;
