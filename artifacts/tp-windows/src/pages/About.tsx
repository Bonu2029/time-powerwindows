import { useEffect } from "react";
import { Link } from "wouter";
import { ShieldCheck, Award, ThumbsUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

import installer1 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_30_09_PM_1781468125270.png";
import installer2 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_37_27_PM_1781468127005.png";

export default function About() {
  useEffect(() => {
    document.title = "About TP Windows & Doors | PA & NJ Contractor";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TP Windows & Doors</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Craftsmanship, integrity, and exceptional service for every homeowner.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  TP Windows & Doors was founded by Umed Hotamov with a simple mission: to provide homeowners in Pennsylvania and New Jersey with a reliable, high-quality alternative to high-pressure national sales chains.
                </p>
                <p>
                  We are craftsmen first. As a fully licensed and insured contractor, we understand that a premium window or door is only as good as its installation. That's why we rely exclusively on our own trained teams of master installers, never subcontracting our work to unknown crews.
                </p>
                <p>
                  Based in Feasterville-Trevose, PA, we've built our reputation one home at a time through word-of-mouth referrals, transparent pricing, and an unwavering commitment to leaving every home better than we found it.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary">
                  <Link href="/contact">Work With Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-2xl -z-10" />
              <img 
                src={installer1} 
                alt="Umed Hotamov - Owner" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-xl text-center border border-border shadow-sm">
              <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-foreground/70">Honest pricing, straightforward advice, and honoring our warranties.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl text-center border border-border shadow-sm">
              <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <Award className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Craftsmanship</h3>
              <p className="text-foreground/70">Meticulous attention to detail on every opening, caulk line, and trim piece.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl text-center border border-border shadow-sm">
              <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Respect</h3>
              <p className="text-foreground/70">We treat your home as if it were our own, ensuring a clean workspace.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl text-center border border-border shadow-sm">
              <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <ThumbsUp className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-foreground/70">Installing only premium materials proven to withstand the PA/NJ climate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary translate-x--4 translate-y-4 rounded-2xl -z-10" />
              <img 
                src={installer2} 
                alt="Professional Installation Team" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">The Installation Experts</h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Most window issues aren't product failures—they're installation failures. The best window in the world will leak if it's not installed level, plumb, and sealed correctly.
                </p>
                <p>
                  Our team brings specialized expertise to every job. We know how to handle complex retrofits, rotted wood replacement, custom exterior capping, and interior trim finishing to ensure your new products look beautiful and perform perfectly for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
