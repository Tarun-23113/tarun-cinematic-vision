import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Full-screen background image with parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out animate-slide-in-right"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)`,
        }}
      >
        <img 
          src={heroImage} 
          alt="Tarun Tiwari - Video Editor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vignette overlay for cinematic depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, hsl(var(--background-dark) / 0.6) 100%)`,
        }}
      />

      {/* Midnight green overlay gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent"
      />

      {/* Film grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content Container - Text on Left */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl animate-slide-in-left">
          {/* Main Heading - Bold Condensed Sans-Serif */}
          <h1 className="text-8xl md:text-9xl font-display font-black mb-4 leading-[0.9] tracking-tight uppercase">
            <span className="block text-foreground">TARUN</span>
            <span 
              className="block relative"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 50%, transparent 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TIWARI
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 font-light tracking-[0.2em] text-primary/80">
            Video Editor • Visual Storyteller
          </p>

          {/* CTA Buttons */}
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
              className="px-8 py-6 text-base font-medium border-primary/30 text-foreground hover:bg-primary/10"
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
