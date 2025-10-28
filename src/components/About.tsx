const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 animate-fade-up">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
            Crafting Stories Through{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Motion
            </span>
          </h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-up">
          <p>
            I'm Tarun Tiwari, a passionate video editor dedicated to transforming raw footage 
            into compelling visual narratives. My approach centers on the art of storytelling—where 
            every cut, transition, and effect serves to enhance the emotional journey of the viewer.
          </p>
          
          <p>
            With expertise in pacing, rhythm, and visual composition, I create content that doesn't 
            just look good—it feels right. Whether it's a 15-second social media reel or a 
            feature-length documentary, I bring the same level of precision and creative vision to 
            every project.
          </p>

          <p>
            My editing philosophy is simple: <span className="text-foreground font-semibold">every frame should have purpose</span>. 
            I specialize in creating visually engaging narratives that capture attention, 
            maintain momentum, and leave a lasting impact on audiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "1M+", label: "Total Views" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(200_100%_50%/0.2)]"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
