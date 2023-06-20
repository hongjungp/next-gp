import { menuOpenState } from "@/state/menuOpenState";
import Menu from "@/types/Menu";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, IconButton, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import MenuList from "./MenuList";

interface MenuItemProps {
  menus: Menu[];
  menu: Menu;
}

export default function MenuItem({ menu, menus }: MenuItemProps) {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  const router = useRouter();
  
  const handleClick = (item: string) => {
    setMenuOpen((prevOpenItems) => {
      if (prevOpenItems.includes(item)) {
        return prevOpenItems.filter((openItem) => openItem !== item);
      } else {
        return [...prevOpenItems, item];
      }
    });
  };
  return (
    <>
      <ListItemButton>
        <ListItemText
          primary={menu.menuNm}
          onClick={() => router.push(`/${menu.menuUrl}`)}
        />
        {menu.leafYn === "N" && (
          <>
            {menuOpen.includes(menu.menuId) ? (
              <IconButton onClick={() => handleClick(menu.menuId)}>
                <ExpandMore />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleClick(menu.menuId)}>
                <ExpandLess />
              </IconButton>
            )}
          </>
        )}
      </ListItemButton>
      <Box sx={{ pl: 4 }}>
        <Collapse
          in={menuOpen.includes(menu.menuId)}
          timeout="auto"
          unmountOnExit
        >
          <MenuList menus={menus} lvl={menu.lvl} prtMenuId={menu.menuId} />
        </Collapse>
      </Box>
    </>
  );
}
