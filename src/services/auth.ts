import LoginInfo from "@/types/LoginForm";
import { instance } from "./instance";

async function login(loginInfo: LoginInfo): Promise<Result> {
  try {
    const response = await instance.post("/auth/login", loginInfo, {withCredentials: true});
    console.log(response);
    const result: Result = response.data.result;
    return result;
  } catch (error) {
    throw error;
  }
}
async function logout() {
  try {
    const response = await instance.post("/auth/logout", {}, {withCredentials: true});
    console.log(response);
    const result: Result = response.data.result;
    return result;
  } catch (error) {
    throw error;
  }
}

export const authService = { login, logout };
