import { createClient, endpoint } from "../../prismic";
import {
  PrismicRichText,
  SliceZone,
  PrismicLink,
  PrismicText,
} from "@prismicio/react";
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
    height: 600px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
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
    position: relative;
    z-index: 20;
    ${theme.mediaQuery.sm`
    width: 70%;
    `}
    ${theme.mediaQuery.md`
    width: 50%;
    `}
    margin: 30px auto;
    &.text-block__three {
      position: relative;
      z-index: 10;
    }
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
    right: -150px;
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
    top: -105px; 
    `}

    ${theme.mediaQuery.sm`
      width: 70%;
      height: 100px;
      left: -65px;
    top: -135px;
    img {
      max-width: 375px;
    }
    `}
    ${theme.mediaQuery.md`
top: -188px;
 height: 45px;
 left: -45px;
`}
  }
`;

export default function ServiceSingle({ doc, footer, menu }) {
  const service = doc.data;
  console.log("service: ", service);

  const [visibleOne, setVisibleOne] = useState(false);

  const [visibleTwo, setVisibleTwo] = useState(false);
  const [visibleThree, setVisibleThree] = useState(false);
  const [visibleFour, setVisibleFour] = useState(false);

  const visible1 = useSpring({
    config: config.slow,
    opacity: visibleOne ? 1 : 0,
    transform: visibleOne ? "translateY(0px)" : "translateY(-20px)",
    delay: 50,
  });
  const visible2 = useSpring({
    config: config.slow,
    opacity: visibleTwo ? 1 : 0,
    transform: visibleTwo ? "translateY(0px)" : "translateY(-20px)",
    delay: 50,
  });

  const visible3 = useSpring({
    config: config.slow,
    opacity: visibleThree ? 1 : 0,
    transform: visibleThree ? "translateY(0px)" : "translateY(-20px)",
    delay: 50,
  });
  const visible4 = useSpring({
    config: config.slow,
    opacity: visibleFour ? 1 : 0,
    transform: visibleFour ? "translateY(0px)" : "translateY(-20px)",
    delay: 50,
  });

  const fallbackImage =
    "https://images.prismic.io/hearthplace/b1e2ea09-87e0-478d-8c40-da72dc23f23e_Hearth-Place-logo.png?auto=compress,format";
  const fallBackTitle = `Hearth Place - ${doc.uid}`;
  // const fallBackTitle = "Counselling";

  console.log("serviceTitle: ", service.serviceTitle);
  return (
    <Layout
      pageTitle={<PrismicRichText field={service.serviceTitle} />}
      footer={footer}
      menu={menu}
      metadescription={service.metadescription}
      ogImage={service.ogImage.url ? service.ogImage.url : fallbackImage}
      ogUrl={`https://www.hearthplace.ca/services/${doc.uid}`}
      ogTitle={service.ogTitle ? service.ogTitle : fallBackTitle}
    >
      <ServiceContainer>
        <section className="section-1">
          <div className="text-block text-block__one">
            <Waypoint
              onEnter={() => setVisibleOne(true)}
              onLeave={() => setVisibleOne(false)}
            >
              <animated.div style={visible1} className="icon--one__desktop">
                <img src={service.iconOne.url} alt={service.iconOne.alt} />
              </animated.div>
            </Waypoint>
            <PrismicRichText field={service.subheadOne} />
            <PrismicRichText field={service.paragraphOne} />
            <div className="position-relative">
              <div className="stone-box position-absolute"></div>
            </div>
            <Waypoint
              onEnter={() => setVisibleTwo(true)}
              onLeave={() => setVisibleTwo(false)}
            >
              <animated.div style={visible2} className="icon--one__mobile">
                <img src={service.iconOne.url} alt={service.iconOne.alt} />
              </animated.div>
            </Waypoint>
          </div>
          <div className="text-block text-block__two">
            <PrismicRichText field={service.subheadTwo} />
            <PrismicRichText field={service.paragraphTwo} />
          </div>

          <Waypoint
            onEnter={() => setVisibleThree(true)}
            onLeave={() => setVisibleThree(false)}
          >
            <animated.div style={visible3} className="icon--two">
              <img src={service.iconTwo.url} alt={service.iconTwo.alt} />
            </animated.div>
          </Waypoint>
          <div className=" text-block text-block__three">
            <PrismicRichText field={service.subheadThree} />
            <PrismicRichText field={service.paragraphThree} />
          </div>
        </section>

        <Waypoint
          onEnter={() => setVisibleFour(true)}
          onLeave={() => setVisibleFour(false)}
        >
          <animated.div style={visible4} className="img--full">
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
