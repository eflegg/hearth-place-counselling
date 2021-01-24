import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/Forms/ContactForm";
import Layout from "../components/pageWrapper";

export default function Contact() {
  return (
    <Layout pageTitle={"Contact"}>
      <Head>
        <title>Horlick Editorial - Contact</title>
        <meta property="og:title" content="Contact" key="title" />
      </Head>
      <ContactForm />
    </Layout>
  );
}
