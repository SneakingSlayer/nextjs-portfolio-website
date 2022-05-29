import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";

//Components
import { Layout } from "../src/components/layout/Layout";
import { Hero } from "../src/components/hero/Hero";
import { About } from "../src/components/about/About";
import { Projects } from "../src/components/projects/Projects";
import { SplashScreen } from "../src/components/splashscreen/SplashScreen";
import { Banner } from "../src/components/banner/Banner";
import { Contact } from "../src/components/contact/Contact";
const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (count === 100) {
        return;
      }
      setCount(count + 1);
    }, 10);
  }, [count]);

  return (
    <>
      <Head>
        <title>Lance Endaya</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hi! I am Lance Endaya and I'm a Software Engineer primarily focused on enhancing your web
                experience. I recently graduated from Malayan Colleges, MAPUA as
                a Computer Science major."
        />
        <meta
          name="image"
          content="https://user-images.githubusercontent.com/78993861/153864330-acb09fc4-368c-4b3e-a68b-96300c8b08b9.PNG"
        />

        <meta property="og:title" content="Lance Endaya" />
        <meta
          property="og:description"
          content="Hi! I am Lance Endaya and I'm a Software Engineer primarily focused on enhancing your web
                experience. I recently graduated from Malayan Colleges, MAPUA as
                a Computer Science major."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/78993861/153864330-acb09fc4-368c-4b3e-a68b-96300c8b08b9.PNG"
        />
        <meta property="og:url" content="https://lanceendaya.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      {count < 97 ? (
        <SplashScreen count={count} />
      ) : (
        <Layout>
          <Hero />
          <About />
          <Projects />
          <Banner />
          <Contact />
        </Layout>
      )}
    </>
  );
};

export default Home;
