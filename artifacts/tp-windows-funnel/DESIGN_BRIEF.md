# TP Windows & Doors Quote Funnel - Design Brief

## Product Identity
TP Windows & Doors is a premium Pennsylvania & New Jersey window and door replacement company. This funnel educates homeowners, lets them configure an instant quote, customize it, and book an in-person consultation. The feel is luxury, established, premium — like a high-end showroom.

## Vibe
Warm, confident, and premium. Cream and navy palette with gold accents. Large serif headings paired with clean sans-serif body text. Elegant but not stuffy. Think Restoration Hardware meets Pella Windows. Subtle scroll animations, smooth hover states, generous whitespace.

## Design Direction
- Background: cream (#F8F5F0)
- Primary text: dark navy (#0B2545)
- Accent / CTA: gold (#C5A065)
- Cards: white with soft shadows
- Serif headings: Playfair Display (Google Fonts)
- Body text: Inter (Google Fonts)
- Rounded corners on all cards and buttons
- framer-motion scroll animations

## VERY IMPORTANT CSS
Google Fonts imports MUST be the very first lines of index.css, BEFORE @import "tailwindcss":
```
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

:root CSS variables:
- --background: 35 20% 96% (cream)
- --foreground: 209 75% 15% (navy)
- --primary: 209 75% 15% (navy)
- --primary-foreground: 0 0% 100%
- --secondary: 38 40% 59% (gold)
- --secondary-foreground: 209 75% 15%
- --accent: 195 67% 71% (light blue #7EC8E3)
- --muted: 35 15% 92%
- --card: 0 0% 100%
- --border: 35 10% 88%
- --radius: 0.75rem
- --app-font-serif: 'Playfair Display', serif
- --app-font-sans: 'Inter', sans-serif

## Routes (wouter)
Base path: "/tp-funnel/" (use import.meta.env.BASE_URL.replace(/\/$/, ""))

- / - Landing page
- /vinyl - Vinyl Windows detail
- /aluminum - Aluminum Windows detail
- /wood-clad - Wood-Clad Windows detail
- /upvc - uPVC Windows detail
- /quote - Multi-step quote form
- /quote-summary - Quote customization
- /booking - Appointment scheduling
- /{*splat} - 404

## Material Content

### Vinyl Windows
Introduction: "Our premium vinyl windows are engineered to deliver lasting performance, exceptional energy efficiency, and timeless style. Designed with advanced insulation technology and durable low-maintenance materials, they help keep your home comfortable in every season while reducing energy costs. With clean lines, smooth operation, and outstanding durability, vinyl windows offer the perfect balance of beauty, value, and long-term reliability for modern homeowners."
Benefits: Energy-efficient insulated frames, Low-maintenance premium vinyl construction, Smooth reliable operation, Enhanced comfort and noise reduction, Long-lasting durability and weather resistance, Available in multiple styles and finishes
Ideal For: Homeowners seeking a beautiful, energy-efficient window solution that combines modern design with long-term value.
Image: @assets/ChatGPT_Image_Jun_25,_2026_at_07_39_47_PM_1782430916285.png

### Aluminum Windows
Introduction: "Our aluminum windows are crafted for homeowners who appreciate modern architecture, expansive glass, and exceptional structural strength. Featuring slim sightlines and precision-engineered frames, they maximize natural light while providing outstanding durability and weather resistance. Built to withstand harsh climates with minimal maintenance, aluminum windows deliver a sleek, contemporary appearance without compromising performance."
Benefits: Ultra-slim frames for larger glass views, Superior structural strength and durability, Corrosion and weather-resistant finish, Low-maintenance premium construction, Excellent thermal performance with insulated frames, Perfect for contemporary and luxury homes
Ideal For: Homeowners looking for a sophisticated, modern window system that combines expansive views, lasting durability, and premium architectural style.
Image: @assets/ChatGPT_Image_Jun_25,_2026_at_07_43_06_PM_1782431011763.png

### Wood-Clad Windows
Introduction: "Experience the timeless beauty of real wood paired with the strength of modern engineering. Our wood-clad windows feature a rich natural wood interior that brings warmth and elegance to your home, while the durable exterior cladding protects against harsh weather with minimal maintenance. Designed for exceptional energy efficiency, lasting durability, and refined craftsmanship, they offer the perfect balance of luxury, performance, and long-term value."
Benefits: Authentic wood interior with premium finishes, Weather-resistant exterior for long-lasting protection, Outstanding thermal efficiency and year-round comfort, Low-maintenance exterior with superior durability, Custom stains, finishes, and architectural styles, Ideal for both traditional and contemporary homes
Ideal For: Homeowners who want the warmth and character of natural wood without sacrificing modern performance, energy efficiency, and low-maintenance durability.
Image: @assets/ChatGPT_Image_Jun_25,_2026_at_07_44_04_PM_1782431139149.png

### uPVC Windows
Introduction: "Our premium uPVC windows are engineered to provide outstanding energy efficiency, exceptional durability, and modern style for today's homes. Built with reinforced multi-chamber profiles, they deliver superior thermal insulation, weather resistance, and long-lasting performance with minimal maintenance. Unlike traditional materials, uPVC will not rot, rust, or corrode, making it a smart investment for homeowners seeking comfort, reliability, and lasting value."
Benefits: Superior thermal insulation for year-round comfort, Multi-chamber reinforced uPVC profiles, Low-maintenance, fade-resistant finish, Excellent weather, moisture, and UV resistance, Enhanced noise reduction and energy efficiency, Will not rot, rust, crack, or corrode, Available in a wide range of colors, styles, and finishes
Ideal For: Homeowners looking for a durable, energy-efficient window solution that combines modern performance, low maintenance, and long-lasting beauty for any style of home.
Image: @assets/ChatGPT_Image_Jun_26,_2026_at_11_20_27_PM_1782530437521.png

## Operating Styles (16 total)
Tilt & Turn Window, Double Hung Window, Twin Double Hung, 3X Double Hung, Picture / Fixed, 2-lite Slider, 3-lite Slider, Casement Window, Double Casement, Double Hung + Picture Combination, Casement + Picture Combination, 5' Sliding Patio Door, 6' Sliding Patio Door, Bay Window, Bow Window

## Window Thumbnail Images (use these for operating style cards)
Map in order to the first 8 operating styles, then use icons/colored blocks for remaining 8:
- @assets/ChatGPT_Image_Jun_14,_2026_at_01_20_40_PM_1781468088045.png (double hung)
- @assets/ChatGPT_Image_Jun_14,_2026_at_01_21_05_PM_1781468102664.png (casement)
- @assets/ChatGPT_Image_Jun_14,_2026_at_01_20_52_PM_1781468100849.png (slider)
- @assets/ChatGPT_Image_Jun_14,_2026_at_01_50_16_PM_1781468104250.png (picture)
- @assets/ChatGPT_Image_Jun_14,_2026_at_01_54_12_PM_1781468105931.png (bay)
- @assets/ChatGPT_Image_Jun_14,_2026_at_02_06_53_PM_1781468117736.png (sliding patio)
- @assets/ChatGPT_Image_Jun_14,_2026_at_02_07_00_PM_1781468119554.png (french patio)
- @assets/ChatGPT_Image_Jun_14,_2026_at_02_09_09_PM_1781468121470.png (large glass patio)

## Pages

### Landing Page (/)
**Hero**: Cream bg, left side has serif headline "Premium Windows for Your Home", short description, two CTA buttons ("Get Your Instant Quote" gold solid, "View Our Materials" navy outline). Right side: the vinyl windows image as hero visual. Below: trust bar.

**Materials Section**: 4 cards (Vinyl, Aluminum, Wood-Clad, uPVC) with image + short preview text only + "View Details" button. Clicking navigates to detail page. White background.

**Operating Styles Section**: Dark navy bg, white text. Grid of 16 cards. First 8 use window images as thumbnails, remaining use icons/colored blocks. Title only, no body text. "View Details" button.

**CTA Banner**: Navy bg. "Ready to Upgrade Your Home?" + gold button.

### Material Detail Pages (/vinyl, /aluminum, /wood-clad, /upvc)
Each page: Hero banner with material image + overlay + title + "Get Your Instant Quote" button. Then sections: Introduction, Benefits (cards with icons), Ideal For (styled callout), Gallery (3-4 images in lightbox), Available Styles, Color Options (swatches), Hardware, Energy Efficiency (stats/chart), Specifications Table, FAQ (accordion), CTA.

### Quote Page (/quote)
Multi-step form with progress bar.
Step 1: "Select Your Windows" - Show all 16 operating styles as cards with image, title, plus/minus buttons around quantity. Summary sidebar with running total. "Next Step" button.
Step 2: "Contact & Timeline" - Full Name, Email, Phone, Project Address. "View Your Detailed Quote" button. Submits via useCreateQuote mutation. On success, navigates to /quote-summary?id={quoteId}.

### Quote Summary Page (/quote-summary)
Dark navy hero: "Your quote is ready. Customize it below." House image at top.
Summary card with: estimated price, selected windows with qty controls, Size options (Small/Medium/Large toggle), Finish upgrades (Interior color, Exterior color, Grid style, Glass coating, Trim package dropdowns), Add-ons (checkboxes: Screens +$45, Impact Glass +$120, Sound Package +$85). Dynamic running total. "Book My Consultation" gold button navigates to /booking.

### Booking Page (/booking)
Title: "Schedule Your Consultation" / "In-Person Consultation | 1 Hour | Free"
Calendar month view: available dates green, unavailable gray. Click date to see time slots (9AM-5PM, 1 hour increments). Taken slots grayed out. Form: Full Name, Email, Phone, Address. "Confirm Appointment" button. Submits via useCreateAppointment. Success shows confirmation.

## API Hooks
- useCreateQuote - mutation for creating quote
- useGetQuote(id) - query
- useUpdateQuote - mutation
- useListQuoteItems(id) - query
- useGetQuoteSummary - query
- useCreateAppointment - mutation
- useGetAvailability({ query: { from, to, queryKey: getGetAvailabilityQueryKey({ from, to }) } }) - query
- useGetUpcomingAppointments - query

## Navigation
Top bar: Logo "TP Windows & Doors", links: Home | Materials | Quote | Book, phone (267) 939-0320, gold "Get Quote" CTA. Mobile hamburger.

## Footer
Cream bg. Logo, quick links, contact info, copyright.

## Technical
- Use @assets/ syntax for all images
- framer-motion for animations
- lucide-react for icons
- shadcn/ui components (Button, Card, Input, Select, Accordion, Calendar, Dialog, Form)
- react-hook-form + zod for validation
- No emojis
- Mobile-first responsive
- html { scroll-behavior: smooth }
- Unique document.title per page
- DO NOT explicitly import React
- data-testid on all interactive elements
