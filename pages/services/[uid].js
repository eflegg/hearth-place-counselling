import { createClient, endpoint, linkResolver } from "../../prismic";
import { PrismicRichText, SliceZone, PrismicLink } from "@prismicio/react";
import Link from "next/link";
import * as Prismic from "@prismicio/client";

import styled from "styled-components";
import theme from "../../components/Theme";
import Layout from "../../components/Layout";
import { components } from "../../slices";

const ServiceContainer = styled.div`
  .next-prev {
    width: 85%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 24px;
      .arrow--left {
        position: relative;
        right: 0;
        transition: all 0.25s ease-in-out;
      }
      &:hover {
        .arrow--left {
          right: 10px;
          transition: all 0.25s ease-in-out;
        }
      }
      .arrow--right {
        position: relative;
        transition: all 0.25s ease-in-out;
        left: 0;
      }
      &:nth-child(2) {
        &:hover {
          .arrow--right {
            transition: all 0.25s ease-in-out;
            left: 10px;
          }
        }
      }
    }
  }
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

    ${theme.mediaQuery.sm`
      width: 70%;
      height: 100px;
      left: -45px;
    top: -100px;
    img {
      max-width: 400px;
    }
    `}
  }
`;

const Client = Prismic.createClient(endpoint);

export default function ServiceSingle({ doc, footer, menu }) {
  console.log("doc result", doc.results);
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

        <div className="next-prev">
          <PrismicLink document={service.prevServiceLink}>
            <span className="arrow--left">&#60;____</span>{" "}
            {service.prevServiceText}
          </PrismicLink>
          <PrismicLink document={service.nextServiceLink}>
            {service.nextServiceText}{" "}
            <span className="arrow--right">____&#62;</span>
          </PrismicLink>
        </div>
      </ServiceContainer>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const doc = await createClient().getByUID("service", params.uid);

  return {
    props: { doc },
  };
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

// export async function getStaticProps({ params }) {
//   const { uid } = params;

//   const doc = await Client.getByUID("service", uid);
//   console.log({ doc });

//   return {
//     props: {
//       doc,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const { results } = await Client.get(
//     Prismic.Predicates.at("document.type", "service"),
//     {
//       orderings: "[document.uid]",
//     }
//   );
//   const paths = results.map((result) => {
//     return {
//       params: {
//         uid: result.uid + "",
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
