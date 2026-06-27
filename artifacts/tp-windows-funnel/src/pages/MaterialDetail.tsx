import { Link, useLocation } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Thermometer,
  Ruler,
  ShieldCheck,
  Zap,
  Paintbrush,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { materials, materialDetails } from "@/lib/data";

const benefitIcons = [Zap, ShieldCheck, Thermometer, Paintbrush, Lightbulb, Lock];

export function MaterialDetail({ materialId }: { materialId: string }) {
  const [, navigate] = useLocation();
  const material = materials.find((m) => m.id === materialId);
  const details = materialDetails[materialId];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");

  if (!material || !details) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Material not found</h2>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const galleryImages = [
    material.image,
    materials[0].image,
    materials[1].image,
    materials[2].image,
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={material.image} alt={material.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center text-white px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white/80 hover:text-white mb-6 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-bold mb-4"
          >
            {material.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl mb-8 max-w-lg mx-auto"
          >
            Built for performance. Designed for life.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Link href="/quote">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-medium px-8 h-12 text-base">
                Get Your Instant Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed text-center"
          >
            {details.intro}
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Benefits</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {details.benefits.map((benefit, i) => {
              const IconComp = benefitIcons[i % benefitIcons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="border-border hover:border-secondary/40 transition-colors h-full">
                    <CardContent className="p-5 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="h-5 w-5 text-secondary" />
                      </div>
                      <p className="text-primary font-medium text-sm leading-relaxed">{benefit}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-xl p-8 md:p-10 text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-6 w-6 text-secondary" />
              <h3 className="font-serif text-xl font-semibold">Ideal For</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">{details.idealFor}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Gallery</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => {
                  setLightboxImg(img);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Styles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Available Styles</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {details.styles.map((style) => (
              <span
                key={style}
                className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium text-primary hover:border-secondary hover:text-secondary transition-colors"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Color Options</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
            {details.colorOptions.map((color) => (
              <div key={color} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-border shadow-sm flex items-center justify-center text-xs font-medium text-primary bg-white">
                  {color[0]}
                </div>
                <span className="text-xs text-muted-foreground">{color}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Hardware</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {details.hardware.map((hw) => (
              <Card key={hw} className="border-border text-center">
                <CardContent className="p-5 flex flex-col items-center gap-3">
                  <Lock className="h-6 w-6 text-secondary" />
                  <p className="text-sm font-medium text-primary">{hw}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Energy Efficiency</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Thermometer className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{details.energyRating.uFactor}</p>
                <p className="text-sm text-white/70">U-Factor</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{details.energyRating.shgc}</p>
                <p className="text-sm text-white/70">SHGC</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Check className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-xl font-bold mb-1">ENERGY STAR</p>
                <p className="text-sm text-white/70">Certified</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Specifications</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <table className="w-full">
              <tbody>
                {details.specs.map((spec) => (
                  <tr key={spec.label} className="border-b border-border">
                    <td className="py-4 pr-4 font-medium text-primary w-1/3">{spec.label}</td>
                    <td className="py-4 text-muted-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {details.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg bg-white px-4">
                <AccordionTrigger className="text-left font-medium text-primary text-sm py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Get Your Free Quote Today
          </h2>
          <Link href="/quote">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-medium px-10 h-14 text-lg">
              Start Your Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <img src={lightboxImg} alt="Gallery" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
        </div>
      )}
    </div>
  );
}
