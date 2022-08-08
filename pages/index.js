import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import requests from "../utils/requests";

export default function Home({ mmoRPG }) {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Gameflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <section>
          {/* Rows */}
          {/* Rows */}
          {/* Rows */}
          {/* Rows */}
          {/* Rows */}
          {/* Rows */}
        </section>
      </main>
      {/* Modal */}
    </div>
  );
}

// export const getServerSideProps = async () =>

export async function getServerSideProps() {
  const [mmoRPG, strategy, moba, racing, survival, popular] = await Promise.all(
    [
      fetch(requests.fetchMMOrpg).then((res) => res.json()),
      fetch(requests.fetchStrategy).then((res) => res.json()),
      fetch(requests.fetchMOBA).then((res) => res.json()),
      fetch(requests.fetchRacing).then((res) => res.json()),
      fetch(requests.fetchSurvival).then((res) => res.json()),
      fetch(requests.fetchPopular).then((res) => res.json()),
    ]
  );

  return {
    props: {
      mmoRPG,
      strategy,
      moba,
      survival,
      racing,
      popular,
    },
  };
}
