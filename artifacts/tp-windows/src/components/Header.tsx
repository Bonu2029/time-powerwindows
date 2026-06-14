import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Windows", href: "/windows" },
    { label: "Entry Doors", href: "/entry-doors" },
    { label: "Patio Doors", href: "/patio-doors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs sm:text-sm font-medium">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:2679390320" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">Call Now</span> (267) 939-0320
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline border-r border-primary-foreground/20 pr-4">Free Estimates</span>
            <span>Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-background border-b transition-all duration-300 ${isScrolled ? 'py-3 shadow-md' : 'py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              TP Windows <span className="text-accent">&</span> Doors
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location === link.href ? "text-accent" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">GET FREE ESTIMATE</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu size={28} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] flex flex-col bg-background">
                <div className="mt-8 flex flex-col gap-6">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          location === link.href ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-4 pt-6 border-t flex flex-col gap-4">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Get Free Estimate
                      </Link>
                    </Button>
                    <a href="tel:2679390320" className="flex items-center justify-center gap-2 text-primary font-medium py-3 rounded-md bg-secondary">
                      <Phone size={18} />
                      (267) 939-0320
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
