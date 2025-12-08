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
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-lavender/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-mint/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-20 text-center">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Welcome to my portfolio
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-up animation-delay-100">
          Hi, I'm{" "}
          <span className="text-gradient">Arpita Singh</span>
        </h1>

        {/* Subtitle with Typing Animation */}
        <div className="space-y-2 mb-8 animate-fade-up animation-delay-200">
          <p className="text-xl md:text-2xl font-medium text-foreground/80 h-8">
            <span className="text-gradient">{displayedText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Location */}
        <p className="text-muted-foreground mb-10 animate-fade-up animation-delay-300">
          📍 Uttar Pradesh, India
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 gradient-button text-primary-foreground hover:opacity-90 shadow-glow transition-all hover:scale-105"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 bg-card/50 backdrop-blur-sm hover:bg-card transition-all hover:scale-105"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
