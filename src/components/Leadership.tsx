import { Users, Target, Handshake, Megaphone } from "lucide-react";

const Leadership = () => {
  const qualities = [
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Effectively working with peers on group projects, ensuring everyone's voice is heard and contributions are valued.",
    },
    {
      icon: Target,
      title: "Project Responsibility",
      description:
        "Taking ownership of academic projects from conception to completion, managing timelines and deliverables.",
    },
    {
      icon: Handshake,
      title: "Peer Support",
      description:
        "Helping classmates understand complex concepts and providing guidance in technical challenges.",
    },
    {
      icon: Megaphone,
      title: "Group Organization",
      description:
        "Coordinating team tasks, delegating responsibilities, and ensuring smooth communication within groups.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Leadership
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            Leading with Purpose 👑
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Strong leadership abilities in academics, teamwork, and organizing group tasks
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="group flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <quality.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-semibold text-lg sm:text-xl mb-1 sm:mb-2">
                  {quality.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-display italic text-foreground/80 max-w-2xl mx-auto">
            "Leadership is not about being in charge. It's about taking care of those in your charge."
          </blockquote>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4">— Simon Sinek</p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
