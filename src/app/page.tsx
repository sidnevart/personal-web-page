import { Navigation } from "@/components/navigation";
import { HeroSection } from "./sections/hero";
import { ProjectsSection } from "./sections/projects";
import { ExperienceSection } from "./sections/experience";
import { AboutSection } from "./sections/about";
import { ContactSection } from "./sections/contact";
import { Footer } from "./sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
