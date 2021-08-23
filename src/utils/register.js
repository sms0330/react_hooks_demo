import { mockLogin } from "./login";

export const register = async (user) => {
  console.log("new user is ", user);
  return mockLogin();
};
