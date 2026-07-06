import { Router, type IRouter } from "express";
import { eq, and, gte, lte } from "drizzle-orm";
import { db, appointmentsTable } from "@workspace/db";
import {
  CreateAppointmentBody,
  GetAvailabilityResponse,
  GetUpcomingAppointmentsResponse,
} from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// Time slots available Monday-Saturday
const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM",
];

router.post("/appointments", async (req, res): Promise<void> => {
  const parsed = CreateAppointmentBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid appointment request");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { date, timeSlot } = parsed.data;

  // Check if slot is already taken
  const existing = await db
    .select()
    .from(appointmentsTable)
    .where(
      and(
        eq(appointmentsTable.date, date.toISOString().split("T")[0]),
        eq(appointmentsTable.timeSlot, timeSlot),
        eq(appointmentsTable.status, "scheduled")
      )
    );

  if (existing.length > 0) {
    res.status(400).json({ error: "This time slot is no longer available" });
    return;
  }

  const insertData = { ...parsed.data, date: parsed.data.date.toISOString().split("T")[0] };
  const [appointment] = await db.insert(appointmentsTable).values(insertData).returning();
  res.status(201).json(appointment);
});

function isDateString(v: unknown): v is string {
  return typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
}

router.get("/appointments/availability", async (req, res): Promise<void> => {
  const fromDate = req.query.from;
  const toDate = req.query.to;
  if (!isDateString(fromDate) || !isDateString(toDate)) {
    res.status(400).json({ error: "Both 'from' and 'to' query params must be valid dates (YYYY-MM-DD)" });
    return;
  }

  // Get all booked slots in range
  const booked = await db
    .select()
    .from(appointmentsTable)
    .where(
      and(
        gte(appointmentsTable.date, fromDate),
        lte(appointmentsTable.date, toDate),
        eq(appointmentsTable.status, "scheduled")
      )
    );

  // Generate availability for each date in range
  const slots: { date: string; timeSlot: string; isAvailable: boolean }[] = [];
  const fromD = new Date(fromDate);
  const toD = new Date(toDate);

  for (let d = new Date(fromD); d <= toD; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    // Skip Sundays (0)
    if (day === 0) continue;

    const dateStr = d.toISOString().split("T")[0];

    for (const timeSlot of TIME_SLOTS) {
      const isBooked = booked.some(
        (b) => b.date === dateStr && b.timeSlot === timeSlot
      );
      slots.push({ date: dateStr, timeSlot, isAvailable: !isBooked });
    }
  }

  res.json(slots);
});

router.get("/appointments/upcoming", async (_req, res): Promise<void> => {
  const today = new Date().toISOString().split("T")[0];

  const appointments = await db
    .select()
    .from(appointmentsTable)
    .where(
      and(
        gte(appointmentsTable.date, today),
        eq(appointmentsTable.status, "scheduled")
      )
    );

  res.json(GetUpcomingAppointmentsResponse.parse(appointments));
});

export default router;
