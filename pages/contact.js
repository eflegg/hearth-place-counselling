import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="main--about">
      <Head>
        <title>Horlick Editorial - Contact</title>
        <meta property="og:title" content="Contact" key="title" />
      </Head>
      <h1>Contact</h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </div>
  );
}
