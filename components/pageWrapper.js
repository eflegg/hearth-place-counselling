import Head from "next/head";
import Link from "next/link";
import Footer from "./Global/Footer";
import Navigation from "./Global/Navigation";
import Hero from "./Global/Hero";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Hero pageTitle={pageTitle} />
      <div className="layout-container">
        {children}
        <Footer />
      </div>
    </>
  );
}
