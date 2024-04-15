import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Country")
class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    countryCode!: string;

    @Column({ unique: true })
    name!: string;
    
    @Column({ unique: true })
    logo!: string;
}

export default Country