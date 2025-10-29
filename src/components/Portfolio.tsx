import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

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
              className="group relative overflow-hidden rounded-2xl bg-card/60 border border-border hover:border-transparent transition-all duration-500 cursor-pointer interactive-card hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10 border-2 border-primary/50" />

              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-115 group-hover:opacity-95 group-hover:brightness-110"
                />
                
                {/* Dynamic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent group-hover:from-background/60 transition-all duration-500" />
                


                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-background text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  {project.category}
                </div>
              </div>
              
              {/* Enhanced project info */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {project.category}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1 transform">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Progress bar animation */}
                <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
