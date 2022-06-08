import Head from "next/head";
import Link from "next/link";
import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../components/Theme";
import { Waypoint } from "react-waypoint";

import { createClient } from "../prismic";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

const ServicesContainer = styled.section``;

export default function Services({ doc, faqs, footer }) {
  const services = doc.data;
  //this needs to go into single service
  return (
    <Layout pageTitle={"Services"} footer={footer}>
      <Head>
        <title>Counselling</title>
      </Head>
      <ServicesContainer></ServicesContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await createClient().getSingle("services");
  const services = await createClient().query(
    Prismic.Predicates.at("document.type", "service")
  );
  return {
    props: { doc, faqs: services ? services.results : [] },
  };
}
