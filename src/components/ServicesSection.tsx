import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      title: "Website Design & Development",
      description: "Custom websites that captivate your audience and drive conversions",
      icon: "🎨"
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores that maximize sales and customer satisfaction",
      icon: "🛒"
    },
    {
      title: "Digital Strategy",
      description: "Data-driven strategies that align with your business objectives",
      icon: "📊"
    },
    {
      title: "Brand Identity",
      description: "Compelling brand experiences that resonate with your target audience",
      icon: "✨"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform apps that engage users on any device",
      icon: "📱"
    },
    {
      title: "SEO & Marketing",
      description: "Comprehensive digital marketing to increase visibility and reach",
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