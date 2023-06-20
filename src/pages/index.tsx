import withAuth, { withAuthGetServerSideProps } from "@/hooks/withAuth";
import { menuService } from "@/services/menu";
import { loginState } from "@/state/loginState";
import Template from "@/templates/Template";
import { Button, Container, Menu, Typography } from "@mui/material";
import { useEffect } from "react";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
interface Props {
  sessionId: string;
}
function Home({ sessionId }: Props) {
  const setLogged = useSetRecoilState(loginState);
  // const { data: menus, status } = useQuery("menus", menuService.getMenus);
  // useEffect(() => {
  //   if (sessionId) {
  //     console.log(sessionId);
  //     setLogged(true);
  //   }
  // }, [sessionId, setLogged]);
  // const getUsers = async () => {
  //   const response = await instance.post("/user/get-users", {});
  //   console.log(response);
  // };

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "error") {
  //   return <div>Error fetching menus</div>;
  // }
  return (
    <Template>
      <Container>
        {/* <Button onClick={getUsers}>
          <Typography variant="h2">getUsers</Typography>
        </Button> */}
        <Typography variant="h2">Home</Typography>
        <h1>
        {/* {menus && menus.data && (
          menus.data.map(menu=>
            <div key={menu.menuId}>{menu.menuNm}</div>
          )
         )} */}
        </h1>
      </Container>
    </Template>
  );
}
export default withAuth(Home);
export const getServerSideProps = withAuthGetServerSideProps;
