import "../scss/typography.scss";

import React from "react";
import NextApp from "next/app";
import { Client } from "../prismic-configuration";

export default class App extends NextApp {
  static async getInitialProps() {
    const client = Client();
    const footer = (await client.getSingle("footer")) || {};
    return {
      props: {
        footer: footer,
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props;
    console.log(props.footer);
    return <Component {...pageProps} footer={props.footer} />;
  }
}
