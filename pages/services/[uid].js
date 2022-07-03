import { createClient, endpoint } from "../../prismic";
import { PrismicRichText, SliceZone, PrismicLink } from "@prismicio/react";
import * as Prismic from "@prismicio/client";
import styled from "styled-components";
import theme from "../../components/Theme";
import Layout from "../../components/Layout";
import { components } from "../../slices";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import ReactPlayer from "react-player";

const ServiceContainer = styled.div`
  .next-prev {
    width: 85%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    a {
      &:nth-child(1) {
        text-align: left;
      }
      &:nth-child(2) {
        text-align: right;
      }
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
      h2 {
        margin-bottom: 30px;
      }
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
    ${theme.mediaQuery.xs`
     left: -45px;
    top: -80px; 
    `}

    ${theme.mediaQuery.sm`
      width: 70%;
      height: 100px;
      left: -45px;
    top: -100px;
    img {
      max-width: 400px;
    }
    `}
    ${theme.mediaQuery.md`
 top: -155px;
 height: 45px;
`}
  }
`;

export default function ServiceSingle({ doc, footer, menu }) {
  const service = doc.data;
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
            <Waypoint
              onEnter={() => setVisibleOdd(true)}
              onLeave={() => setVisibleOdd(false)}
            >
              <animated.div style={visibleOne} className="icon--one__desktop">
                <img src={service.iconOne.url} alt={service.iconOne.alt} />
              </animated.div>
            </Waypoint>
            <PrismicRichText field={service.subheadOne} />
            <PrismicRichText field={service.paragraphOne} />
            <div className="position-relative">
              <div className="stone-box position-absolute"></div>
            </div>
            <Waypoint
              onEnter={() => setVisibleOdd(true)}
              onLeave={() => setVisibleOdd(false)}
            >
              <animated.div style={visibleOne} className="icon--one__mobile">
                <img src={service.iconOne.url} alt={service.iconOne.alt} />
              </animated.div>
            </Waypoint>
          </div>
          <div className="text-block text-block__two">
            <PrismicRichText field={service.subheadTwo} />
            <PrismicRichText field={service.paragraphTwo} />
          </div>

          <Waypoint
            onEnter={() => setVisibleEven(true)}
            onLeave={() => setVisibleEven(false)}
          >
            <animated.div style={visibleTwo} className="icon--two">
              <img src={service.iconTwo.url} alt={service.iconTwo.alt} />
            </animated.div>
          </Waypoint>
          <div className=" text-block text-block__three">
            <PrismicRichText field={service.subheadThree} />
            <PrismicRichText field={service.paragraphThree} />
          </div>
        </section>

        <Waypoint
          onEnter={() => setVisibleOdd(true)}
          onLeave={() => setVisibleOdd(false)}
        >
          <animated.div style={visibleOne} className="img--full">
            {service.isVideo ? (
              <>
                <iframe
                  src={service.videoLink}
                  width="100%"
                  height="500px"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </>
            ) : (
              <img
                src={service.fullWidthImage.url}
                alt={service.fullWidthImage.alt}
              />
            )}
          </animated.div>
        </Waypoint>

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
