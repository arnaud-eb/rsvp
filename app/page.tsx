import dynamic from "next/dynamic";

import Hero from "@/components/Hero";

const List = dynamic(() => import("@/components/List"));
const CTA = dynamic(() => import("@/components/CTA"));

const Home = () => (
  <>
    <div className="hero-bg absolute left-0 top-0 w-full" />
    <main className="m-auto min-w-[350px] max-w-[1200px]">
      <Hero />
      {/* apres l'avoir celebre civilement le 21 juillet dernier, nous vous
    invitons 
    apres avoir passe le cap officel le 21 juiller 2023, il est
    temps de fete ca avec vous */}
      <List />
      <CTA />
    </main>
  </>
);

export default Home;
