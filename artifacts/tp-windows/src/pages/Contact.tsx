import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | TP Windows & Doors";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will contact you shortly.",
      });
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
            Schedule your free in-home estimate or reach out with any questions.
          </p>
        </div>
      </div>

      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Request A Free Estimate</h2>
              
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

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
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
                  <Label htmlFor="message">Message Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us a little about your project (number of windows, issues you're having, etc.)" 
                    className="min-h-[120px] bg-background" 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              </form>
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
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - TP Windows & Doors Location"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
