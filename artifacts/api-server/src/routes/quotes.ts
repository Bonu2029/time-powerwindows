import { Router, type IRouter } from "express";
import { eq, count, and, gte, sql } from "drizzle-orm";
import { db, quotesTable, quoteItemsTable } from "@workspace/db";
import {
  CreateQuoteBody,
  GetQuoteParams,
  GetQuoteResponse,
  UpdateQuoteBody,
  UpdateQuoteParams,
  ListQuoteItemsParams,
  ListQuoteItemsResponse,
  GetQuoteSummaryResponse,
} from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/quotes", async (req, res): Promise<void> => {
  const parsed = CreateQuoteBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid quote request");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { items, ...quoteData } = parsed.data;

  const [quote] = await db.insert(quotesTable).values(quoteData).returning();

  if (items && items.length > 0) {
    await db.insert(quoteItemsTable).values(
      items.map((item) => ({ ...item, quoteId: quote.id }))
    );
  }

  const result = { ...quote, items: [] };
  res.status(201).json(GetQuoteResponse.parse(result));
});

router.get("/quotes/:id", async (req, res): Promise<void> => {
  const params = GetQuoteParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(raw, 10);

  const [quote] = await db.select().from(quotesTable).where(eq(quotesTable.id, id));

  if (!quote) {
    res.status(404).json({ error: "Quote not found" });
    return;
  }

  const items = await db.select().from(quoteItemsTable).where(eq(quoteItemsTable.quoteId, id));
  const result = { ...quote, items };
  res.json(GetQuoteResponse.parse(result));
});

router.patch("/quotes/:id", async (req, res): Promise<void> => {
  const params = UpdateQuoteParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = UpdateQuoteBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(raw, 10);

  const [quote] = await db
    .update(quotesTable)
    .set({ ...parsed.data, updatedAt: new Date() })
    .where(eq(quotesTable.id, id))
    .returning();

  if (!quote) {
    res.status(404).json({ error: "Quote not found" });
    return;
  }

  const items = await db.select().from(quoteItemsTable).where(eq(quoteItemsTable.quoteId, id));
  const result = { ...quote, items };
  res.json(GetQuoteResponse.parse(result));
});

router.get("/quotes/:id/items", async (req, res): Promise<void> => {
  const params = ListQuoteItemsParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(raw, 10);

  const [quote] = await db.select().from(quotesTable).where(eq(quotesTable.id, id));
  if (!quote) {
    res.status(404).json({ error: "Quote not found" });
    return;
  }

  const items = await db.select().from(quoteItemsTable).where(eq(quoteItemsTable.quoteId, id));
  res.json(ListQuoteItemsResponse.parse(items));
});

router.get("/quotes/summary", async (_req, res): Promise<void> => {
  const allQuotes = await db.select().from(quotesTable);

  const totalQuotes = allQuotes.length;
  const submittedQuotes = allQuotes.filter((q) => q.status === "submitted").length;
  const confirmedQuotes = allQuotes.filter((q) => q.status === "confirmed").length;
  const completedQuotes = allQuotes.filter((q) => q.status === "completed").length;

  const totalEstimatedValue = allQuotes.reduce((sum, q) => {
    const val = q.estimatedTotal ? parseFloat(q.estimatedTotal.toString()) : 0;
    return sum + val;
  }, 0);

  res.json(
    GetQuoteSummaryResponse.parse({
      totalQuotes,
      submittedQuotes,
      confirmedQuotes,
      completedQuotes,
      totalEstimatedValue,
    })
  );
});

export default router;
