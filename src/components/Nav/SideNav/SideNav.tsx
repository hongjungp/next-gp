import { List } from "@mui/material";
import { useQuery } from "react-query";
import { menuService } from "@/services/menu";
import React from "react";
import MenuList from "./MenuList";

export default function SideNav() {
  const { data: menus, status } = useQuery("menus", menuService.getMenus);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error fetching menus</div>;
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "fixed",
        top: 50,
        left: 0,
      }}
      component="nav"
    >
      {menus && menus.data && (
        <MenuList menus={menus.data} lvl={1} prtMenuId="0" />
      )}
    </List>
  );
}
