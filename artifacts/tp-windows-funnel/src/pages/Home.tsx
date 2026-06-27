import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, MapPin, Phone, Star, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { materials, operatingStyles } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0B2545 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-xl">
            <motion.p custom={0} variants={fadeUp} className="text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              Pennsylvania & New Jersey
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
              Premium Windows for Your Home
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              Engineered for lasting performance, exceptional energy efficiency, and timeless style. Transform your home with windows built to endure.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-medium px-8 h-12 text-base">
                  Get Your Instant Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#materials">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 h-12 text-base">
                  View Our Materials
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={materials[0].image} alt="Premium vinyl windows" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="font-bold text-primary">4.9/5</p>
                <p className="text-xs text-muted-foreground">Customer Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-white py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-secondary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Serving PA & NJ</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-secondary" />
              <span>Premium Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-secondary font-medium tracking-wider uppercase text-sm mb-3">Our Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Premium Window Materials</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {materials.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden group cursor-pointer border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-primary mb-3">{m.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{m.shortDescription}</p>
                    <Link href={m.slug}>
                      <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Styles Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-secondary font-medium tracking-wider uppercase text-sm mb-3">Styles</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Explore Operating Styles</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {operatingStyles.map((style, i) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group"
              >
                <Card className="bg-primary/80 border-white/10 hover:border-secondary/50 transition-all duration-300 cursor-pointer overflow-hidden h-full">
                  <div className="h-32 overflow-hidden">
                    {style.image ? (
                      <img src={style.image} alt={style.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary/60 text-xs font-medium">Window Style</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-serif text-sm font-medium text-white group-hover:text-secondary transition-colors text-center">{style.title}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0B2545 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Upgrade Your Home?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Get a personalized quote in minutes. Our team will guide you every step of the way.
            </p>
            <Link href="/quote">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-medium px-10 h-14 text-lg">
                Get Your Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
