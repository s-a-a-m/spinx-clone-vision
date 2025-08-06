import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

export const FeaturedProjects = () => {
  const projects = [
    {
      title: "StemWave Medical Device Website Redesign & Development",
      subtitle: "Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image",
      description: "A comprehensive redesign that modernized StemWave's online presence and enhanced user experience for medical professionals.",
      image: "/stemwave-preview.jpg",
      caseStudyLink: "/stemwave-case-study"
    },
    {
      title: "BEGA Website Redesign",
      subtitle: "Lighting Up an Internet Presence for BEGA",
      description: "Complete brand transformation and website redesign for a leading lighting solutions company, focusing on premium user experience.",
      image: "/bega-preview.jpg",
      caseStudyLink: "/bega-case-study"
    },
    {
      title: "PSZJ Website Redesign",
      subtitle: "Restructuring Success: PSZJ's Bankruptcy Law Firm Website Redesign",
      description: "Professional website redesign for a bankruptcy law firm, emphasizing trust, credibility, and client accessibility.",
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