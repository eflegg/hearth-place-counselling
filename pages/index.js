import Head from "next/head";
import Link from "next/link";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import theme from "../components/Theme";
import Dots from "../components/Shapes/dots";
import HomeHire from "../components/HomeHire";
import ContactForm from "../components/Forms/ContactForm";

const HomeContainer = styled.div`
  .dots-reverse {
    div {
      margin-left: auto;
    }
  }
  position: relative;
  .reverse {
    div {
      margin-left: auto;
    }
  }
  .intro-container {
    display: flex;
    flex-direction: column-reverse;
    ${theme.mediaQuery.sm`
    flex-direction: row;`}
    align-items: center;
    margin: 100px auto;
    .intro-text {
      background: rgba(255, 255, 255, 0.5);
      border: 4px solid ${theme.colours.yellow};
      text-align: right;
      padding: 40px;

      ${theme.mediaQuery.sm`
      transform: translateX(-15%);
      `}
      ${theme.mediaQuery.md`
      // transform: translateX(-10%);
      `}
    }
    button {
      ${theme.mediaQuery.sm`
      transform: translateX(-15%);
      `}
    }
  }
  img {
    max-width: 100%;
    ${theme.mediaQuery.sm`
    min-width: 400px;
    `}
    ${theme.mediaQuery.md`
    min-width: 500px;
    max-height: 600px;
    `}
    object-fit: cover;
  }
  .home--img-combo {
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
`;

const HomeContact = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  ${theme.mediaQuery.sm`
  flex-direction: row;`}
  justify-content: space-around;
  align-items: center;
  button {
    margin-left: auto;
  }
  .home-contact {
    width: 100%;
    margin-top: 30px;
    ${theme.mediaQuery.sm`
    width: 30%;
    transform: translateX(20%);
    `}
    display: flex;
    flex-direction: column;
    button {
      transform: translateX(20%);
    }

    .home-contact--text {
      background: rgba(255, 255, 255, 0.5);
      padding: 40px;
      border: 4px solid ${theme.colours.blue};
    }
  }
`;

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Horlick Editorial</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout pageTitle={"Horlick Editorial"}>
        <HomeContainer>
          <Dots className="dots-reverse" />
          <div className="intro-container">
            <div className="home--img-combo">
              <img
                src="/banff.jpg"
                alt="photo of laptop with glasses and coffe cup"
              />
            </div>
            <div className="home--img-combo ">
              <h3 className="intro-text">
                Leah Horlick is a professional indexer and editor in Calgary,
                AB. Probably expand with a more detailed statement of the
                guiding values of your work.
              </h3>
              <button className="btn">
                <Link href="/about">
                  <a>Meet Leah</a>
                </Link>
              </button>
            </div>
          </div>
          <HomeHire />
          <Dots className="dots-reverse" />
          <HomeContact>
            <div className="home-contact home--img-combo">
              <h3 className="home-contact--text">
                Wondering if you need an indexer? Ready to get started? Drop me
                a line!
              </h3>
              <button className="btn">
                <Link href="/contact">
                  <a>Contact Leah</a>
                </Link>
              </button>
            </div>
            <div className="home--img-combo">
              <img
                src="/original-stoney-nakoda.jpg"
                alt="photo of flower and notebook with pen"
              />
            </div>
          </HomeContact>
        </HomeContainer>
      </Layout>
    </>
  );
}
