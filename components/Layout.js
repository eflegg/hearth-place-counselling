import Head from "next/head";
import Link from "next/link";
import Footer from "./Global/Footer";
import Navigation from "./Global/Navigation";
import Hero from "./Global/Hero";
import { createClient } from "../prismic";
import styled from "styled-components";

const MenuLogo = styled.div`
  position: absolute;
  top: 22px;
  left: 22px;
  z-index: 2;
  width: 80px;
`;

const Layout = ({ pageTitle, children, footer }) => {
  console.log(footer);
  return (
    <>
      <MenuLogo>
        <Link href="/">
          <a>
            <img src="/Hearth-Place-logo-final-no-words.png" alt="" />
          </a>
        </Link>
      </MenuLogo>
      <Hero pageTitle={pageTitle} />
      <div className="">
        {children}
        <Footer footerData={footer} />
      </div>
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
