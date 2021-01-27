import Head from "next/head";
import Link from "next/link";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import theme from "../components/Theme";
import Dots from "../components/Shapes/dots";

const AboutContainer = styled.section`
  /* img {
    max-width: 100%;
  } */
  .dots-center {
    margin-top: 100px;
    div {
      margin: 0 auto 8px;
    }
  }

  .about--img-combo {
    img {
      transform: translateX(-20%);
      width: 150%;
    }
    .about-text--excerpt {
      border: 4px solid ${theme.colours.blue};
      text-align: right;
      padding: 40px;

      ${theme.mediaQuery.sm`
      transform: translateX(-10%);
      `}
      ${theme.mediaQuery.md`
      transform: translateX(-10%);
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
  .draw {
    padding: 100px 50px;
    position: relative;
    &:before,
    &:after {
      box-sizing: inherit;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }

    transition: color 0.5s;

    &:before,
    &:after {
      // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
      border: 2px solid transparent;
      width: 0;
      height: 0;
    }

    // This covers the top & right borders (expands right, then down)
    &:before {
      top: 0;
      left: 0;
    }

    // And this the bottom & left borders (expands left, then up)
    &:after {
      bottom: 0;
      right: 0;
    }

    // Hover styles
    &:hover::before,
    &:hover::after {
      width: 100%;
      height: 100%;
    }

    &:hover::before {
      border-top-color: ${theme.colours.blue}; // Make borders visible
      border-right-color: ${theme.colours.blue};
      transition: width 0.5s ease-in-out,
        // Width expands first
        height 0.5s ease-in-out 0.5s; // And then height
    }

    &:hover::after {
      border-bottom-color: ${theme.colours.blue}; // Make borders visible
      border-left-color: ${theme.colours.blue};
      transition: border-color 0s ease-out 0.5s,
        // Wait for ::before to finish before showing border
        width 0.25s ease-out 0.5s,
        // And then exanding width
        height 0.25s ease-out 0.75s; // And finally height
    }
    /* &:hover {
      color: ${theme.colours.yellow};
    } */

    // Start ::after in same position as ::before
    &:after {
      top: 0;
      left: 0;
    }

    // Change colors
    &:hover::before {
      border-top-color: ${theme.colours.yellow};
      border-right-color: ${theme.colours.yellow};
    }

    &:hover::after {
      border-bottom-color: ${theme.colours.yellow};
      border-left-color: ${theme.colours.yellow};
      transition: // Animate height first, then width
        height 0.25s ease-out, width 0.25s ease-out 0.25s;
    }
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

export default function About() {
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
            <p className="about-text--excerpt">
              I completed my indexing training at the University of California,
              Berkeley, revisiting my love of language after nearly ten years
              working in museums and galleries.
            </p>
            <Dots className="dots-center" />
          </div>
        </AboutImage>
        <AboutIntro className="about--intro">
          <h3 className="text-center draw">
            With over ten years of expertise navigating the publishing industry
            and supporting writers who face barriers to career success, I’ve got
            the lived experience and formal training to treat your manuscripts
            with the care and respect they deserve.
          </h3>
        </AboutIntro>
        <div className="about--main">
          <p>
            I won the Peter T. Millard Award for LGBT Research for a paper on
            semiotics in butch-femme lesbian relationships, completed a
            voluntary thesis on lexicology in partnership with the Department of
            Women’s &amp; Gender Studies, and graduated with High Honours. This
            interdisciplinary academic background makes me a thorough,
            analytical thinker with broad cultural sensitivity and a deep
            understanding of systemic oppression.
          </p>
          <p>
            Like many queer and racialized people, I spent five years drawing on
            my lived experience and working as a peer in the frontline
            anti-violence field. With organizations like the BC Children’s
            Hospital and the Ending Violence Association of BC, I provided
            mental health first aid and advocacy for queer &amp; trans youth,
            sick &amp; disabled children, and young women impacted by
            gender-based violence. I bring all this training—and my lived
            experience—to your related texts.
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
      </AboutContainer>
    </Layout>
  );
}
