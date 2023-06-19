import Template from "@/templates/Template";
import { Container, Typography } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from 'nookies';

export default function TodoListPage(sessionId: string) {
  
  return (
    <Template>
      <Container>
        <Typography variant="h2">Todo</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">Home</Typography>
      </Container>
    </Template>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  const {JSESSIONID} = cookies;
  return {
    props:{sessionId: JSESSIONID},
  }
}