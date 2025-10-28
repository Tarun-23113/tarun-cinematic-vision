import { Film, Youtube, FileVideo, Presentation } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Short-form Content Editing",
    description: "Instagram Reels, TikToks, and YouTube Shorts optimized for maximum engagement and viral potential",
    features: ["Quick cuts", "Trending effects", "Caption integration", "Platform optimization"],
  },
  {
    icon: Youtube,
    title: "YouTube Long-form Editing",
    description: "Professional YouTube videos with compelling storytelling, smooth pacing, and retention-focused editing",
    features: ["Intro/outro creation", "B-roll integration", "Color grading", "Sound design"],
  },
  {
    icon: FileVideo,
    title: "Documentary & Case Study",
    description: "In-depth storytelling for documentaries, interviews, and corporate case studies with cinematic quality",
    features: ["Interview editing", "Narrative flow", "Archival integration", "Professional polish"],
  },
  {
    icon: Presentation,
    title: "Explainer & Educational Videos",
    description: "Clear, engaging educational content with motion graphics and animated elements that simplify complex topics",
    features: ["Motion graphics", "Visual aids", "Clear pacing", "Brand alignment"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center animate-fade-up">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Services
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
            What I{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive video editing services tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(200_100%_50%/0.2)] group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-[0_0_20px_hsl(200_100%_50%/0.4)]">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
