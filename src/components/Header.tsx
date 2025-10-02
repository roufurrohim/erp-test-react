import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 group-hover:shadow-glow transition-all duration-300">
              <h1 className="text-5xl font-bold">Home</h1>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-4xl font-medium text-foreground hover:text-primary transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-4xl font-medium text-foreground hover:text-primary transition-colors"
            >
              PRICING
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-4xl font-medium text-foreground hover:text-primary transition-colors"
            >
              CONTACT
            </button>
            <Button
              onClick={onLoginClick}
              variant="outline"
              className="w-[200px] border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              LOGIN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                PRICING
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                CONTACT
              </button>
              <Button
                onClick={onLoginClick}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full"
              >
                LOGIN
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
