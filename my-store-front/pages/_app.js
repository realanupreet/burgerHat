import Head from "next/head";
import { StoreProvider } from "../context/store-context";
import { DisplayProvider } from "../context/display-context";
import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <DisplayProvider>
        <Head>
          <title>Burger Hat | The best burgers in town</title>
          <meta name="description" content="The best burgers in town" />
          <link rel="icon" href="/fav2.PNG" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DisplayProvider>
    </StoreProvider>
  );
}

export default MyApp;
