import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { operatingStyles } from "@/lib/data";
import { useCreateQuote } from "@workspace/api-client-react";

interface SelectedWindow {
  styleId: string;
  quantity: number;
  unitPrice: number;
}

export function Quote() {
  const [, navigate] = useLocation();
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<Record<string, SelectedWindow>>({});
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", projectAddress: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createQuote = useCreateQuote({
    mutation: {
      onSuccess: (data) => {
        navigate(`/quote-summary?id=${data.id}`);
      },
      onError: () => {
        setErrors({ submit: "Failed to create quote. Please try again." });
      },
    },
  });

  const totalSelected = Object.values(selected).reduce((sum, s) => sum + s.quantity, 0);
  const estimatedTotal = Object.values(selected).reduce(
    (sum, s) => sum + s.quantity * s.unitPrice,
    0
  );

  const adjustQty = (styleId: string, delta: number) => {
    setSelected((prev) => {
      const current = prev[styleId];
      if (!current && delta > 0) {
        const style = operatingStyles.find((s) => s.id === styleId)!;
        return { ...prev, [styleId]: { styleId, quantity: 1, unitPrice: style.basePrice } };
      }
      if (!current) return prev;
      const newQty = current.quantity + delta;
      if (newQty <= 0) {
        const next = { ...prev };
        delete next[styleId];
        return next;
      }
      return { ...prev, [styleId]: { ...current, quantity: newQty } };
    });
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.projectAddress.trim()) e.projectAddress = "Address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validateStep2()) return;
    const items = Object.values(selected).map((s) => ({
      windowType: operatingStyles.find((os) => os.id === s.styleId)?.title || s.styleId,
      quantity: s.quantity,
      unitPrice: String(s.unitPrice.toFixed(2)),
      lineTotal: String((s.quantity * s.unitPrice).toFixed(2)),
    }));

    createQuote.mutate({
      data: {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        projectAddress: form.projectAddress,
        items,
      },
    });
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-primary">
              Step {step} of 2
            </span>
            <span className="text-sm text-muted-foreground">
              {step === 1 ? "Select Windows" : "Contact Details"}
            </span>
          </div>
          <Progress value={step === 1 ? 50 : 100} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
                Select Your Windows
              </h1>
              <p className="text-muted-foreground mb-8">
                Choose the window styles you need. Adjust quantities with the plus and minus buttons.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {operatingStyles.map((style, i) => {
                  const qty = selected[style.id]?.quantity || 0;
                  return (
                    <motion.div
                      key={style.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Card className={`overflow-hidden transition-all ${qty > 0 ? "border-secondary ring-1 ring-secondary/30" : "border-border"}`}>
                        <div className="h-36 overflow-hidden">
                          {style.image ? (
                            <img src={style.image} alt={style.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground text-xs">Window Style</span>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-serif text-sm font-semibold text-primary mb-3">{style.title}</h4>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => adjustQty(style.id, -1)}
                                disabled={qty === 0}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-semibold text-primary">{qty}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => adjustQty(style.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              ${style.basePrice}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Summary Sidebar */}
              {totalSelected > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary text-white rounded-xl p-6 mb-8"
                >
                  <h3 className="font-serif text-lg font-semibold mb-4">Quote Summary</h3>
                  <div className="space-y-2 mb-4">
                    {Object.values(selected).map((s) => {
                      const style = operatingStyles.find((os) => os.id === s.styleId);
                      return (
                        <div key={s.styleId} className="flex justify-between text-sm">
                          <span>
                            {style?.title} x{s.quantity}
                          </span>
                          <span>${(s.quantity * s.unitPrice).toLocaleString()}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t border-white/20 pt-3 flex justify-between font-bold text-lg">
                    <span>Estimated Total</span>
                    <span className="text-secondary">${estimatedTotal.toLocaleString()}</span>
                  </div>
                  <Button
                    className="w-full mt-4 bg-secondary text-white hover:bg-secondary/90 h-11"
                    onClick={() => setStep(2)}
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Button variant="ghost" className="mb-4 -ml-2" onClick={() => setStep(1)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Window Selection
              </Button>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
                Contact & Timeline
              </h1>
              <p className="text-muted-foreground mb-8">
                Provide your details so we can prepare your personalized quote.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div>
                  <Label htmlFor="fullName" className="text-primary font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                    placeholder="John Smith"
                    className="mt-1.5"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-primary font-medium">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="john@example.com"
                    className="mt-1.5"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-primary font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="(267) 555-0123"
                    className="mt-1.5"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="projectAddress" className="text-primary font-medium">
                    Project Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="projectAddress"
                    value={form.projectAddress}
                    onChange={(e) => setForm((f) => ({ ...f, projectAddress: e.target.value }))}
                    placeholder="123 Main St, Philadelphia, PA"
                    className="mt-1.5"
                  />
                  {errors.projectAddress && <p className="text-red-500 text-xs mt-1">{errors.projectAddress}</p>}
                </div>
              </div>

              {errors.submit && (
                <p className="text-red-500 text-sm mt-4">{errors.submit}</p>
              )}

              <Button
                size="lg"
                className="mt-8 bg-secondary text-white hover:bg-secondary/90 h-12 px-8"
                onClick={handleSubmit}
                disabled={createQuote.isPending}
              >
                {createQuote.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Quote...
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    View Your Detailed Quote
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
