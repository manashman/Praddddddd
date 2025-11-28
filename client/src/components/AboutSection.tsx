import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, Calendar, Sparkles } from "lucide-react";
import auditoriomImage from "@assets/PHOTO-2025-09-29-19-55-36_1764335641092.jpeg";

const stats = [
  { icon: Calendar, value: "46+", label: "Years (Since 1978)" },
  { icon: Users, value: "30,000+", label: "Total Students" },
  { icon: Trophy, value: "100+", label: "Colleges" },
  { icon: Sparkles, value: "50+", label: "Event Categories" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              About Pradharshini
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-cosmic-text">Where Culture Thrives</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Conducted by Government Kilpauk Medical College (GKMC), Pradharshini is an intercollegiate cultural extravaganza where versatile talents converge to illustrate their flair.
              </p>
              <p>
                Ever since its inception in 1978, Pradharshini has spread its roots across Tamil Nadu and the rest of the country at large. After a brief hiatus, Pradharshini, the crown jewel of GKMC, returned and has once again risen like a phoenix to its former glory.
              </p>
              <p>
                Pradharshini, an exhibition of cultural arts, is one of South India's biggest cultural festivals and is the biggest event conducted by a South Indian medical college. Spanning music shows, variety and choreo nights, fashion parades, and numerous casual contests, it remains a beacon of artistic excellence.
              </p>
            </div>

            {/* Mission statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 glass rounded-xl border border-primary/20"
            >
              <p className="text-foreground italic text-lg">
                "To ignite the spark of creativity and cultural excellence in every participant, 
                creating memories that shine as bright as the stars."
              </p>
              <p className="text-primary font-medium mt-2">— Team Pradharshini</p>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Galaxy swirl effect */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-secondary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner ring */}
              <motion.div
                className="absolute inset-16 rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Center glow */}
              <div 
                className="absolute inset-24 rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(270 80% 60% / 0.4) 0%, hsl(220 90% 55% / 0.2) 50%, transparent 70%)",
                  boxShadow: "0 0 60px hsl(270 80% 60% / 0.3), 0 0 100px hsl(270 80% 60% / 0.2)",
                }}
              />

              {/* Logo Image */}
              <motion.div 
                className="absolute inset-8 flex items-center justify-center rounded-lg overflow-hidden border-4 border-primary/60 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              >
                <img 
                  src={auditoriomImage} 
                  alt="Kilpauk Medical College Auditorium" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Orbiting dots */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary box-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 200px" }}
              />
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 150px" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          data-testid="about-stats"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 glass rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-display text-2xl md:text-3xl font-bold gradient-cosmic-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
