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

const AboutContainer = styled.section``;

export default function About({ about, footer }) {
  return (
    <Layout pageTitle={"About"} footer={footer}>
      <Head>
        <title>Horlick Editorial - About</title>
      </Head>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await createClient().getSingle("about");
  return {
    props: { about },
  };
}
