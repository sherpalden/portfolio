import Head from "next/head";
import CustomerRoute from "../components/hoc/withCustomerRoute";
import { Banner } from "../components/molecules/Banner";
import { Skills } from "../components/molecules/Skills";
import { Projects } from "../components/molecules/Projects";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Palden Sherpa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};

export default CustomerRoute(Home);
