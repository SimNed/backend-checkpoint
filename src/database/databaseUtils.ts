import { DataSource } from "typeorm";
import Country from "../entities/Country";

let dataSource: DataSource;

export const getDataSource = async () => {
  if (!dataSource) {
    dataSource = new DataSource({
      type: "sqlite",
      database: "db.sqlite",
      entities: [Country],
    });
    await dataSource.initialize();
  }
  return dataSource;
};
