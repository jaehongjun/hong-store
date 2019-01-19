import Link from "next/link";
import Head from "next/head";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <Head>
      <title>INDEX | hong-store</title>
    </Head>
    <h1> Hello from the index </h1>
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </div>
);

export default withLayout(Index);
