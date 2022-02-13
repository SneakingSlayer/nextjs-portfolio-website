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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
