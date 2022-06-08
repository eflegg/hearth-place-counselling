import "../scss/typography.scss";
import React from "react";
import NextApp from "next/app";
import { createClient } from "../prismic";

export default class App extends NextApp {
  static async getInitialProps(appCtx) {
    const footer = (await createClient().getSingle("footer")) || null;

    console.log("FOOTER", footer);

    return {
      props: {
        footer: footer,
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props;
    // console.log(props.footer);
    return (
      <>
        <Component {...pageProps} footer={props.footer} />
      </>
    );
  }
}
