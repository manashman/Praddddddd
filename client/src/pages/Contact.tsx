import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      {/* Animated star background */}
      <StarBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10 pt-24">
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
