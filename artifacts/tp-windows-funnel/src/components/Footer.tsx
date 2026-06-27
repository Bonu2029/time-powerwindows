import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-primary tracking-tight">
                TP Windows<br />& Doors
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Premium window and door replacement services serving Pennsylvania & New Jersey. Engineered for lasting performance.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-primary mb-4 text-lg">Materials</h4>
            <ul className="space-y-2">
              <li><Link href="/vinyl" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Vinyl Windows</Link></li>
              <li><Link href="/aluminum" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Aluminum Windows</Link></li>
              <li><Link href="/wood-clad" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Wood-Clad Windows</Link></li>
              <li><Link href="/upvc" className="text-sm text-muted-foreground hover:text-secondary transition-colors">uPVC Windows</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-primary mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/quote" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Instant Quote</Link></li>
              <li><Link href="/booking" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Book Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-primary mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                <span className="block font-medium text-primary mb-1">Phone</span>
                (267) 939-0320
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="block font-medium text-primary mb-1">Email</span>
                info@tpwindows.com
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="block font-medium text-primary mb-1">Service Area</span>
                Pennsylvania & New Jersey
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TP Windows & Doors. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">Privacy Policy</span>
            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
