import { createClient, linkResolver } from "../../prismic";
import { PrismicRichText } from "@prismicio/react";

import Layout from "../../components/Layout";

export default function ServiceSingle({ service }) {
  console.log("service: ", service.data.serviceTitle);
  return (
    <Layout>
      <h1>
        i am a single <PrismicRichText field={service.data.serviceTitle} /> page
      </h1>
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
  const service = await createClient().getByUID("service", params.uid);

  return {
    props: { service },
  };
}
