import Layout from "@/containers/Layout";
import { getSession, useSession } from "next-auth/react";

const ProtectedSSR = () => {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <h1>{session.user.name},wellcome to protected SSR Page</h1>
    </Layout>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/protected-ssr",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
