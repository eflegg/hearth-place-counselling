import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="main--about">
      <Head>
        <title>Horlick Editorial - Blog</title>
      </Head>
      <h1>Blog</h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </div>
  );
}
