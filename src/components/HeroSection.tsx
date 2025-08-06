import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Hero Text */}
          <div className="space-y-4">
            <h1 className="hero-text">
              Strategic
            </h1>
            <h1 className="hero-text">
              Websites
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground/90 tracking-wide">
              That Tell Your Story <span className="text-muted-foreground">-And Drive Results</span>
            </h2>
          </div>

          {/* Description Box */}
          <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex-shrink-0"></div>
              <div className="text-left space-y-4">
                <p className="text-lg text-foreground">
                  <span className="font-semibold">At SPINX Digital,</span>
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  we turn complex ideas into{" "}
                  <span className="gradient-text">immersive digital solutions</span>
                </h3>
                <p className="text-muted-foreground">
                  that elevate your brand, connect you with your audience, and drive your desired growth.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                >
                  Request a Web Design Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700"></div>
    </section>
  );
};