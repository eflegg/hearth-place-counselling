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

const ServicesContainer = styled.section`
  .services-1__title {
    width: 100%;
    margin: 100px 0;
    display: flex;
    justify-content: space-between;
    /* .horiz-line {
      border-bottom: 3px solid ${theme.colours.yellow};
      width: 60%;
      transform: translateX(-40%);
    } */
  }
  .index-dots {
    display: flex;
    .single-dot {
      margin-right: 8px;
      margin-bottom: 0;
    }
  }
`;

const FAQ = styled.div`
  .faq--title {
    display: flex;
    align-items: center;
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

export default function Services() {
  const [indexLine, setIndexLine] = useState(false);

  return (
    <Layout pageTitle={"Services"}>
      <Head>
        <title>Horlick Editorial - Services</title>
      </Head>
      <ServicesContainer>
        <div className="services-1">
          {/* <Waypoint
            onEnter={() => {
              setIndexLine(true);
              console.log("index line visible");
            }}
            onLeave={() => {
              setIndexLine(false);
              console.log("index line NOT visible");
            }}
          >
            <div className="services-1__title">
              <Transition
                config={config.slow}
                items={indexLine}
                from={{ width: "0%" }}
                enter={{ width: "100%" }}
                leave={{ width: "0%" }}
              >
                {(indexLine) =>
                  indexLine &&
                  ((props) => <div className="horiz-line" style={props}></div>)
                }
              </Transition>

              <h2>Indexing</h2>
            </div>
          </Waypoint> */}
          <SingleService
            onEnter={() => {
              setIndexLine(true);
              console.log("index line visible");
            }}
            onLeave={() => {
              setIndexLine(false);
              console.log("index line NOT visible");
            }}
            items={indexLine}
            serviceTitle={"Indexing"}
          />
          <p>
            I completed my indexing training through the acclaimed program at UC
            Berkeley. I’m a member of the Indexing Society of Canada, and was a
            runner-up for their first-ever Equity &amp; Diversity Bursary. I
            have specialized training and experience working with sensitive
            subjects, confidential projects, and marginalized communities that
            makes me a careful, thorough indexer determined to support and
            protect the dignity of your projects.{" "}
          </p>
          <p>
            My specialities are languages &amps; linguistics, social justice
            movements, the fine arts, feminism and gender studies, mental
            health, Judaism and religious studies, German and Eastern European
            literature and history, and the LGBTQ2IA+ community. I know how
            important it is to find an editor and indexer who will treat your
            work on these topics with respect and nuance; I’ve been there
            myself. Contact me to learn more about my rates and timelines.
          </p>

          {/* here you'll need to map over the collection of faqs from the database */}

          <FAQ>
            <div className="faq--title">
              <Dots className="index-dots" />
              <p>Index FAQ</p>
            </div>
            <h4 className="faq--question">
              So, the index at the back of a book isn’t generated by a computer
              program?{" "}
            </h4>
            <p className="faq--answer">
              Indexes are created by trained, human professionals. As an
              indexer, my job is to help your readers, students, and colleagues
              navigate your text with ease and find your key terms and arguments
              quickly. A bad index can confuse your readers and obscure your
              message, which you really don’t want in an #OwnVoices memoir or as
              part of your application for tenure. When you hire me, you’ve got
              my lived experience and technical training on your side to protect
              your projects.{" "}
            </p>
            <h4 className="faq--question">
              But I’m the author—can’t I create my book’s index myself?
            </h4>
            <p className="faq--answer">
              Indexes are completed on extremely tight deadlines, often as the
              very last piece of the production process before a book goes to
              print. Page numbers are changing, deadlines are shifting, and
              you’ll be exhausted. (Trust me—I’ve published three books of my
              own.) You know your book better than anyone else—but at this point
              you’ve spent so much time with it that you’ll likely miss key
              terms and ideas. I’ve got a fresh set of eyes, professional
              training, and a specialized software that keeps me fast and
              accurate, giving you and your readers the best possible guide to
              your incredible achievement. Let me handle this part of the
              process and make life easier for you and your publisher, so you
              can both focus on celebrating and promoting your book.
            </p>

            <h4 className="faq--question">
              But I’m a publisher—can’t I ask just the author to complete the
              index?{" "}
            </h4>
            <p className="faq--answer">
              You’ve already worked hard to create a seamless, dignified, and
              low-barrier process for your authors, especially those who face
              systemic hurdles to success in CanLit and academic institutions.
              Hiring a professional indexer is also a part of this process.
              Preserve your relationships by hiring a trained indexer, rather
              than asking your authors (emerging or established) to take on this
              additional, and very technical, labour. Contact me instead to
              adhere to best practices – and get your proofs to the printer on
              time.
            </p>
          </FAQ>
        </div>
        <SingleService
          reverse
          onEnter={() => {
            setIndexLine(true);
            console.log("index line visible");
          }}
          onLeave={() => {
            setIndexLine(false);
            console.log("index line NOT visible");
          }}
          items={indexLine}
          serviceTitle={"Proofreading and Editing"}
        />
        <p>
          My careful attention to detail and formal training has made me a
          sought-after stylistic and copy editor who has worked for magazines
          like PRISM international, Poetry Is Dead, Canadian Dimension,
          Shameless, and most recently New Forum. Contact me to discuss rates
          and the right kind of editing for your project.
        </p>
        <SingleService
          onEnter={() => {
            setIndexLine(true);
            console.log("index line visible");
          }}
          onLeave={() => {
            setIndexLine(false);
            console.log("index line NOT visible");
          }}
          items={indexLine}
          serviceTitle={"Manuscript Consultation"}
        />
        <p>
          I’m a long-time member of the Writer’s Union of Canada with an MFA in
          Creative Writing from the University of British Columbia. I’ve sat on
          juries for the BC Arts Council and successfully received full funding
          from the Canada Council. My previous manuscript clients have applied
          successfully to retreats like Lambda Literary, or been longlisted for
          prizes including the Gerald Lampert Award. My own active literary
          practice keeps me in the loop about what publishers, grantors, and
          graduate programs are looking for. You or your publisher can reach out
          at any time to tell me about your project and learn more about my
          approach.{" "}
        </p>
        <SingleService
          reverse
          onEnter={() => {
            setIndexLine(true);
            console.log("index line visible");
          }}
          onLeave={() => {
            setIndexLine(false);
            console.log("index line NOT visible");
          }}
          items={indexLine}
          serviceTitle={"Transcription"}
        />
        <p>
          I’m a fast, accurate transcriber specializing in university and
          gallery clients with time-sensitive work on stigmatized topics. I’ve
          transcribed sensitive, highly-confidential audio for projects related
          to biomedical innovation, transgender health, hepatitis C, and
          HIV/AIDS. Previous clients include grunt gallery in Vancouver and the
          Johnson-Shoyama School of Public Policy at the University of
          Saskatchewan. I’ve also provided live captioning for nonprofit AGMs;
          contact me to discuss rates and make sure you’re using the best
          platform possible for your project or event.
        </p>
      </ServicesContainer>
    </Layout>
  );
}
