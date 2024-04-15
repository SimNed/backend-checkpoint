
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { getDataSource } from "./database/databaseUtils";
import { CountryResolver } from "./resolvers/CountryResolver";

const PORT = 4000;

const main = async () => {
  const schema = await buildSchema({
    resolvers: [CountryResolver],
    validate: true,
  });
  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  await getDataSource();

  console.log(`🚀  Server ready at: ${url}`);
};

main();
