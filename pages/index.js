import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";

import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

import { createClient } from "../prismic";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Button from "../components/Global/Button";

const HomeContainer = styled.div`
  .para-two--mobile {
    width: 80%;
    margin: 0 auto;
    display: block;
    position: relative;
    z-index: 2;
    ${theme.mediaQuery.md`
      display:none;
      `}
  }
  .home-about {
    margin: 100px auto;
    position: relative;
    .smoke-box {
      position: absolute;
      bottom: -50px;
      height: 195px;
      width: 100%;
      background: ${theme.colours.stone};
      z-index: 1;
    }
    h1 {
      text-align: left;
      width: 80%;
      margin: 0 auto 50px;
    }
    h2 {
      margin: 80px 0 60px;
    }
    .para-two--desktop {
      display: none;
      ${theme.mediaQuery.md`
      display:block;
    
      `}
    }

    .home-about--inner {
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      ${theme.mediaQuery.md`
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    `};
      position: relative;
      z-index: 2;
    }

    .about-text {
      ${theme.mediaQuery.md`
      width: 60%;
    
      `}
    }
    .home-about--img {
      text-align: center;
      position: relative;
      .home-about--btn {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
      }
      ${theme.mediaQuery.md`
      text-align: right;
    `};
    }
  }
`;
const Hero = styled.section`
  z-index: 1;
  position: relative;
  .hero--img {
    min-height: 600px;
    height: 100vh;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
  .hero-logo--container {
    img {
    }

    p {
      color: white;
      text-align: right;

      font-size: 19px;
      position: relative;
      top: -126px;
      ${theme.mediaQuery.sm`
       top: -157px;
    font-size: 25px;
    `};
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    ${theme.mediaQuery.sm`
    width: 35%;
    `}
  }
`;

const HomeServices = styled.section`
  border: 2px solid hotpink;
  text-align: center;
  margin: 180px auto 0;

  position: relative;
  h2 {
    font-size: 56px;
    margin-bottom: 90px;
    width: 100%;
    margin: 0 auto 90px;
  }
  .service-card--container {
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .gold-box {
    background: ${theme.colours.gold};
    height: 195px;
    width: 100%;
    position: absolute;
    display: none;
    ${theme.mediaQuery.md`
    display: block;
    `}
    bottom: 0;
    z-index: -1;
  }
`;

const ServiceCard = styled.div`
  width: 350px;
  ${theme.mediaQuery.md`
    width: 325px;
    `}
  ${theme.mediaQuery.lg`
     width: 350px;
    `}
  img {
    /* width: 300px;
    height: 300px; */
    object-fit: cover;
    border-radius: 12px;
  }
  p{
    ${theme.mediaQuery.md`
     color: ${theme.colours.clay};
    `}
    color: ${theme.colours.gold};
  }
  .service-block--title {
    position: absolute;
    width: 175px;
    ${theme.mediaQuery.md`
     width: 250px;
    `}
     ${theme.mediaQuery.lg`
     width: 300px;
    `}
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
    background: ${theme.colours.clay};
    padding: 4px 50px;
    border-radius: 8px;
    text-align: center;
    p {
      margin: 0;
      font-family: ${theme.type.header};
      font-size: 36px;
      color: ${theme.colours.campfire};
    }
  }
  .
`;

export default function Home({ doc, footer }) {
  const props = useSpring({
    config: config.slow,
  });
  const home = doc.data;
  console.log("home services: ", home.homeServices);

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

            <Button
              value={home.heroButtonText}
              link="bookNow"
              colour={`${theme.colours.gold}`}
            />
          </div>
        </Hero>
        <div className="home-about">
          <PrismicRichText field={home.homeAboutHeader} />
          <div className="home-about--inner">
            <div className="about-text">
              <PrismicRichText field={home.homeAboutParaOne} />
              <div className="para-two--desktop">
                <PrismicRichText field={home.homeAboutSubhead} />
                <PrismicRichText field={home.homeAboutParaTwo} />
              </div>
            </div>
            <div className="home-about--img">
              <img
                src={home.homeAboutImage.url}
                alt={home.homeAboutImage.alt}
              />
              <Button
                value="Learn More"
                colour={`${theme.colours.gold}`}
                link="about"
                className="home-about--btn"
              />
            </div>
          </div>
          <div className="smoke-box"></div>
        </div>
        <div className="para-two--mobile">
          <PrismicRichText field={home.homeAboutSubhead} />
          <PrismicRichText field={home.homeAboutParaTwo} />
        </div>

        <HomeServices className="home-services">
          <PrismicRichText field={home.homeServicesTitle} />
          <div className="service-card--container d-flex">
            {home.homeServices.map((homeService, index) => {
              return (
                <ServiceCard key={index}>
                  <PrismicLink document={homeService.homeServicesLink}>
                    <div className="position-relative">
                      <img
                        src={homeService.image.url}
                        alt={homeService.image.alt}
                      />
                      <div className="service-block--title">
                        <PrismicRichText field={homeService.title} />
                      </div>
                    </div>
                  </PrismicLink>
                  <PrismicRichText field={homeService.excerpt} />
                </ServiceCard>
              );
            })}
          </div>
          <div className="gold-box"></div>
        </HomeServices>
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
