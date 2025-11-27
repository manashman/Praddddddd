import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Film } from "lucide-react";

export function VideosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [isInView]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="videos" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Latest Moments
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-cosmic-text">Videos & Highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experience the energy and excitement of Pradharshini through exclusive behind-the-scenes content and highlights
          </p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
        >
          {/* Instagram Video 1 */}
          <div className="w-full max-w-sm">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden glass border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-center h-96 bg-background/50">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DOOFV5tkhOV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                  data-instgrm-version="14"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderRadius: "3px",
                    boxShadow: "none",
                    display: "block",
                    margin: "0",
                    minWidth: "100%",
                    padding: "0",
                    width: "100%"
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Placeholder cards for future videos */}
          <div className="w-full max-w-sm">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden glass border border-primary/20 hover:border-primary/50 transition-colors h-96 flex flex-col items-center justify-center gap-4 p-6 text-center cursor-pointer group"
            >
              <Film className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">More Videos Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  Follow @medrenaline.kmc on Instagram for exclusive content
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full max-w-sm">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden glass border border-primary/20 hover:border-primary/50 transition-colors h-96 flex flex-col items-center justify-center gap-4 p-6 text-center cursor-pointer group"
            >
              <Film className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Behind the Scenes</h3>
                <p className="text-sm text-muted-foreground">
                  Stay tuned for exclusive backstage footage
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Instagram Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center p-8 rounded-xl glass border border-primary/20"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">Follow Us for Updates</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest updates, announcements, and exclusive content
          </p>
          <motion.a
            href="https://www.instagram.com/medrenaline.kmc/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow"
            data-testid="instagram-follow-button"
          >
            Follow @medrenaline.kmc on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
