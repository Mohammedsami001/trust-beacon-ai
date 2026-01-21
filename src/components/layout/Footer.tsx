import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-sm">
                <span className="text-primary">DEEPFAKE</span>
                <span className="text-foreground"> TRUST HUB</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered deepfake detection and trust verification for the digital age.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Contact
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Deepfake Trust Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
