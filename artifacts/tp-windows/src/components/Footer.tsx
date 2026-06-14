import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight text-white">
              TP Windows <span className="text-accent">&</span> Doors
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
              Premium American window and door replacement company serving Pennsylvania & New Jersey. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Windows", href: "/windows" },
                { label: "Entry Doors", href: "/entry-doors" },
                { label: "Patio Doors", href: "/patio-doors" },
                { label: "Gallery", href: "/gallery" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Service Areas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-white text-sm mb-3 border-b border-primary-foreground/20 pb-2">Pennsylvania</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Philadelphia</li>
                  <li>Bensalem</li>
                  <li>Feasterville</li>
                  <li>Richboro</li>
                  <li>Southampton</li>
                  <li>Newtown</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white text-sm mb-3 border-b border-primary-foreground/20 pb-2">New Jersey</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Cherry Hill</li>
                  <li>Marlton</li>
                  <li>Mount Laurel</li>
                  <li>Moorestown</li>
                  <li>Voorhees</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-primary-foreground/80 text-sm">
                  60 Platt Place<br />
                  Feasterville-Trevose, PA 19053
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:2679390320" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  (267) 939-0320
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:hellousa84@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  hellousa84@gmail.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium text-white text-sm mb-2">Business Hours</h4>
              <ul className="text-sm text-primary-foreground/80 space-y-1">
                <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
                <li>Sat: 9:00 AM - 3:00 PM</li>
                <li>Sun: By Appointment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>Copyright &copy; {currentYear} TP Windows & Doors. All Rights Reserved. Fully Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
}
