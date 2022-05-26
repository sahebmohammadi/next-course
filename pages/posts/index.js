import Link from "next/link";

const PostList = () => {
  return (
    <div>
      <h1>this is s List page</h1>
      <h2>
        <Link href="/posts/1">
          <a>post -1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/posts/2">
          <a>post -2</a>
        </Link>
      </h2>
      <h2>
        <Link href="/posts/3" replace>
          <a>post -3</a>
        </Link>
      </h2>
    </div>
  );
};

export default PostList;
