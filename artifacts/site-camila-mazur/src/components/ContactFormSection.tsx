import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [modality, setModality] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, modality, message }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setModality("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="agendar"
      className="py-24 px-6 md:px-12 bg-card relative scroll-mt-32"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-primary" />
            </span>
            <span className="font-sans uppercase tracking-[0.25em] text-xs text-accent">
              Agendar
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Solicite seu primeiro contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Deixe seus dados que retorno em breve, sem compromisso, para
            conversarmos sobre como posso te ajudar.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-background rounded-3xl border border-border p-10 md:p-14 text-center shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-3xl text-primary mb-4">
              Pedido recebido!
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-8 max-w-md mx-auto">
              Obrigada pela confiança. Entrarei em contato pelo telefone
              informado em até 24 horas úteis.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-sm text-accent hover:text-primary transition-colors underline underline-offset-4"
            >
              Enviar outro pedido
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            onSubmit={handleSubmit}
            className="bg-background rounded-3xl border border-border p-8 md:p-12 shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-foreground/80 mb-2"
                >
                  Nome completo <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-sans text-sm font-medium text-foreground/80 mb-2"
                >
                  WhatsApp / Telefone <span className="text-accent">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="(41) 99999-9999"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-medium text-foreground/80 mb-2"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="seu@email.com (opcional)"
                />
              </div>
              <div>
                <label
                  htmlFor="modality"
                  className="block font-sans text-sm font-medium text-foreground/80 mb-2"
                >
                  Modalidade preferida
                </label>
                <select
                  id="modality"
                  value={modality}
                  onChange={(e) => setModality(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                >
                  <option value="">Selecione</option>
                  <option value="Presencial">Presencial</option>
                  <option value="Online">Online</option>
                  <option value="Indiferente">Tanto faz</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-sans text-sm font-medium text-foreground/80 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="Conte um pouco sobre o que você busca (opcional)"
              />
            </div>

            {status === "error" && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                Não foi possível enviar agora. Tente novamente em alguns
                instantes ou entre em contato pelo WhatsApp.
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? "Enviando..." : "Enviar pedido"}
              </button>
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                Seus dados são confidenciais e usados apenas
                <br className="hidden sm:block" /> para retornar seu contato.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
