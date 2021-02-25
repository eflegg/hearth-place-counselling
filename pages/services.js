import Head from "next/head";
import Link from "next/link";
import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import theme from "../components/Theme";
import { Waypoint } from "react-waypoint";
import Dots from "../components/Shapes/dots";
import SingleService from "../components/SingleService";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

const ServicesContainer = styled.section`
  /* .services-1__title {
    width: 100%;
    margin: 100px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  } */
  .index-dots {
    display: flex;
    align-items: center;
    width: 63px;
    margin: 0;
    .single-dot {
      margin-right: 8px;
      margin-bottom: 0;
    }
  }
`;

const FAQ = styled.div`
  .faq-img {
    margin-bottom: 100px;
    margin-top: 100px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    ${theme.mediaQuery.sm`
    flex-direction: row;
    `}
    .services--img-combo {
      img {
        width: 100%;
        ${theme.mediaQuery.sm`
        transform: translateX(-20%);
        width: 150%;
        `}
      }

      &:nth-child(1) {
        width: 100%;
        ${theme.mediaQuery.sm`
    width: 50%;
    `}
      }
      &:nth-child(2) {
        box-sizing: border-box;
        position: relative;
        background: rgba(255, 255, 255, 0.6);
        padding: 30px;
        border: 4px solid ${theme.colours.blue};
        width: 100%;
        margin-top: 30px;
        margin-bottom: 30px;
        ${theme.mediaQuery.sm`
    width: 50%;
    margin-bottom: 0;
    padding: 40px;
    `}
      }
    }
  }
  .faq--title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 75px 0 50px 15px;

    p {
      font-size: 24px;
      font-weight: 400;
    }
  }
  .faq--question {
    font-family: "Libre Caslon Text";
    font-style: italic;
    font-size: 24px;
    color: darkslategrey;
    margin: 45px 0;
  }
`;

export default function Services({ doc, faqs }) {
  // const [indexLine, setIndexLine] = useState(false);
  const services = doc.data;
  //this needs to go into single service
  return (
    <Layout pageTitle={"Services"}>
      <Head>
        <title>Horlick Editorial - Services</title>
      </Head>
      <ServicesContainer>
        {/* here you'll need to map over the collection of faqs from the database */}
        <div className="services-1">
          <SingleService
            serviceTitle={RichText.asText(services.indexing_title)}
            servicesText={RichText.asText(services.indexing_description)}
          />

          <FAQ>
            <div className="faq-img">
              <div className="services-img services--img-combo">
                <img src="/laptop.jpg" alt="" />
              </div>
              <div className="services--img-combo">
                <h4 className="faq--question ">
                  {RichText.asText(services.indexing_excerpt_italic)}
                </h4>
                <p className="faq--answer">
                  {RichText.asText(services.indexing_excerpt_plain)}
                </p>
              </div>
            </div>
            <div className="faq--title">
              <Dots className="index-dots" />
              <p>Index FAQ</p>
            </div>

            {faqs.map((faq, index) => {
              return (
                <>
                  <h4 className="faq--question">
                    {RichText.asText(faq.data.question)}
                  </h4>
                  <p className="faq--answer">
                    {RichText.asText(faq.data.answer)}
                  </p>
                </>
              );
            })}
          </FAQ>
        </div>
        <SingleService
          reverse
          serviceTitle={"Proofreading and Editing"}
          servicesText={
            "My careful attention to detail and formal training has made me a sought-after stylistic and copy editor who has worked for magazines like PRISM international, Poetry Is Dead, Canadian Dimension, Shameless, and most recently New Forum. Contact me to discuss rates and the right kind of editing for your project."
          }
        />

        <SingleService
          serviceTitle={"Manuscript Consultation"}
          servicesText={
            " I’m a long-time member of the Writer’s Union of Canada with an MFA in Creative Writing from the University of British Columbia. I’ve sat on juries for the BC Arts Council and successfully received full funding from the Canada Council. My previous manuscript clients have applied successfully to retreats like Lambda Literary, or been longlisted for prizes including the Gerald Lampert Award. My own active literary practice keeps me in the loop about what publishers, grantors, and graduate programs are looking for. You or your publisher can reach out at any time to tell me about your project and learn more about my approach."
          }
        />

        <SingleService
          reverse
          serviceTitle={"Transcription"}
          servicesText={
            "I’m a fast, accurate transcriber specializing in university and gallery clients with time-sensitive work on stigmatized topics. I’ve transcribed sensitive, highly-confidential audio for projects related to biomedical innovation, transgender health, hepatitis C, and HIV/AIDS. Previous clients include grunt gallery in Vancouver and the Johnson-Shoyama School of Public Policy at the University of Saskatchewan. I’ve also provided live captioning for nonprofit AGMs; contact me to discuss rates and make sure you’re using the best platform possible for your project or event."
          }
        />

        <div className="text-center">
          <button className="btn">
            <Link href="/contact">
              <a>Let's work together</a>
            </Link>
          </button>
        </div>
      </ServicesContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await Client().getSingle("services");
  const faqs = await Client().query(
    Prismic.Predicates.at("document.type", "faq")
  );
  return {
    props: { doc, faqs: faqs ? faqs.results : [] },
  };
}
