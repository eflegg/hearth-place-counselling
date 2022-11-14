import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";
import { Waypoint } from "react-waypoint";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { createClient } from "../prismic";
import { PrismicRichText, PrismicLink, PrismicText } from "@prismicio/react";
import Button from "../components/Global/Button";

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
    width: 90%;
    margin: 0 auto;
    max-width: 420px;
    max-height: 420px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 50px;
    img {
      border-radius: 12px;
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 0;
    }
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

  .section-2 {
    position: relative;
    .img--full {
      width: 100%;
      height: 600px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
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
  .consultation-box {
    background: ${theme.colours.stone};
    margin: 0 auto;
    padding: 50px 40px;
    width: 80%;
    text-align: center;
    border-radius: 10px;
    ${theme.mediaQuery.md`
    width: 60%;
    `}
    p {
      color: ${theme.colours.clay};
      font-size: 24px;
      ${theme.mediaQuery.md`
font-size: 36;
    `}
    }
  }
  .credentials {
    width: 80%;
    margin: 100px auto;
    h2 {
      margin-bottom: 80px;
    }
    .credentials--lists {
      .credentials--list {
        padding: 0 10px;
      }
      h4 {
        font-family: ${theme.type.body};
        font-weight: 700;
      }
      ul {
        margin-top: 25px;
        padding-left: 0;
      }
      ${theme.mediaQuery.md`
      display: flex;
      justify-content: space-between;
      `}
    }
  }
`;

export default function About({ doc, footer, menu }) {
  const about = doc.data;
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
  const fallbackImage =
    "https://images.prismic.io/hearthplace/b1e2ea09-87e0-478d-8c40-da72dc23f23e_Hearth-Place-logo.png?auto=compress,format";
  const fallBackTitle = "Hearth Place - About";

  return (
    <Layout
      pageTitle={<PrismicRichText field={about.aboutTitle} />}
      footer={footer}
      menu={menu}
      metadescription={about.metadescription}
      ogImage={about.ogImage ? about.ogImage.url : fallbackImage}
      ogUrl="https://www.hearthplace.ca/about"
      ogTitle={about.ogTitle ? about.ogTitle : fallBackTitle}
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
            <Waypoint
              onEnter={() => setVisibleOdd(true)}
              onLeave={() => setVisibleOdd(false)}
            >
              <animated.div style={visibleOne}>
                <PrismicRichText field={about.subHead} />
              </animated.div>
            </Waypoint>

            <PrismicRichText field={about.paraThree} />
          </div>
        </div>
        <section className="section-2">
          <Waypoint
            onEnter={() => setVisibleEven(true)}
            onLeave={() => setVisibleEven(false)}
          >
            <animated.div style={visibleTwo}>
              {about.isVideo ? (
                <>
                  <iframe
                    src={about.videoLink}
                    width="100%"
                    height="500px"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </>
              ) : (
                <img
                  className="img--full"
                  src={about.fullWidthImage.url}
                  alt={about.fullWidthImage.alt}
                />
              )}
            </animated.div>
          </Waypoint>
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
        <div className="consultation-box">
          <PrismicRichText field={about.consultationText} />
          <Button
            value={about.buttonText}
            colour={`${theme.colours.gold}`}
            link="bookNow"
          />
        </div>
        <section className="credentials">
          <Waypoint
            onEnter={() => setVisibleOdd(true)}
            onLeave={() => setVisibleOdd(false)}
          >
            <animated.div style={visibleOne}>
              <PrismicRichText field={about.credentialsSubhead} />
            </animated.div>
          </Waypoint>
          <div className="credentials--lists">
            <div className="credentials--list">
              <PrismicRichText field={about.credentialsHeader} />
              <ul>
                {about.credentialsList.map((credential, index) => {
                  return (
                    <li key={index}>
                      <PrismicRichText field={credential.credential} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="credentials--list">
              <PrismicRichText field={about.educationHeader} />
              <ul>
                {about.educationList.map((education, index) => {
                  return (
                    <li key={index}>
                      <PrismicRichText field={education.education} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="credentials--list">
              <PrismicRichText field={about.additionalTrainingHeader} />
              <ul>
                {about.additionalTraining.map((training, index) => {
                  return (
                    <li key={index}>
                      <PrismicRichText field={training.training} />
                    </li>
                  );
                })}
              </ul>
            </div>
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
