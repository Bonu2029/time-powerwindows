import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { operatingStyles } from "@/lib/data";
import { useGetQuote, useListQuoteItems } from "@workspace/api-client-react";

interface ConfigOption {
  label: string;
  value: string;
  price: number;
}

const sizeOptions: ConfigOption[] = [
  { label: "Small", value: "small", price: 0 },
  { label: "Medium", value: "medium", price: 120 },
  { label: "Large", value: "large", price: 240 },
];

const interiorColors = ["White", "Beige", "Espresso", "Black"];
const exteriorColors = ["White", "Clay", "Black", "Bronze"];
const gridStyles = ["No Grid", "Colonial", "Prairie", "Custom"];
const glassCoatings = ["Standard", "Low-E", "Triple Pane"];
const trimPackages = ["Standard", "Deluxe", "Premium"];

interface AddOn {
  id: string;
  label: string;
  price: number;
}

const addOns: AddOn[] = [
  { id: "screens", label: "Screens", price: 45 },
  { id: "impact-glass", label: "Impact Glass", price: 120 },
  { id: "sound-package", label: "Sound Package", price: 85 },
];

export function QuoteSummary() {
  const params = new URLSearchParams(window.location.search);
  const quoteId = params.get("id");

  const quoteIdNum = Number(quoteId);
  const { data: rawQuote, isLoading } = useGetQuote(quoteIdNum, {
    query: { enabled: !!quoteId, queryKey: [`/api/quotes/${quoteIdNum}`] },
  });
  const { data: quoteItems } = useListQuoteItems(quoteIdNum, {
    query: { enabled: !!quoteId, queryKey: [`/api/quotes/${quoteIdNum}/items`] },
  });
  const quote: any = rawQuote ? { ...rawQuote, items: quoteItems || [] } : null;

  const [size, setSize] = useState("medium");
  const [interior, setInterior] = useState("White");
  const [exterior, setExterior] = useState("White");
  const [grid, setGrid] = useState("No Grid");
  const [glass, setGlass] = useState("Low-E");
  const [trim, setTrim] = useState("Standard");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const sizePrice = sizeOptions.find((s) => s.value === size)?.price || 0;
  const gridPrice = grid === "Custom" ? 200 : grid === "Colonial" || grid === "Prairie" ? 80 : 0;
  const glassPrice = glass === "Triple Pane" ? 180 : glass === "Low-E" ? 60 : 0;
  const trimPrice = trim === "Premium" ? 200 : trim === "Deluxe" ? 100 : 0;

  const total = useMemo(() => {
    if (!quote?.items) return 0;
    const itemsTotal = quote.items.reduce((sum: number, item: any) => {
      return sum + (Number(item.lineTotal) || 0);
    }, 0);
    const addonTotal = selectedAddons.reduce((sum, id) => {
      const addon = addOns.find((a) => a.id === id);
      return sum + (addon?.price || 0) * (quote?.items?.length || 0);
    }, 0);
    return itemsTotal + sizePrice + gridPrice + glassPrice + trimPrice + addonTotal;
  }, [quote, sizePrice, gridPrice, glassPrice, trimPrice, selectedAddons]);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading your quote...</p>
        </div>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Quote not found</h2>
          <Link href="/quote">
            <Button>Create a New Quote</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Your Quote is Ready
            </h1>
            <p className="text-white/80 text-lg max-w-lg mx-auto">
              Customize it below and schedule your free in-home consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Config */}
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Windows */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Selected Windows</h3>
                {quote.items && quote.items.length > 0 ? (
                  <div className="space-y-3">
                    {quote.items.map((item: any, i: number) => {
                      const style = operatingStyles.find(
                        (s) => s.title === item.windowType
                      );
                      return (
                        <div
                          key={i}
                          className="flex items-center justify-between py-3 border-b border-border last:border-0"
                        >
                          <div className="flex items-center gap-4">
                            {style?.image && (
                              <img
                                src={style.image}
                                alt={item.windowType}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            )}
                            <div>
                              <p className="font-medium text-primary text-sm">
                                {item.windowType}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <p className="font-semibold text-primary">
                            ${Number(item.lineTotal).toLocaleString()}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No windows selected.</p>
                )}
              </CardContent>
            </Card>

            {/* Size Options */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Size</h3>
                <div className="flex gap-3">
                  {sizeOptions.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => setSize(s.value)}
                      className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                        size === s.value
                          ? "border-secondary bg-secondary/10 text-secondary"
                          : "border-border text-primary hover:border-secondary/50"
                      }`}
                    >
                      {s.label}
                      {s.price > 0 && (
                        <span className="block text-xs text-muted-foreground mt-1">
                          +${s.price}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Finish Upgrades */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                  Finish Upgrades
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Interior Color
                    </label>
                    <Select value={interior} onValueChange={setInterior}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {interiorColors.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Exterior Color
                    </label>
                    <Select value={exterior} onValueChange={setExterior}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {exteriorColors.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Grid Style
                    </label>
                    <Select value={grid} onValueChange={setGrid}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {gridStyles.map((g) => (
                          <SelectItem key={g} value={g}>
                            {g}
                            {g === "Custom"
                              ? " (+$200)"
                              : g === "Colonial" || g === "Prairie"
                              ? " (+$80)"
                              : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Glass Coating
                    </label>
                    <Select value={glass} onValueChange={setGlass}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {glassCoatings.map((g) => (
                          <SelectItem key={g} value={g}>
                            {g}
                            {g === "Triple Pane"
                              ? " (+$180)"
                              : g === "Low-E"
                              ? " (+$60)"
                              : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Trim Package
                    </label>
                    <Select value={trim} onValueChange={setTrim}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {trimPackages.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                            {t === "Premium"
                              ? " (+$200)"
                              : t === "Deluxe"
                              ? " (+$100)"
                              : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add-ons */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Add-Ons</h3>
                <div className="space-y-3">
                  {addOns.map((addon) => (
                    <label
                      key={addon.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-secondary/40 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={selectedAddons.includes(addon.id)}
                          onCheckedChange={(checked) => {
                            setSelectedAddons((prev) =>
                              checked
                                ? [...prev, addon.id]
                                : prev.filter((id) => id !== addon.id)
                            );
                          }}
                        />
                        <span className="text-sm font-medium text-primary">{addon.label}</span>
                      </div>
                      <span className="text-sm text-secondary font-semibold">
                        +${addon.price}/window
                      </span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <p className="text-white/70 text-sm mb-2">Estimated Total</p>
                  <p className="font-serif text-4xl font-bold text-secondary mb-6">
                    ${total.toLocaleString()}
                  </p>
                  <div className="space-y-2 text-sm text-white/80 mb-6">
                    <div className="flex justify-between">
                      <span>Windows</span>
                      <span>
                        ${quote.items?.reduce((s: number, i: any) => s + Number(i.lineTotal || 0), 0).toLocaleString()}
                      </span>
                    </div>
                    {sizePrice > 0 && (
                      <div className="flex justify-between">
                        <span>Size upgrade</span>
                        <span>+${sizePrice}</span>
                      </div>
                    )}
                    {gridPrice > 0 && (
                      <div className="flex justify-between">
                        <span>Grid style</span>
                        <span>+${gridPrice}</span>
                      </div>
                    )}
                    {glassPrice > 0 && (
                      <div className="flex justify-between">
                        <span>Glass coating</span>
                        <span>+${glassPrice}</span>
                      </div>
                    )}
                    {trimPrice > 0 && (
                      <div className="flex justify-between">
                        <span>Trim package</span>
                        <span>+${trimPrice}</span>
                      </div>
                    )}
                    {selectedAddons.length > 0 && (
                      <div className="flex justify-between">
                        <span>Add-ons</span>
                        <span>
                          +${selectedAddons.reduce((sum, id) => {
                            const a = addOns.find((ad) => ad.id === id);
                            return sum + (a?.price || 0) * (quote?.items?.length || 0);
                          }, 0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <Link href="/booking">
                    <Button className="w-full bg-secondary text-white hover:bg-secondary/90 h-12 text-base">
                      Book My Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="text-white/50 text-xs text-center mt-3">
                    Free in-home consultation
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-primary">No obligation</p>
                      <p className="text-xs text-muted-foreground">
                        This is an estimate. Final pricing will be confirmed during your consultation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
