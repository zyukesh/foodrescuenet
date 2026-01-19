import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Construction, ArrowLeft, Leaf } from "lucide-react";

const WorkInProgress = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get page title from pathname
  const getPageTitle = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8 animate-float">
          <Construction className="w-12 h-12 text-primary" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {getPageTitle() || "Page"} Coming Soon
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg mb-8">
          We're working hard to bring you this feature. Check back soon for updates!
        </p>

        {/* Progress Indicator */}
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-8">
          <div className="h-full w-2/3 bg-primary rounded-full animate-pulse" />
        </div>

        {/* Back Button */}
        <Button
          variant="hero"
          size="lg"
          onClick={() => navigate("/")}
          className="gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Button>

        {/* Logo */}
        <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Leaf className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold">Food Rescue Network</span>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
