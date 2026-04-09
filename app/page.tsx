import { Nav } from "@/components/Nav";
import { HeroMFE } from "@/components/mfe/HeroMFE";
import { MarqueeBanner } from "@/components/mfe/MarqueeBanner";
import { SkillsMFE } from "@/components/mfe/SkillsMFE";
import { ExperienceMFE } from "@/components/mfe/ExperienceMFE";
import { ContactMFE } from "@/components/mfe/ContactMFE";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <HeroMFE />
      <MarqueeBanner />
      <SkillsMFE />
      <ExperienceMFE />
      <ContactMFE />
      <Footer />
    </main>
  );
}