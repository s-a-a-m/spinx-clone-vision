import { Button } from "./ui/button"; // if this file lives in /components
;
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          
          <div
            className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
          <span className="text-2xl font-bold text-foreground">
            Unified Wisdom
        </span>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-foreground hover:text-primary transition-colors">
              WORK
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              HOW WE HELP
            </a>
            <a href="#industries" className="text-foreground hover:text-primary transition-colors">
              INDUSTRIES
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              ABOUT
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors">
              RESOURCES
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">213.894.9933</span>
            <Button 
              variant="default" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6"
            >
              Explore Collaboration
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#work" className="text-foreground hover:text-primary transition-colors">
                WORK
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                HOW WE HELP
              </a>
              <a href="#industries" className="text-foreground hover:text-primary transition-colors">
                INDUSTRIES
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                ABOUT
              </a>
              <a href="#resources" className="text-foreground hover:text-primary transition-colors">
                RESOURCES
              </a>
              <div className="pt-4">
                <Button 
                  variant="default" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full"
                >
                  Explore Collaboration
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
