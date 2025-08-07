import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

export const FeaturedProjects = () => {
  const projects = [
    {
      title: "FieldOps Automation System",
      subtitle: "Turning Field Chaos Into Real-Time Intelligence",
      description: "Built and deployed a system that digitized field inspections for a €1.3B project, enabling real-time data capture, traceability, and automated Power BI reporting across multiple teams.",
      image: "/stemwave-preview.jpg",
      caseStudyLink: "/stemwave-case-study"
    },
    {
      title: "Profitability Intelligence Model",
      subtitle: "From Static Reports to Dynamic Portfolio Decisions",
      description: "Designed and automated a profit analysis model for polymer sales, integrating SQL-driven data and dynamic filters to enable granular decision-making by non-technical users.",
      image: "/bega-preview.jpg",
      caseStudyLink: "/bega-case-study"
    },
    {
      title: "Example Project",
      subtitle: "Text",
      description: "Text",
      image: "/pszj-preview.jpg",
      caseStudyLink: "/pszj-case-study"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            See More Work
          </Button>
        </div>
      </div>
    </section>
  );
};
