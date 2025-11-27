import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { 
  Music, 
  Mic2, 
  Palette, 
  Drama, 
  PenTool, 
  Camera,
  Gamepad2,
  Code,
  Trophy,
  Users,
  Calendar,
  MapPin
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const eventCategories = [
  {
    id: 1,
    name: "Dance",
    title: "Temporal Motion",
    icon: Mic2,
    description: "Classical, contemporary, and fusion dance competitions showcasing movement through time.",
    events: [
      { name: "Solo Choreo" },
      { name: "Duet Choreo" },
      { name: "Adapt Tunes" },
      { name: "Replica" },
      { name: "Traditional Group Dance" },
      { name: "Western Group Dance" },
    ]
  },
  {
    id: 2,
    name: "Music",
    title: "Symphony of Time",
    icon: Music,
    description: "Battle of bands, solo performances, vocal competitions, and orchestral showcases across multiple eras of music.",
    events: [
      { name: "Solo Singing" },
      { name: "Duet Singing" },
      { name: "Solo Instrumentals" },
      { name: "Beatboxing" },
      { name: "Battle of Bands" },
    ]
  },
  {
    id: 3,
    name: "Theatre",
    title: "Theatre Chronicles",
    icon: Drama,
    description: "Theatrical performances and street plays depicting historical narratives and contemporary stories.",
    events: [
      { name: "Variety" },
      { name: "Shipwreck" },
      { name: "Channel Surfing" },
      { name: "Adzap" },
      { name: "Mimicry" },
      { name: "Monoacting" },
      { name: "Rangoli" },
      { name: "Gasless Cooking" },
      { name: "Antakshari" },
      { name: "Connexions" },
      { name: "Movie Spoof" },
    ]
  },
  {
    id: 4,
    name: "Fashion",
    title: "Canvas of Ages",
    icon: Palette,
    description: "Fashion and artistic performances bringing style and creativity to life.",
    events: [
      { name: "Fashion Parade" },
      { name: "Mehendi" },
      { name: "Face Painting" },
      { name: "Body Building" },
      { name: "Soap Carving" },
    ]
  },
  {
    id: 5,
    name: "Quiz",
    title: "Minds of Time",
    icon: Code,
    description: "Knowledge competitions testing expertise across diverse domains.",
    events: [
      { name: "GK Quiz" },
      { name: "Fandom Quiz" },
      { name: "Anime Quiz" },
    ]
  },
  {
    id: 6,
    name: "Literary",
    title: "Words Across Time",
    icon: PenTool,
    description: "Poetry, creative writing, debate, and storytelling competitions in Tamil and English.",
    events: [
      { name: "Tamil Kavithai" },
      { name: "Kaviarangam" },
      { name: "Vaarthail Vettai" },
      { name: "Tamil Debate" },
      { name: "Tamil Extempore" },
      { name: "Tamil Creative Writing" },
      { name: "English Debate" },
      { name: "English Extempore" },
      { name: "English Creative Writing" },
      { name: "Flash Fiction" },
      { name: "Block & Tackle" },
      { name: "English Poetry" },
      { name: "English Performance Poetry" },
    ]
  },
  {
    id: 7,
    name: "Online",
    title: "Digital Arenas",
    icon: Camera,
    description: "Digital competitions showcasing creativity in photography, film, and design.",
    events: [
      { name: "Photography" },
      { name: "Short Film" },
      { name: "Reels" },
      { name: "Digital Art" },
      { name: "Trailer Making" },
      { name: "Book Cover Designing" },
      { name: "Movie Frame Recreation" },
    ]
  },
];

function EventCard({ category, index }: { category: typeof eventCategories[0]; index: number }) {
  const Icon = category.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-testid={`event-card-${category.id}`}
    >
      <Card className="glass border border-border/50 hover:border-primary/30 transition-colors h-full overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <Badge className="mb-2" variant="secondary">{category.name}</Badge>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {category.title}
              </h3>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {category.description}
          </p>

          <div className="space-y-2">
            <h4 className="font-semibold text-foreground text-sm mb-3">Events in this Category:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.events.map((event, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-background/40 border border-border/30 hover:border-primary/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="font-medium text-foreground text-sm">{event.name}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Events() {
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
              Cultural Epochs
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-cosmic-text">Event Categories</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              Explore our diverse range of cultural, artistic, and technical events spanning multiple disciplines. Each category offers unique opportunities to showcase talent and compete at the highest level.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {eventCategories.map(category => (
                <Badge key={category.id} variant="outline" className="px-3 py-1.5">
                  {category.name}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {eventCategories.map((category, index) => (
              <EventCard key={category.id} category={category} index={index} />
            ))}
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 p-8 md:p-12 rounded-xl glass border border-primary/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Prize Pool</h3>
                  <p className="text-muted-foreground text-sm">Prizes worth ₹10+ Lakhs to be distributed across all categories</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Participants</h3>
                  <p className="text-muted-foreground text-sm">5000+ participants from across the nation</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Event Dates</h3>
                  <p className="text-muted-foreground text-sm">January 30 - February 1, 2026</p>
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
