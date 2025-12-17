import { motion } from "framer-motion";
import { Sparkles, ArrowUp, Mail, Instagram, Facebook, Twitter, Youtube, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Schedule", href: "#schedule" },
  { name: "Contact", href: "#contact" },
];

const eventCategories = [
  "Music",
  "Dance",
  "Drama",
  "Art",
  "Literary",
  "Technical",
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/medrenaline.kmc", label: "Instagram" },
  { icon: Mail, href: "mailto:medrenaline.2025@gmail.com", label: "Email" },
];

const contactInfo = [
  { label: "Rajan SA", phone: "8939276895" },
  { label: "Sindhuri", phone: "7448833936" },
  { label: "Muthu VS", phone: "9444971235" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll receive updates about Pradharshini 25.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="relative border-t border-border/50">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(to top, hsl(250 25% 5%) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Reach Us */}
          <div className="lg:col-span-1">
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">
              Reach Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Kilpauk Medical College</p>
                  <p className="text-muted-foreground">822, Poonamallee High Rd,</p>
                  <p className="text-muted-foreground">Kilpauk, Chennai,</p>
                  <p className="text-muted-foreground">Tamil Nadu 600010</p>
                </div>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors hover-elevate"
                    aria-label={social.label}
                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.label} className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{contact.label}</p>
                    <p className="text-xs text-muted-foreground">{contact.phone}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground break-all">studentcouncilkmc@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://chat.whatsapp.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-whatsapp"
                >
                  WhatsApp Group
                </a>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-display text-lg font-bold gradient-cosmic-text">
                PRADHARSHINI
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              The ultimate cultural extravaganza where creativity meets cosmic energy at Kilpauk Medical College.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; 2025 Govt Kilpauk Medical College and Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">medrenaline.2025@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass border border-primary/30 flex items-center justify-center text-primary hover:border-primary/50 transition-colors box-glow-subtle z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        data-testid="button-back-to-top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
