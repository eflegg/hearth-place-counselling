import Head from "next/head";
import Link from "next/link";
import Footer from "./Global/Footer";
import Navigation from "./Global/Navigation";
import Hero from "./Global/Hero";
import { createClient } from "../prismic";
import styled from "styled-components";
import theme from "../components/Theme";
import Button from "../components/Global/Button";

const MenuLogo = styled.div`
  position: absolute;
  top: 22px;
  left: 22px;
  z-index: 2;
  width: 80px;
`;
const LayoutContainer = styled.div`
  overflow: hidden;
  .pageTitle--container {
    margin-top: 80px;
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

const Layout = ({ pageTitle, children, footer, button }) => {
  console.log(footer);
  return (
    <LayoutContainer>
      <Navigation />
      <MenuLogo>
        <Link href="/">
          <a>
            <img src="/Hearth-Place-logo-final-no-words.png" alt="" />
          </a>
        </Link>
      </MenuLogo>
      {pageTitle && (
        <div className="pageTitle--container">
          {pageTitle}{" "}
          {button && (
            <Button
              value="Book Now"
              link="booknow"
              dark
              colour={`${theme.colours.clay}`}
            />
          )}{" "}
        </div>
      )}
      <div className="">
        {children}
        <Footer footerData={footer} />
      </div>
    </LayoutContainer>
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
