import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";

import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

import { createClient } from "../prismic";
import { PrismicRichText } from "@prismicio/react";

const HomeContainer = styled.div``;
const Hero = styled.section`
  position: relative;
  .hero-logo--container {
    p {
      color: white;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
  }
  img {
    max-width: 100%;
  }
`;

const HomeContact = styled(animated.div)``;

export default function Home({ doc, footer }) {
  const props = useSpring({
    config: config.slow,
  });
  const home = doc.data;
  console.log("home: ", doc.data);

  return (
    <HomeContainer>
      <Head>
        <title>Hearthplace Counselling</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Horlick Editorial" />
        <meta property="og:image" content="/about-photo.jpg" />
        <meta property="og:url" content="http://hearthplace.ca/"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout hero={home} pageTitle={"Hearthplace Counselling"} footer={footer}>
        <Hero className="hero--container">
          <div className="hero--img">
            <img src={home.heroImage.url} alt={home.heroImage.alt} />
          </div>
          <div className="hero-logo--container">
            <img src={home.heroLogo.url} alt={home.heroLogo.alt} />

            <PrismicRichText field={home.heroText} />
          </div>
        </Hero>
      </Layout>
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const doc = await createClient().getSingle("home-page");
  return {
    props: { doc },
  };
}
