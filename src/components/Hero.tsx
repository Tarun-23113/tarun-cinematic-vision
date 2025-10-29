import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-cinematic.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
        }}
      >
        <img 
          src={heroImage} 
          alt="Tarun Tiwari - Video Editor"
          className="w-full h-full object-cover"
        />
        {/* Dark green overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#0D1F18]/90 via-[#0D1F18]/50 to-transparent"
        />
      </div>

      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold dust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl animate-fade-up">
          {/* Hero Text with Gradient Blend Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-serif">
            <span className="inline-block">Tarun </span>
            <span 
              className="inline-block bg-gradient-to-r from-[#C9A66B] via-[#EAD79B] to-transparent bg-clip-text text-transparent"
              style={{
                maskImage: "linear-gradient(to right, white 0%, white 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, white 0%, white 70%, transparent 100%)",
              }}
            >
              Tiwari
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 font-light tracking-[0.15em] text-muted-foreground">
            Video Editor • Visual Storyteller
          </p>

          <div className="flex gap-5 flex-wrap">
            <Button 
              size="lg"
              className="px-8 py-6 text-base font-medium"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </div>
    </section>
  );
};

export default Hero;
