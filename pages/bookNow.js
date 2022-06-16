import Head from "next/head";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";
import { createClient } from "../prismic";
import { PrismicRichText, PrismicText } from "@prismicio/react";

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
        font-size: 30px;
      }
    }
  }
  .icon--one {
    width: 100%;
    text-align: center;
    img {
      margin: 50px auto;
      width: 60px;
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

export default function Contact({ doc, footer }) {
  const booknow = doc.data;
  return (
    <>
      <Head>
        <title>Book Now</title>
        <meta property="og:title" content="Book Now" key="title" />
      </Head>
      <Layout
        pageTitle={<PrismicRichText field={booknow.title} />}
        footer={footer}
      >
        <BooknowContainer>
          <div className="intro">
            <PrismicRichText field={booknow.intro} />
            <p className="contact-info">{booknow.contact}</p>
            <div className="icon--one">
              <img src={booknow.icon.url} alt={booknow.icon.alt} />
            </div>
          </div>
          <div className="policies">
            <PrismicRichText field={booknow.subheadOne} />
            <PrismicRichText field={booknow.textOne} />

            <PrismicRichText field={booknow.subheadTwo} />
            <PrismicRichText field={booknow.textTwo} />
          </div>
          <div className="img--full">
            <img
              src={booknow.fullWidthImage.url}
              alt={booknow.fullWidthImage.alt}
            />
          </div>
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
