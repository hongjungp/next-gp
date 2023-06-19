import { authService } from "@/services/auth";
import { loginState } from "@/state/loginState";
import styled from "@emotion/styled";
import { Box, Container, List, ListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

export default function TopNav() {
  const [logged, setLogged] = useRecoilState(loginState);
  const router = useRouter();
  const handleLogout = async () => {
    const result = await authService.logout();
    if (result.code == "00") {
      console.log(result);
      setLogged(false);
      console.log(document.cookie);
      router.replace("/");
    }
  };
  return (
    <StyledNav>
      <Container sx={{ height: "100%" }}>
        <Box display={"flex"} maxHeight={"100%"}>
          <Link href="/" style={{ padding: "10px 0" }}>
            <Image src="/logo.png" alt="logo" width={160} height={30} />
          </Link>
          <Box display={"flex"} justifyContent={"flex-end"} flex={1}>
            <List sx={{ display: "flex", flexDirection: "row" }}>
              {!logged && (
                <ListItem>
                  <Link href="/auth/login">Login</Link>
                </ListItem>
              )}
              {logged && <ListItem onClick={handleLogout}>Logout</ListItem>}
            </List>
          </Box>
        </Box>
      </Container>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 50px;
  position: fixed;
  z-index: 50;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;
