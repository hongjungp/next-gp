import { authService } from "@/services/auth";
import { loginState } from "@/state/loginState";
import Template from "@/templates/Template";
import LoginInfo from "@/types/LoginForm";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useRecoilState } from "recoil";
// import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginPage() {
  const [logged, setLogged] = useRecoilState(loginState);
  const router = useRouter();
  const [usrId, setUsrId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await authService.login({
      usrId: usrId,
      pwd: password,
    } as LoginInfo);
    if (result.code === "00") {
      setLogged(true);
      router.replace("/");
    } else {
      alert("아이디 및 비밀번호가 일치하지 않습니다!");
    }
  };
  return (
    <Template>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usrId"
              label="User ID"
              name="usrId"
              autoComplete="usrId"
              autoFocus
              value={usrId}
              onChange={(e) => setUsrId(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Template>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  let {JSESSIONID} = cookies;
  if(JSESSIONID){
    console.log('logged!');
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props:{},
  }
}
