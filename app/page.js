import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MissionVision from "../components/MissionVision";
import Impact from "../components/Impact";
import TalentSearch from "../components/TalentSearch";
import Partners from "../components/Partners";
import BlogPreview from "../components/BlogPreview";
import MediaSection from "../components/MediaSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import About from "@/components/About";
import ContactPreview from "@/components/ContactPreview";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Impact />
      <TalentSearch />
      <Partners />
      <BlogPreview />
      <MediaSection />
      <CTA />
      <ContactPreview /> 
      <Footer />
    </main>
  );
}
