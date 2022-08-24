import Head from "next/head";
import Link from "next/link";
import Footer from "./Global/Footer";
import Navigation from "./Global/Navigation";
import { createClient } from "../prismic";
import styled from "styled-components";
import theme from "../components/Theme";
import Button from "../components/Global/Button";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const MenuLogo = styled.div`
  position: absolute;
  top: 22px;
  left: 22px;
  z-index: 2;
  width: 80px;
  height: 80px;
`;
const LayoutContainer = styled.div`
  overflow: hidden;
  .pageTitle--container {
    margin-top: 140px;
    margin-bottom: 80px;
    width: 100%;
    text-align: center;
    ${theme.mediaQuery.sm`
  margin-top: 150px;
  margin-bottom: 80px;
  `}
    button {
      margin-top: 50px;
    }
  }
`;

const Layout = ({
  pageTitle,
  children,
  footer,
  button,
  menu,
  metadescription,
}) => {
  // const [darkTheme, setDarkTheme] = useState(false);
  const [visibleOdd, setVisibleOdd] = useState(false);
  const visibleOne = useSpring({
    config: config.slow,
    opacity: visibleOdd ? 1 : 0,
    transform: visibleOdd ? "translateY(0px)" : "translateY(-20px)",
    delay: 200,
  });

  return (
    <>
      <Head>
        <meta name="description" content={metadescription} />
        <title>Hearth Place Counselling</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/about-photo.jpg" />
        <meta property="og:url" content="http://hearthplace.ca/"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LayoutContainer
      // className={`${darkTheme ? "dark-theme" : "default-theme"}`}
      >
        <Navigation menuData={menu} />

        <MenuLogo className="menu-logo">
          <Link href="/">
            <a>
              <img
                className="logo__light-theme"
                src={menu.data.logoLight.url}
                alt={menu.data.logoLight.alt}
              />

              <img
                className="logo__dark-theme"
                src={menu.data.logoDark.url}
                alt={menu.data.logoDark.alt}
              />
            </a>
          </Link>
        </MenuLogo>
        {pageTitle && (
          <Waypoint
            onEnter={() => setVisibleOdd(true)}
            onLeave={() => setVisibleOdd(false)}
          >
            <animated.div style={visibleOne} className="pageTitle--container">
              {pageTitle}{" "}
              {button && (
                <Button
                  value="Book Now"
                  link="bookNow"
                  dark
                  colour={`${theme.colours.clay}`}
                />
              )}{" "}
            </animated.div>
          </Waypoint>
        )}
        <div className="">
          {children}
          <Footer footerData={footer} menu={menu} />
        </div>
      </LayoutContainer>
    </>
  );
};

export default Layout;

export async function getInitialProps() {
  const client = createClient();
  const footer = (await client.getSingle("footer")) || {};
  return {
    props: {
      footer: footer,
    },
  };
}
