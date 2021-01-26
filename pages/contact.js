import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/Forms/ContactForm";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import theme from "../components/Theme";

const ContactDescrip = styled.p`
  margin: 75px auto;
  font-size: 20px;
  font-weight: 400;
`;

export default function Contact() {
  return (
    <Layout pageTitle={"Contact"}>
      <Head>
        <title>Horlick Editorial - Contact</title>
        <meta property="og:title" content="Contact" key="title" />
      </Head>
      <ContactDescrip>
        Looking for my support on a project? Don’t hesitate to reach out – you
        can contact me through the form below. For indexing services, please
        provide all the relavant information to help me get back to you as
        quickly as possible:
      </ContactDescrip>
      <ContactForm />
    </Layout>
  );
}
