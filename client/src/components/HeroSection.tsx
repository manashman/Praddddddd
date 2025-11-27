import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronDown, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import { CountdownTimer } from "./CountdownTimer";
import pradharshiniImage from "@assets/prad 2026 title new_1764267906090.png";

export function HeroSection() {
  const [, navigate] = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const goToEvents = () => {
    navigate("/events");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x * 0.05);
    mouseY.set(y * 0.05);
    setMousePosition({ x, y });
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Interactive cursor glow */}
      <motion.div
        className="fixed w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(40 80% 55% / 0.4) 0%, transparent 70%)",
          left: cursorPosition.x - 160,
          top: cursorPosition.y - 160,
        }}
        animate={{}}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Multiple glowing orbs for depth */}
      <motion.div
        className="absolute top-20 right-1/4 w-40 h-40 rounded-full pointer-events-none opacity-15 blur-2xl"
        style={{
          background: "radial-gradient(circle, hsl(260 40% 50% / 0.3) 0%, transparent 70%)",
        }}
        animate={{ 
          y: [0, 30, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-32 h-32 rounded-full pointer-events-none opacity-20 blur-2xl"
        style={{
          background: "radial-gradient(circle, hsl(35 70% 55% / 0.4) 0%, transparent 70%)",
        }}
        animate={{ 
          y: [0, -25, 0],
          x: [0, -15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating decorative elements - now interactive */}
      <motion.div
        className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-primary/60"
        animate={{ y: [-20, 20, -20], x: [mousePosition.x * 0.02, -mousePosition.x * 0.02] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-secondary/60"
        animate={{ y: [20, -20, 20], x: [-mousePosition.x * 0.02, mousePosition.x * 0.02] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-accent/40"
        animate={{ y: [-15, 15, -15], x: [mousePosition.x * 0.015, -mousePosition.x * 0.015] }}
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
        {/* Pre-title with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 mb-6 group"
        >
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="origin-center"
          >
            <Star className="w-5 h-5 text-primary animate-glow-pulse" />
          </motion.div>
          <motion.span 
            className="text-sm md:text-base font-medium text-primary tracking-widest uppercase animate-text-glow"
            whileHover={{ 
              textShadow: "0 0 12px hsl(40 80% 55% / 0.8), 0 0 24px hsl(260 40% 50% / 0.5)",
              letterSpacing: "0.15em",
              scale: 1.05
            }}
          >
            Where Glory Beckons
          </motion.span>
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="origin-center"
          >
            <Star className="w-5 h-5 text-primary animate-glow-pulse" />
          </motion.div>
        </motion.div>

        {/* Main Title - Logo Image with glow */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center mb-6 relative"
          style={{ x: mouseX, y: mouseY }}
        >
          {/* Glow background */}
          <motion.div
            className="absolute -inset-20 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img 
            src={pradharshiniImage} 
            alt="Pradharshini 2026" 
            className="h-32 md:h-40 lg:h-48 object-contain filter invert relative z-10"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            whileHover={{
              textShadow: "0 0 12px hsl(40 80% 55% / 0.3)",
              scale: 1.02,
              color: "hsl(40 80% 55%)"
            }}
            className="cursor-pointer transition-colors"
          >
            Step into a temporal journey of culture, creativity, and timeless celebration.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="hidden md:block"
            whileHover={{
              textShadow: "0 0 12px hsl(260 40% 50% / 0.4)",
              scale: 1.02,
              color: "hsl(260 40% 50%)"
            }}
          >
            History awaits your legacy.
          </motion.p>
        </motion.div>

        {/* Event Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/20 text-sm md:text-base font-medium cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              borderColor: "hsl(40 80% 55%)",
              boxShadow: "0 0 20px hsl(40 80% 55% / 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-foreground">January 30, 31 & February 1, 2026</span>
          </motion.span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Button glow on hover */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg opacity-0 blur group-hover:opacity-75 transition-opacity duration-300"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Button 
              size="lg" 
              className="font-display text-sm tracking-wider px-8 shadow-lg hover:shadow-primary/50 relative"
              onClick={goToEvents}
              data-testid="hero-explore-button"
            >
              EXPLORE EVENTS
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Secondary button glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-lg opacity-0 blur group-hover:opacity-50 transition-opacity duration-300"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <Button 
              size="lg" 
              variant="outline"
              className="font-display text-sm tracking-wider px-8 glass border-primary/30 hover:border-primary/50 relative"
              onClick={() => window.open("https://drive.google.com/file/d/10d520nYkXtySwXjTiLEhFBtOwXx46arC/view?usp=sharing", "_blank")}
              data-testid="hero-rulebook-button"
            >
              RULE BOOK
            </Button>
          </motion.div>
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
