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
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Leadership
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Leading with Purpose 👑
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong leadership abilities in academics, teamwork, and organizing group tasks
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="group flex gap-4 p-6 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <quality.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-semibold text-xl mb-2">
                  {quality.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-display italic text-foreground/80 max-w-2xl mx-auto">
            "Leadership is not about being in charge. It's about taking care of those in your charge."
          </blockquote>
          <p className="text-muted-foreground mt-4">— Simon Sinek</p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
