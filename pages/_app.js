import "../scss/typography.scss";
import React from "react";
import NextApp from "next/app";
import { linkResolver, createClient } from "../prismic";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";

export default class App extends NextApp {
  static async getInitialProps(appCtx) {
    const footer = (await createClient().getSingle("footer")) || null;
    const menu = (await createClient().getSingle("menu")) || null;

    console.log("MENU", menu);

    return {
      props: {
        footer: footer,
        menu: menu,
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props;
    console.log(props.menu);
    return (
      <>
        {/* <Component {...pageProps} footer={props.footer} /> */}

        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          {/* <PrismicPreview repositoryName={repositoryName}> */}
          <Component {...pageProps} footer={props.footer} menu={props.menu} />
          {/* </PrismicPreview> */}
        </PrismicProvider>
      </>
    );
  }
}
