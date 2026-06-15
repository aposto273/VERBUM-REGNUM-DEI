import Navbar from "./features/home/components/Navbar";
import { Hero } from "./features/home/components/Hero";
import { ServicesSection } from "./features/services/components/ServicesSection";
import { AboutSection } from "./features/about/components/AboutSection";
import { ContactSection } from "./features/contact/components/ContactSection";
import { Footer } from "./features/home/components/Footer";
import { VisiMisi } from "./features/visimisi/components/visimisi";
import { ProgramStudiSection } from "./features/programstudi/components/programstudi";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <VisiMisi />
      <ProgramStudiSection />
      <AboutSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
