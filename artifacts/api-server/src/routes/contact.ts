import { Router, type IRouter } from "express";
import { db, contactRequestsTable } from "@workspace/db";
import { desc, eq, sql } from "drizzle-orm";

const router: IRouter = Router();

function requireAdmin(req: any, res: any): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    res.status(500).json({ error: "admin_not_configured" });
    return false;
  }
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : auth;
  if (token !== adminPassword) {
    res.status(401).json({ error: "unauthorized" });
    return false;
  }
  return true;
}

router.post("/contact", async (req, res) => {
  try {
    const name = String(req.body?.name || "").trim().slice(0, 200);
    const phone = String(req.body?.phone || "").trim().slice(0, 50);
    const email = req.body?.email
      ? String(req.body.email).trim().slice(0, 200)
      : null;
    const modality = req.body?.modality
      ? String(req.body.modality).trim().slice(0, 50)
      : null;
    const message = req.body?.message
      ? String(req.body.message).trim().slice(0, 2000)
      : null;

    if (!name || !phone) {
      return res.status(400).json({ error: "missing_required" });
    }

    await db.insert(contactRequestsTable).values({
      name,
      phone,
      email,
      modality,
      message,
    });

    res.status(201).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact request");
    res.status(500).json({ error: "contact_failed" });
  }
});

router.get("/admin/contacts", async (req, res) => {
  if (!requireAdmin(req, res)) return;

  try {
    const rows = await db
      .select()
      .from(contactRequestsTable)
      .orderBy(desc(contactRequestsTable.createdAt))
      .limit(100);

    const [unreadRow] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(contactRequestsTable)
      .where(eq(contactRequestsTable.read, false));

    res.json({
      contacts: rows,
      unreadCount: unreadRow?.count ?? 0,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to load contacts");
    res.status(500).json({ error: "contacts_failed" });
  }
});

router.post("/admin/contacts/:id/read", async (req, res) => {
  if (!requireAdmin(req, res)) return;

  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) {
      return res.status(400).json({ error: "invalid_id" });
    }
    await db
      .update(contactRequestsTable)
      .set({ read: true })
      .where(eq(contactRequestsTable.id, id));
    res.status(204).end();
  } catch (err) {
    req.log.error({ err }, "Failed to mark contact as read");
    res.status(500).json({ error: "update_failed" });
  }
});

export default router;
