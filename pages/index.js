import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  const clickHanlder = () => {
    router.push("/blogs");
  };

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={clickHanlder}>push to blogs</button>
      <Link href="/posts">
        <a>go to posts page?</a>
      </Link>
    </div>
  );
};

export default HomePage;
