import "../scss/typography.scss";
import React from "react";
import NextApp from "next/app";
import { linkResolver, createClient } from "../prismic";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";

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
          <Component {...pageProps} footer={props.footer} />
          {/* </PrismicPreview> */}
        </PrismicProvider>
      </>
    );
  }
}
