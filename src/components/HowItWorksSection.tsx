import { Card } from "@/components/ui/card";
import { Package, Search, Truck, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "List Surplus Food",
    description: "Donors post available food with details like quantity, type, expiry time, and pickup location.",
    role: "For Donors",
  },
  {
    icon: Search,
    title: "Browse & Request",
    description: "NGOs and volunteers find nearby donations on the interactive map and request pickups.",
    role: "For NGOs & Volunteers",
  },
  {
    icon: Truck,
    title: "Pickup & Deliver",
    description: "Volunteers collect food and deliver it to those in need. Track status in real-time.",
    role: "Real-time Tracking",
  },
  {
    icon: Heart,
    title: "Feed Communities",
    description: "Food reaches people who need it most, reducing waste and fighting hunger together.",
    role: "Impact Delivered",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wide text-sm">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple Steps to <span className="text-gradient">Save Food</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process makes it easy to donate, collect, and distribute surplus food efficiently.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card
                variant="feature"
                className="p-6 h-full animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Role Badge */}
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {step.role}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </Card>

              {/* Arrow (Mobile) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <ArrowRight className="w-6 h-6 text-primary/40 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
