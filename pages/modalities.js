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

const modalitiesContainer = styled.section``;

export default function Modalities({ modalities, footer }) {
  return (
    <Layout pageTitle={"Modalities"} footer={footer}>
      <Head>
        <title>Modalities</title>
      </Head>
      <PrismicRichText field={modalities.data.modalitiesTitle} />
    </Layout>
  );
}

export async function getStaticProps() {
  const modalities = await createClient().getSingle("modalities");
  return {
    props: { modalities },
  };
}
