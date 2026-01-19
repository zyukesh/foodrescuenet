import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SDGSection from "@/components/SDGSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <HowItWorksSection />
        <SDGSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
