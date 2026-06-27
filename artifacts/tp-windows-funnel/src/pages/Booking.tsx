import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, ArrowRight, Check, Loader2, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateAppointment, useGetAvailability } from "@workspace/api-client-react";

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM",
];

function getMonthDates(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < startDayOfWeek; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
}

function formatDateStr(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function Booking() {
  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [appointment, setAppointment] = useState<any>(null);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const monthStart = formatDateStr(year, month, 1);
  const monthEnd = formatDateStr(year, month, new Date(year, month + 1, 0).getDate());

  const { data: availability, isLoading: availLoading } = useGetAvailability(
    { from: monthStart, to: monthEnd },
    { query: { enabled: true, queryKey: [`/api/appointments/availability`, { from: monthStart, to: monthEnd }] } }
  );

  const availabilityMap = useMemo(() => {
    const map = new Map<string, Set<string>>();
    if (!availability) return map;
    for (const slot of availability) {
      if (slot.isAvailable) {
        if (!map.has(slot.date)) map.set(slot.date, new Set());
        map.get(slot.date)!.add(slot.timeSlot);
      }
    }
    return map;
  }, [availability]);

  const createAppointment = useCreateAppointment({
    mutation: {
      onSuccess: (data) => {
        setAppointment(data);
        setConfirmed(true);
      },
      onError: (err: any) => {
        setErrors({ submit: err?.message || "Failed to book appointment. Slot may no longer be available." });
      },
    },
  });

  const days = getMonthDates(year, month);
  const monthLabel = new Date(year, month).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const isDayAvailable = (day: number) => {
    const dateStr = formatDateStr(year, month, day);
    const slots = availabilityMap.get(dateStr);
    return slots && slots.size > 0;
  };

  const isDayTaken = (day: number) => {
    const dateStr = formatDateStr(year, month, day);
    const slots = availabilityMap.get(dateStr);
    if (!slots) return false;
    return slots.size === 0;
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const getTimeSlots = () => {
    if (!selectedDate) return [];
    const available = availabilityMap.get(selectedDate);
    return TIME_SLOTS.map((slot) => ({
      time: slot,
      available: available?.has(slot) ?? false,
    }));
  };

  const validateForm = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.address.trim()) e.address = "Address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleBook = () => {
    if (!validateForm() || !selectedDate || !selectedTime) return;
    createAppointment.mutate({
      data: {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        date: selectedDate,
        timeSlot: selectedTime,
        consultationType: "In-Home Consultation",
        duration: "1 hour",
      },
    });
  };

  if (confirmed && appointment) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-16">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-primary mb-3">
              Appointment Confirmed
            </h1>
            <p className="text-muted-foreground mb-8">
              Your consultation has been scheduled. We look forward to meeting you.
            </p>

            <Card className="text-left mb-6">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium text-primary">
                      {new Date(appointment.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium text-primary">{appointment.timeSlot}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium text-primary">{appointment.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Link href="/">
              <Button className="bg-secondary text-white hover:bg-secondary/90 px-8 h-12">
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
            Schedule Your Consultation
          </h1>
          <p className="text-muted-foreground">
            In-Person Consultation | 1 Hour | Free
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <Button variant="ghost" size="icon" onClick={prevMonth}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <h3 className="font-serif text-lg font-semibold text-primary">{monthLabel}</h3>
                <Button variant="ghost" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {availLoading && (
                <div className="text-center py-8">
                  <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-sm text-muted-foreground mt-2">Loading availability...</p>
                </div>
              )}

              <div className="grid grid-cols-7 gap-1 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="text-xs font-medium text-muted-foreground py-2">{d}</div>
                ))}
                {days.map((day, i) => {
                  if (day === null) return <div key={`empty-${i}`} />;
                  const dateStr = formatDateStr(year, month, day);
                  const available = isDayAvailable(day);
                  const todayBorder = isToday(day);
                  const isSelected = selectedDate === dateStr;
                  const past = new Date(year, month, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

                  return (
                    <button
                      key={day}
                      disabled={past || !available}
                      onClick={() => {
                        setSelectedDate(dateStr);
                        setSelectedTime(null);
                      }}
                      className={`py-2 rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-secondary text-white"
                          : available && !past
                          ? "bg-green-50 text-green-700 hover:bg-green-100"
                          : todayBorder
                          ? "border-2 border-secondary text-primary"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded bg-green-50 border border-green-200" />
                  <span className="text-muted-foreground">Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded border-2 border-secondary" />
                  <span className="text-muted-foreground">Today</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded bg-secondary" />
                  <span className="text-muted-foreground">Selected</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Slots & Form */}
          <div className="space-y-6">
            <AnimatePresence>
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-primary mb-1">
                        Available Times
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {new Date(selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {getTimeSlots().map((slot) => (
                          <button
                            key={slot.time}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === slot.time
                                ? "bg-secondary text-white"
                                : slot.available
                                ? "bg-background border border-border hover:border-secondary text-primary"
                                : "bg-muted text-muted-foreground/50 cursor-not-allowed"
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-serif text-lg font-semibold text-primary">
                      Your Details
                    </h3>
                    <div>
                      <Label htmlFor="b-fullName" className="text-primary font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="b-fullName"
                        value={form.fullName}
                        onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                        placeholder="John Smith"
                        className="mt-1.5"
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="b-email" className="text-primary font-medium">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="b-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="mt-1.5"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="b-phone" className="text-primary font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="b-phone"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        placeholder="(267) 555-0123"
                        className="mt-1.5"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <Label htmlFor="b-address" className="text-primary font-medium">
                        Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="b-address"
                        value={form.address}
                        onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                        placeholder="123 Main St, Philadelphia, PA"
                        className="mt-1.5"
                      />
                      {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>

                    {errors.submit && (
                      <p className="text-red-500 text-sm">{errors.submit}</p>
                    )}

                    <Button
                      className="w-full bg-secondary text-white hover:bg-secondary/90 h-12 text-base"
                      onClick={handleBook}
                      disabled={createAppointment.isPending}
                    >
                      {createAppointment.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Confirm Appointment
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
