import { ArrowDown, Sparkles, Code2, Palette, Figma, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const roles = ["Tech Student", "Web Designer", "Aspiring Frontend Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const floatingIcons = [
    { Icon: Code2, color: "text-coral", position: "top-1/4 left-[5%]", delay: "0s" },
    { Icon: Palette, color: "text-lavender", position: "top-1/3 right-[8%]", delay: "1s" },
    { Icon: Figma, color: "text-mint", position: "bottom-1/3 left-[10%]", delay: "2s" },
    { Icon: Layers, color: "text-soft-pink", position: "bottom-1/4 right-[12%]", delay: "1.5s" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-20 sm:py-24 md:py-28"
    >
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-peach/5 to-lavender/10" />
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-coral/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-lavender/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-mint/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-soft-yellow/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 -z-5 hidden md:block">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} animate-float opacity-20 hover:opacity-40 transition-opacity`}
            style={{ animationDelay: item.delay, animationDuration: "6s" }}
          >
            <item.Icon className={`w-12 h-12 lg:w-16 lg:h-16 ${item.color}`} strokeWidth={1.5} />
          </div>
        ))}
      </div>

      {/* Decorative Geometric Shapes */}
      <div className="absolute inset-0 -z-5 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[15%] w-2 h-2 sm:w-3 sm:h-3 bg-primary/30 rounded-full animate-pulse-soft" />
        <div className="absolute top-[25%] right-[20%] w-2 h-2 sm:w-3 sm:h-3 bg-lavender/40 rounded-full animate-pulse-soft animation-delay-2000" />
        <div className="absolute bottom-[30%] left-[25%] w-2 h-2 sm:w-3 sm:h-3 bg-mint/30 rounded-full animate-pulse-soft animation-delay-4000" />
        <div className="absolute bottom-[20%] right-[15%] w-2 h-2 sm:w-3 sm:h-3 bg-coral/30 rounded-full animate-pulse-soft animation-delay-3000" />
      </div>

      <div className="container mx-auto px-4 text-center max-w-6xl relative">
        <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
          
          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8 lg:text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-2 animate-fade-up shadow-soft">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 animate-fade-up animation-delay-100 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient block sm:inline mt-2 sm:mt-0">Arpita Singh</span>
            </h1>

            {/* Subtitle with Typing Animation */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 animate-fade-up animation-delay-200">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 min-h-[2rem] sm:min-h-[2.5rem]">
                <span className="text-gradient">{displayedText}</span>
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium">
                Aspiring Frontend Developer & Web Designer
              </p>
            </div>

            {/* Location */}
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 animate-fade-up animation-delay-300">
              📍 Karnataka, Bangalore
            </p>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 animate-fade-up animation-delay-300 leading-relaxed italic">
              "I design clean interfaces and bring ideas to life with creativity."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400 max-w-md mx-auto lg:mx-0 sm:max-w-none">
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base gradient-button text-primary-foreground hover:opacity-90 shadow-glow transition-all hover:scale-105 w-full sm:w-auto"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-card/50 backdrop-blur-sm hover:bg-card transition-all hover:scale-105 w-full sm:w-auto"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Profile Illustration */}
          <div className="hidden lg:block relative animate-fade-up animation-delay-200">
            <div className="relative w-64 h-64 xl:w-80 xl:h-80">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-coral/20 via-lavender/20 to-mint/20 animate-pulse-soft" />
              
              {/* Inner Circle with Border */}
              <div className="absolute inset-4 rounded-full border-4 border-dashed border-primary/20 animate-spin-slow" />
              
              {/* Avatar Circle */}
              <div className="absolute inset-8 rounded-full gradient-hero flex items-center justify-center shadow-glow">
                <div className="text-center">
                  <div className="font-display font-bold text-5xl xl:text-6xl text-primary-foreground mb-2">
                    AS
                  </div>
                  <div className="text-xs xl:text-sm text-primary-foreground/80 font-medium">
                    Developer
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full bg-card shadow-glow border border-primary/20 animate-float">
                <span className="text-xs font-bold text-primary">HTML</span>
              </div>
              <div className="absolute top-1/4 -left-6 px-3 py-1.5 rounded-full bg-card shadow-glow border border-lavender/30 animate-float animation-delay-2000">
                <span className="text-xs font-bold text-secondary-foreground">CSS</span>
              </div>
              <div className="absolute bottom-1/4 -right-6 px-3 py-1.5 rounded-full bg-card shadow-glow border border-mint/30 animate-float animation-delay-4000">
                <span className="text-xs font-bold text-accent-foreground">JS</span>
              </div>
              <div className="absolute -bottom-2 left-1/4 px-3 py-1.5 rounded-full bg-card shadow-glow border border-coral/30 animate-float animation-delay-3000">
                <span className="text-xs font-bold text-primary">React</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft hidden sm:flex">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs sm:text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
