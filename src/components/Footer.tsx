import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">ERP</span>
            </div>
            <p className="text-background/80 text-sm">
              Empowering entrepreneurs with smart inventory and profit management solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* ERP */}
          <div>
            <h3 className="font-semibold mb-4">Navigations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/80">
            © {currentYear} ERP. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
