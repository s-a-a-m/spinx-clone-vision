import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  caseStudyLink: string;
}

export const ProjectCard = ({ title, subtitle, description, caseStudyLink }: ProjectCardProps) => {
  return (
    <Card className="project-card bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group">
      <CardContent className="p-6 space-y-4">
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-muted-foreground">
          {title} Preview
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <h4 className="text-lg font-semibold text-primary">
            {subtitle}
          </h4>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
          >
            Case Study
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};