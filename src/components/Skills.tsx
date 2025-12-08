import { Code, Palette, Users, Brain, BookOpen, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const technicalSkills = [
    { name: "C", color: "bg-coral/20 text-coral border-coral/30" },
    { name: "Java", color: "bg-primary/20 text-primary border-primary/30" },
    { name: "Python", color: "bg-soft-yellow/30 text-foreground border-soft-yellow/50" },
    { name: "R", color: "bg-lavender/30 text-secondary-foreground border-lavender/50" },
    { name: "HTML", color: "bg-coral/20 text-coral border-coral/30" },
    { name: "CSS", color: "bg-mint/30 text-accent-foreground border-mint/50" },
    { name: "JavaScript", color: "bg-soft-yellow/30 text-foreground border-soft-yellow/50" },
    { name: "MySQL", color: "bg-lavender/30 text-secondary-foreground border-lavender/50" },
    { name: "Git & GitHub", color: "bg-muted text-muted-foreground border-border" },
  ];

  const coreInterests = [
    { icon: Palette, name: "Frontend Design", desc: "Creating beautiful interfaces" },
    { icon: Lightbulb, name: "UI/UX Aesthetics", desc: "User-centered design thinking" },
    { icon: Code, name: "Creative Development", desc: "Bringing ideas to life" },
  ];

  const otherStrengths = [
    { icon: Users, name: "Leadership", desc: "Guiding teams to success" },
    { icon: BookOpen, name: "Strong Academics", desc: "CGPA 9.2" },
    { icon: Brain, name: "Problem-Solving", desc: "Analytical thinking" },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-mint/30 text-accent-foreground text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            My Skills
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            What I Can Do 🚀
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            A mix of technical expertise and creative passion
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-12 sm:mb-16">
          <h3 className="font-display font-semibold text-xl sm:text-2xl mb-4 sm:mb-6 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto px-2">
            {technicalSkills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border font-medium text-xs sm:text-sm transition-all hover:scale-105 cursor-default ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Core Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {coreInterests.map((interest, index) => (
            <div
              key={index}
              className={`group p-5 sm:p-6 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all hover:-translate-y-2 duration-500 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl gradient-hero flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <interest.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h4 className="font-display font-semibold text-lg sm:text-xl mb-2">
                {interest.name}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">{interest.desc}</p>
            </div>
          ))}
        </div>

        {/* Other Strengths */}
        <div className="bg-card/50 rounded-3xl border border-border/50 p-5 sm:p-8">
          <h3 className="font-display font-semibold text-xl sm:text-2xl mb-4 sm:mb-6 text-center">
            Other Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {otherStrengths.map((strength, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-background/50"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lavender/20 flex items-center justify-center flex-shrink-0">
                  <strength.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm sm:text-base">{strength.name}</h5>
                  <p className="text-xs sm:text-sm text-muted-foreground">{strength.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
