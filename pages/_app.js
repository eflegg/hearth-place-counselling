import "../scss/typography.scss";
import React from "react";
import NextApp from "next/app";
import { linkResolver, createClient } from "../prismic";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import theme from "../components/Theme";
import Button from "../components/Global/Button";

export default class App extends NextApp {
  static async getInitialProps(appCtx) {
    const footer = (await createClient().getSingle("footer")) || null;
    const menu = (await createClient().getSingle("menu")) || null;

    return {
      props: {
        footer: footer,
        menu: menu,
      },
    };
  }
  constructor(props) {
    super(props);
    this.state = { theme: "light" };
  }

  render() {
    const { Component, pageProps, props } = this.props;

    const toggleTheme = () => {
      if (this.state.theme === "light") {
        this.setState({ theme: "dark" });
      } else {
        this.setState({ theme: "light" });
      }
    };

    return (
      <>
        <Button
          colour={`${theme.colours.gold}`}
          value={
            this.state.theme == "dark" ? "Change to light" : "Change to dark"
          }
          className="theme--btn"
          onClick={toggleTheme}
        ></Button>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          {/* <PrismicPreview repositoryName={hearthplace}> */}
          <div
            className={
              this.state.theme == "dark" ? "dark-theme" : "default-theme"
            }
          >
            <Component {...pageProps} footer={props.footer} menu={props.menu} />
          </div>
          {/* </PrismicPreview> */}
        </PrismicProvider>
      </>
    );
  }
}
