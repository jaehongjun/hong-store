import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider, Subscription } from "react-apollo";
import withApollo from "../lib/withApollo";
const { Footer } = Layout;
import NProgress from "next-nprogress/component";
import withNProgress from "next-nprogress";
import convertDataURIToBinary from "../lib/base64";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  componentDidMount() {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(swReg => {
          console.log("SW Registered: ", swReg);
          swReg.pushManager.getSubscription().then(subscription => {
            if (subscription === null) {
              Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                  swReg.pushManager
                    .subscribe({
                      userVisibleOnly: true,
                      applicationServerKey: convertDataURIToBinary(
                        "BA5JiR1ihZiIPmlLupKS_2T2JI9XQpMFnFe1pJs0ulhAVDPlollHlHp3dAtHs8IGNSTxMP4vZzsOqpPv2FsEqqE"
                      )
                    })
                    .then(PushSubscriptionObject =>
                      console.log(PushSubscriptionObject)
                    );
                }
              });
            } else {
              console.log(JSON.stringify(subscription));
            }
          });
        })
        .catch(error => console.log("Can't register SW: ", error));
    }
    if ("PushManager" in window) {
    }
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
