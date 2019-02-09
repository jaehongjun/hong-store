import Link from "next/link";
import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <div>
    <Head>
      <title>INDEX | hong-store</title>
    </Head>
    <h1>Posts:</h1>
    <ul>
      <li>
        <PostLink title={"Something"} />
      </li>
      <li>
        <PostLink title={"nothing"} />
      </li>
    </ul>
  </div>
);

export default withLayout(Index);
