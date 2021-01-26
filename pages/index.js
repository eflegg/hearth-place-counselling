import Head from "next/head";
import Link from "next/link";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import theme from "../components/Theme";
import Dots from "../components/Shapes/dots";
import HomeHire from "../components/HomeHire";
import ContactForm from "../components/Forms/ContactForm";

const HomeContainer = styled.div`
  position: relative;
  .intro-text {
    margin: 150px auto;
  }
  .reverse {
    div {
      margin-left: auto;
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
  .home-contact {
    width: 100%;
    margin-top: 30px;
    ${theme.mediaQuery.sm`
    width: 30%;
    `}
  }
  .img-2 {
    width: 100%;
    ${theme.mediaQuery.sm`
    width: 60%;
    margin-left: 50px;
    `}
    img {
      max-width: 100%;
      max-height: 700px;
      object-fit: cover;
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
          <div className="intro-text text-center">
            <h3 className="text-center">
              Leah Horlick is a professional indexer and editor in Calgary, AB.
              Probably expand with a more detailed statement of the guiding
              values of your work.
            </h3>
            <button className="btn">
              <Link href="/about">
                <a>Meet Leah</a>
              </Link>
            </button>
          </div>
          <HomeHire />
          <Dots reverse={true} className="reverse" />
          <HomeContact>
            <div className="img-2">
              <img
                src="/flower.jpg"
                alt="photo of flower and notebook with pen"
              />
            </div>
            <div className="home-contact">
              <h2>Ready to get started? Drop me a line</h2>
              <button className="btn">
                <Link href="/contact">
                  <a>Contact Leah</a>
                </Link>
              </button>
              {/* <ContactForm /> */}
            </div>
          </HomeContact>
        </HomeContainer>
      </Layout>
    </>
  );
}
