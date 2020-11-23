import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class CreateUserResolver {
  @Mutation(() => User, { nullable: true })
  createUser(@Arg("data") data: RegisterInput) {
    return User.create(data).save();
  }

  @Query(() => String)
  async hello() {
    return "Hello World!"
  }
}
