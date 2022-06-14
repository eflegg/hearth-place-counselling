import { createClient, linkResolver } from "../../prismic";
import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";
import theme from "../../components/Theme";
import Layout from "../../components/Layout";

const ServiceContainer = styled.div``;

export default function ServiceSingle({ doc, footer }) {
  const service = doc.data;
  console.log("service: ", service.serviceTitle);
  return (
    <Layout
      pageTitle={<PrismicRichText field={service.serviceTitle} />}
      footer={footer}
    >
      <ServiceContainer></ServiceContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const documents = await createClient().getAllByType("service");

  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const doc = await createClient().getByUID("service", params.uid);

  return {
    props: { doc },
  };
}
