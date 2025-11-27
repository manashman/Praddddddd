import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Music, 
  Mic2, 
  Palette, 
  Drama, 
  PenTool, 
  Camera,
  Gamepad2,
  Code
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    name: "Symphony of Stars",
    category: "Music",
    description: "Battle of bands, solo performances, and orchestral showcases that will resonate through the cosmos.",
    icon: Music,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "Celestial Dance",
    category: "Dance",
    description: "Classical, contemporary, and fusion dance competitions that defy gravity and inspire awe.",
    icon: Mic2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Nebula Art",
    category: "Art",
    description: "Painting, sketching, and digital art competitions that bring celestial visions to life.",
    icon: Palette,
    color: "from-pink-500 to-orange-500",
  },
  {
    id: 4,
    name: "Theatre Odyssey",
    category: "Drama",
    description: "Theatrical performances and street plays that take you on interstellar adventures.",
    icon: Drama,
    color: "from-red-500 to-yellow-500",
  },
  {
    id: 5,
    name: "Cosmic Words",
    category: "Literary",
    description: "Poetry, creative writing, and debate competitions for the wordsmiths of the universe.",
    icon: PenTool,
    color: "from-green-500 to-teal-500",
  },
  {
    id: 6,
    name: "Stellar Lens",
    category: "Photography",
    description: "Capture the beauty of the cosmos through your lens in our photography contest.",
    icon: Camera,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    name: "Pixel Galaxy",
    category: "Gaming",
    description: "E-sports tournaments and gaming competitions that test your reflexes across digital universes.",
    icon: Gamepad2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 8,
    name: "Code Cosmos",
    category: "Technical",
    description: "Hackathons, coding challenges, and tech competitions for the engineers of tomorrow.",
    icon: Code,
    color: "from-violet-500 to-purple-500",
  },
];

export function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Explore the Universe
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-cosmic-text">Featured Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From pulsating rhythms to visual masterpieces, discover the constellation of 
            events that await you at Pradharshini 25.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="events-grid">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="group h-full border-border/50 hover:border-primary/30 transition-all duration-300 overflow-visible hover-elevate"
                data-testid={`event-card-${event.id}`}
              >
                <CardContent className="p-6">
                  {/* Icon with gradient background */}
                  <div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <event.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {event.category}
                  </Badge>
                  
                  {/* Event Name */}
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {event.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>

                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at center, hsl(270 80% 60% / 0.05) 0%, transparent 70%)",
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            And many more events across various categories...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
