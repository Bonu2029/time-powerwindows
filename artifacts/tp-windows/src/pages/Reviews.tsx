import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Quote, BadgeCheck, ThumbsUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const reviews = [
  { name: "Michael T.", loc: "Bensalem, PA", product: "Double Hung Windows", review: "The crew from TP Windows arrived on time and replaced all 14 windows in our house in two days. The craftsmanship is excellent and they left the house spotless.", date: "Oct 2024", verified: true },
  { name: "Sarah K.", loc: "Cherry Hill, NJ", product: "Fiberglass Entry Door", review: "We love our new front door! The communication from the sales team to the installers was top notch. Highly recommend their services.", date: "Sep 2024", verified: true },
  { name: "David R.", loc: "Southampton, PA", product: "Sliding Patio Door", review: "Our old patio door was drafty and hard to open. The new one slides with one finger and looks incredibly modern. Very happy with the pricing too.", date: "Sep 2024", verified: true },
  { name: "Jennifer M.", loc: "Marlton, NJ", product: "Casement Windows", review: "Umed was very professional during the consultation. No high pressure sales tactics, just honest advice. The installation team was fantastic.", date: "Aug 2024", verified: true },
  { name: "Robert L.", loc: "Newtown, PA", product: "Steel Entry Door", review: "Replaced our weathered wood door with a secure steel door. The attention to detail on the trim work around the door really shows they care.", date: "Jul 2024", verified: true },
  { name: "Lisa P.", loc: "Voorhees, NJ", product: "Bay Window", review: "The custom bay window they built for our living room completely transformed the space. It brings in so much light. True professionals.", date: "Jun 2024", verified: true },
  { name: "James W.", loc: "Philadelphia, PA", product: "Black Modern Windows", review: "Upgraded our entire brick rowhome with the modern black frames. They look stunning. The crew worked efficiently and the cleanup was perfect.", date: "May 2024", verified: true },
  { name: "Karen S.", loc: "Mount Laurel, NJ", product: "Double Entry Doors", review: "Our entryway is completely transformed. The custom transoms match perfectly. TP Windows delivered exactly what was promised on schedule.", date: "May 2024", verified: true },
  { name: "Thomas G.", loc: "Feasterville, PA", product: "Picture Windows", review: "Local, honest, and reliable. Used them to replace a massive picture window. Pricing was much better than the big national chains and service was personal.", date: "Apr 2024", verified: true },
  { name: "Amanda D.", loc: "Moorestown, NJ", product: "French Patio Doors", review: "Replaced an old sliding door with gorgeous French doors leading to our deck. The quality of the doors is obvious the moment you touch them.", date: "Mar 2024", verified: true },
  { name: "Richard B.", loc: "Richboro, PA", product: "Replacement Windows", review: "Our heating bill dropped noticeably this winter after having TP Windows install energy efficient units downstairs. Will use them for upstairs next year.", date: "Feb 2024", verified: true },
  { name: "Michelle F.", loc: "Bensalem, PA", product: "Entry Door", review: "Umed runs a great team. They show up when they say they will, do exactly the work contracted, and don't leave until you're 100% satisfied.", date: "Jan 2024", verified: true },
];

export default function Reviews() {
  useEffect(() => {
    document.title = "Customer Reviews | TP Windows & Doors";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-white/10 w-fit mx-auto px-8 py-4 rounded-full backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-2xl">100+</span> Reviews
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="font-semibold text-accent">Serving PA & NJ</div>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border shadow-sm flex flex-col relative hover:shadow-md transition-shadow"
              >
                <Quote className="absolute top-6 right-6 text-muted-foreground/20" size={40} />

                {/* Stars + verified */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                      <BadgeCheck size={12} />
                      Verified
                    </div>
                  )}
                </div>

                <p className="text-foreground/80 mb-8 leading-relaxed flex-grow">"{review.review}"</p>

                <div className="pt-4 border-t border-border mt-auto">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-primary">{review.name}</h4>
                      <div className="flex items-center text-sm text-foreground/60 mt-1">
                        <MapPin size={14} className="mr-1" /> {review.loc}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-foreground/50">{review.date}</div>
                      <div className="text-xs font-medium text-accent mt-1 bg-accent/10 px-2 py-1 rounded">
                        {review.product}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-primary rounded-2xl p-12 text-primary-foreground">
            <ThumbsUp className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join Our Satisfied Customers</h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Ready to see why 100+ homeowners across PA & NJ rate us 5 stars? Get your free estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold h-14 px-8">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8">
                <Link href="/instant-quote">Get Instant Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
