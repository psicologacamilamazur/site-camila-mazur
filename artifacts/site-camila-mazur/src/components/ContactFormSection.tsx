import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function ContactFormSection() {
  return (
    <section
      id="agendar"
      className="py-24 px-6 md:px-12 bg-card relative scroll-mt-32"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary" />
            </span>
            <span className="font-sans uppercase tracking-[0.25em] text-xs text-accent">
              Agendar
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Vamos conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Entre em contato pelo WhatsApp para agendar sua primeira sessão ou
            tirar qualquer dúvida. Responderei com carinho em breve.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="bg-background rounded-3xl border border-border p-10 md:p-14 shadow-sm flex flex-col items-center gap-8"
        >
          <a
            href="https://wa.me/5541991275204"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            Falar pelo WhatsApp
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a
              href="tel:+5541991275204"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              (41) 99127-5204
            </a>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <a
              href="mailto:camilamazurpsi@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              camilamazurpsi@gmail.com
            </a>
          </div>

          <p className="text-xs text-muted-foreground/70 max-w-sm">
            Atendimento presencial em Curitiba–PR e online para todo o Brasil.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
