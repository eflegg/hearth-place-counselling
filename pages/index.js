import Head from "next/head";
import Link from "next/link";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import theme from "../components/Theme";
import Dots from "../components/Shapes/dots";
import HomeHire from "../components/HomeHire";

const HomeContainer = styled.div`
  position: relative;
  .intro-text {
    margin: 80px auto 50px;
  }
`;

export default function Home() {
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
            <button className="btn">Meet Leah</button>
          </div>
          <Dots />
          <HomeHire />
        </HomeContainer>
      </Layout>
    </>
  );
}
