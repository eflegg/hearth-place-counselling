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
    margin: 80px auto 50px;
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
  justify-content: space-around;
  align-items: center;

  .img-2 {
    width: 70%;
    margin-left: 50px;
    img {
      max-width: 100%;
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
            <div className="home-contact">
              <h2>Contact Me</h2>
              <ContactForm />
            </div>
            <div className="img-2">
              <img
                src="/flower.jpg"
                alt="photo of flower and notebook with pen"
              />
            </div>
          </HomeContact>
        </HomeContainer>
      </Layout>
    </>
  );
}
