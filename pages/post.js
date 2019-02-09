import Head from "next/head";
import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";
const post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Hong Store</title>
    </Head>
    {JSON.stringify(props)}
    <h1>{props.router.query.title}</h1>
    <p>lalalala</p>
  </div>
);

export default withLayout(withRouter(post));
