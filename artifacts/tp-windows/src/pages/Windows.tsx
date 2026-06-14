import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import doubleHungImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_20_40_PM_1781468088045.png";
import slidingImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_20_52_PM_1781468100849.png";
import casementImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_21_05_PM_1781468102664.png";
import pictureImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_50_16_PM_1781468104250.png";
import bayImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_54_12_PM_1781468105931.png";
import blackModernImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_41_PM_1781468107616.png";

const windowTypes = [
  {
    id: "double-hung",
    name: "Double Hung Windows",
    image: doubleHungImg,
    description: "Our most popular window style. Both upper and lower sashes slide vertically and tilt in for easy cleaning from inside your home.",
    features: [
      "Both sashes operate independently",
      "Tilt-in functionality for easy cleaning",
      "Traditional, classic aesthetic",
      "Excellent ventilation control"
    ],
    efficiency: "High"
  },
  {
    id: "sliding",
    name: "Sliding Windows",
    image: slidingImg,
    description: "Slide smoothly horizontally on tracks. Ideal for tight spaces where a window cannot swing outward, offering wide, unobstructed views.",
    features: [
      "Smooth, effortless gliding operation",
      "Lift-out sashes for cleaning",
      "Maximum glass area for better views",
      "Space-saving design"
    ],
    efficiency: "High"
  },
  {
    id: "casement",
    name: "Casement Windows",
    image: casementImg,
    description: "Hinged on the side and crank open outward. They provide excellent ventilation and seal tightly for maximum energy efficiency.",
    features: [
      "Opens fully for maximum ventilation",
      "Tighest seal among operable windows",
      "Easy-turn crank operation",
      "Contemporary look"
    ],
    efficiency: "Premium"
  },
  {
    id: "picture",
    name: "Picture Windows",
    image: pictureImg,
    description: "Large, fixed windows that do not open. Designed to provide expansive views, maximize natural light, and offer the highest energy efficiency.",
    features: [
      "Unobstructed, wide-open views",
      "Maximum natural light",
      "No moving parts to maintain",
      "Can be combined with other styles"
    ],
    efficiency: "Maximum"
  },
  {
    id: "bay",
    name: "Bay & Bow Windows",
    image: bayImg,
    description: "Extend outward from your home's exterior, creating a sense of spaciousness inside while adding stunning architectural detail outside.",
    features: [
      "Adds architectural interest",
      "Creates additional interior space",
      "Panoramic 180-degree views",
      "Can include functional side windows"
    ],
    efficiency: "High"
  },
  {
    id: "modern-black",
    name: "Black Modern Windows",
    image: blackModernImg,
    description: "Make a striking architectural statement with sleek black interior and exterior frames. Perfect for modern, farmhouse, and industrial designs.",
    features: [
      "Bold, dramatic aesthetic",
      "Slim profile frames",
      "Fade-resistant exterior finish",
      "Matches modern design trends"
    ],
    efficiency: "Premium"
  }
];

export default function Windows() {
  useEffect(() => {
    document.title = "Professional Window Replacement PA & NJ | TP Windows & Doors";
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Window Replacement</h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Enhance your home's beauty, comfort, and energy efficiency with our premium selection of replacement windows.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Built For Performance. Designed For Beauty.</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Every window we install is custom-manufactured to the exact specifications of your home. 
            We offer advanced Low-E glass packages, argon gas fills, and premium framing materials that 
            drastically outperform standard builder-grade windows.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-primary font-medium">
            <div className="flex items-center gap-2"><ShieldCheck className="text-accent" /> Lifetime Warranties Available</div>
            <div className="flex items-center gap-2"><Leaf className="text-accent" /> Energy Star Certified</div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {windowTypes.map((type, index) => (
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
                        Request Quote <ArrowRight size={18} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Style Is Right For You?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Schedule a free in-home consultation. We'll bring samples, measure your openings, and provide expert recommendations tailored to your home's architecture.
          </p>
          <Button asChild size="lg" className="h-14 px-8 bg-accent text-primary hover:bg-accent/90 text-lg font-bold">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
