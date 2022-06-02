import Layout from "@/containers/Layout";
import { getSession, useSession } from "next-auth/react";

const ProtectedSSR = () => {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <h1>protected Page</h1>
    </Layout>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
}
