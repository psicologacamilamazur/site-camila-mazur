import { Router, type IRouter } from "express";
import healthRouter from "./health";
import visitsRouter from "./visits";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(visitsRouter);
router.use(contactRouter);

export default router;
