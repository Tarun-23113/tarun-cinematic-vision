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
    <section id="work" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center animate-fade-up">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
            Selected{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent projects spanning various styles and formats
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
