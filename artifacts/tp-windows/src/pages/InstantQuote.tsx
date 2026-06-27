import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ArrowRight, ArrowLeft, Check, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const windowTypes = [
  { id: "double-hung", name: "Double Hung Window", image: img1 },
  { id: "twin-double-hung", name: "Twin Double Hung", image: img2 },
  { id: "3x-double-hung", name: "3x Double Hung", image: img3 },
  { id: "picture-fixed", name: "Picture / Fixed", image: img4 },
  { id: "2-lite-slider", name: "2-lite Slider Window", image: img5 },
  { id: "3-lite-slider", name: "3-lite Slider Window", image: img6 },
  { id: "casement", name: "Casement Window", image: img7 },
  { id: "double-casement", name: "Double Casement Window", image: img8 },
  { id: "dh-picture-combo", name: "Double Hung + Picture Combination", image: img9 },
  { id: "casement-picture-combo", name: "Casement + Picture Combination", image: img10 },
  { id: "5ft-sliding-patio", name: "5' Sliding Patio Door", image: img11 },
  { id: "6ft-sliding-patio", name: "6' Sliding Patio Door", image: img12 },
  { id: "bay-window", name: "Bay Window", image: img13 },
  { id: "bow-window", name: "Bow Window", image: img13 },
  { id: "garden-window", name: "Garden Window", image: img4 },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export default function InstantQuote() {
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2>(1);
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    windowTypes.forEach((w) => { initial[w.id] = 0; });
    return initial;
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    timeframe: "",
  });

  const totalWindows = useMemo(() => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  }, [quantities]);

  const selectedItems = useMemo(() => {
    return windowTypes
      .filter((w) => quantities[w.id] > 0)
      .map((w) => ({ ...w, quantity: quantities[w.id] }));
  }, [quantities]);

  const increment = (id: string) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = (id: string) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: `We'll contact you shortly about your ${totalWindows} window project.`,
    });
  };

  const canContinue = totalWindows > 0;
  const canSubmit = formData.fullName && formData.email && formData.phone && formData.address && formData.zipCode;

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Calculator size={16} />
              Free Instant Estimate
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get Your Instant Quote
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              Select the windows you need and we'll prepare a personalized estimate for your home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="bg-secondary border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
            <div className={`flex items-center gap-2 ${step === 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step === 1 ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
              }`}>
                {step > 1 ? <Check size={16} /> : "1"}
              </div>
              <span className="text-sm font-medium hidden sm:inline">Select Windows</span>
            </div>
            <div className="flex-1 h-0.5 bg-border rounded-full">
              <div className={`h-full rounded-full bg-primary transition-all duration-500 ${step >= 2 ? "w-full" : "w-0"}`} />
            </div>
            <div className={`flex items-center gap-2 ${step === 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
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
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Live Total Bar */}
              <div className="sticky top-[120px] z-30 mb-8">
                <div className="bg-primary text-primary-foreground rounded-lg px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Calculator size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/80">Selected Windows</p>
                      <p className="text-xl font-bold">{totalWindows} window{totalWindows !== 1 ? "s" : ""}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!canContinue}
                    size="lg"
                    className="bg-accent text-primary hover:bg-accent/90 font-semibold disabled:opacity-40"
                  >
                    Continue <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>

              {/* Window Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {windowTypes.map((window) => (
                  <motion.div
                    key={window.id}
                    variants={fadeInUp}
                    className={`bg-card border border-card-border rounded-lg overflow-hidden transition-all duration-200 ${
                      quantities[window.id] > 0 ? "ring-2 ring-accent shadow-md" : "hover:shadow-md"
                    }`}
                  >
                    <div className="aspect-square bg-secondary/50 p-4 flex items-center justify-center">
                      <img
                        src={window.image}
                        alt={window.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-foreground leading-tight min-h-[2.5rem]">
                        {window.name}
                      </h3>
                      <div className="mt-4 flex items-center justify-between">
                        <button
                          onClick={() => decrement(window.id)}
                          disabled={quantities[window.id] === 0}
                          className="w-10 h-10 rounded-md border border-input bg-background flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                          aria-label={`Decrease ${window.name} quantity`}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-lg font-bold text-primary w-8 text-center">
                          {quantities[window.id]}
                        </span>
                        <button
                          onClick={() => increment(window.id)}
                          className="w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                          aria-label={`Increase ${window.name} quantity`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom Continue Button */}
              <div className="mt-12 flex justify-center">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!canContinue}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 h-14 text-base disabled:opacity-40"
                >
                  Continue to Your Info <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {/* Selected Summary */}
              <div className="bg-secondary rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3">Your Selection</h3>
                <div className="space-y-2">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{item.name}</span>
                      <span className="font-semibold text-primary">Qty: {item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-semibold text-foreground">Total Windows</span>
                  <span className="text-xl font-bold text-primary">{totalWindows}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleFormChange("fullName", e.target.value)}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFormChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFormChange("phone", e.target.value)}
                      placeholder="(267) 939-0320"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleFormChange("zipCode", e.target.value)}
                      placeholder="19020"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Property Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleFormChange("address", e.target.value)}
                    placeholder="123 Main Street, Bensalem, PA"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeframe">Preferred Installation Timeframe</Label>
                  <Select value={formData.timeframe} onValueChange={(v) => handleFormChange("timeframe", v)}>
                    <SelectTrigger id="timeframe">
                      <SelectValue placeholder="Select a timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As Soon As Possible</SelectItem>
                      <SelectItem value="1-2-weeks">Within 1-2 Weeks</SelectItem>
                      <SelectItem value="1-month">Within 1 Month</SelectItem>
                      <SelectItem value="2-3-months">Within 2-3 Months</SelectItem>
                      <SelectItem value="flexible">Flexible / Planning Ahead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep(1)}
                    className="sm:flex-1 h-14"
                  >
                    <ArrowLeft size={18} className="mr-2" /> Back to Windows
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!canSubmit}
                    className="sm:flex-1 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base disabled:opacity-40"
                  >
                    Continue to Estimate <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
