import { ExternalLink, Github, Globe, Database, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A simple, responsive portfolio created using HTML, CSS, and JavaScript to showcase skills and academic achievements.",
      tags: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
      color: "from-coral/20 to-soft-pink/20",
      borderColor: "border-coral/30",
    },
    {
      title: "To-Do List Web App",
      description:
        "A basic JavaScript application allowing users to add, edit, and delete tasks with a minimal, clean UI.",
      tags: ["JavaScript", "HTML", "CSS"],
      icon: CheckSquare,
      color: "from-mint/20 to-soft-yellow/20",
      borderColor: "border-mint/30",
    },
    {
      title: "Student Database Management System",
      description:
        "A mini project demonstrating CRUD operations using MySQL for storing student records and Java for backend logic.",
      tags: ["MySQL", "Java", "CRUD"],
      icon: Database,
      color: "from-lavender/20 to-primary/20",
      borderColor: "border-lavender/30",
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/20 text-primary text-sm font-medium mb-4">
            My Projects
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            What I've Built 💻
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my beginner-friendly projects showcasing my journey
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl border ${project.borderColor} overflow-hidden bg-gradient-to-br ${project.color} backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-card/60 text-xs font-medium border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full flex-1 hover:bg-card/80"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full flex-1 gradient-button text-primary-foreground hover:opacity-90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
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
