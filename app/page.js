"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/HeroBanner";
import JoinWaitlist from "./pages/JoinWaitlist";
import Container1 from "./components/Container1";
import MobileScroll from "./components/MobileScroll";
import Footer from "./components/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";
export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords.join(", ")} />
      </Head>

      <DefaultSeo {...SEO} />
      <HeroBanner></HeroBanner>
      {/* <JoinWaitlist /> */}
      <Container1></Container1>

      <div>
        <MobileScroll></MobileScroll>
      </div>
      <Footer></Footer>
    </div>
  );
}
