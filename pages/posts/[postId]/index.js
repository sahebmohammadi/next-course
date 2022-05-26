import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  const { postId } = router.query;

  return (
    <div>
      <h1>post page - {postId}</h1>
      <Link href="/">
        <a>go to home page?</a>
      </Link>
    </div>
  );
};

export default Post;

// ? posts/2/review/4
