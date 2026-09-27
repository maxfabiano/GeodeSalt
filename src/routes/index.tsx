import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { products, type ProductSlug } from "@/lib/products";
import { trackLead } from "@/lib/tracking";
import { Reveal, useScrollY } from "@/components/Reveal";
import hero from "@/assets/hero-racks.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geodesalt — Engenharia de Software B2B & Infraestrutura Privada" },
      { name: "description", content: "Sistemas corporativos de alta performance desenvolvidos sob medida e soluções de infraestrutura Bare Metal em datacenter próprio." },
      { property: "og:title", content: "Geodesalt — Arquitetura de Software & Datacenter" },
      { property: "og:description", content: "Sistemas B2B de missão crítica e infraestrutura dedicada." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const marquee = ["Arquitetura Enterprise", "Engenharia Sob Medida", "Mensageria Kafka", "Datacenter Privado", "Alta Disponibilidade", "Sistemas Core", "Bare Metal Dedicado", "Integração B2B"];

function Index() {
  const { t } = useI18n();
  const par = useScrollY();

  const [formData, setFormData] = useState({
    email: '',
    empresa: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof trackLead === 'function') trackLead();

    const numeroWhatsApp = "5511976891333";
    const textoMensagem = `*Contato Executivo Geodesalt*\n\n*Empresa:* ${formData.empresa}\n*E-mail:* ${formData.email}\n*Escopo do Projeto:* ${formData.mensagem}`;
    const textoCodificado = encodeURIComponent(textoMensagem);

    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`, '_blank');
  };

  const plans = [
    { n: "Software Core", p: t({ pt: "Sob consulta", en: "Custom" }), s: "", d: t({ pt: "Sistemas corporativos complexos, desenvolvidos sobre nossa arquitetura-base e integralmente adaptados ao seu modelo de negócio.", en: "Complex corporate systems, built on our base architecture and fully adapted to your business model." }), cta: t({ pt: "Agendar Discovery", en: "Schedule Discovery" }), hi: true },
    { n: "Integração & APIs", p: t({ pt: "Sob consulta", en: "Custom" }), s: "", d: t({ pt: "Orquestração de dados em alta latência, mensageria corporativa (RabbitMQ/Kafka) e automação de processos críticos.", en: "High-latency data orchestration, corporate messaging (RabbitMQ/Kafka) and critical process automation." }), cta: t({ pt: "Falar com Arquiteto", en: "Talk to Architect" }), hi: false },
    { n: "Datacenter Privado", p: t({ pt: "Opcional", en: "Optional" }), s: "", d: t({ pt: "Elimine custos variáveis de nuvens públicas. Hospedagem de missão crítica em hardware físico exclusivo (Bare Metal) e VMs de alta densidade.", en: "Eliminate variable public cloud costs. Mission-critical hosting on exclusive physical hardware (Bare Metal) and high-density VMs." }), cta: t({ pt: "Dimensionar Hardware", en: "Scale Hardware" }), hi: false },
  ];

  return (
    <main>
      <header className="relative overflow-hidden">
        <div className="animate-glow pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-signal/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 text-center">
          <span className="animate-rise glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            <span className="size-1.5 rounded-full bg-signal" /> {t({ pt: "Engenharia de Software Enterprise", en: "Enterprise Software Engineering" })}
          </span>
          <h1 className="animate-rise mx-auto mt-8 max-w-[19ch] text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ice md:text-7xl" style={{ animationDelay: "80ms" }}>
            {t({ pt: "Arquitetura escalável. Sistemas desenhados ", en: "Scalable architecture. Systems designed " })}
            <span className="text-signal">{t({ pt: "para a sua operação.", en: "for your operation." })}</span>
          </h1>
          <p className="animate-rise mx-auto mt-6 max-w-[64ch] text-lg leading-relaxed text-fog" style={{ animationDelay: "160ms" }}>
            {t({
              pt: "Acelere seu time-to-market. Nossa engenharia desenvolve a camada visual e lógica de sua aplicação sobre uma fundação validada de código, garantindo entrega ágil e aderência total às suas regras de negócio. Operação disponível em nuvem ou em infraestrutura dedicada própria.",
              en: "Accelerate your time-to-market. Our engineering develops the visual and logical layers of your application over a validated code foundation, ensuring agile delivery and total compliance with your business rules. Available on cloud or our own dedicated infrastructure."
            })}
          </p>
          <div className="animate-rise mt-10 flex items-center justify-center gap-4" style={{ animationDelay: "240ms" }}>
            <a href="#contact" className="rounded-lg bg-signal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal/80">
              {t({ pt: "Agendar Reunião Executiva", en: "Schedule Executive Meeting" })}
            </a>
            <a href="#solucoes" className="glass rounded-lg px-6 py-3 text-sm font-medium text-ice transition-colors hover:border-fog/40">
              {t({ pt: "Portfólio de Arquitetura", en: "Architecture Portfolio" })}
            </a>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="animate-rise glass rounded-2xl p-3" style={{ animationDelay: "320ms" }}>
            <div className="aspect-[21/9] overflow-hidden rounded-xl">
              <div ref={par} className="h-full w-full will-change-transform bg-ink">
                <img src={hero} alt={t({ pt: "Infraestrutura de tecnologia de ponta e código", en: "State-of-the-art tech infrastructure and code" })} width={1920} height={800} className="h-full w-full object-cover opacity-80 mix-blend-luminosity" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-20 overflow-hidden border-y border-edge/50 bg-panel/30 py-5">
        <div className="animate-marquee flex w-max gap-12 font-mono text-sm uppercase tracking-[0.2em] text-fog">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-12">{m}<span className="text-signal">◆</span></span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="eyebrow">(a) {t({ pt: "Eixos de Engenharia", en: "Engineering Axes" })}</p>
          <h2 className="mt-3 max-w-[20ch] text-balance text-3xl font-bold tracking-tight text-ice">
            {t({ pt: "Sistemas corporativos suportados por hardware próprio.", en: "Corporate systems backed by proprietary hardware." })}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { k: "Engenharia de Software", h: t({ pt: "Desenvolvimento Sob Medida", en: "Tailor-made Development" }), d: t({ pt: "Reduza significativamente o ciclo de desenvolvimento. Licenciamos nossa arquitetura corporativa como base estrutural e desenvolvemos as camadas de interface e integrações exclusivamente para os fluxos da sua companhia.", en: "Significantly reduce the development cycle. We license our corporate architecture as a structural base and develop the UI and integration layers exclusively for your company's workflows." }), l: [t({ pt: "Lógica de negócios customizada", en: "Custom business logic" }), t({ pt: "White-label corporativo", en: "Corporate White-label" }), t({ pt: "Orquestração de dados e mensageria", en: "Data orchestration and messaging" })], to: "/messaging" as const },
            { k: "Datacenter e Hosting", h: t({ pt: "Infraestrutura Dedicada", en: "Dedicated Infrastructure" }), d: t({ pt: "Projetado para companhias que exigem controle absoluto. Como diferencial estratégico, oferecemos hospedagem dos sistemas em nosso próprio Datacenter Privado, fornecendo ambientes Bare Metal e Virtualização de alta capacidade.", en: "Designed for companies that demand absolute control. As a strategic differentiator, we offer system hosting in our own Private Datacenter, providing Bare Metal and high-capacity Virtualization environments." }), l: [t({ pt: "Controle total sobre o hardware", en: "Total hardware control" }), t({ pt: "Previsibilidade de custos mensais", en: "Monthly cost predictability" }), t({ pt: "Ambientes isolados (Single-tenant)", en: "Isolated environments (Single-tenant)" })], to: "/infrastructure" as const },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 120}>
              <Link to={c.to} className="glass block h-full rounded-2xl p-8 transition-colors hover:border-signal/30">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{c.k}</span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-ice">{c.h}</h3>
                <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-fog">{c.d}</p>
                <ul className="mt-6 space-y-2 font-mono text-xs text-fog">
                  {c.l.map((x) => (
                    <li key={x} className="flex items-center gap-2"><span className="size-1 rounded-full bg-signal" /> {x}</li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="solucoes" className="scroll-mt-20 border-t border-edge/50 bg-panel/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal><p className="eyebrow">(b) {t({ pt: "Portfólio de Atuação", en: "Operating Portfolio" })}</p></Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {plans.map((pl, i) => (
              <Reveal key={pl.n} delay={i * 100}>
                <div className={`h-full rounded-2xl border p-8 backdrop-blur-xl ${pl.hi ? "border-signal/50 bg-panel/60 ring-1 ring-signal/20" : "border-edge/70 bg-ink"}`}>
                  <span className={`text-sm font-semibold uppercase tracking-wide ${pl.hi ? "text-signal" : "text-fog"}`}>{pl.n}</span>
                  <p className="mt-4 text-4xl font-extrabold tracking-tight text-ice">{pl.p}<span className="text-base font-normal text-fog">{pl.s}</span></p>
                  <p className="mt-4 text-sm text-fog">{pl.d}</p>
                  <a href="#contact" className={`mt-6 block w-full rounded-lg py-2.5 text-center font-mono text-xs uppercase tracking-wide transition-colors ${pl.hi ? "bg-signal font-medium text-ink hover:bg-signal/80" : "border border-edge text-ice hover:border-signal/40"}`}>{pl.cta}</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">(c) {t({ pt: "Contato Institucional", en: "Institutional Contact" })}</p>
            <h2 className="mt-3 max-w-[16ch] text-balance text-3xl font-bold tracking-tight text-ice">
              {t({ pt: "Especifique seu desafio técnico", en: "Specify your technical challenge" })}
            </h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-fog">
              {t({ pt: "Inicie um diálogo com nossos arquitetos de soluções. Avaliaremos o escopo do seu projeto para apresentar o plano de engenharia e os requisitos de infraestrutura adequados.", en: "Initiate a dialogue with our solutions architects. We will evaluate your project's scope to present the engineering plan and appropriate infrastructure requirements." })}
            </p>
            <p className="mt-1 font-mono text-sm text-fog">+55 11 97689-1333</p>
          </Reveal>
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6">
              <label className="mb-4 block font-mono text-[11px] uppercase tracking-wide text-fog">
                {t({ pt: "E-mail executivo", en: "Executive email" })}
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="diretoria@empresa.com.br" 
                  className="mt-2 w-full rounded-lg border border-edge bg-ink px-3 py-2.5 font-sans text-sm normal-case tracking-normal text-ice outline-none transition-colors placeholder:text-fog/50 focus:border-signal/50" 
                />
              </label>

              <label className="mb-4 block font-mono text-[11px] uppercase tracking-wide text-fog">
                {t({ pt: "Organização", en: "Organization" })}
                <input 
                  required 
                  type="text" 
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  placeholder="Razão Social ou Nome Fantasia" 
                  className="mt-2 w-full rounded-lg border border-edge bg-ink px-3 py-2.5 font-sans text-sm normal-case tracking-normal text-ice outline-none transition-colors placeholder:text-fog/50 focus:border-signal/50" 
                />
              </label>

              <label className="block font-mono text-[11px] uppercase tracking-wide text-fog">
                {t({ pt: "Descreva o escopo estrutural da demanda", en: "Describe the structural scope of the demand" })}
                <textarea 
                  required
                  rows={3} 
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  placeholder={t({ pt: "Ex: Demandamos um novo sistema contábil interno integrado via Kafka e hospedado em Bare Metal...", en: "Ex: We require a new internal accounting system integrated via Kafka and hosted on Bare Metal..." })} 
                  className="mt-2 w-full resize-none rounded-lg border border-edge bg-ink px-3 py-2.5 font-sans text-sm normal-case tracking-normal text-ice outline-none transition-colors placeholder:text-fog/50 focus:border-signal/50" 
                />
              </label>
              
              <button 
                type="submit"
                className="mt-5 w-full rounded-lg bg-signal py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal/80 flex items-center justify-center gap-2"
              >
                {t({ pt: "Solicitar Análise de Arquitetura", en: "Request Architecture Analysis" })}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}