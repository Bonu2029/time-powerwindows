import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Leaf, PenTool, ThumbsUp, CheckCircle, MapPin, Star, Phone, Award, Clock, ChevronDown, ChevronUp, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import heroBg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_05_07_PM_1781468085531.png";
import doubleHungImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_20_40_PM_1781468088045.png";
import fiberglassDoorImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_54_PM_1781468111516.png";
import slidingPatioImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_06_53_PM_1781468117736.png";
import installerImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_25_53_PM_1781468123022.png";

import baBefore1 from "@assets/Screenshot_2026-06-27_at_4.45.43_PM_1782593232230.png";
import baAfter1 from "@assets/Screenshot_2026-06-27_at_4.45.57_PM_1782593219873.png";
import baBefore2 from "@assets/Screenshot_2026-06-27_at_4.45.13_PM_1782593258584.png";
import baAfter2 from "@assets/Screenshot_2026-06-27_at_4.45.23_PM_1782593246797.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const heroStats = [
  { label: "Years Experience", value: "15+" },
  { label: "Homes Served", value: "500+" },
  { label: "5-Star Reviews", value: "100+" },
  { label: "Service Areas", value: "20+" },
];

const trustBadges = [
  { icon: Star, title: "5-Star Customer Rating", desc: "Over 100 verified reviews from happy homeowners across PA & NJ." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed contractor with comprehensive liability insurance." },
  { icon: Award, title: "Free Estimates", desc: "No-obligation in-home consultations with honest, upfront pricing." },
  { icon: Leaf, title: "Energy Efficient Products", desc: "ENERGY STAR certified windows and doors that lower utility bills." },
  { icon: PenTool, title: "Professional Installation", desc: "Our own trained crews. Never subcontractors. Clean, precise work." },
  { icon: BadgeCheck, title: "Warranty Protection", desc: "Lifetime labor warranty plus manufacturer product guarantees." },
];

const warrantyFeatures = [
  { title: "Product Warranty", desc: "All windows and doors carry manufacturer warranties against defects, seal failure, and hardware issues." },
  { title: "Labor & Installation Warranty", desc: "We stand behind our work with a lifetime installation warranty. If anything fails due to our craftsmanship, we fix it free." },
  { title: "Clean Installation Promise", desc: "We protect your floors, furniture, and landscaping. Our crews clean up thoroughly before they leave." },
  { title: "Final Inspection", desc: "Every project ends with a walkthrough. We verify operation, seals, trim, and cleanup before signing off." },
];

const serviceAreas = {
  pennsylvania: [
    "Philadelphia", "Bensalem", "Feasterville", "Richboro", "Southampton",
    "Newtown", "Warminster", "Warrington", "Doylestown", "Langhorne",
  ],
  newJersey: [
    "Cherry Hill", "Marlton", "Mount Laurel", "Moorestown", "Voorhees",
    "Haddonfield", "Medford", "Maple Shade", "Collingswood", "Pennsauken",
  ],
};

const faqs = [
  { q: "How much does window replacement cost?", a: "Costs vary based on window type, size, material, and quantity. A typical double-hung vinyl window replacement ranges from $400–$800 per window installed. We provide free, detailed estimates with no surprises." },
  { q: "Are estimates really free?", a: "Yes. Every in-home consultation and estimate is completely free with no obligation. We believe in honest pricing and giving homeowners the information they need to make the right decision." },
  { q: "How long does installation take?", a: "Most full-home window replacements are completed in 1–2 days. Entry doors typically take 3–5 hours. Patio doors vary by complexity, usually 4–6 hours. We always finish on schedule." },
  { q: "Do you offer financing?", a: "Yes, we partner with financing providers to offer flexible payment plans for qualified homeowners. Ask about options during your free consultation." },
  { q: "What areas do you serve?", a: "We serve the greater Philadelphia region and all of South Jersey, including Bucks County, Montgomery County, Camden County, Burlington County, and Mercer County." },
  { q: "Are you licensed and insured?", a: "Absolutely. TP Windows & Doors is a fully licensed Pennsylvania and New Jersey contractor with comprehensive general liability and workers compensation insurance." },
  { q: "What warranty is included?", a: "We include a lifetime installation labor warranty on all our work, plus full manufacturer warranties on every product we install. Read more in our Warranty section." },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-semibold text-primary pr-4">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-accent shrink-0" /> : <ChevronDown size={20} className="text-muted-foreground shrink-0" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="px-5 pb-5 text-foreground/70 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          {/* Local Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-5 py-2 text-accent font-semibold text-sm mb-6 border border-accent/30"
          >
            <ShieldCheck size={16} />
            Trusted by 500+ PA & NJ Homeowners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
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
            Serving Pennsylvania & New Jersey with high-quality window and door replacement services. Free estimates, honest pricing, lifetime warranty.
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
            <Button asChild size="lg" className="text-base h-14 px-8 bg-white text-primary hover:bg-white/90 font-semibold">
              <Link href="/instant-quote">Get Instant Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-white text-white hover:bg-white/10 hover:text-white font-semibold">
              <a href="tel:2679390320"><Phone size={18} className="mr-2" />Call Now</a>
            </Button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
          >
            {heroStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Homeowners Trust Us</h2>
            <p className="text-foreground/70 text-lg">We don't just install windows and doors. We deliver peace of mind, energy savings, and lasting value.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {trustBadges.map((badge, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
                <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <badge.icon className="text-primary w-7 h-7 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{badge.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{badge.desc}</p>
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

      {/* Before & After Slider */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See The Difference</h2>
            <p className="text-white/80 text-lg">Drag the slider to see how new windows and doors completely transform curb appeal and home value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <BeforeAfterSlider
                beforeImage={baBefore1}
                afterImage={baAfter1}
                className="aspect-[16/10]"
              />
              <div className="bg-primary-foreground/5 p-5">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                  <MapPin size={14} />
                  <span>Cherry Hill, NJ</span>
                  <span className="mx-1">|</span>
                  <span>Full Window & Door Replacement</span>
                </div>
                <p className="text-white/60 text-sm">Complete exterior upgrade with energy-efficient windows and a new entry door system.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <BeforeAfterSlider
                beforeImage={baBefore2}
                afterImage={baAfter2}
                className="aspect-[16/10]"
              />
              <div className="bg-primary-foreground/5 p-5">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                  <MapPin size={14} />
                  <span>Mount Laurel, NJ</span>
                  <span className="mx-1">|</span>
                  <span>Window & Shutter Update</span>
                </div>
                <p className="text-white/60 text-sm">Fresh white window frames paired with modern black shutters for a stunning contrast.</p>
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

      {/* Warranty Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Warranty Protection You Can Count On</h2>
            <p className="text-foreground/70 text-lg">We back every project with industry-leading warranties. Your investment is protected for the long haul.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {warrantyFeatures.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card border border-border p-8 rounded-xl shadow-sm text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <ShieldCheck className="text-accent w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground inline-flex items-center gap-2 bg-secondary rounded-full px-6 py-3">
              <BadgeCheck size={16} className="text-accent" />
              All warranties are documented in writing and transferred to the next homeowner if you sell.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary/50">
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
              { name: "Michael T.", loc: "Bensalem, PA", product: "Double Hung Windows", review: "The crew from TP Windows arrived on time and replaced all 14 windows in our house in two days. The craftsmanship is excellent and they left the house spotless." },
              { name: "Sarah K.", loc: "Cherry Hill, NJ", product: "Fiberglass Entry Door", review: "We love our new front door! The communication from the sales team to the installers was top notch. Highly recommend their services." },
              { name: "David R.", loc: "Southampton, PA", product: "Sliding Patio Door", review: "Our old patio door was drafty and hard to open. The new one slides with one finger and looks incredibly modern. Very happy with the pricing too." },
              { name: "Jennifer M.", loc: "Marlton, NJ", product: "Casement Windows", review: "Umed was very professional during the consultation. No high pressure sales tactics, just honest advice. The installation team was fantastic." },
              { name: "Robert L.", loc: "Newtown, PA", product: "Steel Entry Door", review: "Replaced our weathered wood door with a secure steel door. The attention to detail on the trim work around the door really shows they care." },
              { name: "Lisa P.", loc: "Voorhees, NJ", product: "Bay Window", review: "The custom bay window they built for our living room completely transformed the space. It brings in so much light. True professionals." },
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Areas We Serve</h2>
            <p className="text-foreground/70 text-lg">We proudly serve homeowners throughout the greater Philadelphia region and South Jersey. Local service, local expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pennsylvania */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Pennsylvania</h3>
                  <p className="text-sm text-muted-foreground">Bucks & Montgomery Counties</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.pennsylvania.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-foreground/80 bg-secondary rounded-lg px-3 py-2">
                    <CheckCircle size={12} className="text-accent" />
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {/* New Jersey */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">New Jersey</h3>
                  <p className="text-sm text-muted-foreground">Camden & Burlington Counties</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.newJersey.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-foreground/80 bg-secondary rounded-lg px-3 py-2">
                    <CheckCircle size={12} className="text-accent" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/70 text-lg">Everything you need to know about window and door replacement.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild variant="outline" className="h-12 px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Ready To Upgrade Your Home?</h2>
          <p className="text-xl text-primary/80 mb-10 max-w-2xl mx-auto">Get A Free Estimate Today. No pressure, no obligations. Just honest advice and transparent pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all">
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="h-16 px-10 text-lg bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all">
              <Link href="/instant-quote">Get Instant Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
