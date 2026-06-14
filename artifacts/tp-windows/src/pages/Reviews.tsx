import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Quote } from "lucide-react";

const reviews = [
  { name: "Michael T.", loc: "Bensalem PA", product: "Double Hung Windows", review: "The crew from TP Windows arrived on time and replaced all 14 windows in our house in two days. The craftsmanship is excellent and they left the house spotless.", date: "Oct 2024" },
  { name: "Sarah K.", loc: "Cherry Hill NJ", product: "Fiberglass Entry Door", review: "We love our new front door! The communication from the sales team to the installers was top notch. Highly recommend their services.", date: "Sep 2024" },
  { name: "David R.", loc: "Southampton PA", product: "Sliding Patio Door", review: "Our old patio door was drafty and hard to open. The new one slides with one finger and looks incredibly modern. Very happy with the pricing too.", date: "Sep 2024" },
  { name: "Jennifer M.", loc: "Marlton NJ", product: "Casement Windows", review: "Umed was very professional during the consultation. No high pressure sales tactics, just honest advice. The installation team was fantastic.", date: "Aug 2024" },
  { name: "Robert L.", loc: "Newtown PA", product: "Steel Entry Door", review: "Replaced our weathered wood door with a secure steel door. The attention to detail on the trim work around the door really shows they care.", date: "Jul 2024" },
  { name: "Lisa P.", loc: "Voorhees NJ", product: "Bay Window", review: "The custom bay window they built for our living room completely transformed the space. It brings in so much light. True professionals.", date: "Jun 2024" },
  { name: "James W.", loc: "Philadelphia PA", product: "Black Modern Windows", review: "Upgraded our entire brick rowhome with the modern black frames. They look stunning. The crew worked efficiently and the cleanup was perfect.", date: "May 2024" },
  { name: "Karen S.", loc: "Mount Laurel NJ", product: "Double Entry Doors", review: "Our entryway is completely transformed. The custom transoms match perfectly. TP Windows delivered exactly what was promised on schedule.", date: "May 2024" },
  { name: "Thomas G.", loc: "Feasterville PA", product: "Picture Windows", review: "Local, honest, and reliable. Used them to replace a massive picture window. Pricing was much better than the big national chains and service was personal.", date: "Apr 2024" },
  { name: "Amanda D.", loc: "Moorestown NJ", product: "French Patio Doors", review: "Replaced an old sliding door with gorgeous French doors leading to our deck. The quality of the doors is obvious the moment you touch them.", date: "Mar 2024" },
  { name: "Richard B.", loc: "Richboro PA", product: "Replacement Windows", review: "Our heating bill dropped noticeably this winter after having TP Windows install energy efficient units downstairs. Will use them for upstairs next year.", date: "Feb 2024" },
  { name: "Michelle F.", loc: "Bensalem PA", product: "Entry Door", review: "Umed runs a great team. They show up when they say they will, do exactly the work contracted, and don't leave until you're 100% satisfied.", date: "Jan 2024" },
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
                className="bg-card p-8 rounded-xl border border-border shadow-sm flex flex-col relative"
              >
                <Quote className="absolute top-6 right-6 text-muted-foreground/20" size={40} />
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
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
        </div>
      </section>
    </div>
  );
}
