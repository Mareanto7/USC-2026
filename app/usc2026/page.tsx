import { CONTENT } from "@/data";
import Partners from "@/components/Partners";
import Hero2 from "@/components/Hero2";
import Slide1 from "@/components/Slide1";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";
import Slide4 from "@/components/Slide4";
import FAQs from "@/components/FAQs";
import Eventsplan from "@/components/Eventsplan";


export default function USC2026Page() {
  return (
    <div>
    <Hero2 />
    <Slide1 />
    <Slide2 />
    <Slide3 />
    <Slide4 />
    <Eventsplan />
    <Partners />
    <FAQs />
    </div>
  );
}