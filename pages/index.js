import Head from "next/head";
import Link from "next/link";
import Layout from "../components /pageWrapper";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Horlick Editorial</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <main>
          <h1 className="title">Horlick Editorial</h1>
        </main>
      </Layout>
    </div>
  );
}
