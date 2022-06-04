import Head from "next/head";
import About from "@/components/About";
import HeroPage from "@/components/HeroPage";
import Offers from "@/components/Offers";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pt-32  vp-600:pt-21 w-full">
      <Head>
        <title>Home | Inso</title>
      </Head>
      <HeroPage />
      <About />
      <Offers />
      <Subscription />
      <Footer />
    </div>
  );
}
