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
    for (let i = 0; i < 150; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
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
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(250,20%,5%)] via-[hsl(260,25%,8%)] to-[hsl(240,15%,3%)]" />
      
      {/* Nebula effects */}
      <div 
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(270 80% 50% / 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(220 90% 50% / 0.4) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(280 60% 50% / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            boxShadow: "0 0 6px 2px rgba(255,255,255,0.5), -20px 0 20px 2px rgba(255,255,255,0.3)",
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: 300, y: 300, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      ))}

      {/* Constellation lines - subtle decorative */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="white" strokeWidth="0.5" />
        <line x1="25%" y1="35%" x2="15%" y2="50%" stroke="white" strokeWidth="0.5" />
        <line x1="70%" y1="15%" x2="85%" y2="25%" stroke="white" strokeWidth="0.5" />
        <line x1="85%" y1="25%" x2="80%" y2="40%" stroke="white" strokeWidth="0.5" />
        <line x1="60%" y1="70%" x2="75%" y2="80%" stroke="white" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
