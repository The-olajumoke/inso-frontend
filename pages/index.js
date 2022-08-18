import Head from "next/head";
import About from "@/components/About";
import HeroPage from "@/components/HeroPage";
import Offers from "@/components/Offers";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";
import InsoCreates from "@/components/InsoCreates";
import PostWithEase from "@/components/PostWithEase";
import TrackEngagement from "@/components/TrackEngagement";

export default function Home() {
  return (
    <div className=" w-screen border-4">
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
