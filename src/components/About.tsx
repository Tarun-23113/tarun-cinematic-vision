const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Subtle light reflections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Cinematic Video/Intro Section */}
        <div className="mb-20 animate-fade-up">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[0_0_60px_hsl(42_39%_61%/0.2)] group">
            {/* Video thumbnail placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-card via-background-dark to-card relative">
              <img
                src="/assets/hero-3d.jpg"
                alt="Cinematic intro"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
                      Crafting Emotion
                    </span>
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      Through Every Frame
                    </span>
                  </h3>
                </div>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_hsl(42_39%_61%/0.4)]">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="mb-16 text-center animate-fade-up">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm <span className="text-primary font-semibold">Tarun Tiwari</span>, a video editor who believes 
            every frame tells a story. I transform raw footage into compelling visual narratives 
            that captivate, inspire, and leave lasting impressions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up">
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "1M+", label: "Total Views" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Gold top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
