import Head from "next/head";
import Link from "next/link";

export default function Services() {
  return (
    <div className="main--about">
      <Head>
        <title>Horlick Editorial - Services</title>
      </Head>
      <h1>Services</h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </div>
  );
}
