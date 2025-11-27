import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, Calendar, Sparkles } from "lucide-react";

const stats = [
  { icon: Calendar, value: "10+", label: "Years of Legacy" },
  { icon: Users, value: "5000+", label: "Participants" },
  { icon: Trophy, value: "50+", label: "Events" },
  { icon: Sparkles, value: "10L+", label: "Prize Pool" },
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
              About The Event
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-cosmic-text">A Cosmic Celebration</span>
              <br />
              <span className="text-foreground">of Culture & Creativity</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Pradharshini stands as one of the most prestigious cultural festivals in the region, 
                bringing together thousands of talented students from across the nation to showcase 
                their artistic prowess.
              </p>
              <p>
                For over a decade, we have been the launchpad for countless dreams, providing a 
                platform where creativity knows no bounds and cultural expression takes center stage.
              </p>
              <p>
                This year, we transcend earthly limits with our cosmic theme, inviting you to 
                explore the universe of possibilities that await at Pradharshini 25.
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

              {/* Logo text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-4xl md:text-5xl font-bold text-glow gradient-cosmic-text">
                    P25
                  </span>
                </div>
              </div>

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
