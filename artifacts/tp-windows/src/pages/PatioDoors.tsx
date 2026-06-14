import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Sun, Maximize2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import slidingPatioImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_06_53_PM_1781468117736.png";
import frenchPatioImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_07_00_PM_1781468119554.png";
import largeGlassImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_09_09_PM_1781468121470.png";

const patioTypes = [
  {
    id: "sliding",
    name: "Sliding Patio Doors",
    image: slidingPatioImg,
    description: "The classic space-saving design. Our sliding patio doors glide effortlessly on specialized tracks, bringing abundant natural light into your home without intruding on interior or exterior space.",
    features: [
      "Smooth, silent operation",
      "Space-saving design doesn't interfere with furniture",
      "Advanced weatherstripping blocks drafts",
      "Available with built-in blinds"
    ]
  },
  {
    id: "french",
    name: "French Patio Doors",
    image: frenchPatioImg,
    description: "Add a touch of elegance and tradition. Hinged French doors swing open to create a wide, welcoming transition to your patio, deck, or garden.",
    features: [
      "Classic, elegant aesthetic",
      "In-swing or out-swing configurations",
      "Wide opening for entertaining",
      "Multiple grid and glass options"
    ]
  },
  {
    id: "large-glass",
    name: "Large Glass Patio Doors",
    image: largeGlassImg,
    description: "Blur the line between indoors and out. Our large-format and multi-panel sliding door systems create stunning panoramic views and dramatic architectural statements.",
    features: [
      "Expansive, uninterrupted views",
      "Modern, minimalist frames",
      "Multi-panel sliding or folding configurations",
      "Heavy-duty hardware for large panels"
    ]
  }
];

export default function PatioDoors() {
  useEffect(() => {
    document.title = "Patio Doors PA & NJ | TP Windows & Doors";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patio Doors</h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Seamlessly connect your indoor and outdoor living spaces with high-performance, beautiful patio doors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Transform Your Living Space</h2>
          <p className="text-lg text-foreground/80 mb-8">
            A new patio door doesn't just improve access to your yard—it dramatically alters the feel of the room it's in by maximizing natural light and views while ensuring energy efficiency during PA & NJ winters.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-primary font-medium">
            <div className="flex items-center gap-2"><Sun className="text-accent" /> Maximum Natural Light</div>
            <div className="flex items-center gap-2"><Maximize2 className="text-accent" /> Advanced Low-E Glass</div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {patioTypes.map((type, index) => (
              <motion.div 
                key={type.id}
                id={type.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/3]">
                    <img 
                      src={type.image} 
                      alt={type.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">{type.name}</h2>
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-primary mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-accent mt-1 mr-3 shrink-0" size={18} />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href="/contact" className="flex items-center gap-2">
                        Get Estimate <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Upgrade Your Patio Access</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Contact us today to explore your patio door options. We'll help you select the perfect style to match your home and lifestyle.
          </p>
          <Button asChild size="lg" className="h-14 px-8 bg-accent text-primary hover:bg-accent/90 text-lg font-bold">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
