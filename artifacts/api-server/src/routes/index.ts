import { Router, type IRouter } from "express";
import healthRouter from "./health";
import quotesRouter from "./quotes";
import appointmentsRouter from "./appointments";

const router: IRouter = Router();

router.use(healthRouter);
router.use(quotesRouter);
router.use(appointmentsRouter);

export default router;
