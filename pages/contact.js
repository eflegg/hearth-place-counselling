import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/Forms/ContactForm";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";

const ContactDescrip = styled.p`
  margin: 75px auto;
  font-size: 20px;
  font-weight: 400;
`;

export default function Contact({ doc }) {
  const contact = doc.data;
  return (
    <Layout pageTitle={"Contact"}>
      <Head>
        <title>Horlick Editorial - Contact</title>
        <meta property="og:title" content="Contact" key="title" />
      </Head>
      <ContactDescrip>
        {RichText.asText(contact.contact_description)}
      </ContactDescrip>
      <ContactForm />
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await Client().getSingle("contact");
  return {
    props: { doc },
  };
}
