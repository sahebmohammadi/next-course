import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  // console.log({ session, status });
  return (
    <div className="bg-white  w-full shadow-lg">
      <nav className="flex justify-between py-4 mb-6 max-w-screen-xl mx-auto">
        <h1 className="font-bold">
          <a href="#">TodoList App</a>
        </h1>
        <ul
          className={`flex items-center gap-x-6 ${
            status === "loading" && !session ? "opacity-0" : "opacity-100"
          }`}
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/protected-ssr">
              <a>protected-ssr</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          {!session && status !== "loading" && (
            <li>
              <button onClick={() => signIn("github")}>Sign in</button>
            </li>
          )}
          {session && (
            <li>
              <button onClick={() => signOut()}>Sign Out </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
