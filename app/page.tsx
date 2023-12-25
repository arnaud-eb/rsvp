import dynamic from "next/dynamic";

import Hero from "@/components/Hero";

const Title = dynamic(() => import("@/components/Title"));
const List = dynamic(() => import("@/components/List"));
const CTA = dynamic(() => import("@/components/CTA"));

const Home = () => (
  <>
    <div className="hero-bg absolute left-0 top-0 w-full" />
    <main className="m-auto min-w-[350px] max-w-[1200px]">
      <Hero />
      <Title />
      <List />
      <CTA />
    </main>
  </>
);

export default Home;
