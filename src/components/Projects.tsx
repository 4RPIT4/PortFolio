import { ExternalLink, Github, Globe, Database, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Yukti",
      description:
        "SIH project: Smart College Management System using AI to enhance student engagement and streamline administrative tasks.",
      tags: ["HTML5", "CSS3", "JavaScript","Node.js","MongoDB","React Js","Tailwind CSS"],
      icon: Globe,
      color: "from-coral/20 to-soft-pink/20",
      borderColor: "border-coral/30",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
    },
    {
      title: "To-Do List Web App",
      description:
        "A basic JavaScript application allowing users to add, edit, and delete tasks with a minimal, clean UI.",
      tags: ["Vanila JavaScript", "HTML", "CSS"],
      icon: CheckSquare,
      color: "from-mint/20 to-soft-yellow/20",
      borderColor: "border-mint/30",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop",
    },
    {
          title: "Hostel Management System",
      description:
        "A mini project demonstrating CRUD operations using MySQL for storing student records and Java for backend logic.",
      tags: ["MySQL", "Java", "CRUD"],
      icon: Database,
      color: "from-lavender/20 to-primary/20",
      borderColor: "border-lavender/30",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 gradient-section overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-coral/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            My Projects
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            What I've Built 💻
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Here are some of my beginner-friendly projects showcasing my journey
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative rounded-3xl border ${project.borderColor} overflow-hidden bg-gradient-to-br ${project.color} backdrop-blur-sm hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                visibleCards.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                {/* Icon Overlay */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 md:p-6">

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-card/60 text-xs font-medium border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full flex-1 hover:bg-card/80 text-xs sm:text-sm h-8 sm:h-9"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full flex-1 gradient-button text-primary-foreground hover:opacity-90 text-xs sm:text-sm h-8 sm:h-9"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
