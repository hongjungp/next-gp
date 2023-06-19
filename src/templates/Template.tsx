import SideNav from "@/components/Nav/SideNav";
import TopNav from "@/components/Nav/TopNav";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export default function Template({ children }: Props) {
  return (
    <div>
      <TopNav />
      <SideNav />
      <Box
        display={"flex"}
        flexDirection={"row"}
        paddingTop={"50px"}
        component={"main"}
      >
        {children}
      </Box>
    </div>
  );
}
