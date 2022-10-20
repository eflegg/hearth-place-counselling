import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";
import { Waypoint } from "react-waypoint";
// import { useSpring, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { createClient } from "../prismic";
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";

const ModalitiesContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
`;

const ModalitySingle = styled.div`
  margin-bottom: 45px;
  opacity: 0;
  transition: 0.25s all ease-in-out;
  img {
    width: 258px;
  }
  &.visible {
    opacity: 1;
    transition: 0.25s all ease-in-out;
  }
  ${theme.mediaQuery.sm`
  margin-bottom: 65px;
  `}
  ${theme.mediaQuery.md`
  margin-bottom: 100px;
  `}
  p {
    margin: 30px 0;
  }
`;

export default function Modalities({ doc, footer, menu }) {
  const modalities = doc.data;
  const [visible, setVisible] = useState(false);

  // const visibleOne = useSpring({
  //   config: config.slow,
  //   opacity: visibleOdd ? 1 : 0,
  //   transform: visibleOdd ? "translateY(0px)" : "translateY(-20px)",
  //   delay: 200,
  // });

  return (
    <Layout
      pageTitle={<PrismicRichText field={modalities.modalitiesTitle} />}
      footer={footer}
      menu={menu}
      metadescription={modalities.metadescription}
    >
      <ModalitiesContainer className="modalities--container">
        {modalities.modalities.map((modality, index) => {
          return (
            <Waypoint onEnter={() => setVisible(true)}>
              <ModalitySingle
                key={index}
                className={`${visible ? "visible" : ""} modality-card`}
              >
                <PrismicRichText field={modality.title} />
                <PrismicRichText field={modality.description} />
                <PrismicRichText field={modality.quote} />
                <img src={modality.icon.url} alt={modality.icon.alt} />
              </ModalitySingle>
            </Waypoint>
          );
        })}
      </ModalitiesContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await createClient().getSingle("modalities");
  return {
    props: { doc },
  };
}
