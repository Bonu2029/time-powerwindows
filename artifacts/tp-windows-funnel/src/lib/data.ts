import vinylImg from "@assets/ChatGPT_Image_Jun_25,_2026_at_07_39_47_PM_1782430916285.png";
import aluminumImg from "@assets/ChatGPT_Image_Jun_25,_2026_at_07_43_06_PM_1782431011763.png";
import woodCladImg from "@assets/ChatGPT_Image_Jun_25,_2026_at_07_44_04_PM_1782431139149.png";
import upvcImg from "@assets/ChatGPT_Image_Jun_26,_2026_at_11_20_27_PM_1782530437521.png";

import doubleHungImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_20_40_PM_1781468088045.png";
import casementImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_21_05_PM_1781468102664.png";
import sliderImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_20_52_PM_1781468100849.png";
import pictureImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_50_16_PM_1781468104250.png";
import bayImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_01_54_12_PM_1781468105931.png";
import slidingPatioImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_06_53_PM_1781468117736.png";
import frenchPatioImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_07_00_PM_1781468119554.png";
import largeGlassImg from "@assets/ChatGPT_Image_Jun_14,_2026_at_02_09_09_PM_1781468121470.png";

export interface Material {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  slug: string;
}

export interface OperatingStyle {
  id: string;
  title: string;
  image?: string;
  basePrice: number;
}

export const materials: Material[] = [
  {
    id: "vinyl",
    title: "Vinyl Windows",
    shortDescription:
      "Engineered for lasting performance, exceptional energy efficiency, and timeless style with advanced insulation technology.",
    image: vinylImg,
    slug: "/vinyl",
  },
  {
    id: "aluminum",
    title: "Aluminum Windows",
    shortDescription:
      "Crafted for modern architecture, expansive glass, and exceptional structural strength with slim sightlines.",
    image: aluminumImg,
    slug: "/aluminum",
  },
  {
    id: "wood-clad",
    title: "Wood-Clad Windows",
    shortDescription:
      "The timeless beauty of real wood paired with modern engineering and weather-resistant exterior cladding.",
    image: woodCladImg,
    slug: "/wood-clad",
  },
  {
    id: "upvc",
    title: "uPVC Windows",
    shortDescription:
      "Outstanding energy efficiency, exceptional durability, and modern style with reinforced multi-chamber profiles.",
    image: upvcImg,
    slug: "/upvc",
  },
];

export const operatingStyles: OperatingStyle[] = [
  { id: "tilt-turn", title: "Tilt & Turn Window", image: doubleHungImg, basePrice: 580 },
  { id: "double-hung", title: "Double Hung Window", image: doubleHungImg, basePrice: 480 },
  { id: "twin-double-hung", title: "Twin Double Hung", image: sliderImg, basePrice: 620 },
  { id: "3x-double-hung", title: "3X Double Hung", image: bayImg, basePrice: 840 },
  { id: "picture-fixed", title: "Picture / Fixed", image: pictureImg, basePrice: 380 },
  { id: "2-lite-slider", title: "2-Lite Slider", image: sliderImg, basePrice: 460 },
  { id: "3-lite-slider", title: "3-Lite Slider", image: slidingPatioImg, basePrice: 540 },
  { id: "casement", title: "Casement Window", image: casementImg, basePrice: 520 },
  { id: "double-casement", title: "Double Casement", image: frenchPatioImg, basePrice: 760 },
  { id: "double-hung-picture", title: "Double Hung + Picture", image: doubleHungImg, basePrice: 680 },
  { id: "casement-picture", title: "Casement + Picture", image: casementImg, basePrice: 640 },
  { id: "5ft-sliding-patio", title: "5' Sliding Patio Door", image: slidingPatioImg, basePrice: 1200 },
  { id: "6ft-sliding-patio", title: "6' Sliding Patio Door", image: largeGlassImg, basePrice: 1400 },
  { id: "bay", title: "Bay Window", image: bayImg, basePrice: 980 },
  { id: "bow", title: "Bow Window", image: bayImg, basePrice: 1100 },
];

export const materialDetails: Record<string, {
  intro: string;
  benefits: string[];
  idealFor: string;
  styles: string[];
  colorOptions: string[];
  hardware: string[];
  energyRating: { uFactor: string; shgc: string; energyStar: boolean };
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}> = {
  vinyl: {
    intro:
      "Our premium vinyl windows are engineered to deliver lasting performance, exceptional energy efficiency, and timeless style. Designed with advanced insulation technology and durable low-maintenance materials, they help keep your home comfortable in every season while reducing energy costs. With clean lines, smooth operation, and outstanding durability, vinyl windows offer the perfect balance of beauty, value, and long-term reliability for modern homeowners.",
    benefits: [
      "Energy-efficient insulated frames",
      "Low-maintenance premium vinyl construction",
      "Smooth reliable operation",
      "Enhanced comfort and noise reduction",
      "Long-lasting durability and weather resistance",
      "Available in multiple styles and finishes",
    ],
    idealFor:
      "Homeowners seeking a beautiful, energy-efficient window solution that combines modern design with long-term value.",
    styles: [
      "Tilt & Turn",
      "Double Hung",
      "Picture / Fixed",
      "2-Lite Slider",
      "Casement",
      "Bay",
      "Bow",
    ],
    colorOptions: ["White", "Beige", "Clay", "Black", "Bronze"],
    hardware: ["Multi-point Lock System", "Fold-down Handle", "Single Cam Lock", "Sash Lock"],
    energyRating: { uFactor: "0.25", shgc: "0.18", energyStar: true },
    specs: [
      { label: "Frame Depth", value: "3-1/4 inches" },
      { label: "Glass Options", value: "Double or Triple Pane" },
      { label: "Warranty", value: "Lifetime Limited" },
      { label: "Air Infiltration", value: "0.1 CFM/sq ft" },
    ],
    faqs: [
      { q: "Are vinyl windows energy efficient?", a: "Yes. Our vinyl windows feature insulated frames, multi-chamber construction, and double- or triple-pane glass with Low-E coatings, meeting or exceeding ENERGY STAR standards." },
      { q: "How long do vinyl windows last?", a: "With proper care, premium vinyl windows can last 20-40 years. Our lifetime limited warranty covers the original homeowner." },
      { q: "Can vinyl windows be painted?", a: "We do not recommend painting vinyl windows as it can void the warranty and affect performance. Choose from our factory color options instead." },
      { q: "Do vinyl windows fade in sunlight?", a: "Our premium vinyl is UV-stabilized and formulated to resist fading, yellowing, and brittleness even after decades of sun exposure." },
      { q: "What maintenance do vinyl windows need?", a: "Minimal — occasional cleaning with mild soap and water is all that's needed. No painting, staining, or sealing required." },
      { q: "Are vinyl windows good for soundproofing?", a: "Yes. The multi-chamber design combined with insulated glass packages provides excellent noise reduction for a quieter home." },
    ],
  },
  aluminum: {
    intro:
      "Our aluminum windows are crafted for homeowners who appreciate modern architecture, expansive glass, and exceptional structural strength. Featuring slim sightlines and precision-engineered frames, they maximize natural light while providing outstanding durability and weather resistance. Built to withstand harsh climates with minimal maintenance, aluminum windows deliver a sleek, contemporary appearance without compromising performance.",
    benefits: [
      "Ultra-slim frames for larger glass views",
      "Superior structural strength and durability",
      "Corrosion and weather-resistant finish",
      "Low-maintenance premium construction",
      "Excellent thermal performance with insulated frames",
      "Perfect for contemporary and luxury homes",
    ],
    idealFor:
      "Homeowners looking for a sophisticated, modern window system that combines expansive views, lasting durability, and premium architectural style.",
    styles: [
      "Casement",
      "Picture / Fixed",
      "Double Hung",
      "2-Lite Slider",
      "5' Sliding Patio Door",
      "6' Sliding Patio Door",
      "Bay",
    ],
    colorOptions: ["Clear Anodized", "Bronze", "Black", "White", "Custom Powder Coat"],
    hardware: ["Multi-point Lock", "Slim Handle", "Flush Bolt", "Pivot Lock"],
    energyRating: { uFactor: "0.30", shgc: "0.22", energyStar: true },
    specs: [
      { label: "Frame Depth", value: "2-5/8 inches" },
      { label: "Glass Options", value: "Double Pane with Thermal Break" },
      { label: "Warranty", value: "20 Year Limited" },
      { label: "Air Infiltration", value: "0.15 CFM/sq ft" },
    ],
    faqs: [
      { q: "Are aluminum windows energy efficient?", a: "Yes. Our thermally broken aluminum frames with insulated glass meet ENERGY STAR requirements for your climate zone." },
      { q: "Do aluminum windows rust or corrode?", a: "No. Our aluminum is anodized or powder-coated to resist corrosion, making it ideal for coastal and harsh-weather environments." },
      { q: "Can aluminum windows support large glass?", a: "Absolutely. Aluminum's high strength-to-weight ratio allows for very slim frames and expansive glass panels that other materials cannot match." },
      { q: "What colors are available?", a: "Choose from Clear Anodized, Bronze, Black, White, or request a custom powder coat color for a truly bespoke look." },
      { q: "How do aluminum windows compare to vinyl?", a: "Aluminum offers slimmer profiles, larger glass areas, and superior structural strength. Vinyl offers better insulation at a lower price point." },
      { q: "Are aluminum windows noisy?", a: "With our insulated glass packages and proper installation, aluminum windows provide excellent sound dampening comparable to other premium materials." },
    ],
  },
  "wood-clad": {
    intro:
      "Experience the timeless beauty of real wood paired with the strength of modern engineering. Our wood-clad windows feature a rich natural wood interior that brings warmth and elegance to your home, while the durable exterior cladding protects against harsh weather with minimal maintenance. Designed for exceptional energy efficiency, lasting durability, and refined craftsmanship, they offer the perfect balance of luxury, performance, and long-term value.",
    benefits: [
      "Authentic wood interior with premium finishes",
      "Weather-resistant exterior for long-lasting protection",
      "Outstanding thermal efficiency and year-round comfort",
      "Low-maintenance exterior with superior durability",
      "Custom stains, finishes, and architectural styles",
      "Ideal for both traditional and contemporary homes",
    ],
    idealFor:
      "Homeowners who want the warmth and character of natural wood without sacrificing modern performance, energy efficiency, and low-maintenance durability.",
    styles: [
      "Double Hung",
      "Casement",
      "Picture / Fixed",
      "Tilt & Turn",
      "Bay",
      "Bow",
      "5' Sliding Patio Door",
    ],
    colorOptions: ["Natural Pine", "White Oak", "Mahogany", "Cherry", "Custom Stain"],
    hardware: [
      "Oil-Rubbed Bronze Lock",
      "Satin Nickel Handle",
      "Antique Brass Sash Lock",
      "Polished Chrome Hinges",
    ],
    energyRating: { uFactor: "0.22", shgc: "0.16", energyStar: true },
    specs: [
      { label: "Frame Depth", value: "4-9/16 inches" },
      { label: "Glass Options", value: "Double or Triple Pane Low-E" },
      { label: "Warranty", value: "20 Year Glass / 10 Year Clad" },
      { label: "Wood Species", value: "Pine, Oak, or Mahogany" },
    ],
    faqs: [
      { q: "What is wood-clad vs all-wood?", a: "Wood-clad has a real wood interior with a weather-resistant exterior cladding (usually aluminum or vinyl). This gives you the beauty of wood inside with superior durability outside." },
      { q: "Can I stain or paint the interior wood?", a: "Yes. The interior wood can be stained or painted to match your décor. Our team can help you choose the perfect finish." },
      { q: "How do I maintain the wood interior?", a: "Simply dust and occasionally clean with a damp cloth. Unlike exterior wood, the interior is protected from the elements and requires minimal care." },
      { q: "Is wood-clad more expensive than vinyl?", a: "Yes, wood-clad windows are a premium option. However, they add significant aesthetic and resale value to your home that many homeowners find worth the investment." },
      { q: "What exterior cladding options are available?", a: "We offer extruded aluminum cladding in a variety of colors, as well as vinyl cladding for a more budget-friendly option." },
      { q: "Are wood-clad windows energy efficient?", a: "Very. With our triple-pane Low-E glass and insulated frames, wood-clad windows exceed ENERGY STAR requirements and provide excellent thermal performance." },
    ],
  },
  upvc: {
    intro:
      "Our premium uPVC windows are engineered to provide outstanding energy efficiency, exceptional durability, and modern style for today's homes. Built with reinforced multi-chamber profiles, they deliver superior thermal insulation, weather resistance, and long-lasting performance with minimal maintenance. Unlike traditional materials, uPVC will not rot, rust, or corrode, making it a smart investment for homeowners seeking comfort, reliability, and lasting value.",
    benefits: [
      "Superior thermal insulation for year-round comfort",
      "Multi-chamber reinforced uPVC profiles",
      "Low-maintenance, fade-resistant finish",
      "Excellent weather, moisture, and UV resistance",
      "Enhanced noise reduction and energy efficiency",
      "Will not rot, rust, crack, or corrode",
      "Available in a wide range of colors, styles, and finishes",
    ],
    idealFor:
      "Homeowners looking for a durable, energy-efficient window solution that combines modern performance, low maintenance, and long-lasting beauty for any style of home.",
    styles: [
      "Tilt & Turn",
      "Casement",
      "Picture / Fixed",
      "2-Lite Slider",
      "Double Hung",
      "3X Double Hung",
      "Bay",
    ],
    colorOptions: ["White", "Ivory", "Gray", "Black", "Woodgrain"],
    hardware: [
      "Multi-point Lock",
      "Tilt & Turn Handle",
      "Espagnolette Lock",
      "Child Safety Lock",
    ],
    energyRating: { uFactor: "0.20", shgc: "0.15", energyStar: true },
    specs: [
      { label: "Frame Depth", value: "3 inches" },
      { label: "Glass Options", value: "Triple Pane with Argon" },
      { label: "Warranty", value: "Lifetime Limited" },
      { label: "Reinforcement", value: "Steel or Aluminum Chambers" },
    ],
    faqs: [
      { q: "What is the difference between uPVC and vinyl?", a: "uPVC (unplasticized PVC) is a more rigid, durable formulation than standard PVC/vinyl. It offers better structural integrity and is commonly used in high-performance European-style windows." },
      { q: "Are uPVC windows recyclable?", a: "Yes. uPVC is 100% recyclable and can be reprocessed up to 10 times without significant loss of performance, making it an environmentally responsible choice." },
      { q: "Do uPVC windows yellow over time?", a: "Premium uPVC formulations with titanium dioxide stabilizers resist yellowing and discoloration, maintaining their appearance for decades." },
      { q: "Are uPVC windows secure?", a: "Extremely. Our uPVC windows feature multi-point locking systems, steel reinforcement, and toughened glass options for maximum security." },
      { q: "Can uPVC windows be used in historic homes?", a: "Yes. We offer heritage-style uPVC windows that replicate traditional timber designs while meeting modern building regulations." },
      { q: "How long do uPVC windows last?", a: "With proper installation, uPVC windows can last 25-35 years or more. Our lifetime warranty covers the original homeowner." },
    ],
  },
};
