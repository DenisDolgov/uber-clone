import { buildSchema } from "type-graphql";
import { CreateUserResolver } from "../modules/user/CreateUser";

export const createSchema = () => buildSchema({
  resolvers: [
    CreateUserResolver
  ]
});
