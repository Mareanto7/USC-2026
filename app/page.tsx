import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Quotes from "@/components/Quotes";
//import About from "@/components/About";
// import Agenda from "@/components/Agenda";
import Partners from "@/components/Partners";
import Organizers from "@/components/Organizers";
import FAQs from "@/components/FAQs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Quotes />
      <Partners />
      <Organizers />
      <FAQs />
    </>
  );
}
