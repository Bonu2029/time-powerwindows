import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ShieldCheck, DoorOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import fiberglassDoorImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_54_PM_1781468111516.png";
import steelDoorImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_00_04_PM_1781468113173.png";
import modernDoorImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_47_PM_1781468109831.png";
import doubleDoorImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_02_43_PM_1781468115586.png";

const doorTypes = [
  {
    id: "fiberglass",
    name: "Fiberglass Entry Doors",
    image: fiberglassDoorImg,
    description: "The look of real wood without the maintenance. Fiberglass doors won't rot, warp, or rust, making them the most durable option for the varied PA & NJ climate.",
    features: [
      "Authentic woodgrain textures or smooth finishes",
      "Highest energy efficiency rating",
      "Resists denting, scratching, and rotting",
      "Available in numerous stains and paint colors"
    ],
    efficiency: "Maximum"
  },
  {
    id: "steel",
    name: "Steel Entry Doors",
    image: steelDoorImg,
    description: "Unmatched security and strength. Steel doors offer peace of mind and excellent insulation values at a highly competitive price point.",
    features: [
      "Maximum security and structural integrity",
      "Will not warp, rot, or swell",
      "High-density polyurethane foam core for insulation",
      "Smooth finish perfect for painting"
    ],
    efficiency: "High"
  },
  {
    id: "modern",
    name: "Modern Front Doors",
    image: modernDoorImg,
    description: "Clean lines, geometric shapes, and minimalist glass panels. Perfect for contemporary, mid-century modern, and industrial architectural styles.",
    features: [
      "Sleek, minimalist aesthetic",
      "Unique glass arrangements and sidelight options",
      "Bold color palettes including stark blacks",
      "Contemporary hardware combinations"
    ],
    efficiency: "Premium"
  },
  {
    id: "double",
    name: "Double Entry Doors",
    image: doubleDoorImg,
    description: "Make a grand entrance. Double doors create a stunning architectural focal point while offering a wider opening for moving furniture or entertaining.",
    features: [
      "Creates a grand, luxurious entrance",
      "Wide opening for high-traffic and large items",
      "Customizable with matching transoms",
      "Advanced multi-point locking systems"
    ],
    efficiency: "High"
  }
];

export default function EntryDoors() {
  useEffect(() => {
    document.title = "Premium Entry Doors PA & NJ | TP Windows & Doors";
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Entry Doors</h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Create a stunning first impression while securing your home with our master-crafted entry door systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Security Meets Style</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Your front door is the focal point of your home's exterior. We install complete door systems—including the frame, sill, weatherstripping, and hardware—engineered to work together for superior performance and security.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-primary font-medium">
            <div className="flex items-center gap-2"><DoorOpen className="text-accent" /> Custom Fit Frames</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-accent" /> Multi-Point Locks Available</div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {doorTypes.map((type, index) => (
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
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-[3/4]">
                    <img 
                      src={type.image} 
                      alt={type.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-block bg-secondary text-primary font-medium px-4 py-1 rounded-full text-sm mb-4 w-fit">
                    Energy Efficiency: {type.efficiency}
                  </div>
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
                        Design Your Door <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options Banner */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-12">Endless Customization</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-primary mb-2">Colors</div>
              <p className="text-sm text-foreground/70">Custom paint matching & premium wood stains</p>
            </div>
            <div>
              <div className="text-xl font-bold text-primary mb-2">Glass</div>
              <p className="text-sm text-foreground/70">Decorative, privacy, & tempered glass options</p>
            </div>
            <div>
              <div className="text-xl font-bold text-primary mb-2">Hardware</div>
              <p className="text-sm text-foreground/70">Handlesets in multiple metallic finishes</p>
            </div>
            <div>
              <div className="text-xl font-bold text-primary mb-2">Accents</div>
              <p className="text-sm text-foreground/70">Sidelights, transoms, & custom trim</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
