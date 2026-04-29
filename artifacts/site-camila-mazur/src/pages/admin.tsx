import { useEffect, useState } from "react";
import { Lock, Eye, Users, TrendingUp, Calendar, Clock, LogOut, RefreshCw, Mail, MessageCircle, Phone, CheckCircle2, Inbox } from "lucide-react";
import logoCamila from "@assets/logo_camila.png";

const STORAGE_KEY = "admin_token";

interface DailyRow {
  day: string;
  total: number;
  unique: number;
}

interface RecentRow {
  createdAt: string;
  path: string | null;
  referrer: string | null;
}

interface Stats {
  total: { total: number; unique: number };
  today: { total: number; unique: number };
  last7Days: { total: number; unique: number };
  last30Days: { total: number; unique: number };
  daily: DailyRow[];
  recent: RecentRow[];
}

interface ContactRow {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  modality: string | null;
  message: string | null;
  read: boolean;
  createdAt: string;
}

interface ContactsData {
  contacts: ContactRow[];
  unreadCount: number;
}

function formatDate(iso: string) {
  const date = new Date(iso);
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDay(day: string) {
  const [, m, d] = day.split("-");
  return `${d}/${m}`;
}

export default function Admin() {
  const [token, setToken] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return sessionStorage.getItem(STORAGE_KEY) || "";
  });
  const [password, setPassword] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [contactsData, setContactsData] = useState<ContactsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAll = async (t: string) => {
    setLoading(true);
    setError(null);
    try {
      const [statsRes, contactsRes] = await Promise.all([
        fetch("/api/admin/stats", { headers: { Authorization: `Bearer ${t}` } }),
        fetch("/api/admin/contacts", { headers: { Authorization: `Bearer ${t}` } }),
      ]);
      if (statsRes.status === 401 || contactsRes.status === 401) {
        sessionStorage.removeItem(STORAGE_KEY);
        setToken("");
        setError("Senha incorreta");
        return;
      }
      if (!statsRes.ok || !contactsRes.ok) {
        setError("Não foi possível carregar os dados");
        return;
      }
      setStats(await statsRes.json());
      setContactsData(await contactsRes.json());
    } catch {
      setError("Erro de conexão");
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: number) => {
    try {
      await fetch(`/api/admin/contacts/${id}/read`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      setContactsData((prev) =>
        prev
          ? {
              contacts: prev.contacts.map((c) =>
                c.id === id ? { ...c, read: true } : c
              ),
              unreadCount: Math.max(0, prev.unreadCount - 1),
            }
          : prev
      );
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (token) {
      loadAll(token);
    }
  }, [token]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    sessionStorage.setItem(STORAGE_KEY, password);
    setToken(password);
    setPassword("");
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setToken("");
    setStats(null);
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-card p-8 md:p-10 rounded-3xl border border-border shadow-xl">
          <div className="flex flex-col items-center text-center mb-8">
            <img src={logoCamila} alt="Logo" className="w-16 h-16 mb-4 opacity-90" />
            <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-serif text-2xl text-primary mb-2">Painel privado</h1>
            <p className="text-sm text-muted-foreground">
              Digite a senha para visualizar as estatísticas do site
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  const maxDaily = stats ? Math.max(1, ...stats.daily.map((d) => d.total)) : 1;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoCamila} alt="Logo" className="w-10 h-10 opacity-90" />
            <div>
              <h1 className="font-serif text-lg text-primary leading-tight">Painel de visitas</h1>
              <p className="text-xs text-muted-foreground">Camila Mazur</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => loadAll(token)}
              disabled={loading}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-sm border border-border hover:bg-secondary/40 transition-colors disabled:opacity-50"
              aria-label="Atualizar"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Atualizar</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-sm border border-border hover:bg-secondary/40 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-8">
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            {error}
          </div>
        )}

        {!stats && loading && (
          <p className="text-center text-muted-foreground py-12">Carregando…</p>
        )}

        {contactsData && (
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="font-serif text-xl text-primary flex items-center gap-2">
                <Inbox className="w-5 h-5" />
                Pedidos de contato
              </h2>
              {contactsData.unreadCount > 0 && (
                <span className="bg-accent text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {contactsData.unreadCount} novo{contactsData.unreadCount === 1 ? "" : "s"}
                </span>
              )}
            </div>
            {contactsData.contacts.length === 0 ? (
              <p className="text-muted-foreground text-sm py-6 text-center">
                Nenhum pedido de contato ainda. Quando alguém preencher o formulário do site, vai aparecer aqui.
              </p>
            ) : (
              <ul className="space-y-4">
                {contactsData.contacts.map((c) => (
                  <li
                    key={c.id}
                    className={`p-5 rounded-2xl border transition-colors ${
                      c.read
                        ? "border-border bg-background/40"
                        : "border-accent/40 bg-accent/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                      <div>
                        <p className="font-serif text-lg text-primary flex items-center gap-2">
                          {c.name}
                          {!c.read && (
                            <span className="text-[10px] uppercase tracking-wider bg-accent text-white px-2 py-0.5 rounded-full">
                              Novo
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {formatDate(c.createdAt)}
                          {c.modality ? ` · ${c.modality}` : ""}
                        </p>
                      </div>
                      {!c.read && (
                        <button
                          onClick={() => markAsRead(c.id)}
                          className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Marcar como lido
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm mb-3">
                      <a
                        href={`https://wa.me/55${c.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        {c.phone}
                      </a>
                      {c.email && (
                        <a
                          href={`mailto:${c.email}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/40 text-foreground/80 hover:bg-secondary/60 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          {c.email}
                        </a>
                      )}
                    </div>
                    {c.message && (
                      <p className="text-sm text-foreground/80 leading-relaxed bg-background/60 rounded-xl p-3 border border-border/40">
                        {c.message}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {stats && (
          <>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={<Eye className="w-5 h-5" />}
                label="Hoje"
                total={stats.today.total}
                unique={stats.today.unique}
              />
              <StatCard
                icon={<Calendar className="w-5 h-5" />}
                label="Últimos 7 dias"
                total={stats.last7Days.total}
                unique={stats.last7Days.unique}
              />
              <StatCard
                icon={<TrendingUp className="w-5 h-5" />}
                label="Últimos 30 dias"
                total={stats.last30Days.total}
                unique={stats.last30Days.unique}
              />
              <StatCard
                icon={<Users className="w-5 h-5" />}
                label="Total geral"
                total={stats.total.total}
                unique={stats.total.unique}
              />
            </section>

            <section className="bg-card p-6 md:p-8 rounded-3xl border border-border">
              <h2 className="font-serif text-xl text-primary mb-6">Visitas dos últimos 7 dias</h2>
              {stats.daily.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  Ainda não há visitas registradas neste período.
                </p>
              ) : (
                <div className="flex items-end gap-3 md:gap-6 h-48">
                  {stats.daily.map((d) => {
                    const heightPct = (d.total / maxDaily) * 100;
                    return (
                      <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                        <div className="flex-1 w-full flex items-end">
                          <div
                            className="w-full rounded-t-lg bg-primary/80 hover:bg-primary transition-all relative group"
                            style={{ height: `${heightPct}%`, minHeight: "4px" }}
                          >
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {d.total} visita{d.total === 1 ? "" : "s"} · {d.unique} pessoa{d.unique === 1 ? "" : "s"}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{formatDay(d.day)}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Passe o mouse sobre cada barra para ver os detalhes.
              </p>
            </section>

            <section className="bg-card p-6 md:p-8 rounded-3xl border border-border">
              <h2 className="font-serif text-xl text-primary mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Últimas visitas
              </h2>
              {stats.recent.length === 0 ? (
                <p className="text-muted-foreground text-sm">Nenhuma visita ainda.</p>
              ) : (
                <ul className="divide-y divide-border">
                  {stats.recent.map((r, i) => (
                    <li key={i} className="py-3 flex items-center justify-between gap-3 text-sm">
                      <span className="text-muted-foreground shrink-0 tabular-nums">
                        {formatDate(r.createdAt)}
                      </span>
                      <span className="text-foreground/80 truncate text-right">
                        {r.referrer ? `via ${new URL(r.referrer).hostname}` : "acesso direto"}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

function StatCard({
  icon,
  label,
  total,
  unique,
}: {
  icon: React.ReactNode;
  label: string;
  total: number;
  unique: number;
}) {
  return (
    <div className="bg-card p-5 md:p-6 rounded-2xl border border-border">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
          {label}
        </span>
        <span className="w-9 h-9 rounded-full bg-secondary/60 flex items-center justify-center text-primary">
          {icon}
        </span>
      </div>
      <p className="font-serif text-3xl md:text-4xl text-primary leading-none mb-1">
        {total.toLocaleString("pt-BR")}
      </p>
      <p className="text-xs text-muted-foreground">
        {unique.toLocaleString("pt-BR")} pessoa{unique === 1 ? "" : "s"} única{unique === 1 ? "" : "s"}
      </p>
    </div>
  );
}
