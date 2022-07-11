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
    .stone-box {
      position: absolute;
      bottom: -15px;
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
      padding-left: 10px;
    
      `}
    }
    .home-about--img {
      text-align: center;
      position: relative;
      margin: 0 auto;
      height: 420px;
      width: 420px;
      border-radius: 8px;
      overflow: hidden;

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
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    ${theme.mediaQuery.sm`
    width: 400px;
    `}
    ${theme.mediaQuery.md`
    width: 500px;
    `}
    img {
    }

    p {
      color: white;
      text-align: right;
      font-size: 19px;
      position: relative;
      right: 0px;
      margin-top: 0;
      ${theme.mediaQuery.sm`
      font-size: 27px;
      `};
      ${theme.mediaQuery.md`
       font-size: 34px;
    `}
    }
  }
`;

const HomeCardContainer = styled.section`
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
  .modalities-card--container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  &.book-now {
    margin-bottom: 30px;
  }
  .book-now--inner {
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${theme.mediaQuery.sm`
    flex-direction: row;
    align-items: stretch;
    `}
    .book-now--text {
      background: ${theme.colours.stone};
      border-radius: 12px;
      width: 100%;
      padding: 35px 5px;
      p {
        color: ${theme.colours.clay};
      }
      ${theme.mediaQuery.sm`
      width: 50%;
      padding: 56px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      `}
    }
    .book-now--img {
      display: none;
      ${theme.mediaQuery.sm`
      display: block;
      img {
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
     }
      `}
    }
  }
`;

const ServiceCard = styled.div`
.img--container {
  height: 305px;
}
&:hover {
  img {
  box-shadow: 5px 5px 66px -18px rgba(0,0,0,0.43);
  transition: .5s all ease-in-out;
  height: 305px;
  }
}
  width: 90%;
  ${theme.mediaQuery.xs`
    width: 350px;
    `}
  ${theme.mediaQuery.md`
    width: 325px;
    `}
  ${theme.mediaQuery.lg`
     width: 350px;
    `}
  img {
    transition: .5s all ease-in-out;
    height: 300px;
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
const ModalityCard = styled.div`
  width: 200px;
  margin-bottom: 90px;
  padding-bottom: 10px;
  transition: 0.5s all ease-in-out;
  border-radius: 12px;
  &:hover {
    width: 205px;
    box-shadow: 5px 5px 66px -18px rgba(0, 0, 0, 0.13);
    transition: 0.5s all ease-in-out;
  }
`;

export default function Home({ doc, footer, menu }) {
  const [visibleOdd, setVisibleOdd] = useState(false);
  const [visibleEven, setVisibleEven] = useState(false);

  const visibleOne = useSpring({
    config: config.slow,
    opacity: visibleOdd ? 1 : 0,
    transform: visibleOdd ? "translateY(0px)" : "translateY(-20px)",
    delay: 200,
  });
  const visibleTwo = useSpring({
    config: config.slow,
    opacity: visibleEven ? 1 : 0,
    transform: visibleEven ? "translateY(0px)" : "translateY(-20px)",
    delay: 200,
  });

  const home = doc.data;

  return (
    <HomeContainer>
      <Head>
        <title>Hearth Place Counselling</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hearth Place Counselling" />
        <meta property="og:image" content="/about-photo.jpg" />
        <meta property="og:url" content="http://hearthplace.ca/"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout footer={footer} menu={menu}>
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
          <Waypoint
            onEnter={() => setVisibleOdd(true)}
            onLeave={() => setVisibleOdd(false)}
          >
            <animated.div style={visibleOne}>
              <PrismicRichText field={home.homeAboutHeader} />
            </animated.div>
          </Waypoint>
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
          <div className="stone-box"></div>
        </div>
        <div className="para-two--mobile">
          <PrismicRichText field={home.homeAboutSubhead} />
          <PrismicRichText field={home.homeAboutParaTwo} />
        </div>

        <HomeCardContainer className="home-services">
          <Waypoint
            onEnter={() => setVisibleEven(true)}
            onLeave={() => setVisibleEven(false)}
          >
            <animated.div style={visibleTwo}>
              <PrismicRichText field={home.homeServicesTitle} />
            </animated.div>
          </Waypoint>

          <div className="service-card--container d-flex">
            {home.homeServices.map((homeService, index) => {
              return (
                <ServiceCard key={index}>
                  <PrismicLink document={homeService.homeServicesLink}>
                    <div className="position-relative img--container">
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
        </HomeCardContainer>
        <HomeCardContainer className="home-services">
          <Waypoint
            onEnter={() => setVisibleOdd(true)}
            onLeave={() => setVisibleOdd(false)}
          >
            <animated.div style={visibleOne}>
              <PrismicRichText field={home.homeModalitiesTitle} />
            </animated.div>
          </Waypoint>

          <div className="modalities-card--container">
            {home.homeModality.map((modality, index) => {
              return (
                <ModalityCard key={index}>
                  <PrismicRichText field={modality.title} />
                  <img src={modality.image.url} alt={modality.image.alt} />
                  <PrismicRichText field={modality.excerpt} />
                  <Button
                    dark
                    colour={`${theme.colours.clay}`}
                    value="Learn More"
                    link={"modalities"}
                  />
                </ModalityCard>
              );
            })}
          </div>
        </HomeCardContainer>
        <HomeCardContainer className="book-now">
          <Waypoint
            onEnter={() => setVisibleEven(true)}
            onLeave={() => setVisibleEven(false)}
          >
            <animated.div style={visibleTwo}>
              <PrismicRichText field={home.bookNowTitle} />
            </animated.div>
          </Waypoint>
          <div className="book-now--inner">
            <div className="book-now--text">
              <PrismicRichText field={home.bookNowExcerpt} />
              <Button
                value={home.bookNowButtonText}
                link="bookNow"
                colour={`${theme.colours.gold}`}
              />
            </div>
            <div className="book-now--img">
              <img src={home.bookNowImage.url} alt={home.bookNowImage.alt} />
            </div>
          </div>
        </HomeCardContainer>
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
