import Head from "next/head";
import Link from "next/link";
import Layout from "../components /pageWrapper";
import styled from "styled-components";
import theme from "../components /Theme";

const HomeContainer = styled.div`
  position: relative;
  button {
    background-color: ${theme.colours.yellow};
    padding: 15px 30px;
    margin: 0 auto;
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
          <div className="intro-text">
            <p>
              Leah Horlick is a professional indexer and editor in Calgary, AB.
              Probably expand with a more detailed statement of the guiding
              values of your work.
            </p>
            <button>Meet Leah</button>
          </div>
        </HomeContainer>
      </Layout>
    </>
  );
}
