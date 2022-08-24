import Head from "next/head";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";
import { createClient } from "../prismic";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const BooknowContainer = styled.div`
  .intro {
    width: 90%;
    margin: 0 auto;
    ${theme.mediaQuery.sm`
    width: 70%;
    `}
    p {
      font-size: 24px;
      text-align: center;
      &.contact-info {
        color: ${theme.colours.gold};
        ${theme.mediaQuery.sm`
         font-size: 30px;
        `}
        font-size: 22px;
      }
    }
  }
  .icon--one {
    width: 100%;
    text-align: center;
    img {
      margin: 50px auto;
      width: 100px;
    }
  }
  .policies {
    width: 80%;
    margin: 0 auto;
    ${theme.mediaQuery.sm`
    width: 60%;
    `}
    h2 {
      margin-top: 50px;
    }
  }
`;

export default function Contact({ doc, footer, menu }) {
  const booknow = doc.data;
  const [visibleOdd, setVisibleOdd] = useState(false);
  const visibleOne = useSpring({
    config: config.slow,
    opacity: visibleOdd ? 1 : 0,
    transform: visibleOdd ? "translateY(0px)" : "translateY(-20px)",
    delay: 200,
  });
  return (
    <>
      <Layout
        pageTitle={<PrismicRichText field={booknow.title} />}
        footer={footer}
        menu={menu}
        metadescription={<PrismicText field={booknow.metadescription} />}
      >
        <BooknowContainer>
          <div className="intro">
            <PrismicRichText field={booknow.intro} />
            <p className="contact-info">{booknow.contact}</p>
            <Waypoint
              onEnter={() => setVisibleOdd(true)}
              onLeave={() => setVisibleOdd(false)}
            >
              <animated.div style={visibleOne} className="icon--one">
                <img src={booknow.icon.url} alt={booknow.icon.alt} />
              </animated.div>
            </Waypoint>
          </div>
          <div className="policies">
            <PrismicRichText field={booknow.subheadOne} />
            <PrismicRichText field={booknow.textOne} />

            <PrismicRichText field={booknow.subheadTwo} />
            <PrismicRichText field={booknow.textTwo} />
          </div>

          <Waypoint
            onEnter={() => setVisibleOdd(true)}
            onLeave={() => setVisibleOdd(false)}
          >
            <animated.div style={visibleOne} className="img--full">
              <img
                src={booknow.fullWidthImage.url}
                alt={booknow.fullWidthImage.alt}
              />
            </animated.div>
          </Waypoint>
        </BooknowContainer>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const doc = await createClient().getSingle("booknow");
  return {
    props: { doc },
  };
}
