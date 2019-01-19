import Link from "next/link";

export default () => (
  <haeder>
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </haeder>
);
