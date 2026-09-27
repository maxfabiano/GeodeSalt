import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { getProduct, products, type ProductSlug } from "@/lib/products";
import { Reveal } from "./Reveal";

export function ProductPage({ slug }: { slug: ProductSlug }) {
  const { t } = useI18n();
  const p = getProduct(slug);
  const others = products.filter((o) => o.slug !== slug).slice(0, 3);
  return (
    <main>
      <header className="relative overflow-hidden">
        <div className="animate-glow pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[860px] -translate-x-1/2 rounded-full bg-signal/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <span className="animate-rise glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            <span className="size-1.5 rounded-full bg-signal" /> {p.code} · {t(p.name)}
          </span>
          <h1 className="animate-rise mt-8 max-w-[20ch] text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ice md:text-6xl" style={{ animationDelay: "80ms" }}>
            {t(p.title)}
          </h1>
          <p className="animate-rise mt-6 max-w-[56ch] text-lg leading-relaxed text-fog" style={{ animationDelay: "160ms" }}>
            {t(p.tagline)}
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
            <Link to="/" hash="contact" className="rounded-lg bg-signal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal/80">
              {t({ pt: "Agendar demonstração", en: "Book a demo" })}
            </Link>
            <Link to="/" hash="pricing" className="glass rounded-lg px-6 py-3 text-sm font-medium text-ice transition-colors hover:border-fog/40">
              {t({ pt: "Ver planos", en: "See plans" })}
            </Link>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-edge pt-8">
            {p.stats.map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-ice md:text-3xl">{s.v}</div>
                <div className="mt-1 font-mono text-xs text-fog">{t(s.l)}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="border-y border-edge/50 bg-panel/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <p className="eyebrow">(a) {t({ pt: "Recursos", en: "Features" })}</p>
            <h2 className="mt-3 max-w-[22ch] text-3xl font-bold tracking-tight text-ice">
              {t({ pt: "Feito para operações B2B exigentes", en: "Built for demanding B2B operations" })}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-edge/60 bg-edge/40 sm:grid-cols-2">
            {p.features.map((f, i) => (
              <Reveal key={i} delay={i * 80} className="bg-ink p-8 transition-colors hover:bg-panel/70">
                <span className="font-mono text-xs text-signal">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-ice">{t(f.t)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{t(f.d)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-2">
        <Reveal className="glass rounded-2xl p-8">
          <p className="eyebrow">(b) {t({ pt: "Especificações", en: "Specs" })}</p>
          <ul className="mt-6 space-y-3 font-mono text-sm text-ice">
            {p.specs.map((s) => (
              <li key={s} className="flex items-center gap-3 border-b border-edge/50 pb-3">
                <span className="size-1.5 rounded-full bg-signal" /> {s}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="glass rounded-2xl p-8">
          <p className="eyebrow">(c) {t({ pt: "Casos de uso B2B", en: "B2B use cases" })}</p>
          <ul className="mt-6 space-y-4">
            {p.useCases.map((u, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="font-mono text-xs text-signal">0{i + 1}</span>
                <span className="text-lg font-semibold text-ice">{t(u)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-t border-edge/50 bg-panel/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow">(d) {t({ pt: "Combine com", en: "Pair with" })}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to={`/${o.slug}` as `/${ProductSlug}`} className="glass rounded-2xl p-6 transition-colors hover:border-signal/40">
                <span className="font-mono text-xs text-signal">{o.code}</span>
                <p className="mt-2 font-semibold text-ice">{t(o.name)}</p>
                <p className="mt-1 text-sm text-fog">{t(o.short)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
