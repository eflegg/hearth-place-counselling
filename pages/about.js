import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";
import { Waypoint } from "react-waypoint";
import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import { createClient } from "../prismic";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

const AboutContainer = styled.section`
  margin: 0 auto;
  overflow: hidden;
  p {
    width: 80%;
    ${theme.mediaQuery.md`
    width: 100%;
      `}
    margin: 25px auto;
    position: relative;
    z-index: 2;
  }
  .paragraph-1--group {
    position: relative;
    ${theme.mediaQuery.md`
    display: flex;
    justify-content: space-around;
      width: 90%;
      margin: 0 auto 150px;
      `}
    .paragraph-1 {
      ${theme.mediaQuery.md`
      width: 50%;
      `}
    }
    .paragraph-2--desktop {
      display: none;
      ${theme.mediaQuery.md`
      display: block;
      `}
    }
    .paragraph-2--mobile {
      ${theme.mediaQuery.md`
      display: none;
      `}
    }
  }
  .paragraph--group {
    .paragraph {
      ${theme.mediaQuery.md`
      width: 50%;
      `}
      h2 {
        width: 90%;
        margin: 30px auto;
        ${theme.mediaQuery.md`
      width: 100%;
      `}
      }
    }
    ${theme.mediaQuery.md`
      display:flex;
      justify-content: space-around;
      width: 90%;
      margin: 50px auto;
      `}
  }

  .about-image {
    text-align: center;
  }

  .stone-box {
    bottom: 190px;
    height: 195px;
    width: 100%;
    background: ${theme.colours.stone};
    z-index: 1;
    ${theme.mediaQuery.md`
      bottom: 0;
      width: 120%;
      `}
  }
  img {
    position: relative;
    z-index: 2;
    width: 80%;
    margin-bottom: 50px;
  }
  .section-2 {
    position: relative;
    .img--full {
      width: 100%;
    }
    .gold-box {
      background: ${theme.colours.gold};
      display: none;
      ${theme.mediaQuery.md`
     display: block;
     width: 120%;
     height: 195px;
     bottom: 0;
      `}
    }
  }
`;

export default function About({ doc, footer }) {
  const about = doc.data;
  return (
    <Layout
      pageTitle={<PrismicRichText field={about.aboutTitle} />}
      footer={footer}
    >
      <Head>
        <title> About</title>
      </Head>
      <AboutContainer>
        <div className="paragraph-1--group">
          <div className="stone-box position-absolute"></div>

          <div className="paragraph-1">
            <PrismicRichText field={about.paraOne} />
            <div className="paragraph-2--desktop">
              <PrismicRichText field={about.paraTwo} />
            </div>
          </div>
          <div className="about-image">
            <img src={about.imageOne.url} alt={about.imageOne.alt} />
          </div>
          <div className="paragraph-2--mobile">
            <PrismicRichText field={about.paraTwo} />
          </div>
        </div>
        <div className="paragraph--group">
          <div className="about-image">
            <img src={about.imageTwo.url} alt={about.imageTwo.alt} />
          </div>
          <div className="paragraph">
            <PrismicRichText field={about.subHead} />
            <PrismicRichText field={about.paraThree} />
          </div>
        </div>
        <section className="section-2">
          <img
            className="img--full"
            src={about.fullWidthImage.url}
            alt={about.fullWidthImage.alt}
          />
          <div className="paragraph--group">
            <div className="paragraph">
              <PrismicRichText field={about.paraFour} />
              <PrismicRichText field={about.paraFive} />
            </div>
            <div className="about-image">
              <img src={about.imageThree.url} alt={about.imageThree.alt} />
            </div>
            <div className="gold-box position-absolute"></div>
          </div>
        </section>
      </AboutContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await createClient().getSingle("about");
  return {
    props: { doc },
  };
}
