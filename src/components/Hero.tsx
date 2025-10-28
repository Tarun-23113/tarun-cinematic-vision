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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 parallax"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={heroImage}
          alt="Abstract 3D shape"
          className="w-full h-full object-cover opacity-40 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <div className="mb-6">
          <div className="inline-block px-6 py-2 rounded-full border border-primary/30 backdrop-blur-sm mb-8">
            <span className="text-sm text-primary-glow font-medium tracking-wider uppercase">
              Portfolio 2025
            </span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-glow">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Tarun Tiwari
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light tracking-wide">
          Video Editor • Visual Storyteller
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#work"
            className="px-8 py-4 rounded-lg bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(200_100%_50%/0.5)] font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg bg-secondary/10 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(320_100%_60%/0.5)] font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
