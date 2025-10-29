import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-3d.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Animated aurora gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(135deg, hsl(42, 39%, 61%), hsl(163, 62%, 46%), hsl(42, 39%, 61%))',
            backgroundSize: '200% 200%',
            animation: 'aurora 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute inset-0 parallax"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src={heroImage}
            alt="Abstract cinematic background"
            className="w-full h-full object-cover opacity-20 animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
      </div>

      {/* Gold dust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full border border-primary/40 backdrop-blur-sm mb-10 bg-background/30">
            <span className="text-sm text-primary font-medium tracking-[0.3em] uppercase">
              Portfolio 2025
            </span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
          <span 
            className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-shimmer"
            style={{
              backgroundSize: '200% auto',
              textShadow: '0 0 40px hsl(42 39% 61% / 0.3)',
            }}
          >
            Tarun Tiwari
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-14 font-light tracking-[0.1em]">
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Video Editor • Visual Storyteller
          </span>
        </p>

        <div className="flex gap-5 justify-center flex-wrap">
          <a
            href="#work"
            className="group px-8 py-4 rounded-lg bg-secondary border border-secondary text-background hover:bg-secondary-glow transition-all duration-300 font-medium relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 font-medium hover:shadow-[0_0_40px_hsl(42_39%_61%/0.4)]"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/60 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
