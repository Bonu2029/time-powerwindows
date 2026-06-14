import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Leaf, PenTool, ThumbsUp, CheckCircle, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroBg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_05_07_PM_1781468085531.png";
import doubleHungImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_20_40_PM_1781468088045.png";
import fiberglassDoorImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_54_PM_1781468111516.png";
import slidingPatioImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_06_53_PM_1781468117736.png";
import installerImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_25_53_PM_1781468123022.png";
import beforeImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_55_58_PM_1781468128958.png";
import afterImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_56_07_PM_1781468130859.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  useEffect(() => {
    document.title = "TP Windows & Doors | Professional Window Replacement PA & NJ";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-tight"
          >
            Premium Windows & Doors Installed By Professionals
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mt-6 mb-10 max-w-2xl leading-relaxed"
          >
            Serving Pennsylvania & New Jersey with high-quality window and door replacement services.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="text-base h-14 px-8 bg-accent text-primary hover:bg-accent/90 font-semibold">
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-white text-white hover:bg-white/10 hover:text-white font-semibold">
              <a href="tel:2679390320">Call Now</a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/80 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-accent" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={18} className="text-accent" />
              <span>Energy Efficient Products</span>
            </div>
            <div className="flex items-center gap-2">
              <PenTool size={18} className="text-accent" />
              <span>Professional Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-accent" />
              <span>Free Estimates</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose TP Windows & Doors</h2>
            <p className="text-foreground/70 text-lg">We bring decades of combined experience, premium materials, and unparalleled craftsmanship to every home we touch.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: PenTool, title: "Professional Installation", desc: "Expert installers who respect your home and ensure a perfect fit every time." },
              { icon: Leaf, title: "Energy Efficient", desc: "Products designed to lower your energy bills and keep your home comfortable year-round." },
              { icon: ShieldCheck, title: "Top Quality Materials", desc: "We partner with leading manufacturers to provide durable, beautiful windows and doors." },
              { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Our 5-star reviews reflect our commitment to doing the job right, from start to finish." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Premium Products</h2>
              <p className="text-foreground/70 text-lg">Explore our extensive collection of high-performance windows and doors designed for PA & NJ homes.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Windows */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden bg-background shadow-md border border-border flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={doubleHungImg} alt="Replacement Windows" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-3">Replacement Windows</h3>
                <p className="text-foreground/70 mb-6 flex-grow">Double hung, sliding, casement, bay, and picture windows available in multiple finishes.</p>
                <Link href="/windows" className="inline-flex items-center font-semibold text-primary group-hover:text-accent transition-colors">
                  Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Entry Doors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group rounded-xl overflow-hidden bg-background shadow-md border border-border flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={fiberglassDoorImg} alt="Entry Doors" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-3">Entry Doors</h3>
                <p className="text-foreground/70 mb-6 flex-grow">Make a lasting impression with fiberglass, steel, and modern entry door systems.</p>
                <Link href="/entry-doors" className="inline-flex items-center font-semibold text-primary group-hover:text-accent transition-colors">
                  Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Patio Doors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group rounded-xl overflow-hidden bg-background shadow-md border border-border flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={slidingPatioImg} alt="Patio Doors" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-3">Patio Doors</h3>
                <p className="text-foreground/70 mb-6 flex-grow">Connect your indoor and outdoor living spaces with sliding, French, and multi-panel glass doors.</p>
                <Link href="/patio-doors" className="inline-flex items-center font-semibold text-primary group-hover:text-accent transition-colors">
                  Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Proven Installation Process</h2>
              <p className="text-foreground/70 text-lg mb-10">We've perfected our replacement process to be as smooth and stress-free as possible for homeowners.</p>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {[
                  { step: "01", title: "Free Consultation", desc: "We discuss your needs, budget, and design preferences." },
                  { step: "02", title: "Professional Measurement", desc: "Our team takes exact measurements for a flawless fit." },
                  { step: "03", title: "Product Selection", desc: "Choose your styles, colors, and hardware options." },
                  { step: "04", title: "Installation", desc: "Clean, efficient installation by our certified professionals." },
                  { step: "05", title: "Final Inspection", desc: "We ensure everything operates perfectly before we leave." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-xl border border-border shadow-sm">
                      <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                      <p className="text-foreground/70 text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={installerImg} alt="TP Installer measuring" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8">
                <div className="flex items-center gap-3 text-white mb-2">
                  <ShieldCheck className="text-accent" />
                  <span className="font-semibold text-lg">Master Craftsmen</span>
                </div>
                <p className="text-white/90">Our installation teams have an average of 10+ years of specific window and door replacement experience.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See The Difference</h2>
            <p className="text-white/80 text-lg">A new entry door dramatically changes the curb appeal and security of your home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative group rounded-xl overflow-hidden shadow-2xl">
              <img src={beforeImg} alt="Before installation" className="w-full h-[400px] object-cover" />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-md font-bold tracking-widest text-sm border border-white/20">
                BEFORE
              </div>
            </div>
            <div className="relative group rounded-xl overflow-hidden shadow-2xl">
              <img src={afterImg} alt="After installation" className="w-full h-[400px] object-cover" />
              <div className="absolute top-4 left-4 bg-accent text-primary px-4 py-2 rounded-md font-bold tracking-widest text-sm shadow-lg">
                AFTER
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Neighbors Say</h2>
            <p className="text-foreground/70 text-lg">Don't just take our word for it. Read reviews from real homeowners across Pennsylvania and New Jersey.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: "Michael T.", loc: "Bensalem PA", product: "Double Hung Windows", review: "The crew from TP Windows arrived on time and replaced all 14 windows in our house in two days. The craftsmanship is excellent and they left the house spotless." },
              { name: "Sarah K.", loc: "Cherry Hill NJ", product: "Fiberglass Entry Door", review: "We love our new front door! The communication from the sales team to the installers was top notch. Highly recommend their services." },
              { name: "David R.", loc: "Southampton PA", product: "Sliding Patio Door", review: "Our old patio door was drafty and hard to open. The new one slides with one finger and looks incredibly modern. Very happy with the pricing too." },
              { name: "Jennifer M.", loc: "Marlton NJ", product: "Casement Windows", review: "Umed was very professional during the consultation. No high pressure sales tactics, just honest advice. The installation team was fantastic." },
              { name: "Robert L.", loc: "Newtown PA", product: "Steel Entry Door", review: "Replaced our weathered wood door with a secure steel door. The attention to detail on the trim work around the door really shows they care." },
              { name: "Lisa P.", loc: "Voorhees NJ", product: "Bay Window", review: "The custom bay window they built for our living room completely transformed the space. It brings in so much light. True professionals." },
            ].map((review, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card p-8 rounded-xl border border-border shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{review.review}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <div className="flex items-center text-sm text-foreground/60 mt-1">
                    <MapPin size={14} className="mr-1" /> {review.loc}
                  </div>
                  <div className="text-xs font-medium text-accent mt-2 uppercase tracking-wide">
                    {review.product}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="h-12 px-8">
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <MapPin className="text-accent mr-2" />
                Service Areas
              </h3>
              <p className="text-foreground/70">We proudly serve homeowners throughout the greater Philadelphia region and South Jersey.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-primary border-b border-border pb-2 mb-4">Pennsylvania</h4>
              <ul className="grid grid-cols-2 gap-y-3">
                {['Philadelphia', 'Bensalem', 'Feasterville', 'Richboro', 'Southampton', 'Newtown'].map(city => (
                  <li key={city} className="flex items-center text-foreground/80">
                    <CheckCircle size={14} className="text-accent mr-2 opacity-70" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-primary border-b border-border pb-2 mb-4">New Jersey</h4>
              <ul className="grid grid-cols-2 gap-y-3">
                {['Cherry Hill', 'Marlton', 'Mount Laurel', 'Moorestown', 'Voorhees'].map(city => (
                  <li key={city} className="flex items-center text-foreground/80">
                    <CheckCircle size={14} className="text-accent mr-2 opacity-70" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Ready To Upgrade Your Home?</h2>
          <p className="text-xl text-primary/80 mb-10 max-w-2xl mx-auto">Get A Free Estimate Today. No pressure, no obligations. Just honest advice and transparent pricing.</p>
          <Button asChild size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
