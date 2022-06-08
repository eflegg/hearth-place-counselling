import Head from "next/head";
import Link from "next/link";
import Footer from "./Global/Footer";
import Navigation from "./Global/Navigation";
import Hero from "./Global/Hero";
import { createClient } from "../prismic";

const Layout = ({ pageTitle, children, footer }) => {
  console.log(footer);
  return (
    <>
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
