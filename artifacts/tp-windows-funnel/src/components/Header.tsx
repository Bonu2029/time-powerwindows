import { Link } from "wouter";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary tracking-tight">
            TP Windows & Doors
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-secondary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-secondary transition-colors flex items-center gap-1">
              Materials
            </button>
            <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-48">
              <div className="bg-card rounded-md shadow-lg border p-2 flex flex-col gap-1">
                <Link href="/vinyl" className="px-4 py-2 text-sm hover:bg-muted rounded-sm transition-colors">Vinyl Windows</Link>
                <Link href="/aluminum" className="px-4 py-2 text-sm hover:bg-muted rounded-sm transition-colors">Aluminum Windows</Link>
                <Link href="/wood-clad" className="px-4 py-2 text-sm hover:bg-muted rounded-sm transition-colors">Wood-Clad Windows</Link>
                <Link href="/upvc" className="px-4 py-2 text-sm hover:bg-muted rounded-sm transition-colors">uPVC Windows</Link>
              </div>
            </div>
          </div>
          <Link href="/quote" className="text-sm font-medium hover:text-secondary transition-colors">
            Instant Quote
          </Link>
          <Link href="/booking" className="text-sm font-medium hover:text-secondary transition-colors">
            Book Consultation
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-primary font-medium">
            <Phone className="w-4 h-4 text-secondary" />
            <span>(267) 939-0320</span>
          </div>
          <Link href="/quote" className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Get Quote
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-lg font-serif font-medium">Home</Link>
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Materials</span>
                  <Link href="/vinyl" className="text-lg font-serif pl-4 border-l-2 border-transparent hover:border-secondary">Vinyl Windows</Link>
                  <Link href="/aluminum" className="text-lg font-serif pl-4 border-l-2 border-transparent hover:border-secondary">Aluminum Windows</Link>
                  <Link href="/wood-clad" className="text-lg font-serif pl-4 border-l-2 border-transparent hover:border-secondary">Wood-Clad Windows</Link>
                  <Link href="/upvc" className="text-lg font-serif pl-4 border-l-2 border-transparent hover:border-secondary">uPVC Windows</Link>
                </div>
                <Link href="/quote" className="text-lg font-serif font-medium">Instant Quote</Link>
                <Link href="/booking" className="text-lg font-serif font-medium">Book Consultation</Link>
                <div className="mt-4 flex flex-col gap-4 border-t pt-6">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span>(267) 939-0320</span>
                  </div>
                  <Link href="/quote" className="inline-flex w-full h-12 items-center justify-center rounded-md bg-secondary px-6 text-base font-medium text-white transition-colors hover:bg-secondary/90">
                    Get Your Instant Quote
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
