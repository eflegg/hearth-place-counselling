import Head from "next/head";
import Link from "next/link";
import Layout from "../components/pageWrapper";

export default function About() {
  return (
    <Layout pageTitle={"About"}>
      <Head>
        <title>Horlick Editorial - Services</title>
      </Head>
    </Layout>
  );
}
