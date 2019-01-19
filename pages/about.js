import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
  <div>
    <Head>
      <title>ABOUT | hong-store</title>
    </Head>
    <h1>Hello from the about</h1>
  </div>
);

export default withLayout(About);
