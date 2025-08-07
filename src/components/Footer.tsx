import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-16 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Unified Wisdom</h3>
            <p className="text-muted-foreground">
              Intelligence made simple for real-world results.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground"> </p>
              <p className="text-sm text-muted-foreground">info@unifiedwisdom.eu</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Service 1</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Service 2</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Service 3</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Service 4</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get Started</h4>
            <p className="text-sm text-muted-foreground">
              Ready to transform your digital presence?
            </p>
            <Button 
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Start a Project
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Unified Wisdom. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
