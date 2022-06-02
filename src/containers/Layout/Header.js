import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white  w-full shadow-lg">
      <nav className="flex justify-between py-4 mb-6 max-w-screen-xl mx-auto">
        <h1 className="font-bold">
          <a href="#">TodoList App</a>
        </h1>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/todos">
              <a>Todos</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Sign in</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Sign out</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
