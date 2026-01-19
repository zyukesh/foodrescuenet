import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Store, Building2, Users, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    icon: Store,
    title: "Food Donors",
    description: "Restaurants, hotels, event organizers, and households with surplus food to share.",
    cta: "Start Donating",
    href: "/register-donor",
    features: ["List food in minutes", "Track your impact", "Earn donor badges"],
  },
  {
    icon: Building2,
    title: "NGOs",
    description: "Non-profit organizations serving communities in need of food assistance.",
    cta: "Register NGO",
    href: "/register-ngo",
    features: ["Get verified status", "Browse donations", "Request pickups"],
  },
  {
    icon: Users,
    title: "Volunteers",
    description: "Community members ready to help collect and deliver food donations.",
    cta: "Become a Volunteer",
    href: "/register-volunteer",
    features: ["Flexible schedule", "Local pickups", "Make an impact"],
  },
  {
    icon: Shield,
    title: "Partners",
    description: "Corporate partners and sponsors supporting our mission at scale.",
    cta: "Partner With Us",
    href: "/partner",
    features: ["CSR reporting", "Brand visibility", "Team volunteering"],
  },
];

const JoinSection = () => {
  return (
    <section id="join" className="py-20 md:py-32 gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wide text-sm">
            Join Our Network
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Be Part of the <span className="text-gradient">Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you have food to share, people to feed, or time to give—there's a place for you in our community.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card
              key={role.title}
              variant="elevated"
              className="p-6 flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <role.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {role.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {role.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button variant="outline" className="w-full group" asChild>
                <Link to={role.href}>
                  {role.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
