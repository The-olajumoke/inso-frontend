import Head from "next/head";
import About from "@/components/About";
import HeroPage from "@/components/HeroPage";
import Footer from "@/components/Footer";
import InsoCreates from "@/components/InsoCreates";
import PostWithEase from "@/components/PostWithEase";
import TrackEngagement from "@/components/TrackEngagement";

export default function Home() {
  return (
    <div className=" w-screen flex flex-col justify-center overflow-hidden">
      <Head>
        <title>Home | Inso</title>
      </Head>
      <HeroPage />
      <About />
      <InsoCreates />
      <PostWithEase />
      <TrackEngagement />
      <Footer />
    </div>
  );
}

// "name": "inso",
//   "version": "0.1.0",