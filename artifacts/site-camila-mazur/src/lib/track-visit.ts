const STORAGE_KEY = "site_visit_tracked";

export function trackVisit() {
  if (typeof window === "undefined") return;
  if (window.location.pathname.includes("/admin")) return;
  try {
    const session = sessionStorage.getItem(STORAGE_KEY);
    if (session === "1") return;
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // ignore storage errors
  }

  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      path: window.location.pathname,
      referrer: document.referrer || null,
    }),
    keepalive: true,
  }).catch(() => {
    // silent failure
  });
}
