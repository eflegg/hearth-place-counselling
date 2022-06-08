import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";

import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { RichText } from "prismic-reactjs";
import { createClient } from "../prismic";

const HomeContainer = styled.div``;

const HomeContact = styled(animated.div)``;

export default function Home({ doc, footer }) {
  const props = useSpring({
    config: config.slow,
  });
  const home = doc.data;

  return (
    <>
      <Head>
        <title>Hearthplace Counselling</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Horlick Editorial" />
        <meta property="og:image" content="/about-photo.jpg" />
        <meta property="og:url" content="http://horlickeditorial.ca/"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout pageTitle={"Hearthplace Counselling"} footer={footer}></Layout>
    </>
  );
}

export async function getStaticProps() {
  const doc = await createClient().getSingle("home-page");
  return {
    props: { doc },
  };
}
