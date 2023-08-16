/*
provides instructions for for turning the GraphQL project operations into data
*/
import { users } from "./db";

const resolvers = {
  Query: {
    hello: () => "Hello World!"
  }
};

export default resolvers;
