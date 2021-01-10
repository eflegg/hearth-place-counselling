import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="main--about">
      <Head>
        <title>Horlick Editorial - About</title>
      </Head>
      <h1>Meet Leah Horlick</h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </div>
  );
}
