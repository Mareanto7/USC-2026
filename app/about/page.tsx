import { CONTENT } from "@/data";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Cards from "@/components/Cards";

export default function AboutPage() {
  return (
      <div>
          <About/>
          <Cards/>
          <Timeline />
      </div>
  );
}