import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";

import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Products />
        <Gallery />
        <Partners />
        <Contact />
      </Layout>
      <style global jsx>{`
        body {
          background: black;
          position: relative;
          z-index: 30;
        }
      `}</style>
    </>
  );
}
