import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Leaf, Users, Scale, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: Scale,
    value: 125000,
    suffix: "kg",
    label: "Food Rescued",
    description: "Surplus food saved from waste",
    color: "bg-emerald-light text-emerald",
  },
  {
    icon: Users,
    value: 250000,
    suffix: "",
    label: "Meals Served",
    description: "People fed through donations",
    color: "bg-amber-light text-amber",
  },
  {
    icon: TrendingDown,
    value: 87500,
    suffix: "kg",
    label: "CO₂ Prevented",
    description: "Carbon emissions reduced",
    color: "bg-sky-light text-sky",
  },
  {
    icon: Leaf,
    value: 500,
    suffix: "+",
    label: "Active Donors",
    description: "Restaurants & households",
    color: "bg-terracotta-light text-terracotta",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 md:py-32 gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wide text-sm">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Making a <span className="text-gradient">Real Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every donation counts. See how our community is transforming surplus food into hope and sustainability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              variant="elevated"
              className="p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8" />
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Updated in real-time as donations happen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
