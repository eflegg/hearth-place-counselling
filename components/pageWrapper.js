import Head from "next/head";
import Link from "next/link";
import Footer from "./Global/Footer";
import Navigation from "./Global/Navigation";
import Hero from "./Global/Hero";
import { Client } from "../prismic-configuration";

const Layout = ({ pageTitle, children, footer }) => {
  console.log(footer);
  return (
    <>
      <Hero pageTitle={pageTitle} />
      <div className="layout-container">
        {children}
        <Footer footerData={footer} />
      </div>
    </>
  );
};

export default Layout;
