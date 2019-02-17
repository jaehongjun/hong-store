import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
const { Footer } = Layout;
import NProgress from "next-nprogress/component";
import withNProgress from "next-nprogress";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <NProgress
            color="#29d"
            options={{ trickleSpeed: 50 }}
            showAfterMs={300}
            spinner
          />
          <Layout>
            <Component {...pageProps} />
            <Footer>This is important</Footer>
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}
const msDelay = 1000; // default is 300
export default withNProgress(msDelay)(withApollo(MyApp));
