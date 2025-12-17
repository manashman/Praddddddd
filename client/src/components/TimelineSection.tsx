import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Sun, Moon, Stars } from "lucide-react";

const timelineEvents = [
  {
    day: "Day 1",
    date: "January 30, 2025",
    title: "Music Day",
    description: "Grand Inaugration with music performances and perlims of all categories",
    icon: Sun,
    highlights: ["Solo and Duet Singing", "Beatboxing", "Solo Instrumental", "Battle of Bands", "Pro Show"],
  },
  {
    day: "Day 2",
    date: "January 31, 2025",
    title: "Theatre Arts Day",
    description: "A spectacular day celebrating the performing arts with theatrical performances and competitions.",
    icon: Stars,
    highlights: ["Channel Surfing", "Variety", "Adzap", "Shipwreck", "Monoacting"],
  },
  {
    day: "Day 3",
    date: "February 1, 2025",
    title: "Music Day",
    description: "Concluding celebrations with grand music performances and cultural showcases.",
    icon: Moon,
    highlights: ["Grand finale", "Music performances", "Prize distribution", "Closing ceremony"],
  },
];

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Mark Your Calendar
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-cosmic-text">Event Schedule</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three days of non-stop action, creativity, and celebration under the cosmic sky.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" data-testid="event-timeline">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.day}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-testid={`timeline-event-${index + 1}`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className={`glass border border-border/50 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  {/* Day badge */}
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-display text-sm text-primary font-semibold">{event.day}</span>
                    <span className="text-muted-foreground text-sm">— {event.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {event.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {event.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center icon */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full glass border border-primary/30 flex items-center justify-center box-glow-subtle"
                >
                  <event.icon className="w-5 h-5 text-primary" />
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
