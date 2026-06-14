import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

import w1 from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_20_40_PM_1781468088045.png";
import w2 from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_20_52_PM_1781468100849.png";
import w3 from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_21_05_PM_1781468102664.png";
import w4 from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_50_16_PM_1781468104250.png";
import w5 from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_54_12_PM_1781468105931.png";
import w6 from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_41_PM_1781468107616.png";

import d1 from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_54_PM_1781468111516.png";
import d2 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_00_04_PM_1781468113173.png";
import d3 from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_47_PM_1781468109831.png";
import d4 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_02_43_PM_1781468115586.png";

import p1 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_06_53_PM_1781468117736.png";
import p2 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_07_00_PM_1781468119554.png";
import p3 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_09_09_PM_1781468121470.png";

import ba1 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_55_58_PM_1781468128958.png";
import ba2 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_56_07_PM_1781468130859.png";
import team1 from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_37_27_PM_1781468127005.png";

const allImages = [
  { id: 1, src: w1, category: "windows", alt: "Double Hung Windows" },
  { id: 2, src: d1, category: "entry-doors", alt: "Fiberglass Entry Door" },
  { id: 3, src: p1, category: "patio-doors", alt: "Sliding Patio Door" },
  { id: 4, src: w2, category: "windows", alt: "Sliding Window" },
  { id: 5, src: ba2, category: "before-after", alt: "After Door Installation" },
  { id: 6, src: d2, category: "entry-doors", alt: "Steel Entry Door" },
  { id: 7, src: w3, category: "windows", alt: "Casement Window" },
  { id: 8, src: p2, category: "patio-doors", alt: "French Patio Doors" },
  { id: 9, src: w6, category: "windows", alt: "Black Modern Windows" },
  { id: 10, src: ba1, category: "before-after", alt: "Before Door Installation" },
  { id: 11, src: w4, category: "windows", alt: "Picture Window" },
  { id: 12, src: d3, category: "entry-doors", alt: "Modern Front Door" },
  { id: 13, src: w5, category: "windows", alt: "Bay Window" },
  { id: 14, src: p3, category: "patio-doors", alt: "Large Glass Patio Doors" },
  { id: 15, src: d4, category: "entry-doors", alt: "Double Entry Doors" },
  { id: 16, src: team1, category: "before-after", alt: "Professional Installation" },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "windows", label: "Windows" },
  { id: "entry-doors", label: "Entry Doors" },
  { id: "patio-doors", label: "Patio Doors" },
  { id: "before-after", label: "Before & After" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Project Gallery | TP Windows & Doors";
    window.scrollTo(0, 0);
  }, []);

  const filteredImages = filter === "all" 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Browse our portfolio of completed installations across Pennsylvania and New Jersey.
          </p>
        </div>
      </div>

      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "default" : "outline"}
                className={filter === cat.id ? "bg-primary text-white" : "text-foreground hover:bg-secondary"}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer"
                  onClick={() => setLightboxImg(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="text-white w-10 h-10 drop-shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightboxImg} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
