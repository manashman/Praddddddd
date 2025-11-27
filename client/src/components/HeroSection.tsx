import { motion } from "framer-motion";
import { ChevronDown, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CountdownTimer } from "./CountdownTimer";
import pradharshiniImage from "@assets/prad 2026 title new_1764267906090.png";

export function HeroSection() {
  const [, navigate] = useLocation();

  const goToEvents = () => {
    navigate("/events");
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-primary/60"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-secondary/60"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-accent/40"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Planet decorative element */}
      <motion.div
        className="absolute -right-20 top-1/4 w-64 h-64 rounded-full opacity-30 hidden lg:block"
        style={{
          background: "radial-gradient(circle at 30% 30%, hsl(270 60% 40%), hsl(250 50% 15%))",
          boxShadow: "inset -20px -20px 40px rgba(0,0,0,0.5), 0 0 60px hsl(270 80% 50% / 0.2)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbital ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-primary/60 box-glow-subtle"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Star className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm md:text-base font-medium text-muted-foreground tracking-widest uppercase">
            Where Glory Beckons
          </span>
          <Star className="w-4 h-4 text-primary animate-pulse" />
        </motion.div>

        {/* Main Title - Logo Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <img 
            src={pradharshiniImage} 
            alt="Pradharshini 2026" 
            className="h-32 md:h-40 lg:h-48 object-contain filter invert"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Step into a temporal journey of culture, creativity, and timeless celebration.
          <br className="hidden md:block" />
          History awaits your legacy.
        </motion.p>

        {/* Event Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/20 text-sm md:text-base font-medium">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-foreground">January 30, 31 & February 1, 2026</span>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="font-display text-sm tracking-wider px-8"
            onClick={goToEvents}
            data-testid="hero-explore-button"
          >
            EXPLORE EVENTS
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="font-display text-sm tracking-wider px-8 glass border-primary/30 hover:border-primary/50"
            onClick={() => window.open("https://drive.google.com/file/d/10d520nYkXtySwXjTiLEhFBtOwXx46arC/view?usp=sharing", "_blank")}
            data-testid="hero-rulebook-button"
          >
            RULE BOOK
          </Button>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <CountdownTimer targetDate="2026-01-30T09:00:00" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => {
            const aboutSection = document.querySelector("#about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          data-testid="scroll-indicator"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
