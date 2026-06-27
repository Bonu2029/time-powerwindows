import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, MessageSquare, Calendar, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactFaqs = [
  { q: "How soon will I hear back?", a: "We respond to all inquiries within 24 business hours. For urgent matters, calling (267) 939-0320 is fastest." },
  { q: "Do I need to be home for the estimate?", a: "Yes, we need access to measure your existing windows or doors and discuss your preferences in person. The visit typically takes 30-45 minutes." },
  { q: "What should I prepare for the consultation?", a: "Just be ready to share your goals and budget. We'll handle all measurements and guide you through every option. No preparation needed on your part." },
  { q: "Can I reschedule my appointment?", a: "Absolutely. Life happens. Call or text us at least 24 hours in advance and we'll find a new time that works for you." },
];

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

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Contact Us | TP Windows & Doors";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message Sent!", description: "We've received your inquiry and will contact you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Schedule your free in-home estimate or reach out with any questions. We're here to help.
          </p>
        </div>
      </div>

      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-primary mb-2">Request A Free Estimate</h2>
              <p className="text-foreground/60 mb-8">Fill out the form below and we'll be in touch within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required placeholder="John" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required placeholder="Doe" className="bg-background" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required placeholder="(123) 456-7890" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="bg-background" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select required>
                      <SelectTrigger className="bg-background"><SelectValue placeholder="Select project type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="windows">Window Replacement</SelectItem>
                        <SelectItem value="entry-doors">Entry Door</SelectItem>
                        <SelectItem value="patio-doors">Patio Door</SelectItem>
                        <SelectItem value="multiple">Multiple Products</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select>
                      <SelectTrigger className="bg-background"><SelectValue placeholder="When do you want to start?" /></SelectTrigger>
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
                  <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                  <Select>
                    <SelectTrigger className="bg-background"><SelectValue placeholder="How should we reach you?" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="text">Text Message</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="any">Any / No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message Details</Label>
                  <Textarea id="message" placeholder="Tell us a little about your project (number of windows, issues you're having, special requests...)"
                    className="min-h-[120px] bg-background" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><Send size={18} /> Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2"><Send size={18} /> Submit Request</span>
                  )}
                </Button>
              </form>

              {/* What to expect */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <MessageSquare size={18} className="text-accent" />
                  What to Expect After Submitting
                </h3>
                <div className="space-y-3 text-sm text-foreground/70">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-accent">1</span></div>
                    <span>We call or email you within <strong>24 hours</strong> to confirm your details.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-accent">2</span></div>
                    <span>Schedule a <strong>free in-home consultation</strong> at a time that works for you.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-accent">3</span></div>
                    <span>Receive a <strong>detailed written estimate</strong> with no hidden fees.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  We serve homeowners throughout Pennsylvania and New Jersey. Give us a call or drop us an email, and we'll be happy to discuss your project.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Phone</h3>
                      <a href="tel:2679390320" className="text-lg text-foreground/80 hover:text-accent transition-colors block mt-1">
                        (267) 939-0320
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Email</h3>
                      <a href="mailto:hellousa84@gmail.com" className="text-lg text-foreground/80 hover:text-accent transition-colors block mt-1">
                        hellousa84@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Location</h3>
                      <p className="text-lg text-foreground/80 mt-1">
                        60 Platt Place<br />
                        Feasterville-Trevose, PA 19053
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Business Hours</h3>
                      <p className="text-lg text-foreground/80 mt-1">
                        Mon-Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 3:00 PM<br />
                        Sun: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-md h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3051.8106093557924!2d-74.98188148461327!3d40.14640167939763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c14d9b0af406c7%3A0xc367db6f80164e2!2s60%20Platt%20Pl%2C%20Feasterville-Trevose%2C%20PA%2019053!5e0!3m2!1sen!2sus!4v1684789502931!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Google Maps - TP Windows & Doors Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact FAQs */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Common Questions</h2>
            <div className="space-y-4">
              {contactFaqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
