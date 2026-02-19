import { CONTENT } from ".../data";
import Organizers from "@/components/Organizers";
import Contacts from "@/components/Contacts";
import Team from "@/components/Team";

export default function AboutPage() {
  return (
    <div>
        <Team />
        <Organizers />
        <Contacts />
    </div>
  );
}