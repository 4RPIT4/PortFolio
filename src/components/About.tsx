import { Calendar, MapPin, GraduationCap, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const details = [
    { icon: Calendar, label: "Born", value: "December 23, 2005" },
    { icon: MapPin, label: "Location", value: "Uttar Pradesh, India" },
    { icon: GraduationCap, label: "Education", value: "BE CSE, 4th Semester" },
    { icon: Heart, label: "Passion", value: "Frontend Design" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 gradient-section" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-lavender/30 text-secondary-foreground text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            About Me
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            Get to Know Me ✨
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            A glimpse into who I am and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Image Area */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
              {/* Decorative rings - hidden on mobile for performance */}
              <div className="hidden sm:block absolute inset-0 rounded-full border-4 border-dashed border-primary/20 animate-spin-slow" />
              <div className="hidden sm:block absolute inset-4 rounded-full border-4 border-dashed border-lavender/30 animate-spin-slower" />
              
              {/* Avatar placeholder */}
              <div className="absolute inset-4 sm:inset-8 rounded-full gradient-hero flex items-center justify-center shadow-glow">
                <span className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-primary-foreground">
                  AS
                </span>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 right-2 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-card shadow-card border border-border/50 animate-float">
                <span className="text-xs sm:text-sm font-medium">🎨 Designer</span>
              </div>
              <div className="absolute bottom-4 -left-2 sm:-left-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-card shadow-card border border-border/50 animate-float animation-delay-2000">
                <span className="text-xs sm:text-sm font-medium">💻 Developer</span>
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-card shadow-card border border-border/50 animate-float animation-delay-4000">
                <span className="text-xs sm:text-sm font-medium">📚 Student</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              Arpita is a 4th-semester BE CSE student at NITTE Meenakshi Institute of Technology, building her foundations step by step — from basics to advanced concepts. With a CGPA of <span className="font-bold text-primary">9.2</span>, she blends strong academics with creativity.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              She enjoys frontend design, has solid leadership skills, and loves turning ideas into clean, visually appealing interfaces.
            </p>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-card/50 border border-border/50"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{detail.label}</p>
                    <p className="font-medium text-xs sm:text-sm">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
