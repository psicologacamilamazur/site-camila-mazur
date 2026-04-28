import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Instagram, Mail, ChevronDown, ArrowRight, Heart, Sparkles, Phone } from "lucide-react";
import fotoCamila from "@assets/foto_camila.jpg";
import logoCamila from "@assets/logo_camila.png";

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
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="flex items-center gap-3">
          <img src={logoCamila} alt="Logo Camila Mazur" className="w-10 h-10 object-contain" />
          <span className="font-serif text-xl font-medium tracking-wide hidden md:block">Camila Mazur</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <button onClick={() => scrollTo("sobre")} className="hover:text-accent transition-colors">Sobre</button>
          <button onClick={() => scrollTo("clinica")} className="hover:text-accent transition-colors">Clínica</button>
          <button onClick={() => scrollTo("organizacional")} className="hover:text-accent transition-colors">Organizacional</button>
          <button onClick={() => scrollTo("contato")} className="hover:text-accent transition-colors">Contato</button>
        </div>
        <a 
          href="https://wa.me/5541991275204" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Agendar</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 overflow-hidden">
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
            className="w-24 md:w-32 mb-8 opacity-90"
          />
          
          <motion.h1 variants={FADE_UP} className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 text-primary">
            Um espaço de <span className="italic text-accent">cuidado</span>, escuta e desenvolvimento.
          </motion.h1>
          
          <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Psicóloga Clínica e Organizacional. Uma abordagem sistêmica com respeito à sua história e ao seu processo.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://wa.me/5541991275204" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all flex items-center gap-2 hover:scale-105"
            >
              Entre em contato
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Quick Access Buttons */}
          <motion.div 
            variants={FADE_UP}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
          >
            <button
              onClick={() => scrollTo("sobre")}
              className="group flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm border border-border hover:border-accent/60 hover:bg-card px-6 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <span className="font-serif text-lg text-primary">Quem eu sou</span>
            </button>

            <button
              onClick={() => scrollTo("areas")}
              className="group flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm border border-border hover:border-accent/60 hover:bg-card px-6 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="font-serif text-lg text-primary">Áreas de atuação</span>
            </button>

            <button
              onClick={() => scrollTo("contato")}
              className="group flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm border border-border hover:border-accent/60 hover:bg-card px-6 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="font-serif text-lg text-primary">Contato</span>
            </button>
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

      {/* Sobre Section */}
      <section id="sobre" className="py-24 px-6 md:px-12 bg-card relative scroll-mt-20">
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
          </motion.div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-24 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
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
              className="bg-card p-10 md:p-14 rounded-3xl border border-border"
            >
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
                    <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Público</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li>Adolescentes</li>
                      <li>Adultos</li>
                      <li>Idosos</li>
                      <li>Casais</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Modalidade</h4>
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
            </motion.div>

            {/* Organizacional */}
            <motion.div 
              id="organizacional"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="bg-primary text-primary-foreground p-10 md:p-14 rounded-3xl relative overflow-hidden"
            >
              {/* Subtle background blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px] pointer-events-none" />
              
              <h3 className="font-serif text-3xl mb-6 flex items-center gap-4 relative z-10">
                <span className="w-12 h-[1px] bg-accent"></span>
                Atuação Organizacional
              </h3>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-2">Público</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Empresas de pequeno e médio porte.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-2">Serviços Oferecidos</h4>
                  <ul className="space-y-3 text-primary-foreground/90">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      Treinamento e desenvolvimento de Lideranças
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      Pesquisa de Clima, Cultura e Satisfação Organizacional
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      Palestras sobre saúde mental (Janeiro Branco, Setembro Amarelo, SIPAT, entre outros)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-2">Metodologia</h4>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li className="flex items-center gap-2">
                      <span className="text-accent/80 font-serif italic text-lg">01.</span> Escuta ativa e observação
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent/80 font-serif italic text-lg">02.</span> Planejamento Estratégico
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent/80 font-serif italic text-lg">03.</span> Intervenção e Desenvolvimento
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent/80 font-serif italic text-lg">04.</span> Acompanhamento de Resultados
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer id="contato" className="bg-[#E5D5C5]/20 pt-24 pb-12 px-6 md:px-12 mt-auto border-t border-border scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
            >
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
                
                <a href="https://instagram.com/psicamilamazur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors group">
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