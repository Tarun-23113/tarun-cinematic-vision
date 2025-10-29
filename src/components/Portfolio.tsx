import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dynamic Reels",
    description: "High-energy social media content with rapid pacing and bold transitions",
    image: project1,
    category: "Short-form",
  },
  {
    title: "The Flow Edit",
    description: "Seamless motion graphics and fluid transitions showcasing creative flow",
    image: project2,
    category: "Motion Design",
  },
  {
    title: "Visual Narrative",
    description: "Emotional storytelling through cinematic color grading and pacing",
    image: project3,
    category: "Narrative",
  },
  {
    title: "Case Study Cut",
    description: "Professional documentary editing with interviews and b-roll integration",
    image: project4,
    category: "Documentary",
  },
  {
    title: "Explainer Vision",
    description: "Educational content with animated graphics and clear messaging",
    image: project5,
    category: "Educational",
  },
  {
    title: "The Mystery Sequence",
    description: "Suspenseful thriller editing with atmospheric tension building",
    image: project6,
    category: "Cinematic",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-32 px-4 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/3 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center animate-fade-up">
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight">
            Selected{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cinematic storytelling across formats and styles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card/60 border border-border hover:border-transparent transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gold rim light on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" 
                style={{
                  boxShadow: 'inset 0 0 0 2px hsl(42 39% 61% / 0.6), 0 0 40px hsl(42 39% 61% / 0.3)',
                }}
              />

              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
                />
                
                {/* Dimmed overlay with play icon */}
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-500" />
                
                {/* Play icon that glows gold on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-background/40 backdrop-blur-sm border border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_hsl(42_39%_61%/0.5)] transition-all duration-500">
                    <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-primary border-b-6 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Project info */}
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider mb-2 block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover gradient shift */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, hsl(42 39% 61% / 0.05), transparent 70%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
