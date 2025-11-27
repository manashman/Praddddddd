import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { TimelineSection } from "@/components/TimelineSection";
import { Footer } from "@/components/Footer";

export default function Schedule() {
  return (
    <div className="relative min-h-screen">
      {/* Animated star background */}
      <StarBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10 pt-24">
        <TimelineSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
