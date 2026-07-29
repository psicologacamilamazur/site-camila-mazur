import React from "react";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Instagram, Mail, ChevronDown, ArrowRight, Heart, Sparkles, Phone, GraduationCap, FileSignature, MessageSquare, BookOpen, Handshake, Clock, Users, Building2, Lightbulb, Leaf, Quote } from "lucide-react";
import fotoCamila from "@assets/foto_camila.jpg";
import logoCamila from "@assets/logo_camila.png";
import ContactFormSection from "@/components/ContactFormSection";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  // Smooth scroll
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans overflow-x-hidden bg-background text-foreground">
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5541991275204"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-0" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8 relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="truncate">Campo Largo / PR</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Atendimento Presencial e Online</span>
            </span>
            <a href="https://wa.me/5541991275204" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>(41) 99127-5204</span>
            </a>
          </div>
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            <a href="https://www.instagram.com/psicamilamazur?igsh=MWNka2FheTQza2N2Yw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="mailto:camilamazurpsi@gmail.com" aria-label="Email" className="hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-[34px] md:top-[36px] left-0 right-0 z-40 py-4 px-6 md:px-12 flex items-center justify-between bg-background/85 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="flex items-center gap-3">
          <img src={logoCamila} alt="Logo Camila Mazur" className="w-10 h-10 object-contain" />
          <span className="font-serif text-xl font-medium tracking-wide hidden md:block">Camila Mazur</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <button onClick={() => scrollTo("sobre")} className="hover:text-accent transition-colors">Sobre</button>
          <button onClick={() => scrollTo("primeira-sessao")} className="hover:text-accent transition-colors">Primeira Sessão</button>
          <button onClick={() => scrollTo("clinica")} className="hover:text-accent transition-colors">Clínica</button>
          <button onClick={() => scrollTo("organizacional")} className="hover:text-accent transition-colors">Organizacional</button>
          <button onClick={() => scrollTo("contato")} className="hover:text-accent transition-colors">Contato</button>
        </div>
        <button
          onClick={() => scrollTo("agendar")}
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Agendar</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-36 pb-12 overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#E5D5C5]/40 blur-[120px] pointer-events-none" />
        
        <motion.div 
          className="max-w-4xl mx-auto z-10 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={STAGGER}
        >
          <motion.img 
            variants={FADE_UP}
            src={logoCamila} 
            alt="Logo Psicóloga Camila Mazur" 
            className="w-44 md:w-56 lg:w-64 mb-8 opacity-90"
          />
          
          <motion.h1 variants={FADE_UP} className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-4 text-primary text-balance px-2">
            Um espaço de <span className="italic text-accent">cuidado</span>, escuta e desenvolvimento.
          </motion.h1>
          
          <motion.p variants={FADE_UP} className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance px-2">
            Psicóloga Clínica e Organizacional. Uma abordagem sistêmica com respeito à sua história e ao seu processo.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("agendar")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all flex items-center gap-2 hover:scale-105"
            >
              Solicitar contato
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/5541991275204"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card text-primary border border-border px-8 py-4 rounded-full text-base font-medium hover:bg-secondary/50 transition-all flex items-center gap-2 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        >
          <ChevronDown className="w-6 h-6 opacity-50" />
        </motion.div>
      </section>

      {/* Navigation Hub Section */}
      <section id="navegacao" className="py-20 px-6 md:px-12 bg-background scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {/* Quem sou eu */}
            <motion.button
              variants={FADE_UP}
              onClick={() => scrollTo("sobre")}
              className="group text-left bg-card border border-border hover:border-accent/60 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/60 group-hover:bg-accent/20 transition-colors flex items-center justify-center mb-5">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Quem sou eu</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Conheça minha trajetória, formação e a abordagem que guia meu trabalho.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                Saiba mais <ArrowRight className="w-3 h-3" />
              </span>
            </motion.button>

            {/* Primeira Sessão */}
            <motion.button
              variants={FADE_UP}
              onClick={() => scrollTo("primeira-sessao")}
              className="group text-left bg-card border border-border hover:border-accent/60 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/60 group-hover:bg-accent/20 transition-colors flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Primeira Sessão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Entenda como funciona o início do processo terapêutico e o que esperar.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                Saiba mais <ArrowRight className="w-3 h-3" />
              </span>
            </motion.button>

            {/* Atendimento Clínico */}
            <motion.button
              variants={FADE_UP}
              onClick={() => scrollTo("clinica")}
              className="group text-left bg-card border border-border hover:border-accent/60 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/60 group-hover:bg-accent/20 transition-colors flex items-center justify-center mb-5">
                <Leaf className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Atendimento Clínico</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Psicoterapia individual para adultos, presencial em Curitiba ou online.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                Saiba mais <ArrowRight className="w-3 h-3" />
              </span>
            </motion.button>

            {/* Atendimento Organizacional */}
            <motion.button
              variants={FADE_UP}
              onClick={() => scrollTo("organizacional")}
              className="group text-left bg-card border border-border hover:border-accent/60 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/60 group-hover:bg-accent/20 transition-colors flex items-center justify-center mb-5">
                <Building2 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Organizacional</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Serviços de psicologia para empresas: saúde mental, RH e desenvolvimento de equipes.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                Saiba mais <ArrowRight className="w-3 h-3" />
              </span>
            </motion.button>

            {/* Agendar */}
            <motion.button
              variants={FADE_UP}
              onClick={() => scrollTo("agendar")}
              className="group text-left sm:col-span-2 lg:col-span-2 bg-primary/5 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 group-hover:bg-primary/25 transition-colors flex items-center justify-center mb-5">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Agendar uma conversa</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Entre em contato para tirar dúvidas ou agendar sua primeira sessão. Sem compromisso.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                Entrar em contato <ArrowRight className="w-3 h-3" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 px-6 md:px-12 bg-card relative scroll-mt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[3/4] overflow-hidden rounded-2xl md:rounded-[2rem]">
              <img 
                src={fotoCamila} 
                alt="Retrato da Psicóloga Camila Mazur" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-background p-6 rounded-2xl shadow-xl border border-border/50 max-w-[200px]">
              <p className="font-serif italic text-xl text-primary mb-1">CRP</p>
              <p className="font-sans font-semibold tracking-widest text-sm text-muted-foreground">08/48545</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="text-center md:text-left"
          >
            <motion.div variants={FADE_UP} className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary" />
              </span>
              <span className="font-sans uppercase tracking-[0.25em] text-xs text-accent">Sobre Mim</span>
            </motion.div>
            <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl text-primary mb-6">
              Quem eu sou
            </motion.h2>
            <motion.div variants={FADE_UP} className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Sou psicóloga, com atuação nas áreas clínica e organizacional, integrando o cuidado com a saúde mental ao desenvolvimento das relações humanas nos diferentes contextos da vida.
              </p>
              <p>
                Meu trabalho é orientado pelo respeito à singularidade de cada pessoa, pela ética e pela compreensão de que o bem-estar emocional se constrói também nas relações.
              </p>
            </motion.div>

            <motion.div 
              variants={FADE_UP} 
              className="mt-10 flex items-start gap-4 p-6 bg-background/60 rounded-2xl border border-border/60"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Formação</h3>
                <p className="font-serif text-lg text-primary">Graduada em Psicologia</p>
                <p className="text-sm text-muted-foreground mt-1">CRP 08/48545</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Primeira Sessão */}
      <section id="primeira-sessao" className="py-24 px-6 md:px-12 scroll-mt-32 relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 right-[-15%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </span>
              <span className="font-sans uppercase tracking-[0.25em] text-xs text-accent">Como funciona</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">A Primeira Sessão</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Um momento de acolhimento, escuta e construção de uma relação de confiança.
            </p>
          </motion.div>

          {/* Featured quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-12 rounded-3xl bg-primary px-8 py-12 md:py-16 shadow-xl max-w-3xl mx-auto text-center"
          >
            <Quote className="w-8 h-8 text-accent mx-auto mb-4 opacity-80" />
            <p className="font-serif italic text-xl md:text-2xl text-white leading-relaxed">
              O início de um cuidado que respeita você.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={FADE_UP} className="bg-card p-8 rounded-2xl border border-border/60 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif italic text-2xl text-accent">01</span>
                <Handshake className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">Primeiro contato</h3>
              <p className="text-foreground/75 leading-relaxed">
                Um momento de acolhimento, no qual você traz a sua demanda — aquilo que motivou a busca pela terapia.
              </p>
            </motion.div>

            <motion.div variants={FADE_UP} className="bg-card p-8 rounded-2xl border border-border/60 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif italic text-2xl text-accent">02</span>
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">Esclarecimento de dúvidas</h3>
              <p className="text-foreground/75 leading-relaxed">
                Um espaço aberto para que você possa tirar todas as dúvidas sobre o processo terapêutico.
              </p>
            </motion.div>

            <motion.div variants={FADE_UP} className="bg-card p-8 rounded-2xl border border-border/60 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif italic text-2xl text-accent">03</span>
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">Sua história</h3>
              <p className="text-foreground/75 leading-relaxed">
                Você compartilha uma breve história sobre sua vida, ajudando a construir um primeiro entendimento do seu contexto.
              </p>
            </motion.div>

            <motion.div variants={FADE_UP} className="bg-card p-8 rounded-2xl border border-border/60 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif italic text-2xl text-accent">04</span>
                <FileSignature className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">Contrato terapêutico</h3>
              <p className="text-foreground/75 leading-relaxed">
                Explico como funciona o contrato terapêutico e os honorários. Em seguida, paciente e psicóloga assinam, formalizando o início do processo.
              </p>
            </motion.div>
          </motion.div>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center text-muted-foreground italic mt-12 font-serif text-lg"
          >
            Cada processo é único — respeitamos o seu tempo e o seu ritmo.
          </motion.p>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-24 px-6 md:px-12 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </span>
              <span className="font-sans uppercase tracking-[0.25em] text-xs text-accent">O que eu faço</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Áreas de Atuação</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuidado voltado para o desenvolvimento pessoal e corporativo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Clínica */}
            <motion.div 
              id="clinica"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="bg-card rounded-3xl border border-border overflow-hidden"
            >
              <div className="p-10 md:p-14">
              <h3 className="font-serif text-3xl text-primary mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-accent"></span>
                Atuação na Clínica
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Abordagem Sistêmica</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    Compreendendo cada pessoa dentro dos contextos, vínculos e relações que fazem parte de sua história, com um olhar acolhedor, ético e respeitoso ao tempo de cada processo.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      Público
                    </h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li>Adolescentes</li>
                      <li>Adultos</li>
                      <li>Idosos</li>
                      <li>Casais</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-accent" />
                      Modalidade
                    </h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li>Presencial (Campo Largo/PR)</li>
                      <li>Online</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Para quem é</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    Pessoas que desejam se compreender melhor; Quem enfrenta conflitos familiares, conjugais ou profissionais.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5541991275204?text=Ol%C3%A1%2C%20Camila!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20cl%C3%ADnico%20e%20agendar%20minha%20primeira%20sess%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar primeira sessão
              </a>
              </div>
            </motion.div>

            {/* Organizacional */}
            <motion.div 
              id="organizacional"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="bg-primary text-primary-foreground p-10 md:p-14 rounded-3xl relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px] pointer-events-none" />
              
              <h3 className="font-serif text-3xl mb-6 flex items-center gap-4 relative z-10">
                <span className="w-12 h-[1px] bg-accent"></span>
                Atuação Organizacional
              </h3>
              
              <div className="space-y-8 relative z-10 flex-1">
                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-2">Público</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Empresas de pequeno e médio porte.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-3">Desenvolvimento de Lideranças</h4>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Treinamento e desenvolvimento de lideranças</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Mentoria individual para gestores</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-3">Equipes e Cultura</h4>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Dinâmicas de grupo e team building</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Mediação de conflitos entre colaboradores</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Mapeamento de perfil comportamental (DISC)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Pesquisa de Clima, Cultura e Satisfação Organizacional</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-3">Saúde Mental e Bem-estar</h4>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Programa de Qualidade de Vida no Trabalho (QVT)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Gestão de mudanças organizacionais</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />Palestras de saúde mental (Janeiro Branco, Setembro Amarelo, SIPAT)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-2">Metodologia</h4>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li className="flex items-center gap-2"><span className="text-accent/80 font-serif italic text-lg">01.</span> Escuta ativa e observação</li>
                    <li className="flex items-center gap-2"><span className="text-accent/80 font-serif italic text-lg">02.</span> Planejamento Estratégico</li>
                    <li className="flex items-center gap-2"><span className="text-accent/80 font-serif italic text-lg">03.</span> Intervenção e Desenvolvimento</li>
                    <li className="flex items-center gap-2"><span className="text-accent/80 font-serif italic text-lg">04.</span> Acompanhamento de Resultados</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://wa.me/5541991275204?text=Ol%C3%A1%2C%20Camila!%20Sou%20de%20uma%20empresa%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20psicologia%20organizacional."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-8 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-primary-foreground px-7 py-4 rounded-full font-medium transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar proposta para empresa
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-card scroll-mt-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={FADE_UP}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-primary" />
              </span>
              <span className="font-sans uppercase tracking-[0.25em] text-xs text-accent">Dúvidas</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Perguntas frequentes</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Respostas para as dúvidas mais comuns antes de iniciar o processo.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="space-y-4"
          >
            {[
              {
                q: "Aceita convênio?",
                a: "No momento, infelizmente ainda não trabalhamos com convênios. O atendimento é particular. Caso tenha interesse, entre em contato para conversarmos sobre as condições.",
              },
              {
                q: "Quais formas de pagamento são aceitas?",
                a: "Aceitamos dinheiro, PIX, cartão de débito e cartão de crédito. O pagamento é realizado no momento do atendimento.",
              },
              {
                q: "Qual o valor da sessão?",
                a: "O valor é combinado diretamente com a psicóloga. Entre em contato pelo WhatsApp para saber mais — sem compromisso.",
              },
              {
                q: "Como funciona a primeira sessão?",
                a: "A primeira sessão é um espaço de escuta e acolhimento. Você conta o que te trouxe até aqui, tiramos dúvidas sobre o processo e combinamos como será a continuidade — sem pressão, no seu tempo.",
              },
              {
                q: "Atende de forma online?",
                a: "Sim! Além do atendimento presencial em Campo Largo/PR, também realizo sessões online para todo o Brasil, com a mesma qualidade e ética do atendimento presencial.",
              },
              {
                q: "Com que frequência acontecem as sessões?",
                a: "Em geral, as sessões são semanais com duração de 50 minutos cada. A frequência pode ser ajustada conforme o processo terapêutico e a necessidade de cada pessoa.",
              },
              {
                q: "Preciso estar em crise para buscar psicólogo?",
                a: "Não existe momento certo. Muitas pessoas buscam terapia para se conhecer melhor, lidar com situações do cotidiano ou simplesmente cuidar da saúde emocional. Buscar ajuda é um ato de cuidado consigo mesmo.",
              },
            ].map(({ q, a }, i) => (
              <motion.details
                key={i}
                variants={FADE_UP}
                className="group bg-background border border-border rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-serif text-lg text-primary select-none hover:text-accent transition-colors">
                  {q}
                  <ChevronDown className="w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 text-foreground/70 leading-relaxed">{a}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6 md:px-12 bg-background scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={FADE_UP}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </span>
              <span className="font-sans uppercase tracking-[0.25em] text-xs text-accent">Localização</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Atendimento presencial</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Consultório localizado no centro de Campo Largo, com fácil acesso.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-border shadow-sm h-72 lg:h-96">
              <iframe
                title="Localização do consultório"
                src="https://maps.google.com/maps?q=Av+Arlindo+Chemin+50+Centro+Campo+Largo+PR+Brasil&output=embed&hl=pt-BR"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address info */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-3xl p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-secondary/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-1">Endereço</p>
                    <p className="text-muted-foreground">Av. Arlindo Chemin, 50</p>
                    <p className="text-muted-foreground">Centro, Campo Largo — PR</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-secondary/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-1">Modalidades</p>
                    <p className="text-muted-foreground">Presencial em Campo Largo / PR</p>
                    <p className="text-muted-foreground">Online para todo o Brasil</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Arlindo+Chemin,+50,+Centro,+Campo+Largo,+Paraná"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer id="contato" className="bg-[#E5D5C5]/20 pt-24 pb-12 px-6 md:px-12 mt-auto border-t border-border scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
            >
              <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </span>
                <span className="font-sans uppercase tracking-[0.25em] text-xs text-accent">Contato</span>
              </motion.div>
              <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-6xl text-primary mb-6 leading-tight">
                Vamos conversar?
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-lg text-foreground/70 mb-10 max-w-md">
                Seja para iniciar seu processo terapêutico ou desenvolver sua equipe, estou à disposição para entender sua necessidade.
              </motion.p>
              <motion.a 
                variants={FADE_UP}
                href="https://wa.me/5541991275204" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all items-center gap-2 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Entre em contato pelo WhatsApp
              </motion.a>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="space-y-8 lg:pl-12 lg:border-l border-border"
            >
              <motion.div variants={FADE_UP}>
                <h3 className="font-serif text-2xl text-primary mb-1">Camila dos Santos Parteka Mazur</h3>
                <p className="text-muted-foreground">Psicóloga — CRP 08/48545</p>
              </motion.div>

              <motion.div variants={FADE_UP} className="space-y-4">
                <a href="https://wa.me/5541991275204" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border group-hover:border-accent/30">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span>(41) 99127-5204</span>
                </a>
                
                <a href="mailto:camilamazurpsi@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border group-hover:border-accent/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>camilamazurpsi@gmail.com</span>
                </a>
                
                <a href="https://www.instagram.com/psicamilamazur?igsh=MWNka2FheTQza2N2Yw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border group-hover:border-accent/30">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>@psicamilamazur</span>
                </a>

                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Campo Largo / Paraná<br/><span className="text-sm text-muted-foreground">Atendimento Presencial e Online</span></span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Camila Mazur. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">CRP 08/48545</p>
          </div>
        </div>
      </footer>
    </div>
  );
}