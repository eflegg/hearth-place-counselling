import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/Forms/ContactForm";
import Layout from "../components/Layout";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { createClient } from "../prismic";

const ContactDescrip = styled.p`
  margin: 75px auto;
  font-size: 20px;
  font-weight: 400;
`;

export default function Contact({ doc, footer }) {
  const contact = doc.data;
  return (
    <Layout pageTitle={"Contact"} footer={footer}>
      <Head>
        <title>Book Now</title>
        <meta property="og:title" content="Book Now" key="title" />
      </Head>

      <ContactForm />
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await createClient().getSingle("booknow");
  return {
    props: { doc },
  };
}
