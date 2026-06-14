import React from "react";
import { Link } from "wouter";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button 
        asChild 
        size="icon" 
        className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 text-primary shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <a href="tel:2679390320" aria-label="Call Now">
          <Phone size={24} />
        </a>
      </Button>
      
      <Button 
        asChild
        className="rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 font-bold py-6 px-6 bg-primary text-white"
      >
        <Link href="/contact">
          <Calendar className="mr-2" size={18} />
          Get Estimate
        </Link>
      </Button>
    </div>
  );
}
