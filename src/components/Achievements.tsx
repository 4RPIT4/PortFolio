import { Trophy, Star, Award, TrendingUp } from "lucide-react";

const Achievements = () => {
  const stats = [
    {
      icon: Award,
      value: "96.4%",
      label: "10th Percentage",
      color: "bg-coral/20 text-coral",
    },
    {
      icon: Trophy,
      value: "88.6%",
      label: "12th Percentage",
      color: "bg-lavender/30 text-secondary-foreground",
    },
    {
      icon: Star,
      value: "9.2",
      label: "BE CSE CGPA",
      color: "bg-mint/30 text-accent-foreground",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-soft-yellow/30 text-foreground text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Academic Excellence 🏆
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consistent performance throughout my academic journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 shadow-card text-center hover:shadow-glow transition-all hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <stat.icon className="w-8 h-8" />
              </div>

              {/* Value */}
              <p className="font-display font-bold text-4xl mb-2 text-gradient">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-muted-foreground font-medium">{stat.label}</p>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-coral/10 via-lavender/10 to-mint/10 border border-border/50">
            <p className="text-lg leading-relaxed text-foreground/90">
              From strong foundations in school to excelling in higher education,
              I've maintained consistent academic performance while exploring my
              passion for technology and design. My journey from{" "}
              <span className="font-semibold text-primary">basic concepts</span> to{" "}
              <span className="font-semibold text-primary">advanced skills</span>{" "}
              continues with dedication and curiosity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
