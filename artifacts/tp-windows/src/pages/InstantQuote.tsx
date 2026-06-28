import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus, Plus, ArrowRight, ArrowLeft, Check, Calculator, ShieldCheck, Clock,
  BadgeCheck, Phone, Mail, ChevronDown, ChevronUp, Home, Wrench, Sparkles,
  FileText, Calendar as CalendarIcon, Clock3, MapPin, User, CreditCard, Tag,
  CheckCircle2, Star, Shield, Thermometer, Layers, Paintbrush, Grid3X3,
  PanelTop, Gem, Percent, Receipt, MessageSquare, ChevronLeft, ChevronRight,
  Video, Building2, ClipboardList, Ruler, Zap, Eye, Ban, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

/* ── Product Images ── */
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

/* ── Grid Style Images ── */
import gridNoneImg from "@assets/ChatGPT_Image_Jun_27,_2026_at_05_09_01_PM_(1)_1782605351686.png";
import gridColonialImg from "@assets/ChatGPT_Image_Jun_27,_2026_at_05_09_01_PM_(2)_1782605355810.png";
import gridPrairieImg from "@assets/ChatGPT_Image_Jun_27,_2026_at_05_09_01_PM_(3)_1782605360959.png";
import gridDiamondImg from "@assets/ChatGPT_Image_Jun_27,_2026_at_05_09_02_PM_(4)_1782605366296.png";

/* ── Data ── */
const windowTypes = [
  { id: "double-hung", name: "Double Hung Window", image: img1, category: "windows", basePrice: 425 },
  { id: "twin-double-hung", name: "Twin Double Hung", image: img2, category: "windows", basePrice: 780 },
  { id: "3x-double-hung", name: "3x Double Hung", image: img3, category: "windows", basePrice: 1120 },
  { id: "picture-fixed", name: "Picture / Fixed", image: img4, category: "windows", basePrice: 350 },
  { id: "2-lite-slider", name: "2-lite Slider", image: img5, category: "windows", basePrice: 520 },
  { id: "3-lite-slider", name: "3-lite Slider", image: img6, category: "windows", basePrice: 790 },
  { id: "casement", name: "Casement Window", image: img7, category: "windows", basePrice: 580 },
  { id: "double-casement", name: "Double Casement", image: img8, category: "windows", basePrice: 1050 },
  { id: "dh-picture-combo", name: "Double Hung + Picture", image: img9, category: "windows", basePrice: 920 },
  { id: "casement-picture-combo", name: "Casement + Picture", image: img10, category: "windows", basePrice: 980 },
  { id: "bay-window", name: "Bay Window", image: img13, category: "windows", basePrice: 1850 },
  { id: "bow-window", name: "Bow Window", image: img13, category: "windows", basePrice: 2200 },
  { id: "garden-window", name: "Garden Window", image: img4, category: "windows", basePrice: 1200 },
];

const doorTypes = [
  { id: "5ft-sliding-patio", name: "5' Sliding Patio Door", image: img11, category: "patio-doors", basePrice: 1450 },
  { id: "6ft-sliding-patio", name: "6' Sliding Patio Door", image: img12, category: "patio-doors", basePrice: 1650 },
  { id: "french-patio", name: "French Patio Door", image: patioImg, category: "patio-doors", basePrice: 2200 },
  { id: "fiberglass-entry", name: "Fiberglass Entry Door", image: doorImg, category: "entry-doors", basePrice: 1800 },
  { id: "steel-entry", name: "Steel Entry Door", image: doorImg, category: "entry-doors", basePrice: 1400 },
  { id: "double-entry", name: "Double Entry Door", image: doorImg, category: "entry-doors", basePrice: 3200 },
];

const allProductTypes = [...windowTypes, ...doorTypes];

const categories = [
  { id: "all", label: "All Products" },
  { id: "windows", label: "Windows" },
  { id: "patio-doors", label: "Patio Doors" },
  { id: "entry-doors", label: "Entry Doors" },
];

const sizeMultipliers: Record<string, number> = { small: 0.85, medium: 1.0, large: 1.25 };

const gridOptions = [
  { id: "none", name: "None", image: gridNoneImg, price: 0, label: "Included" },
  { id: "colonial", name: "Colonial", image: gridColonialImg, price: 58, label: "+$58/win" },
  { id: "prairie", name: "Prairie", image: gridPrairieImg, price: 118, label: "+$118/win" },
  { id: "diamond", name: "Diamond", image: gridDiamondImg, price: 288, label: "+$288/win" },
];

const colorOptions = [
  { id: "white", name: "Gallery White", price: 0, label: "Included" },
  { id: "beige", name: "Beige", price: 42, label: "+$42/win" },
  { id: "bronze", name: "Bronze", price: 58, label: "+$58/win" },
  { id: "black", name: "Modern Black", price: 72, label: "+$72/win" },
  { id: "brown", name: "Royal Brown", price: 72, label: "+$72/win" },
];

const addonOptions = [
  { id: "trim", name: "New Interior Trim", price: 85, label: "+$85/win" },
  { id: "coating", name: "Glass Coating", price: 120, label: "+$120/win" },
  { id: "r5", name: "R5 Glass Package", price: 195, label: "+$195/win" },
];

const tiers = [
  {
    id: "comfort",
    name: "Comfort",
    multiplier: 1.0,
    desc: "Reliable performance at an exceptional value.",
    features: ["Double-pane vinyl construction", "Energy Star certified", "UV-resistant exterior coating", "Lifetime manufacturer warranty", "Lifetime labor warranty"],
    warranty: "Lifetime on frame, glass & labor",
    energy: "Energy Star certified",
  },
  {
    id: "performance",
    name: "Performance",
    multiplier: 1.15,
    desc: "Enhanced insulation and durability for lasting comfort.",
    features: ["Foam-filled frame for better insulation", "Low-E glass with argon gas fill", "Reinforced multi-chamber frame", "Enhanced weatherstripping", "Lifetime warranties on all components"],
    warranty: "Lifetime + glass breakage coverage",
    energy: "20% better U-Factor than Comfort",
  },
  {
    id: "pinnacle",
    name: "Pinnacle",
    multiplier: 1.35,
    desc: "The ultimate in energy efficiency and premium aesthetics.",
    features: ["Triple-pane glass with krypton gas", "Highest possible energy rating", "Upgraded hardware & screens", "Glass breakage warranty included", "Expanded interior & exterior color options"],
    warranty: "Lifetime + accidental glass breakage",
    energy: "40% better U-Factor than Comfort",
  },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const steps = [
  { num: 1, label: "Select Products" },
  { num: 2, label: "Your Info" },
  { num: 3, label: "Quote Summary" },
  { num: 4, label: "Finishes" },
  { num: 5, label: "Performance" },
  { num: 6, label: "Investment" },
  { num: 7, label: "Schedule" },
];

/* ── Animations ── */
const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };

/* ── Helpers ── */
function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
}

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/* ── FAQ Item ── */
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

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function InstantQuote() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Step 1: quantities */
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    allProductTypes.forEach((w) => { initial[w.id] = 0; });
    return initial;
  });

  /* Step 2: customer info */
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "", phone: "", email: "", address: "", city: "", state: "PA", zipCode: "",
    timeline: "", notes: "", smsConsent: false,
  });

  /* Step 3/4: per-item customization */
  const [itemSizes, setItemSizes] = useState<Record<string, string>>({});
  const [gridStyle, setGridStyle] = useState("none");
  const [interiorColor, setInteriorColor] = useState("white");
  const [exteriorColor, setExteriorColor] = useState("white");
  const [addons, setAddons] = useState<Set<string>>(new Set());

  /* Step 5: tier */
  const [tier, setTier] = useState("performance");

  /* Step 7: appointment */
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [consultType, setConsultType] = useState<"in-home" | "virtual">("in-home");
  const [apptNotes, setApptNotes] = useState("");
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  /* ── Derived ── */
  const selectedItems = useMemo(() =>
    allProductTypes.filter((p) => quantities[p.id] > 0).map((p) => ({ ...p, quantity: quantities[p.id] })),
  [quantities]);

  const totalItems = useMemo(() => selectedItems.reduce((s, i) => s + i.quantity, 0), [selectedItems]);

  const windowCount = useMemo(() =>
    selectedItems.filter((i) => i.category === "windows").reduce((s, i) => s + i.quantity, 0),
  [selectedItems]);

  /* ── Pricing Engine ── */
  const pricing = useMemo(() => {
    const tierObj = tiers.find((t) => t.id === tier)!;

    let baseTotal = 0;
    selectedItems.forEach((item) => {
      const sizeKey = itemSizes[item.id] || "medium";
      const sizeMult = sizeMultipliers[sizeKey] || 1.0;
      baseTotal += item.basePrice * item.quantity * sizeMult;
    });

    const tieredTotal = baseTotal * tierObj.multiplier;

    const gridTotal = windowCount * (gridOptions.find((g) => g.id === gridStyle)?.price || 0);
    const intTotal = windowCount * (colorOptions.find((c) => c.id === interiorColor)?.price || 0);
    const extTotal = windowCount * (colorOptions.find((c) => c.id === exteriorColor)?.price || 0);
    let addonTotal = 0;
    addons.forEach((aId) => {
      const addon = addonOptions.find((a) => a.id === aId);
      if (addon) addonTotal += windowCount * addon.price;
    });

    const upgradesTotal = gridTotal + intTotal + extTotal + addonTotal;
    const grandTotal = tieredTotal + upgradesTotal;
    const monthlyPayment = grandTotal / 24;

    return {
      baseTotal,
      tieredTotal,
      gridTotal,
      intTotal,
      extTotal,
      addonTotal,
      upgradesTotal,
      grandTotal,
      monthlyPayment,
      tierObj,
    };
  }, [selectedItems, itemSizes, gridStyle, interiorColor, exteriorColor, addons, tier, windowCount]);

  /* ── Actions ── */
  const inc = (id: string) => setQuantities((p) => ({ ...p, [id]: p[id] + 1 }));
  const dec = (id: string) => setQuantities((p) => ({ ...p, [id]: Math.max(0, p[id] - 1) }));
  const setSize = (id: string, size: string) => setItemSizes((p) => ({ ...p, [id]: size }));
  const toggleAddon = (id: string) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const filteredProducts = activeCategory === "all"
    ? allProductTypes
    : allProductTypes.filter((p) => p.category === activeCategory);

  const canContinueStep1 = totalItems > 0;
  const canContinueStep2 = customerInfo.fullName && customerInfo.phone && customerInfo.email && customerInfo.address && customerInfo.city && customerInfo.zipCode;

  /* ── Calendar Helpers ── */
  const today = new Date();
  const calDays = useMemo(() => getMonthDays(calendarMonth.year, calendarMonth.month), [calendarMonth]);
  const isDateAvailable = (day: number) => {
    const d = new Date(calendarMonth.year, calendarMonth.month, day);
    return d >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const canSubmitAppt = selectedDate && selectedTime && customerInfo.fullName;

  useEffect(() => {
    document.title = "Get Your Free Quote | TP Windows & Doors";
    window.scrollTo(0, 0);
  }, [step]);

  /* ═══════ STEP INDICATOR ═══════ */
  const StepIndicator = () => (
    <div className="bg-secondary border-b">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-center gap-1 sm:gap-2 max-w-3xl mx-auto">
          {steps.map((s, idx) => (
            <div key={s.num} className="flex items-center gap-1 sm:gap-2">
              <div className={`flex items-center gap-1 sm:gap-1.5 ${step >= s.num ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 ${
                  step === s.num ? "bg-primary text-primary-foreground" :
                  step > s.num ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {step > s.num ? <Check size={14} /> : s.num}
                </div>
                <span className="text-xs sm:text-sm font-medium hidden md:inline whitespace-nowrap">{s.label}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="w-4 sm:w-8 h-0.5 bg-border rounded-full hidden sm:block">
                  <div className={`h-full rounded-full bg-primary transition-all duration-500 ${step > s.num ? "w-full" : "w-0"}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ═══════ PRICE CARD (reused on steps 3-6) ═══════ */
  const PriceCard = ({ showMonthly = true, sticky = true }: { showMonthly?: boolean; sticky?: boolean }) => (
    <div className={`bg-card border border-border rounded-xl p-6 shadow-sm ${sticky ? "sticky top-[140px]" : ""}`}>
      <h3 className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
        <Calculator size={20} className="text-accent" />
        Your Quote
      </h3>

      <div className="space-y-2 text-sm">
        {selectedItems.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span className="text-foreground/80">{item.name} <span className="text-foreground/50">x{item.quantity}</span></span>
            <span className="font-medium">{formatCurrency(item.basePrice * item.quantity * (sizeMultipliers[itemSizes[item.id] || "medium"] || 1.0))}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-border space-y-1 text-sm">
        {pricing.gridTotal > 0 && (
          <div className="flex justify-between text-foreground/70"><span>Grid Style</span><span>{formatCurrency(pricing.gridTotal)}</span></div>
        )}
        {pricing.intTotal > 0 && (
          <div className="flex justify-between text-foreground/70"><span>Interior Color</span><span>{formatCurrency(pricing.intTotal)}</span></div>
        )}
        {pricing.extTotal > 0 && (
          <div className="flex justify-between text-foreground/70"><span>Exterior Finish</span><span>{formatCurrency(pricing.extTotal)}</span></div>
        )}
        {pricing.addonTotal > 0 && (
          <div className="flex justify-between text-foreground/70"><span>Add-Ons</span><span>{formatCurrency(pricing.addonTotal)}</span></div>
        )}
        <div className="flex justify-between text-foreground/70">
          <span>Performance Tier</span>
          <span>{pricing.tierObj.name} ({Math.round((pricing.tierObj.multiplier - 1) * 100)}%)</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t-2 border-border">
        <div className="flex justify-between items-baseline">
          <span className="font-bold text-primary text-lg">Estimated Total</span>
          <span className="font-bold text-primary text-2xl">{formatCurrency(pricing.grandTotal)}</span>
        </div>
        {showMonthly && (
          <div className="text-sm text-foreground/60 mt-1 text-right">
            or est. <span className="font-semibold text-accent">{formatCurrency(pricing.monthlyPayment)}/mo</span> for 24 mo
          </div>
        )}
      </div>

      <div className="mt-4 bg-accent/10 rounded-lg p-3 text-xs text-foreground/70 flex items-start gap-2">
        <Info size={14} className="text-accent shrink-0 mt-0.5" />
        Final pricing confirmed during your free in-home consultation.
      </div>
    </div>
  );

  /* ═══════ STEP 1: SELECT PRODUCTS ═══════ */
  const Step1 = () => (
    <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id ? "bg-primary text-white shadow-md" : "bg-card border border-border text-foreground hover:bg-secondary"
            }`}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div variants={staggerContainer} initial="hidden" animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <motion.div key={product.id} variants={fadeIn}
            className={`bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 ${quantities[product.id] > 0 ? "ring-2 ring-accent shadow-md" : "hover:shadow-md"}`}>
            <div className="aspect-square bg-secondary/50 p-4 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm text-foreground leading-tight min-h-[2.5rem]">{product.name}</h3>
              <p className="text-xs text-foreground/50 mt-1">Starting at {formatCurrency(product.basePrice)}</p>
              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => dec(product.id)} disabled={quantities[product.id] === 0}
                  className="w-10 h-10 rounded-md border border-input bg-background flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30">
                  <Minus size={16} />
                </button>
                <span className="text-lg font-bold text-primary w-8 text-center">{quantities[product.id]}</span>
                <button onClick={() => inc(product.id)}
                  className="w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Sticky Summary Bar */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 p-4">
          <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Calculator size={20} className="text-accent" />
              </div>
              <div>
                <div className="font-bold text-primary">{totalItems} item{totalItems !== 1 ? "s" : ""} selected</div>
                <div className="text-sm text-foreground/60">Est. total {formatCurrency(pricing.grandTotal)}</div>
              </div>
            </div>
            <Button onClick={() => setStep(2)} size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12">
              Get My Free Estimate <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {!totalItems && (
        <div className="mt-12 flex justify-center">
          <Button disabled size="lg" className="bg-primary/40 text-primary-foreground font-semibold px-12 h-14 text-base cursor-not-allowed">
            Select at least one product to continue
          </Button>
        </div>
      )}
    </motion.div>
  );

  /* ═══════ STEP 2: CUSTOMER INFO ═══════ */
  const step2Element = (
    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-primary mb-6">Tell Us About Your Project</h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" value={customerInfo.fullName} onChange={(e) => setCustomerInfo((p) => ({ ...p, fullName: e.target.value }))} placeholder="John Smith" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" value={customerInfo.phone} onChange={(e) => setCustomerInfo((p) => ({ ...p, phone: e.target.value }))} placeholder="(267) 939-0320" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" value={customerInfo.email} onChange={(e) => setCustomerInfo((p) => ({ ...p, email: e.target.value }))} placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input id="zipCode" value={customerInfo.zipCode} onChange={(e) => setCustomerInfo((p) => ({ ...p, zipCode: e.target.value }))} placeholder="19020" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Input id="address" value={customerInfo.address} onChange={(e) => setCustomerInfo((p) => ({ ...p, address: e.target.value }))} placeholder="123 Main Street" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input id="city" value={customerInfo.city} onChange={(e) => setCustomerInfo((p) => ({ ...p, city: e.target.value }))} placeholder="Bensalem" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select value={customerInfo.state} onValueChange={(v) => setCustomerInfo((p) => ({ ...p, state: v }))}>
                  <SelectTrigger id="state"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PA">Pennsylvania</SelectItem>
                    <SelectItem value="NJ">New Jersey</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Project Timeline</Label>
                <Select value={customerInfo.timeline} onValueChange={(v) => setCustomerInfo((p) => ({ ...p, timeline: v }))}>
                  <SelectTrigger id="timeline"><SelectValue placeholder="When do you want to start?" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">As Soon As Possible</SelectItem>
                    <SelectItem value="1-2-weeks">Within 1-2 Weeks</SelectItem>
                    <SelectItem value="1-month">Within 1 Month</SelectItem>
                    <SelectItem value="2-3-months">Within 2-3 Months</SelectItem>
                    <SelectItem value="flexible">Flexible / Planning Ahead</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Project Details (Optional)</Label>
              <Textarea id="notes" value={customerInfo.notes} onChange={(e) => setCustomerInfo((p) => ({ ...p, notes: e.target.value }))}
                placeholder="Tell us about special requests, number of windows, existing issues, timing constraints..." className="min-h-[100px]" />
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} className="sm:flex-1 h-14">
                <ArrowLeft size={18} className="mr-2" /> Back to Products
              </Button>
              <Button type="submit" size="lg" disabled={!canContinueStep2}
                className="sm:flex-1 h-14 bg-primary hover:bg-primary/90 text-white font-semibold text-base disabled:opacity-40">
                Continue to Quote Summary <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </form>
        </div>
        <div className="space-y-6">
          <PriceCard />
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
    </motion.div>
  );

  /* ═══════ STEP 3: QUOTE SUMMARY + CUSTOMIZATION ═══════ */
  const Step3 = () => (
    <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
      {/* Hero */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Sparkles size={16} /> Your Quote Is Ready
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Customize Your Quote</h2>
          <p className="text-lg text-primary-foreground/80 mb-6">
            Review your selections below, choose sizes for each product, and then add finishes & upgrades.
          </p>
          <Button onClick={() => setStep(4)} className="bg-accent text-primary hover:bg-accent/90 font-semibold px-8 h-12">
            Customize Finishes & Upgrades <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
        <img src={img1} alt="Window" className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 opacity-20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-primary flex items-center gap-2">
            <ClipboardList size={22} className="text-accent" />
            Selected Products
          </h3>
          {selectedItems.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-start gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain bg-secondary/50 rounded-lg shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-primary">{item.name}</h4>
                    <span className="text-sm font-semibold text-accent">Qty: {item.quantity}</span>
                  </div>
                  <p className="text-sm text-foreground/60 mt-1">Starting at {formatCurrency(item.basePrice)} each</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(["small", "medium", "large"] as const).map((sz) => (
                      <button key={sz} onClick={() => setSize(item.id, sz)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                          (itemSizes[item.id] || "medium") === sz
                            ? "bg-primary text-white shadow-sm"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}>
                        {sz} ({sz === "small" ? "-15%" : sz === "large" ? "+25%" : "Standard"})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <PriceCard />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 flex justify-between">
        <Button variant="outline" size="lg" onClick={() => setStep(2)} className="h-12">
          <ArrowLeft size={18} className="mr-2" /> Back
        </Button>
        <Button size="lg" onClick={() => setStep(4)} className="bg-primary hover:bg-primary/90 text-white h-12 px-8">
          Continue <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>
    </motion.div>
  );

  /* ═══════ STEP 4: FINISHES & UPGRADES ═══════ */
  const Step4 = () => (
    <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Paintbrush size={24} className="text-accent" />
            Finishes & Upgrades
          </h2>

          {/* Grid Style */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
              <Grid3X3 size={18} className="text-accent" />
              Grid Style
            </h3>
            <div className="flex flex-wrap gap-3">
              {gridOptions.map((opt) => {
                const isActive = gridStyle === opt.id;
                return (
                  <button key={opt.id} onClick={() => setGridStyle(opt.id)}
                    className={`flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full text-sm font-medium transition-all border-2 ${
                      isActive
                        ? "border-amber-500 bg-amber-50 text-amber-900"
                        : "border-gray-200 bg-white text-foreground hover:border-gray-300"
                    }`}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 overflow-hidden" style={{ backgroundColor: '#0b1d3a', border: '1px solid #1a3a5c' }}>
                      <img src={opt.image} alt={opt.name} className="w-9 h-9 object-contain" />
                    </div>
                    <span>{opt.name}</span>
                    <span className={`ml-auto text-xs font-semibold ${isActive ? "text-amber-700" : "text-foreground/50"}`}>
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interior Color */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
              <PanelTop size={18} className="text-accent" />
              Interior Color
            </h3>
            <div className="flex flex-wrap gap-3">
              {colorOptions.map((opt) => {
                const isActive = interiorColor === opt.id;
                return (
                  <button key={opt.id} onClick={() => setInteriorColor(opt.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all border-2 ${
                      isActive
                        ? "border-amber-500 bg-amber-50 text-amber-900"
                        : "border-gray-200 bg-white text-foreground hover:border-gray-300"
                    }`}>
                    <span className={`w-4 h-4 rounded-full border ${
                      opt.id === "white" ? "bg-white border-gray-300" :
                      opt.id === "beige" ? "bg-[#E8DCC4] border-[#D4C9A8]" :
                      opt.id === "bronze" ? "bg-[#8B7355] border-[#7A6548]" :
                      opt.id === "black" ? "bg-[#2A2A2A] border-[#1A1A1A]" :
                      "bg-[#5C3A21] border-[#4A2E1A]"
                    }`} />
                    <span>{opt.name}</span>
                    <span className={`text-xs font-semibold ${isActive ? "text-amber-700" : "text-foreground/50"}`}>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exterior Finish */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
              <Layers size={18} className="text-accent" />
              Exterior Finish
            </h3>
            <div className="flex flex-wrap gap-3">
              {colorOptions.map((opt) => {
                const isActive = exteriorColor === opt.id;
                return (
                  <button key={opt.id} onClick={() => setExteriorColor(opt.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all border-2 ${
                      isActive
                        ? "border-amber-500 bg-amber-50 text-amber-900"
                        : "border-gray-200 bg-white text-foreground hover:border-gray-300"
                    }`}>
                    <span className={`w-4 h-4 rounded-full border ${
                      opt.id === "white" ? "bg-white border-gray-300" :
                      opt.id === "beige" ? "bg-[#E8DCC4] border-[#D4C9A8]" :
                      opt.id === "bronze" ? "bg-[#8B7355] border-[#7A6548]" :
                      opt.id === "black" ? "bg-[#2A2A2A] border-[#1A1A1A]" :
                      "bg-[#5C3A21] border-[#4A2E1A]"
                    }`} />
                    <span>{opt.name}</span>
                    <span className={`text-xs font-semibold ${isActive ? "text-amber-700" : "text-foreground/50"}`}>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
              <Zap size={18} className="text-accent" />
              Add-Ons
            </h3>
            <div className="space-y-3">
              {addonOptions.map((opt) => {
                const isActive = addons.has(opt.id);
                return (
                  <button key={opt.id} onClick={() => toggleAddon(opt.id)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all border-2 ${
                      isActive
                        ? "border-amber-500 bg-amber-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}>
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 ${
                      isActive ? "border-amber-500 bg-amber-500" : "border-gray-300"
                    }`}>
                      {isActive && <Check size={14} className="text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{opt.name}</div>
                    </div>
                    <span className={`text-sm font-semibold ${isActive ? "text-amber-700" : "text-foreground/50"}`}>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <PriceCard />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 flex justify-between">
        <Button variant="outline" size="lg" onClick={() => setStep(3)} className="h-12">
          <ArrowLeft size={18} className="mr-2" /> Back
        </Button>
        <Button size="lg" onClick={() => setStep(5)} className="bg-primary hover:bg-primary/90 text-white h-12 px-8">
          Choose Performance <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>
    </motion.div>
  );

  /* ═══════ STEP 5: PERFORMANCE TIER ═══════ */
  const Step5 = () => (
    <motion.div key="step5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-primary text-center mb-3">Choose Your Performance Tier</h2>
        <p className="text-foreground/60 text-center max-w-xl mx-auto mb-10">
          Select the level of energy efficiency, durability, and warranty coverage that fits your home and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const isActive = tier === t.id;
            const price = pricing.baseTotal * t.multiplier + pricing.upgradesTotal;
            const monthly = price / 24;
            return (
              <button key={t.id} onClick={() => setTier(t.id)}
                className={`text-left rounded-2xl border-2 p-6 transition-all ${
                  isActive
                    ? "border-amber-500 bg-amber-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300 shadow-sm"
                }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${isActive ? "text-amber-900" : "text-primary"}`}>{t.name}</h3>
                  {isActive && <Star size={20} className="text-amber-500 fill-amber-500" />}
                </div>
                <p className={`text-sm mb-4 ${isActive ? "text-amber-800" : "text-foreground/60"}`}>{t.desc}</p>
                <div className="mb-4">
                  <div className={`text-3xl font-bold ${isActive ? "text-amber-900" : "text-primary"}`}>{formatCurrency(price)}</div>
                  <div className={`text-sm ${isActive ? "text-amber-700" : "text-foreground/50"}`}>est. {formatCurrency(monthly)}/mo for 24 mo</div>
                </div>
                <div className="space-y-2 mb-4">
                  {t.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Check size={14} className={`shrink-0 mt-0.5 ${isActive ? "text-amber-600" : "text-accent"}`} />
                      <span className={isActive ? "text-amber-900" : "text-foreground/80"}>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/50 space-y-1 text-xs">
                  <div className={`flex items-center gap-2 ${isActive ? "text-amber-700" : "text-foreground/50"}`}>
                    <Shield size={14} /> {t.warranty}
                  </div>
                  <div className={`flex items-center gap-2 ${isActive ? "text-amber-700" : "text-foreground/50"}`}>
                    <Thermometer size={14} /> {t.energy}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-between mt-10">
          <Button variant="outline" size="lg" onClick={() => setStep(4)} className="h-12">
            <ArrowLeft size={18} className="mr-2" /> Back
          </Button>
          <Button size="lg" onClick={() => setStep(6)} className="bg-primary hover:bg-primary/90 text-white h-12 px-8">
            Continue <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );

  /* ═══════ STEP 6: MAXIMIZE INVESTMENT ═══════ */
  const Step6 = () => (
    <motion.div key="step6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-primary text-center mb-3">Ways to Maximize Your Investment</h2>
        <p className="text-foreground/60 text-center max-w-xl mx-auto mb-10">
          Take advantage of exclusive financing and tax benefits available to Pennsylvania and New Jersey homeowners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <Percent size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">0% Interest Financing</h3>
            <p className="text-foreground/70 mb-4">
              Qualified buyers can enjoy <strong>0% APR for up to 24 months</strong> on their entire window and door project. No hidden fees, no prepayment penalties.
            </p>
            <div className="inline-block bg-secondary rounded-lg px-4 py-2 text-sm font-semibold text-primary">
              {formatCurrency(pricing.monthlyPayment)}/mo for 24 months
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <Receipt size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Tax-Free Capital Improvement</h3>
            <p className="text-foreground/70 mb-4">
              Window and door replacements may qualify as a <strong>capital improvement</strong> in PA & NJ, potentially making your project sales tax-free. We handle all documentation.
            </p>
            <div className="inline-block bg-secondary rounded-lg px-4 py-2 text-sm font-semibold text-primary">
              Save {formatCurrency(pricing.grandTotal * 0.06)}+ in taxes
            </div>
          </div>
        </div>

        <div className="mt-10 bg-primary rounded-2xl p-8 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to See Your Quote?</h3>
          <p className="text-primary-foreground/80 mb-6">
            Your estimated total is <strong className="text-white">{formatCurrency(pricing.grandTotal)}</strong> with the <strong className="text-white">{pricing.tierObj.name}</strong> tier.
          </p>
          <Button onClick={() => setStep(7)} className="bg-accent text-primary hover:bg-accent/90 font-semibold px-10 h-14 text-lg">
            Book My Consultation <CalendarIcon size={20} className="ml-2" />
          </Button>
        </div>

        <div className="flex justify-start mt-8">
          <Button variant="outline" size="lg" onClick={() => setStep(5)} className="h-12">
            <ArrowLeft size={18} className="mr-2" /> Back
          </Button>
        </div>
      </div>
    </motion.div>
  );

  /* ═══════ STEP 7: BOOK CONSULTATION ═══════ */
  const prevMonth = () => {
    setCalendarMonth((p) => {
      if (p.month === 0) return { year: p.year - 1, month: 11 };
      return { year: p.year, month: p.month - 1 };
    });
  };
  const nextMonth = () => {
    setCalendarMonth((p) => {
      if (p.month === 11) return { year: p.year + 1, month: 0 };
      return { year: p.year, month: p.month + 1 };
    });
  };
  const step7Element = (
      <motion.div key="step7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary text-center mb-3">Schedule Your Free Consultation</h2>
          <p className="text-foreground/60 text-center max-w-xl mx-auto mb-10">
            Pick a date and time that works for you. Our team will confirm your appointment within 2 hours.
          </p>

          {/* Consultation Type */}
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => setConsultType("in-home")}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                consultType === "in-home" ? "border-primary bg-primary/5" : "border-gray-200 bg-white hover:border-gray-300"
              }`}>
              <Building2 size={24} className={consultType === "in-home" ? "text-primary" : "text-foreground/40"} />
              <div className="text-left">
                <div className={`font-semibold ${consultType === "in-home" ? "text-primary" : "text-foreground"}`}>In-Home</div>
                <div className="text-xs text-foreground/50">1 hour at your home</div>
              </div>
            </button>
            <button onClick={() => setConsultType("virtual")}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                consultType === "virtual" ? "border-primary bg-primary/5" : "border-gray-200 bg-white hover:border-gray-300"
              }`}>
              <Video size={24} className={consultType === "virtual" ? "text-primary" : "text-foreground/40"} />
              <div className="text-left">
                <div className={`font-semibold ${consultType === "virtual" ? "text-primary" : "text-foreground"}`}>Virtual</div>
                <div className="text-xs text-foreground/50">30 min video call</div>
              </div>
            </button>
          </div>

          {/* Calendar */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <button onClick={prevMonth} className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <ChevronLeft size={20} />
              </button>
              <h3 className="font-bold text-primary text-lg">
                {monthNames[calendarMonth.month]} {calendarMonth.year}
              </h3>
              <button onClick={nextMonth} className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
                <div key={d} className="text-xs font-semibold text-foreground/50 py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {calDays.map((day, idx) => {
                if (!day) return <div key={idx} className="h-10" />;
                const available = isDateAvailable(day);
                const isSelected = selectedDate === day && calendarMonth.month === new Date().getMonth();
                return (
                  <button key={idx} onClick={() => available && setSelectedDate(day)}
                    disabled={!available}
                    className={`h-10 rounded-lg text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-primary text-white shadow-md"
                        : available
                          ? "hover:bg-secondary text-foreground"
                          : "text-foreground/20 cursor-not-allowed"
                    }`}>
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-8">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Clock3 size={18} className="text-accent" />
                Available Times — Eastern Time
              </h3>
              <div className="flex flex-wrap gap-3">
                {timeSlots.map((slot) => (
                  <button key={slot} onClick={() => setSelectedTime(slot)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all border-2 ${
                      selectedTime === slot
                        ? "border-primary bg-primary text-white"
                        : "border-gray-200 bg-white text-foreground hover:border-gray-300"
                    }`}>
                    {slot}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Appointment Details */}
          {selectedDate && selectedTime && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-primary mb-4">Appointment Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={customerInfo.fullName} readOnly className="bg-secondary/50" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={customerInfo.phone} readOnly className="bg-secondary/50" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input value={customerInfo.email} readOnly className="bg-secondary/50" />
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input value={`${customerInfo.address}, ${customerInfo.city}, ${customerInfo.state} ${customerInfo.zipCode}`} readOnly className="bg-secondary/50" />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <Label htmlFor="apptNotes">Notes for Your Consultant (Optional)</Label>
                <Textarea id="apptNotes" value={apptNotes} onChange={(e) => setApptNotes(e.target.value)}
                  placeholder="Any special instructions, gate codes, parking info, etc." className="min-h-[80px]" />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="smsConsent" checked={customerInfo.smsConsent}
                  onCheckedChange={(v) => setCustomerInfo((p) => ({ ...p, smsConsent: v === true }))} />
                <Label htmlFor="smsConsent" className="text-sm text-foreground/70 font-normal leading-relaxed cursor-pointer">
                  I consent to receive SMS reminders about my appointment. Message and data rates may apply.
                </Label>
              </div>
            </motion.div>
          )}

          {/* Final Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button variant="outline" size="lg" onClick={() => setStep(6)} className="h-12">
              <ArrowLeft size={18} className="mr-2" /> Back
            </Button>
            <Button size="lg" disabled={!canSubmitAppt}
              onClick={() => setStep(8)}
              className="h-14 bg-primary hover:bg-primary/90 text-white font-semibold text-base px-10 disabled:opacity-40">
              Submit Appointment Request <CheckCircle2 size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    );

  /* ═══════ STEP 8: CONFIRMATION ═══════ */
  const Step8 = () => (
    <motion.div key="step8" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-primary mb-3">Your Consultation Request Has Been Received</h2>
        <p className="text-foreground/70 text-lg mb-10">
          Thank you, {customerInfo.fullName}! We're excited to help with your project. Here's what happens next.
        </p>

        {/* Summary Card */}
        <div className="bg-card border border-border rounded-2xl p-8 text-left mb-8">
          <h3 className="font-bold text-primary text-lg mb-6">Appointment Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <CalendarIcon size={18} className="text-accent shrink-0" />
              <div>
                <div className="text-xs text-foreground/50">Date</div>
                <div className="font-semibold text-foreground">
                  {monthNames[calendarMonth.month]} {selectedDate}, {calendarMonth.year}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 size={18} className="text-accent shrink-0" />
              <div>
                <div className="text-xs text-foreground/50">Time</div>
                <div className="font-semibold text-foreground">{selectedTime} ET</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Video size={18} className="text-accent shrink-0" />
              <div>
                <div className="text-xs text-foreground/50">Type</div>
                <div className="font-semibold text-foreground capitalize">{consultType} Consultation</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <div>
                <div className="text-xs text-foreground/50">Location</div>
                <div className="font-semibold text-foreground">{customerInfo.city}, {customerInfo.state}</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 mb-6">
            <h4 className="font-bold text-primary mb-3">Project Summary</h4>
            <div className="space-y-2 text-sm">
              {selectedItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-foreground/80">{item.name} x{item.quantity} ({(itemSizes[item.id] || "medium")})</span>
                  <span className="font-medium">{formatCurrency(item.basePrice * item.quantity * (sizeMultipliers[itemSizes[item.id] || "medium"] || 1.0))}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-bold text-primary">Estimated Total</span>
              <span className="font-bold text-2xl text-primary">{formatCurrency(pricing.grandTotal)}</span>
            </div>
            <div className="text-sm text-foreground/60 text-right">
              {pricing.tierObj.name} Tier &middot; est. {formatCurrency(pricing.monthlyPayment)}/mo for 24 mo
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-secondary/50 rounded-xl p-5">
            <Phone size={24} className="text-accent mx-auto mb-3" />
            <h4 className="font-bold text-primary text-sm mb-1">Confirmation Call</h4>
            <p className="text-xs text-foreground/60">We'll call within 2 hours to confirm your appointment.</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-5">
            <Ruler size={24} className="text-accent mx-auto mb-3" />
            <h4 className="font-bold text-primary text-sm mb-1">Precise Measurements</h4>
            <p className="text-xs text-foreground/60">Our team will take exact measurements at your home.</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-5">
            <FileText size={24} className="text-accent mx-auto mb-3" />
            <h4 className="font-bold text-primary text-sm mb-1">Final Quote</h4>
            <p className="text-xs text-foreground/60">You'll receive a detailed, itemized final estimate.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8">
            <Link href="/">Back to Homepage</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-8">
            <a href="tel:2679390320">Call Us Now</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════ */
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Calculator size={16} />
              Free Instant Estimate
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get Your Instant Quote</h1>
            <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              Select the windows and doors you need. No email required to start. Get your personalized estimate in minutes.
            </p>
          </motion.div>
        </div>
      </div>

      <StepIndicator />

      <div className={`container mx-auto px-4 flex-grow ${step <= 2 ? "py-12" : step === 8 ? "py-16" : "py-10"}`}>
        <AnimatePresence mode="wait">
          {step === 1 && <Step1 />}
          {step === 2 && step2Element}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
          {step === 6 && <Step6 />}
          {step === 7 && step7Element}
          {step === 8 && <Step8 />}
        </AnimatePresence>
      </div>
    </div>
  );
}
