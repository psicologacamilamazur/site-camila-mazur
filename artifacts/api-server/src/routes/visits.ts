import { Router, type IRouter } from "express";
import { db, siteVisitsTable } from "@workspace/db";
import { sql, gte, desc } from "drizzle-orm";
import { createHash } from "crypto";

const router: IRouter = Router();

router.post("/track", async (req, res) => {
  try {
    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "unknown";
    const ua = req.headers["user-agent"] || "unknown";
    const visitorHash = createHash("sha256")
      .update(`${ip}::${ua}`)
      .digest("hex");

    const path = (req.body?.path as string) || "/";
    const referrer = (req.body?.referrer as string) || null;

    await db.insert(siteVisitsTable).values({
      visitorHash,
      path: path.slice(0, 500),
      userAgent: typeof ua === "string" ? ua.slice(0, 500) : "unknown",
      referrer: referrer ? referrer.slice(0, 500) : null,
    });

    res.status(204).end();
  } catch (err) {
    req.log.error({ err }, "Failed to track visit");
    res.status(500).json({ error: "track_failed" });
  }
});

router.get("/admin/stats", async (req, res) => {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return res.status(500).json({ error: "admin_not_configured" });
  }

  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : auth;
  if (token !== adminPassword) {
    return res.status(401).json({ error: "unauthorized" });
  }

  try {
    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);

    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    const thirtyDaysAgo = new Date(now);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 29);
    thirtyDaysAgo.setHours(0, 0, 0, 0);

    const [totalRow] = await db
      .select({
        total: sql<number>`count(*)::int`,
        unique: sql<number>`count(distinct ${siteVisitsTable.visitorHash})::int`,
      })
      .from(siteVisitsTable);

    const [todayRow] = await db
      .select({
        total: sql<number>`count(*)::int`,
        unique: sql<number>`count(distinct ${siteVisitsTable.visitorHash})::int`,
      })
      .from(siteVisitsTable)
      .where(gte(siteVisitsTable.createdAt, startOfToday));

    const [sevenDaysRow] = await db
      .select({
        total: sql<number>`count(*)::int`,
        unique: sql<number>`count(distinct ${siteVisitsTable.visitorHash})::int`,
      })
      .from(siteVisitsTable)
      .where(gte(siteVisitsTable.createdAt, sevenDaysAgo));

    const [thirtyDaysRow] = await db
      .select({
        total: sql<number>`count(*)::int`,
        unique: sql<number>`count(distinct ${siteVisitsTable.visitorHash})::int`,
      })
      .from(siteVisitsTable)
      .where(gte(siteVisitsTable.createdAt, thirtyDaysAgo));

    const dailyRows = await db
      .select({
        day: sql<string>`to_char(date_trunc('day', ${siteVisitsTable.createdAt}), 'YYYY-MM-DD')`,
        total: sql<number>`count(*)::int`,
        unique: sql<number>`count(distinct ${siteVisitsTable.visitorHash})::int`,
      })
      .from(siteVisitsTable)
      .where(gte(siteVisitsTable.createdAt, sevenDaysAgo))
      .groupBy(sql`date_trunc('day', ${siteVisitsTable.createdAt})`)
      .orderBy(sql`date_trunc('day', ${siteVisitsTable.createdAt})`);

    const recentRows = await db
      .select({
        createdAt: siteVisitsTable.createdAt,
        path: siteVisitsTable.path,
        referrer: siteVisitsTable.referrer,
      })
      .from(siteVisitsTable)
      .orderBy(desc(siteVisitsTable.createdAt))
      .limit(20);

    res.json({
      total: totalRow ?? { total: 0, unique: 0 },
      today: todayRow ?? { total: 0, unique: 0 },
      last7Days: sevenDaysRow ?? { total: 0, unique: 0 },
      last30Days: thirtyDaysRow ?? { total: 0, unique: 0 },
      daily: dailyRows,
      recent: recentRows,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to load stats");
    res.status(500).json({ error: "stats_failed" });
  }
});

export default router;
