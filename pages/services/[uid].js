import { createClient, linkResolver } from "../../prismic";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import styled from "styled-components";
import theme from "../../components/Theme";
import Layout from "../../components/Layout";
import Button from "../../components/Global/Button";
import { components } from "../../slices";

const ServiceContainer = styled.div`
  width: 100%;

  .img--full {
    width: 100%;

    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .section-1 {
    width: 85%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .text-block {
    width: 80%;
    ${theme.mediaQuery.sm`
    width: 70%;
    `}
    ${theme.mediaQuery.md`
    width: 50%;
    `}
    margin: 30px auto;

    &.text-block__one {
      h2,
      p {
        position: relative;
        z-index: 2;
      }
      .stone-box {
        display: none;
        ${theme.mediaQuery.sm`
        display: block;
        background: ${theme.colours.stone};
        height: 195px;
        width: 200%;
        z-index: 1;
        bottom: 0;
        width: 300%;
        left: 50%;
        transform: translateX(-50%);
        `}
      }
    }
    &.text-block__two {
      position: relative;
      z-index: 2;
    }
  }
  .icon--one__desktop {
    display: none;
    ${theme.mediaQuery.sm`
  
    display: block;
    position: absolute;
    z-index: 2;
    right: -20px;
    top: -250px;
    img {
      max-width: 400px;
    }
   `}
  }
  .icon--one__mobile {
    text-align: right;
    margin-left: auto;
    position: relative;
    top: -60px;
    right: -50px;
    width: 40%;
    height: 50px;
    ${theme.mediaQuery.sm`
      display: none;
    `}
  }
  .icon--two {
    width: 40%;
    height: 30px;
    position: relative;
    left: -25px;
    top: -50px;
    img {
      max-width: 400px;
    }
    ${theme.mediaQuery.sm`
      width: 70%;
      height: 100px;
      left: -45px;
    top: -100px;
    `}
  }
`;

export default function ServiceSingle({ doc, footer, menu }) {
  const service = doc.data;

  return (
    <Layout
      pageTitle={<PrismicRichText field={service.serviceTitle} />}
      footer={footer}
      menu={menu}
      button
    >
      <ServiceContainer>
        <section className="section-1">
          <div className="text-block text-block__one">
            <div className="icon--one__desktop">
              <img src={service.iconOne.url} alt={service.iconOne.alt} />
            </div>
            <PrismicRichText field={service.subheadOne} />
            <PrismicRichText field={service.paragraphOne} />
            <div className="position-relative">
              <div className="stone-box position-absolute"></div>
            </div>
            <div className="icon--one__mobile">
              <img src={service.iconOne.url} alt={service.iconOne.alt} />
            </div>
          </div>
          <div className="text-block text-block__two">
            <PrismicRichText field={service.subheadTwo} />
            <PrismicRichText field={service.paragraphTwo} />
          </div>
          <div className="icon--two">
            <img src={service.iconTwo.url} alt={service.iconTwo.alt} />
          </div>
          <div className=" text-block text-block__three">
            <PrismicRichText field={service.subheadThree} />
            <PrismicRichText field={service.paragraphThree} />
          </div>
        </section>
        <div className="img--full">
          <img
            src={service.fullWidthImage.url}
            alt={service.fullWidthImage.alt}
          />
        </div>

        <SliceZone slices={service.slices} components={components} />
      </ServiceContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const documents = await createClient().getAllByType("service");

  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const doc = await createClient().getByUID("service", params.uid);

  return {
    props: { doc },
  };
}
