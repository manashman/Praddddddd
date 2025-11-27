import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EventsSection } from "@/components/EventsSection";
import { VideosSection } from "@/components/VideosSection";
import { WhyAttendSection } from "@/components/WhyAttendSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Animated star background */}
      <StarBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <VideosSection />
        <EventsSection />
        <WhyAttendSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
