import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Award, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const editions = [
  {
    year: 2022,
    title: "The Genesis",
    icon: Award,
    description: "Pradharshini marked its triumphant debut as a grand cultural celebration at Kilpauk Medical College. What began as a vision to unite artistic talents across the nation transformed into an unforgettable spectacle of creativity and brilliance. With over 3000 participants and 40 events, it set the foundation for what would become one of the premier cultural festivals in the region.",
    highlights: [
      "3000+ Participants",
      "40+ Events",
      "₹5L Prize Pool",
      "15+ Colleges"
    ]
  },
  {
    year: 2023,
    title: "The Ascension",
    icon: Users,
    description: "Building on the success of the inaugural edition, Pradharshini 2023 soared to new heights. The festival expanded exponentially, welcoming 4500 participants from across the nation. With 45 meticulously curated events and an enhanced prize pool, it became the talk of the cultural circuit. The second edition proved that Pradharshini was here to stay, establishing itself as a beacon of cultural excellence.",
    highlights: [
      "4500+ Participants",
      "45 Events",
      "₹7.5L Prize Pool",
      "25+ Colleges"
    ]
  },
  {
    year: 2024,
    title: "The Legacy",
    icon: Zap,
    description: "Pradharshini 2024 etched itself into history as the most spectacular edition yet. With record-breaking participation of 5000+ competitors and a staggering 50 diverse events spanning multiple disciplines, it redefined what a college cultural festival could be. The enhanced infrastructure, world-class organization, and unwavering commitment to excellence made it an unforgettable journey through time and culture.",
    highlights: [
      "5000+ Participants",
      "50 Events",
      "₹10L Prize Pool",
      "40+ Colleges"
    ]
  }
];

function EditionCard({ edition, index }: { edition: typeof editions[0]; index: number }) {
  const Icon = edition.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-testid={`edition-card-${edition.year}`}
    >
      <Card className="glass border border-border/50 hover:border-primary/30 transition-colors h-full">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {edition.year}
              </h3>
              <p className="text-primary text-sm font-semibold">{edition.title}</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {edition.description}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {edition.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-background/40 border border-border/30"
              >
                <p className="text-xs font-semibold text-primary mb-1">●</p>
                <p className="text-sm font-medium text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              Our Journey
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-cosmic-text">Pradharshini Legacy</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A chronicle of excellence, celebrating three years of cultural revolution at Kilpauk Medical College. From humble beginnings to record-breaking achievements, witness the evolution of a festival that changed the cultural landscape.
            </p>
          </motion.div>

          {/* Editions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editions.map((edition, index) => (
              <EditionCard key={edition.year} edition={edition} index={index} />
            ))}
          </div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 md:p-12 rounded-xl glass border border-primary/20"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                The Impact
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Over three glorious editions, Pradharshini has touched the lives of 12,500+ participants, united 80+ colleges, and distributed ₹22.5 lakhs in prize money. What started as a dream has blossomed into a movement—a celebration of talent, creativity, and the indomitable spirit of youth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">12,500+</p>
                  <p className="text-muted-foreground">Total Participants</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">135+</p>
                  <p className="text-muted-foreground">Total Events</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">₹22.5L</p>
                  <p className="text-muted-foreground">Prize Distribution</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
