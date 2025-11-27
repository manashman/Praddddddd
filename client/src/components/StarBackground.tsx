import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
}

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = [];
    for (let i = 0; i < 100; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        animationDelay: Math.random() * 5,
      });
    }
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newShootingStar: ShootingStar = {
        id: Date.now(),
        startX: Math.random() * 50,
        startY: Math.random() * 30,
      };
      setShootingStars(prev => [...prev, newShootingStar]);
      
      setTimeout(() => {
        setShootingStars(prev => prev.filter(s => s.id !== newShootingStar.id));
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Temporal gradient - warm vintage tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,30%,6%)] via-[hsl(35,40%,10%)] to-[hsl(30,20%,8%)]" />
      
      {/* Temporal rifts - indigo and bronze glows */}
      <div 
        className="absolute top-20 left-1/3 w-[700px] h-[700px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(260 40% 50% / 0.25) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full opacity-12"
        style={{
          background: "radial-gradient(circle, hsl(40 80% 50% / 0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(35 70% 55% / 0.12) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Temporal echoes (dots representing time moments) */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-amber-200"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 3}px hsl(40 80% 55% / 0.4)`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.2, star.opacity],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Temporal waves (moving through time) */}
      {shootingStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            background: "hsl(40 80% 55%)",
            boxShadow: "0 0 12px 3px hsl(40 80% 55% / 0.6), -30px 0 30px 5px hsl(260 40% 50% / 0.3)",
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: 400, y: 350, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}

      {/* Gear pattern - subtle decorative temporal mechanism */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <circle cx="15%" cy="25%" r="80" fill="none" stroke="hsl(40 80% 55%)" strokeWidth="1" />
        <circle cx="15%" cy="25%" r="60" fill="none" stroke="hsl(40 80% 55%)" strokeWidth="1" opacity="0.5" />
        <circle cx="75%" cy="70%" r="100" fill="none" stroke="hsl(35 70% 60%)" strokeWidth="1" />
        <circle cx="75%" cy="70%" r="70" fill="none" stroke="hsl(35 70% 60%)" strokeWidth="1" opacity="0.5" />
        <line x1="5%" y1="10%" x2="20%" y2="30%" stroke="hsl(260 40% 50%)" strokeWidth="0.8" opacity="0.4" />
        <line x1="70%" y1="50%" x2="85%" y2="75%" stroke="hsl(260 40% 50%)" strokeWidth="0.8" opacity="0.4" />
      </svg>
    </div>
  );
}
