import Head from "next/head";
import Link from "next/link";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import theme from "../components/Theme";
import Dots from "../components/Shapes/dots";
import { Waypoint } from "react-waypoint";
import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";

const AboutContainer = styled.section`
  .dots-center {
    margin-top: 100px;
    div {
      margin: 0 auto 8px;
    }
  }

  .about--img-combo {
    img {
      width: 100%;
      ${theme.mediaQuery.sm`
    
    transform: translateX(-20%);
    width: 150%;
    `}
    }
    .about-text--excerpt {
      border: 4px solid ${theme.colours.blue};
      text-align: right;
      padding: 40px;
      background: rgba(255, 255, 255, 0.6);

      ${theme.mediaQuery.sm`
      transform: translateX(-8%);
      `}
      ${theme.mediaQuery.md`
      transform: translateX(-8%);
      `}
    }
    &:nth-child(1) {
      width: 100%;
      ${theme.mediaQuery.sm`
    width: 50%;
    `}
    }
    &:nth-child(2) {
      width: 100%;

      margin-top: 30px;
      ${theme.mediaQuery.sm`
    width: 50%;
    `}
    }
  }
  .about--main {
    margin: 50px auto;
    ${theme.mediaQuery.sm`
    width: 70%;
  
    `}
  }
`;

const AboutIntro = styled.div`
  margin: 100px auto;
  position: relative;
  /* .draw { */
  padding: 100px 50px;
  position: relative;
  transition: color 0.25s;
  h3 {
    font-size: 18px;
  }
`;

const AboutImage = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  ${theme.mediaQuery.sm`
  flex-direction: row;
  align-items: center;
  `}
`;

export default function About({ doc }) {
  const [boxVisible, setVisible] = useState(false);
  // const about = doc.data;
  return (
    <Layout pageTitle={"About"}>
      <Head>
        <title>Horlick Editorial - About</title>
      </Head>
      <AboutContainer>
        <AboutImage>
          <div className="about--img-combo">
            <img src="/about-photo.jpg" alt="photo of Leah Horlick" />
          </div>
          <div className="about--img-combo">
            <h4 className="about-text--excerpt">
              {/* I completed my indexing training at the University of California,
              Berkeley, revisiting my love of language after nearly ten years
              working in museums and galleries. */}
              {/* {RichText.asText(about.about_intro_text)} */}
            </h4>
            <Dots className="dots-center" />
          </div>
        </AboutImage>
        <Waypoint
          onEnter={() => {
            setVisible(true);
            console.log("box visible");
          }}
          onLeave={() => {
            setVisible(false);
            console.log("box NOT visible");
          }}
        >
          <AboutIntro className="about--intro draw">
            <Transition
              config={{ delay: 300 }}
              items={boxVisible}
              from={{
                boxSizing: "inherit",
                position: "absolute",
                borderWidth: "4px",
                borderStyle: "solid",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
                width: "0%",
                height: "0%",
                top: "-8px",
                left: "-8px",
              }}
              enter={{
                width: "100%",
                height: "100%",
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
                borderTopColor: `${theme.colours.yellow}`,
                borderRightColor: `${theme.colours.yellow}`,
                transition: "width 0.25s ease-out, height 0.25s ease-out 0.25s",
              }}
              leave={{
                boxSizing: "inherit",
                position: "absolute",
                borderWidth: "4px",
                borderStyle: "solid",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
                width: "0%",
                height: "0%",
              }}
            >
              {(boxVisible) =>
                boxVisible &&
                ((propsBefore) => (
                  <div className="before" style={propsBefore}></div>
                ))
              }
            </Transition>
            <Transition
              config={{ delay: 300 }}
              items={boxVisible}
              from={{
                boxSizing: "inherit",
                position: "absolute",
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                borderWidth: "4px",
                borderStyle: "solid",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
                width: "0%",
                height: "0%",
              }}
              enter={{
                height: "100%",
                width: "100%",
                transition: "height 0.25s ease-out 0.25s, width 0.25s ease-out",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderLeftColor: `${theme.colours.yellow}`,
                borderBottomColor: `${theme.colours.yellow}`,
              }}
              leave={{
                boxSizing: "inherit",
                position: "absolute",
                width: "100%",
                height: "100%",
                borderWidth: "4px",
                borderStyle: "solid",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
                width: "0%",
                height: "0%",
              }}
            >
              {(boxVisible) =>
                boxVisible &&
                ((propsAfter) => (
                  <div className="after" style={propsAfter}></div>
                ))
              }
            </Transition>

            <h3 className="text-center">
              With over ten years of expertise navigating the publishing
              industry and supporting writers who face barriers to career
              success, I’ve got the lived experience and formal training to
              treat your manuscripts with the care and respect they deserve.
            </h3>
          </AboutIntro>
        </Waypoint>
        {/* <div className="full-width--about">
          <img src="/laptop.jpg" alt="" />
        </div> */}
        <div className="about--main">
          <p>
            I won the Peter T. Millard Award for LGBT Research for a paper on
            semiotics in butch-femme lesbian relationships, completed a
            voluntary thesis on lexicology in partnership with the Department of
            Women’s & Gender Studies, and graduated with High Honours. This
            interdisciplinary academic background makes me a thorough,
            analytical thinker with broad cultural sensitivity and a deep
            understanding of systemic oppression.
          </p>
          <p>
            Like many queer and racialized people, I spent five years drawing on
            my lived experience and working as a peer in the frontline
            anti-violence field. With organizations like the BC Children’s
            Hospital and the Ending Violence Association of BC, I provided
            mental health first aid and advocacy for queer & trans youth, sick &
            disabled children, and young women impacted by gender-based
            violence. I bring all this training—and my lived experience—to your
            related texts.
          </p>
          <p>
            I grew up as a settler on the homelands of the Métis and Treaty 6
            Cree territory in Saskatoon, and lived on unceded Coast Salish
            Territories in Vancouver for nearly ten years. This summer, I
            finally returned to the prairies and I’m now located in gorgeous
            Mohkinstis (Calgary, Alberta), on the territory of Treaty 7 Nations
            and Region 3 of the Métis Nation.
          </p>
        </div>
        <div className="text-center">
          <button className="btn">
            <Link href="/services">
              <a>See what I can offer</a>
            </Link>
          </button>
        </div>
      </AboutContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await Client().getSingle("about");
  return {
    props: { about },
  };
}
