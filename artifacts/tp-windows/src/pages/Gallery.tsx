import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowRight, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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

import baBefore1 from "@assets/Screenshot_2026-06-27_at_4.45.43_PM_1782593232230.png";
import baAfter1 from "@assets/Screenshot_2026-06-27_at_4.45.57_PM_1782593219873.png";
import baBefore2 from "@assets/Screenshot_2026-06-27_at_4.45.13_PM_1782593258584.png";
import baAfter2 from "@assets/Screenshot_2026-06-27_at_4.45.23_PM_1782593246797.png";
import baBefore3 from "@assets/Screenshot_2026-06-27_at_4.44.09_PM_1782593273546.png";
import baAfter3 from "@assets/Screenshot_2026-06-27_at_4.44.54_PM_1782593265908.png";
import baBefore4 from "@assets/ChatGPT_Image_Jun_27,_2026_at_04_46_12_PM_(1)_1782593297367.png";
import baAfter4 from "@assets/ChatGPT_Image_Jun_27,_2026_at_04_46_12_PM_(2)_1782593290552.png";

import baBefore5 from "@assets/ChatGPT_Image_Jun_27,_2026_at_04_42_57_PM_(1)_1782606958629.png";
import baAfter5 from "@assets/ChatGPT_Image_Jun_27,_2026_at_04_42_58_PM_(2)_1782606963257.png";

import baBefore6 from "@assets/ChatGPT_Image_Jun_27,_2026_at_04_40_28_PM_(1)_1782606993629.png";
import baAfter6 from "@assets/ChatGPT_Image_Jun_27,_2026_at_04_40_28_PM_(2)_1782606996179.png";

import baBefore7 from "@assets/ChatGPT_Image_Jun_27,_2026_at_08_37_12_PM_(1)_1782607062443.png";
import baAfter7 from "@assets/ChatGPT_Image_Jun_27,_2026_at_08_37_12_PM_(2)_1782607066962.png";

import baBefore8 from "@assets/ChatGPT_Image_Jun_27,_2026_at_08_37_13_PM_(3)_1782607080848.png";
import baAfter8 from "@assets/ChatGPT_Image_Jun_27,_2026_at_08_37_13_PM_(4)_1782607085621.png";

const galleryItems = [
  { id: 1, src: w1, category: "windows", alt: "Double Hung Windows", city: "Cherry Hill, NJ", type: "Window Replacement", desc: "White vinyl double-hung windows installed on a classic colonial home." },
  { id: 2, src: d1, category: "entry-doors", alt: "Fiberglass Entry Door", city: "Bensalem, PA", type: "Entry Door", desc: "Modern fiberglass front door with sidelights and transom." },
  { id: 3, src: p1, category: "patio-doors", alt: "Sliding Patio Door", city: "Marlton, NJ", type: "Patio Door", desc: "Energy-efficient sliding patio door opening to a backyard deck." },
  { id: 4, src: w2, category: "windows", alt: "Sliding Window", city: "Mount Laurel, NJ", type: "Window Replacement", desc: "Horizontal slider windows with low-E glass and custom grids." },
  { id: 5, src: w6, category: "windows", alt: "Black Modern Windows", city: "Philadelphia, PA", type: "Window Replacement", desc: "Sleek black-framed modern windows on a contemporary townhome." },
  { id: 6, src: d2, category: "entry-doors", alt: "Steel Entry Door", city: "Southampton, PA", type: "Entry Door", desc: "Reinforced steel entry door with decorative glass panel." },
  { id: 7, src: w3, category: "windows", alt: "Casement Window", city: "Moorestown, NJ", type: "Window Replacement", desc: "Crank-out casement windows with multi-point locking hardware." },
  { id: 8, src: p2, category: "patio-doors", alt: "French Patio Doors", city: "Voorhees, NJ", type: "Patio Door", desc: "Elegant French patio doors with full-view glass panels." },
  { id: 9, src: w4, category: "windows", alt: "Picture Window", city: "Newtown, PA", type: "Window Replacement", desc: "Large picture window maximizing natural light and views." },
  { id: 10, src: d3, category: "entry-doors", alt: "Modern Front Door", city: "Richboro, PA", type: "Entry Door", desc: "Custom modern front door with brushed nickel hardware." },
  { id: 11, src: w5, category: "windows", alt: "Bay Window", city: "Feasterville, PA", type: "Window Replacement", desc: "Custom-built bay window adding character and extra seating space." },
  { id: 12, src: p3, category: "patio-doors", alt: "Large Glass Patio Doors", city: "Bensalem, PA", type: "Patio Door", desc: "Oversized multi-panel glass patio doors for indoor-outdoor living." },
  { id: 13, src: d4, category: "entry-doors", alt: "Double Entry Doors", city: "Cherry Hill, NJ", type: "Entry Door", desc: "Grand double entry doors with matching sidelights." },
];

const beforeAfterProjects = [
  { id: "ba1", before: baBefore1, after: baAfter1, city: "Cherry Hill, NJ", type: "Full Window Replacement", desc: "Complete exterior transformation with new energy-efficient windows and front door." },
  { id: "ba2", before: baBefore2, after: baAfter2, city: "Mount Laurel, NJ", type: "Window & Shutter Update", desc: "Fresh white window frames with new black shutters for a bold, modern look." },
  { id: "ba3", before: baBefore3, after: baAfter3, city: "Bensalem, PA", type: "Window Replacement", desc: "Upgraded to sleek black-frame windows that dramatically improved curb appeal." },
  { id: "ba4", before: baBefore4, after: baAfter4, city: "Marlton, NJ", type: "Full Window Replacement", desc: "All windows replaced with high-efficiency double-hung units on a brick colonial." },
  { id: "ba5", before: baBefore5, after: baAfter5, city: "Moorestown, NJ", type: "Window Upgrade", desc: "Traditional windows upgraded to modern white frames with colonial grids on a brick colonial home." },
  { id: "ba6", before: baBefore6, after: baAfter6, city: "Feasterville, PA", type: "Full Window Replacement", desc: "Outdated double-hungs replaced with energy-efficient colonial-grid windows for a crisp, refreshed look." },
  { id: "ba7", before: baBefore7, after: baAfter7, city: "Southampton, PA", type: "Patio Door Replacement", desc: "Worn white patio doors replaced with sleek, modern French doors with updated hardware." },
  { id: "ba8", before: baBefore8, after: baAfter8, city: "Richboro, PA", type: "Entry Door Upgrade", desc: "Dated wooden double doors refinished with a fresh modern look and premium decorative glass inserts." },
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

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((img) => img.category === filter);

  const showBeforeAfter = filter === "all" || filter === "before-after";

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Browse our portfolio of completed installations across Pennsylvania and New Jersey. See the real transformations we deliver.
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

          {/* Before & After Slider Section */}
          {showBeforeAfter && (
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Before & After Transformations</h2>
                <p className="text-foreground/70 max-w-xl mx-auto">
                  Drag the slider to see how new windows and doors completely transform a home's appearance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {beforeAfterProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden shadow-lg border border-border"
                  >
                    <BeforeAfterSlider
                      beforeImage={project.before}
                      afterImage={project.after}
                      className="aspect-[16/9]"
                    />
                    <div className="p-5 bg-card">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin size={14} />
                        <span>{project.city}</span>
                        <span className="mx-1">|</span>
                        <Calendar size={14} />
                        <span>{project.type}</span>
                      </div>
                      <p className="text-foreground/80 text-sm">{project.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Standard Photo Gallery */}
          {(filter !== "before-after") && (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Work</h2>
                <p className="text-foreground/70 max-w-xl mx-auto">
                  Every project is a testament to our commitment to quality and craftsmanship.
                </p>
              </div>

              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm cursor-pointer flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden" onClick={() => setLightboxImg(item.src)}>
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ZoomIn className="text-white w-10 h-10 drop-shadow-lg" />
                        </div>
                      </div>
                      <div className="p-5 flex-grow flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin size={14} />
                          <span>{item.city}</span>
                        </div>
                        <h3 className="font-bold text-primary text-lg mb-1">{item.alt}</h3>
                        <p className="text-foreground/70 text-sm flex-grow">{item.desc}</p>
                        <div className="mt-3">
                          <span className="inline-block bg-accent/10 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          )}

          {/* Start Your Project CTA */}
          <div className="mt-16 text-center bg-primary rounded-2xl p-12 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              See your own before &amp; after story. Schedule a free consultation and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold h-14 px-8">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8">
                <Link href="/instant-quote">Get Instant Quote</Link>
              </Button>
            </div>
          </div>
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
