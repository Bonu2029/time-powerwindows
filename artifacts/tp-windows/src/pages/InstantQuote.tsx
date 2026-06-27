import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ArrowRight, ArrowLeft, Check, Calculator, ShieldCheck, Clock, BadgeCheck, Phone, Mail, ChevronDown, ChevronUp, Home, Wrench, Sparkles, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import img1 from "@assets/ChatGPT_Image_Jun_27,_2026_at_12_13_17_AM_1782538374001.png";
import img2 from "@assets/ChatGPT_Image_Jun_27,_2026_at_12_15_37_AM_1782538379099.png";
import img3 from "@assets/ChatGPT_Image_Jun_27,_2026_at_12_15_43_AM_1782538386418.png";
import img4 from "@assets/ChatGPT_Image_Jun_27,_2026_at_12_17_57_AM_1782538391999.png";
import img5 from "@assets/ChatGPT_Image_Jun_27,_2026_at_12_19_05_AM_1782538399968.png";
import img6 from "@assets/ChatGPT_Image_Jun_27,_2026_at_01_25_14_AM_1782538408381.png";
import img7 from "@assets/ChatGPT_Image_Jun_27,_2026_at_01_25_29_AM_1782538423131.png";
import img8 from "@assets/ChatGPT_Image_Jun_27,_2026_at_01_25_34_AM_1782538430765.png";
import img9 from "@assets/ChatGPT_Image_Jun_27,_2026_at_01_25_39_AM_1782538436900.png";
import img10 from "@assets/ChatGPT_Image_Jun_27,_2026_at_01_25_44_AM_1782538443075.png";
import img11 from "@assets/ChatGPT_Image_Jun_27,_2026_at_01_25_52_AM_1782538455822.png";
import img12 from "@assets/ChatGPT_Image_Jun_27,_2026_at_01_26_31_AM_1782538459371.png";
import img13 from "@assets/ChatGPT_Image_Jun_27,_2026_at_01_27_48_AM_1782538463608.png";
import doorImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_59_54_PM_1781468111516.png";
import patioImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_06_53_PM_1781468117736.png";

const windowTypes = [
  { id: "double-hung", name: "Double Hung Window", image: img1, category: "windows" },
  { id: "twin-double-hung", name: "Twin Double Hung", image: img2, category: "windows" },
  { id: "3x-double-hung", name: "3x Double Hung", image: img3, category: "windows" },
  { id: "picture-fixed", name: "Picture / Fixed", image: img4, category: "windows" },
  { id: "2-lite-slider", name: "2-lite Slider", image: img5, category: "windows" },
  { id: "3-lite-slider", name: "3-lite Slider", image: img6, category: "windows" },
  { id: "casement", name: "Casement Window", image: img7, category: "windows" },
  { id: "double-casement", name: "Double Casement", image: img8, category: "windows" },
  { id: "dh-picture-combo", name: "Double Hung + Picture", image: img9, category: "windows" },
  { id: "casement-picture-combo", name: "Casement + Picture", image: img10, category: "windows" },
  { id: "bay-window", name: "Bay Window", image: img13, category: "windows" },
  { id: "bow-window", name: "Bow Window", image: img13, category: "windows" },
  { id: "garden-window", name: "Garden Window", image: img4, category: "windows" },
];

const doorTypes = [
  { id: "5ft-sliding-patio", name: "5' Sliding Patio Door", image: img11, category: "patio-doors" },
  { id: "6ft-sliding-patio", name: "6' Sliding Patio Door", image: img12, category: "patio-doors" },
  { id: "french-patio", name: "French Patio Door", image: patioImg, category: "patio-doors" },
  { id: "fiberglass-entry", name: "Fiberglass Entry Door", image: doorImg, category: "entry-doors" },
  { id: "steel-entry", name: "Steel Entry Door", image: doorImg, category: "entry-doors" },
  { id: "double-entry", name: "Double Entry Door", image: doorImg, category: "entry-doors" },
];

const allProductTypes = [...windowTypes, ...doorTypes];

const categories = [
  { id: "all", label: "All Products" },
  { id: "windows", label: "Windows" },
  { id: "patio-doors", label: "Patio Doors" },
  { id: "entry-doors", label: "Entry Doors" },
];

const whatHappensNext = [
  { icon: Phone, title: "We Call Within 24 Hours", desc: "A TP Windows representative will call to confirm your details and answer any questions." },
  { icon: Home, title: "Free In-Home Consultation", desc: "We'll visit your home, take precise measurements, and review all options with you." },
  { icon: FileText, title: "Detailed Written Estimate", desc: "You'll receive a clear, itemized quote with no hidden fees or surprises." },
  { icon: Wrench, title: "Schedule Installation", desc: "Once you approve, we'll schedule a convenient installation date and keep you updated." },
];

const guaranteedInclusions = [
  "Free in-home consultation and measurement",
  "Expert installation by our own trained crews",
  "Full cleanup and debris removal",
  "Manufacturer product warranty",
  "Lifetime labor warranty",
  "Final inspection walkthrough",
];

const quoteFaqs = [
  { q: "Is the instant quote binding?", a: "No. This quote is an initial estimate based on your selections. Your final price will be confirmed during the free in-home consultation after we take exact measurements and discuss material options." },
  { q: "How accurate is the online quote?", a: "Very accurate for standard sizes and conditions. The final price may vary slightly if your openings require custom work, structural repairs, or specialized materials." },
  { q: "Can I change my selections later?", a: "Absolutely. During your consultation, we'll review every detail and you can adjust styles, colors, and quantities before placing your order." },
  { q: "How soon can installation begin?", a: "Most projects are scheduled within 2-4 weeks of order placement. During peak seasons, lead times may extend to 6-8 weeks. We'll give you an exact timeline when you order." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors">
        <span className="font-semibold text-primary pr-4">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-accent shrink-0" /> : <ChevronDown size={20} className="text-muted-foreground shrink-0" />}
      </button>
      {isOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-5 pb-5 text-foreground/70 leading-relaxed">
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export default function InstantQuote() {
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    allProductTypes.forEach((w) => { initial[w.id] = 0; });
    return initial;
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    projectTimeline: "",
    preferredContact: "",
    notes: "",
  });

  useEffect(() => {
    document.title = "Get Your Free Quote | TP Windows & Doors";
    window.scrollTo(0, 0);
  }, []);

  const totalItems = useMemo(() => Object.values(quantities).reduce((sum, qty) => sum + qty, 0), [quantities]);
  const selectedItems = useMemo(() => allProductTypes.filter((w) => quantities[w.id] > 0).map((w) => ({ ...w, quantity: quantities[w.id] })), [quantities]);

  const filteredProducts = activeCategory === "all" ? allProductTypes : allProductTypes.filter((p) => p.category === activeCategory);

  const increment = (id: string) => setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  const decrement = (id: string) => setQuantities((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  const handleFormChange = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your details and schedule a free consultation.",
    });
  };

  const canContinue = totalItems > 0;
  const canSubmit = formData.fullName && formData.email && formData.phone && formData.address && formData.city && formData.zipCode;

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Calculator size={16} />
              Free Instant Estimate
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get Your Instant Quote</h1>
            <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              Select the windows and doors you need. No email required. Get your personalized estimate in 60 seconds.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="bg-secondary border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
            <div className={`flex items-center gap-2 ${step === 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 1 ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                {step > 1 ? <Check size={16} /> : "1"}
              </div>
              <span className="text-sm font-medium hidden sm:inline">Select Products</span>
            </div>
            <div className="flex-1 h-0.5 bg-border rounded-full">
              <div className={`h-full rounded-full bg-primary transition-all duration-500 ${step >= 2 ? "w-full" : "w-0"}`} />
            </div>
            <div className={`flex items-center gap-2 ${step === 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                2
              </div>
              <span className="text-sm font-medium hidden sm:inline">Your Info</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 flex-grow">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-white shadow-md"
                        : "bg-card border border-border text-foreground hover:bg-secondary"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={fadeInUp}
                    className={`bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 ${quantities[product.id] > 0 ? "ring-2 ring-accent shadow-md" : "hover:shadow-md"}`}
                  >
                    <div className="aspect-square bg-secondary/50 p-4 flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-foreground leading-tight min-h-[2.5rem]">{product.name}</h3>
                      <div className="mt-4 flex items-center justify-between">
                        <button onClick={() => decrement(product.id)} disabled={quantities[product.id] === 0}
                          className="w-10 h-10 rounded-md border border-input bg-background flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30">
                          <Minus size={16} />
                        </button>
                        <span className="text-lg font-bold text-primary w-8 text-center">{quantities[product.id]}</span>
                        <button onClick={() => increment(product.id)}
                          className="w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom Continue */}
              <div className="mt-12 flex justify-center">
                <Button onClick={() => setStep(2)} disabled={!canContinue} size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 h-14 text-base disabled:opacity-40">
                  Continue to Your Info <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Main Form */}
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" value={formData.fullName} onChange={(e) => handleFormChange("fullName", e.target.value)} placeholder="John Smith" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleFormChange("email", e.target.value)} placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleFormChange("phone", e.target.value)} placeholder="(267) 939-0320" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input id="zipCode" value={formData.zipCode} onChange={(e) => handleFormChange("zipCode", e.target.value)} placeholder="19020" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Input id="address" value={formData.address} onChange={(e) => handleFormChange("address", e.target.value)} placeholder="123 Main Street" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" value={formData.city} onChange={(e) => handleFormChange("city", e.target.value)} placeholder="Bensalem" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectTimeline">Project Timeline</Label>
                        <Select value={formData.projectTimeline} onValueChange={(v) => handleFormChange("projectTimeline", v)}>
                          <SelectTrigger id="projectTimeline"><SelectValue placeholder="When do you want to start?" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As Soon As Possible</SelectItem>
                            <SelectItem value="1-2-weeks">Within 1-2 Weeks</SelectItem>
                            <SelectItem value="1-month">Within 1 Month</SelectItem>
                            <SelectItem value="2-3-months">Within 2-3 Months</SelectItem>
                            <SelectItem value="flexible">Flexible / Planning Ahead</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select value={formData.preferredContact} onValueChange={(v) => handleFormChange("preferredContact", v)}>
                          <SelectTrigger id="preferredContact"><SelectValue placeholder="How should we reach you?" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="any">Any / No Preference</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea id="notes" value={formData.notes} onChange={(e) => handleFormChange("notes", e.target.value)}
                        placeholder="Tell us about special requests, timing constraints, or anything else we should know..."
                        className="min-h-[100px]" />
                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                      <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} className="sm:flex-1 h-14">
                        <ArrowLeft size={18} className="mr-2" /> Back to Products
                      </Button>
                      <Button type="submit" size="lg" disabled={!canSubmit}
                        className="sm:flex-1 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base disabled:opacity-40">
                        Get My Free Estimate <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Sidebar Summary */}
                <div className="space-y-6">
                  {/* Quote Summary Card */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-[140px]">
                    <h3 className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
                      <Calculator size={20} className="text-accent" />
                      Your Selection
                    </h3>
                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                      {selectedItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between text-sm py-1">
                          <span className="text-foreground">{item.name}</span>
                          <span className="font-semibold text-primary">Qty: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground">Total Items</span>
                        <span className="text-xl font-bold text-primary">{totalItems}</span>
                      </div>
                    </div>
                    <div className="mt-4 bg-accent/10 rounded-lg p-4 text-sm text-foreground/80">
                      <p className="flex items-start gap-2">
                        <BadgeCheck size={16} className="text-accent shrink-0 mt-0.5" />
                        Prices will be confirmed during your free in-home consultation.
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                    <h4 className="font-bold text-white mb-4">Questions?</h4>
                    <div className="space-y-3 text-sm">
                      <a href="tel:2679390320" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <Phone size={16} /> (267) 939-0320
                      </a>
                      <a href="mailto:hellousa84@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <Mail size={16} /> hellousa84@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="max-w-4xl mx-auto mt-20">
                <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">What Happens After You Submit?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {whatHappensNext.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="text-accent w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guaranteed Inclusions */}
              <div className="max-w-3xl mx-auto mt-16 bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <ShieldCheck size={24} className="text-accent" />
                  Every Quote Includes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {guaranteedInclusions.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-accent" />
                      </div>
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote FAQs */}
              <div className="max-w-3xl mx-auto mt-16">
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">Quote FAQs</h2>
                <div className="space-y-4">
                  {quoteFaqs.map((faq, i) => (
                    <FAQItem
                      key={i}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openFaq === i}
                      onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
