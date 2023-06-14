import { Nav } from "@/components/Nav";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export default function Template({ children }: Props) {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Nav />
      {children}
    </Box>
  );
}
