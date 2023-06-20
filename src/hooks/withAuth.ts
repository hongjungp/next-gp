import { setSessionIdHeader } from "@/services/instance";
import { menuService } from "@/services/menu";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { QueryClient, dehydrate } from "react-query";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return WrappedComponent;
};

export async function withAuthGetServerSideProps(
  context: GetServerSidePropsContext
) {
  const cookies = parseCookies(context);
  let sessionId = cookies.JSESSIONID;
  if (sessionId === undefined) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  const queryClient = new QueryClient();
  setSessionIdHeader(sessionId);
  await queryClient.prefetchQuery("menus", menuService.getMenus);

  return {
    props: { sessionId, dehydratedState: dehydrate(queryClient) },
  };
}
export default withAuth;
