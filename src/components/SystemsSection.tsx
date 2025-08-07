import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const SystemsSection = () => {
  const systems = [
    {
      title: "Ops Intelligence Platforms",
      description: "",
      icon: "⚡"
    },
    {
      title: "Decision-Grade Dashboards",
      description: "",
      icon: "📊"
    },
    {
      title: "Knowledge Retention Engines",
      description: "",
      icon: "🧠"
    },
    {
      title: "Resource Forecasting Tools",
      description: "Smart scheduling and allocation systems that maximize efficiency while reducing waste and operational costs.",
      icon: "🎯"
    },
    {
      title: "Traceability + Audit Systems",
      description: "",
      icon: "🔄"
    },
    {
      title: "Connected Communication Layers",
      description: "",
      icon: "✅"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Systems We've Built
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real solutions for real challenges, designed to work seamlessly in your environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="text-4xl mb-4">{system.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {system.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {system.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
