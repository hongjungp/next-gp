import instance from "@/services/instance";
import { loginState } from "@/state/loginState";
import Template from "@/templates/Template";
import { Button, Container, Typography } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { parseCookies, setCookie } from "nookies";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
interface Props{
  sessionId: string;
}
export default function Home({sessionId}: Props) {
  // const session = useSession();
  const setLogged = useSetRecoilState(loginState);
  useEffect(() => {
    if (sessionId) {
      console.log(sessionId);
      console.log(123);
      setLogged(true);
    }
  }, [sessionId, setLogged]);
  // console.log(session);
  console.log(sessionId);
  const getUsers = async () => {
    const response = await instance.post(
      "/user/get-users",
      {},
    );
    console.log(response);
  };
  const getMenus = async () => {
    const response = await instance.post(
      "http://localhost:8080/api/v1/menu/get-menus",
      {withCredentials: true}
    );
    console.log(response);
  };
  return (
    <Template>
      <Container>
        <Button onClick={getUsers}>
          <Typography variant="h2">getUsers</Typography>
        </Button>
        <Button onClick={getMenus}>
          <Typography variant="h2">getMenus</Typography>
        </Button>
        <Typography variant="h2">Home</Typography>
        
        
      </Container>
    </Template>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  let sessionId = cookies.JSESSIONID;
  if (sessionId === undefined) {
    return {
      props: { sessionId: null },
    };
  }
  return {
    props: { sessionId: sessionId },
  };
}
