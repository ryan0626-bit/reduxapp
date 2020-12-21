import { response } from "./helpers";
import { UserModel } from "./models";

export const updateUser = async ({ body }) => {
  const { email, firstName, lastName, age } = JSON.parse(body);
  let user = await UserModel.update({ email }, { firstName, lastName, age });
  return response({ success: true, user });
};

export const createUser = async ({ body }) => {
  const { email, firstName, lastName, age } = JSON.parse(body);
  console.log("here is the body", JSON.parse(body));
  let user = await UserModel.create({
    email,
    firstName,
    lastName,
    age: parseInt(age),
  });

  return response({ success: true, user, hello: "ryan" });
};

export const deleteUser = async ({ queryStringParameters }) => {
  const { email } = queryStringParameters;
  await UserModel.delete({ email });
  return response({ success: true });
};

export const getUser = async ({ queryStringParameters }) => {
  const { email } = queryStringParameters;
  const user = await UserModel.get({ email });
  return response({ user });
};
