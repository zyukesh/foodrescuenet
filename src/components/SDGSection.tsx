import { Card } from "@/components/ui/card";

const sdgGoals = [
  {
    number: 2,
    title: "Zero Hunger",
    description: "End hunger by connecting surplus food with those who need it most. Every meal shared is a step toward food security.",
    color: "bg-amber",
    icon: "🍽️",
  },
  {
    number: 12,
    title: "Responsible Consumption",
    description: "Reduce food waste by rescuing surplus before it's discarded. Promote sustainable consumption patterns.",
    color: "bg-terracotta",
    icon: "♻️",
  },
  {
    number: 11,
    title: "Sustainable Cities",
    description: "Build resilient communities through local food networks. Create inclusive, safe, and sustainable urban systems.",
    color: "bg-amber",
    icon: "🏙️",
  },
];

const SDGSection = () => {
  return (
    <section id="sdg" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4 uppercase tracking-wide text-sm">
            UN Sustainable Development Goals
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Aligned with <span className="text-accent">Global Goals</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Our mission directly contributes to the United Nations Sustainable Development Goals, creating lasting positive change.
          </p>
        </div>

        {/* SDG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sdgGoals.map((goal, index) => (
            <Card
              key={goal.number}
              variant="glass"
              className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* SDG Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${goal.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {goal.icon}
                </div>
                <div>
                  <span className="text-xs text-primary-foreground/60 uppercase tracking-wide">SDG Goal</span>
                  <h3 className="text-2xl font-bold text-primary-foreground">#{goal.number}</h3>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-primary-foreground mb-3">
                {goal.title}
              </h4>

              {/* Description */}
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {goal.description}
              </p>

              {/* Decorative Line */}
              <div className={`mt-6 h-1 ${goal.color} rounded-full opacity-60`} />
            </Card>
          ))}
        </div>

        {/* UN Logo Text */}
        <div className="mt-16 text-center">
          <p className="text-primary-foreground/60 text-sm">
            Supporting the United Nations 2030 Agenda for Sustainable Development
          </p>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
