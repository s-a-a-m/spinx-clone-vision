import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      title: "Operational Platform Design",
      description: "Text",
      icon: "🎨"
    },
    {
      title: "Insight Layer Development",
      description: "Custom dashboards, analysis tools, and data pipelines that give teams better answers, faster.",
      icon: "📊"
    },
    {
      title: "Process Intelligence & Automation",
      description: "Turn spreadsheet chaos into sleek, auditable systems — with zero-code or full-code solutions.",
      icon: "🎯"
    },
    {
      title: "Modular Toolkits for Legacy Teams",
      description: "Prebuilt tools that can be customized and deployed fast — quoting engines, configurators, CRMs, and more.",
      icon: "✨"
    },
    {
      title: "Custom Web & Mobile Interfaces",
      description: "When a system needs a face, we design interfaces that are elegant, intuitive, and built for adoption.",
      icon: "📱"
    },
    {
      title: "Cross-Team Integration Consulting",
      description: "We don’t just build tools — we help you align people, data, and departments around them.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="project-card bg-card/50 backdrop-blur-sm border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
