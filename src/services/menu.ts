import LoginInfo from "@/types/LoginForm";
import Menu from "@/types/Menu";
import { AxiosRequestConfig } from "axios";
import { instance } from "./instance";

async function getMenus(): Promise<ResponseEntity<Menu>> {
  try {
    const response = await instance.post(
      "/menu/get-menus",
      {},
      {withCredentials: true}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const menuService = { getMenus };
