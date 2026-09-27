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
      { title: "Geode Salt — SaaS, IaaS e integrações para empresas B2B" },
      { name: "description", content: "Pagamentos, Kafka e RabbitMQ as a Service, software contábil, servidores white-label, IA especializada e automação para empresas." },
      { property: "og:title", content: "Geode Salt — SaaS + IaaS para B2B" },
      { property: "og:description", content: "Infraestrutura, mensageria, pagamentos e IA sob uma única plataforma B2B." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// Constantes estáticas podem ficar do lado de fora
const marquee = ["Apache Kafka", "RabbitMQ", "Pix", "Azure", "NF-e", "Bare metal", "Fine-tuning", "WhatsApp Business", "Terraform", "Split payments", "SPED", "RPA"];

function Index() {
  const { t } = useI18n();
  const par = useScrollY();

  // 1. ESTADO MOVIDO PARA DENTRO DO COMPONENTE
  const [formData, setFormData] = useState({
    email: '',
    empresa: '',
    mensagem: ''
  });

  // 2. FUNÇÃO MOVIDA PARA DENTRO DO COMPONENTE
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rastreia a conversão
    if (typeof trackLead === 'function') trackLead();

    // 1. O seu número (sem o + e sem espaços)
    const numeroWhatsApp = "5511976891333";

    // 2. Monta o texto que vai chegar para você
    const textoMensagem = `*Novo Contato via Site*\n\n*Empresa:* ${formData.empresa}\n*E-mail:* ${formData.email}\n*Mensagem:* ${formData.mensagem}`;
    const textoCodificado = encodeURIComponent(textoMensagem);

    // 3. Redireciona o usuário para o WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`, '_blank');
  };

  const plans = [
    { n: "Essential", p: t({ pt: "Sob consulta", en: "Custom" }), s: t({ pt: "/mês", en: "/mo" }), d: t({ pt: "1 node, 1 cluster de filas, pagamentos e contábil básico.", en: "1 node, 1 queue cluster, payments and basic accounting." }), cta: t({ pt: "Começar", en: "Start" }), hi: false },
    { n: "Scale", p: t({ pt: "Sob consulta", en: "Custom" }), s: t({ pt: "/mês", en: "/mo" }), d: t({ pt: "6 nodes, Kafka gerenciado, fine-tuning de IA e automações ilimitadas.", en: "6 nodes, managed Kafka, AI fine-tuning and unlimited automations." }), cta: t({ pt: "Escalar", en: "Scale" }), hi: true },
    { n: "Dedicated", p: t({ pt: "Sob consulta", en: "Custom" }), s: "", d: t({ pt: "Racks inteiros, revenda white-label, SLA 99,95%.", en: "Full racks, white-label resale, 99.95% SLA." }), cta: t({ pt: "Falar com vendas", en: "Talk to sales" }), hi: false },
  ];

  return (
    <main>
      <header className="relative overflow-hidden">
        <div className="animate-glow pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-signal/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 text-center">
          <span className="animate-rise glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            <span className="size-1.5 rounded-full bg-signal" /> {t({ pt: "SaaS + IaaS para empresas", en: "SaaS + IaaS for business" })}
          </span>
          <h1 className="animate-rise mx-auto mt-8 max-w-[17ch] text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ice md:text-7xl" style={{ animationDelay: "80ms" }}>
            {t({ pt: "A infraestrutura inteira da sua empresa, ", en: "Your company's entire infrastructure, " })}
            <span className="text-signal">{t({ pt: "como serviço.", en: "as a service." })}</span>
          </h1>
          <p className="animate-rise mx-auto mt-6 max-w-[58ch] text-lg leading-relaxed text-fog" style={{ animationDelay: "160ms" }}>
            {t({
              pt: "Pagamentos, Kafka e RabbitMQ gerenciados, software contábil, web scraping, autobot recaptcha cloudflare, servidores white-label e IA treinada com seus dados. Um contrato, um painel, um time.",
              en: "Payments, managed Kafka and RabbitMQ, accounting software, web scraping, autobot recaptcha cloudflare, white-label servers and AI trained on your data. One contract, one console, one team.",
            })}
          </p>
          <div className="animate-rise mt-10 flex items-center justify-center gap-4" style={{ animationDelay: "240ms" }}>
            <a href="#contact" className="rounded-lg bg-signal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal/80">
              {t({ pt: "Solicitar acesso", en: "Request access" })}
            </a>
            <Link to="/infrastructure" className="glass rounded-lg px-6 py-3 text-sm font-medium text-ice transition-colors hover:border-fog/40">
              {t({ pt: "Ver especificações", en: "View specs" })}
            </Link>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="animate-rise glass rounded-2xl p-3" style={{ animationDelay: "320ms" }}>
            <div className="aspect-[21/9] overflow-hidden rounded-xl">
              <div ref={par} className="h-full w-full will-change-transform">
                <img src={hero} alt={t({ pt: "Racks de servidores com fibras iluminadas", en: "Server racks with glowing fiber" })} width={1920} height={800} className="h-full w-full object-cover" />
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
          <p className="eyebrow">(a) {t({ pt: "Duas superfícies", en: "Two surfaces" })}</p>
          <h2 className="mt-3 max-w-[18ch] text-balance text-3xl font-bold tracking-tight text-ice">
            {t({ pt: "Um produto, dois modos de consumir", en: "One product, two ways to consume it" })}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { k: "SaaS", h: t({ pt: "Plataforma pronta", en: "Ready-made platform" }), d: t({ pt: "Ative pagamentos, mensageria, contábil e IA em minutos. Sem provisionar nada.", en: "Turn on payments, messaging, accounting and AI in minutes. Nothing to provision." }), l: [t({ pt: "Kafka & RabbitMQ as a Service", en: "Kafka & RabbitMQ as a Service" }), t({ pt: "Software contábil em nuvem", en: "Cloud accounting software" }), t({ pt: "Fine-tuning de IA empresarial", en: "Enterprise AI fine-tuning" })], to: "/messaging" as const },
            { k: "IaaS", h: t({ pt: "Servidores dedicados HCL", en: "Dedicated HCL servers" }), d: t({ pt: "Alugue nossos nós físicos ou revenda com a sua marca para os seus clientes B2B.", en: "Rent our physical nodes or resell them under your brand to your B2B clients." }), l: ["NVMe 7.4 GB/s", t({ pt: "IPs dedicados por região", en: "Dedicated IPs per region" }), t({ pt: "SLA 99,95% de uptime", en: "99.95% uptime SLA" })], to: "/infrastructure" as const },
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

      <section className="border-y border-edge/50 bg-panel/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <p className="eyebrow">(b) {t({ pt: "Capacidades", en: "Capabilities" })}</p>
            <h2 className="mt-3 max-w-[22ch] text-balance text-3xl font-bold tracking-tight text-ice">
              {t({ pt: "Tudo que a sua operação B2B precisa, sob um contrato", en: "Everything your B2B operation needs, under one contract" })}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-edge/60 bg-edge/40 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Link key={p.slug} to={`/${p.slug}` as `/${ProductSlug}`} className="group bg-ink p-7 transition-colors hover:bg-panel/70">
                <span className="font-mono text-xs text-signal">0{i + 1} · {p.code}</span>
                <h3 className="mt-3 text-lg font-semibold text-ice">{t(p.name)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{t(p.short)}</p>
                <span className="mt-4 inline-block font-mono text-[11px] text-fog transition-colors group-hover:text-signal">→ {t({ pt: "Explorar", en: "Explore" })}</span>
              </Link>
            ))}
            <a href="#contact" className="flex flex-col justify-between bg-signal/10 p-7 transition-colors hover:bg-signal/20">
              <span className="font-mono text-xs text-signal">08 · B2B</span>
              <p className="mt-3 text-lg font-semibold text-ice">{t({ pt: "Precisa de algo sob medida?", en: "Need something custom?" })}</p>
              <span className="mt-4 font-mono text-[11px] text-signal">→ {t({ pt: "Falar com engenharia", en: "Talk to engineering" })}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="eyebrow">(c) {t({ pt: "Integrações", en: "Integrations" })}</p>
          <h2 className="mt-3 max-w-[20ch] text-3xl font-bold tracking-tight text-ice">
            {t({ pt: "Conectado ao seu ecossistema", en: "Connected to your ecosystem" })}
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-3">
          {["Azure", "Apache Kafka", "RabbitMQ", "Stripe", "PagBank", "Pix", "WhatsApp", "Telegram", "Terraform", "SAP", "TOTVS", "OpenAI"].map((x) => (
            <span key={x} className="glass rounded-full px-5 py-2.5 font-mono text-xs text-ice transition-colors hover:border-signal/40">{x}</span>
          ))}
        </Reveal>
      </section>

      <section id="pricing" className="scroll-mt-20 border-t border-edge/50 bg-panel/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal><p className="eyebrow">(d) {t({ pt: "Planos", en: "Plans" })}</p></Reveal>
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
            <p className="eyebrow">(e) {t({ pt: "Contato", en: "Contact" })}</p>
            <h2 className="mt-3 max-w-[16ch] text-balance text-3xl font-bold tracking-tight text-ice">
              {t({ pt: "Provisione o primeiro nó hoje", en: "Provision your first node today" })}
            </h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-fog">
              {t({ pt: "Fale com nosso time de engenharia. Respondemos no fuso de São Paulo e de São Francisco.", en: "Talk to our engineering team. We answer in São Paulo and San Francisco time zones." })}
            </p>
            <p className="mt-1 font-mono text-sm text-fog">+55 11 97689-1333</p>
          </Reveal>
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6">
              <label className="mb-4 block font-mono text-[11px] uppercase tracking-wide text-fog">
                {t({ pt: "E-mail corporativo", en: "Work email" })}
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder={t({ pt: "voce@empresa.com", en: "you@company.com" })} 
                  className="mt-2 w-full rounded-lg border border-edge bg-ink px-3 py-2.5 font-sans text-sm normal-case tracking-normal text-ice outline-none transition-colors placeholder:text-fog/50 focus:border-signal/50" 
                />
              </label>

              <label className="mb-4 block font-mono text-[11px] uppercase tracking-wide text-fog">
                {t({ pt: "Empresa", en: "Company" })}
                <input 
                  required 
                  type="text" 
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  placeholder="ACME S.A." 
                  className="mt-2 w-full rounded-lg border border-edge bg-ink px-3 py-2.5 font-sans text-sm normal-case tracking-normal text-ice outline-none transition-colors placeholder:text-fog/50 focus:border-signal/50" 
                />
              </label>

              <label className="block font-mono text-[11px] uppercase tracking-wide text-fog">
                {t({ pt: "Mensagem", en: "Message" })}
                <textarea 
                  required
                  rows={3} 
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  placeholder={t({ pt: "Conte o que você quer automatizar", en: "Tell us what you want to automate" })} 
                  className="mt-2 w-full resize-none rounded-lg border border-edge bg-ink px-3 py-2.5 font-sans text-sm normal-case tracking-normal text-ice outline-none transition-colors placeholder:text-fog/50 focus:border-signal/50" 
                />
              </label>
              
              <button 
                type="submit"
                className="mt-5 w-full rounded-lg bg-signal py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal/80 flex items-center justify-center gap-2"
              >
                {t({ pt: "Falar com Engenheiro no WhatsApp", en: "Talk to an Engineer on WhatsApp" })}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}