import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Link href="/users">
        <a>Go to UserList Page?</a>
      </Link>
      <Link href="/episodes">
        <a>Go to episodes Page?</a>
      </Link>
    </div>
  );
}
