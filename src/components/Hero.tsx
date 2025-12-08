import { ArrowDown, Sparkles } from "lucide-react";
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

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-4"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-coral/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-lavender/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-mint/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-20 text-center max-w-5xl">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-6 sm:mb-8 animate-fade-up">
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
        <div className="space-y-2 mb-6 sm:mb-8 animate-fade-up animation-delay-200">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 min-h-[2rem] sm:min-h-[2.5rem]">
            <span className="text-gradient">{displayedText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Location */}
        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 animate-fade-up animation-delay-300">
          📍 Uttar Pradesh, India
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up animation-delay-400 max-w-md mx-auto sm:max-w-none">
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
