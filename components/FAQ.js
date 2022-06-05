import Head from "next/head";
import Link from "next/link";
import Layout from "../components/pageWrapper";
import styled from "styled-components";
import theme from "../components/Theme";

export default function FAQ(props) {
  return (
    <div>
      <h4 className="faq--question">{props.faqQuestion}</h4>
      <p className="faq--answer">{props.faqAnswer}</p>
    </div>
  );
}
