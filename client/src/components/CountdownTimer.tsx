import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto" data-testid="countdown-timer">
      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 text-center">
        Countdown to Launch
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="glass border border-primary/20 rounded-xl p-4 md:p-6 text-center box-glow-subtle transition-all duration-300 group-hover:border-primary/40">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, hsl(270 80% 60% / 0.1) 0%, transparent 70%)",
                }}
              />
              
              <motion.span
                key={unit.value}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="relative block font-display text-3xl md:text-4xl lg:text-5xl font-bold gradient-cosmic-text"
                data-testid={`countdown-${unit.label.toLowerCase()}`}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              <span className="relative text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2 block">
                {unit.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
