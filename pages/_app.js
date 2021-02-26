import "../scss/typography.scss";
import { Client } from "../prismic-configuration";

export default function App({ Component, pageProps, footer }) {
  console.log(pageProps);
  return <Component {...pageProps} footer={footer} />;
}

export async function getInitialProps() {
  const footer = await Client().getSingle("footer");
  return {
    props: {
      footer,
    },
  };
}
