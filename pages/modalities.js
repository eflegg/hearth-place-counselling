import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";
import { Waypoint } from "react-waypoint";
import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { createClient } from "../prismic";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

const ModalitiesContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
`;

const ModalitySingle = styled.div``;

export default function Modalities({ doc, footer }) {
  const modalities = doc.data;
  return (
    <Layout pageTitle={"Modalities"} footer={footer}>
      <Head>
        <title>Modalities</title>
      </Head>
      <PrismicRichText field={modalities.modalitiesTitle} />

      <ModalitiesContainer className="modalities--container">
        {modalities.modalities.map((modality, index) => {
          return (
            <ModalitySingle key={index} className="modality-card">
              <PrismicRichText field={modality.title} />
              <PrismicRichText field={modality.description} />
              <PrismicRichText field={modality.quote} />
              <img src={modality.icon.url} alt={modality.icon.alt} />
            </ModalitySingle>
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
