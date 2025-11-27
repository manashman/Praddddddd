import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Mic2, Network, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Users,
    title: "Network with 5000+ Students",
    description: "Connect with talented individuals from colleges across the nation and build lasting relationships.",
  },
  {
    icon: Award,
    title: "Win Prizes Worth 10L+",
    description: "Compete for incredible prizes, scholarships, and opportunities that can launch your career.",
  },
  {
    icon: Mic2,
    title: "Celebrity Performances",
    description: "Witness electrifying performances by renowned artists and celebrities from the entertainment industry.",
  },
  {
    icon: Network,
    title: "Industry Exposure",
    description: "Get noticed by industry professionals, sponsors, and talent scouts actively seeking fresh talent.",
  },
  {
    icon: Lightbulb,
    title: "Workshops & Masterclasses",
    description: "Learn from experts through exclusive workshops covering various art forms and skills.",
  },
  {
    icon: Heart,
    title: "Unforgettable Memories",
    description: "Create memories that will last a lifetime in an atmosphere of celebration and creativity.",
  },
];

export function WhyAttendSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32" ref={ref}>
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsl(270 80% 50% / 0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Join The Celebration
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-cosmic-text">Why Attend Pradharshini?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            More than just a cultural fest, it's an experience that transforms, inspires, and elevates.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 overflow-visible hover-elevate"
                data-testid={`benefit-card-${index + 1}`}
              >
                <CardContent className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
