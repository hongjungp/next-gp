import Menu from "@/types/Menu";
import { List } from "@mui/material";
import MenuItem from "./MenuItem";

interface MenuListProps {
  menus: Menu[];
  lvl: number;
  prtMenuId: string;
}
export default function MenuList({ menus, lvl, prtMenuId }: MenuListProps) {
  return (
    <List component="div" disablePadding>
      {menus
        .filter((menu) => menu.prtMenuId === prtMenuId)
        .map((menu: Menu) => (
          <MenuItem
            key={menu.menuId}
            menu={menu}
            menus={menus.filter((menu) => menu.lvl > lvl)}
          />
        ))}
    </List>
  );
}
