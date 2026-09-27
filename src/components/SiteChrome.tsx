import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { products, type ProductSlug } from "@/lib/products";
import logo from "@/assets/logo-GeodeSalt-sm.png";

// Novo Componente: Botão Flutuante do WhatsApp
export function WhatsAppFloat() {
  const numero = "5511976891333";
  const texto = encodeURIComponent("Olá! Estou no site e gostaria de falar com um engenheiro sobre as soluções B2B.");

  return (
    <a
      href={`https://wa.me/${numero}?text=${texto}`}
      target="_blank"
      rel="noopener noreferrer"
      // bottom-6 e left-6 fixam o botão no canto inferior esquerdo. z-50 garante que ele fique por cima de tudo.
      className="fixed bottom-6 right-6 z-50 flex size-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-ink"
      aria-label="Ola gostaria de saber mais informações"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-8">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    </a>
  );
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img src={logo} alt="Geode Salt" width={32} height={32} className="size-8" />
      <span className="text-sm font-semibold tracking-tight text-ice">
        Geode Salt
      </span>
    </Link>
  );
}

function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center rounded-full border border-edge bg-panel/60 p-0.5 font-mono text-[11px]">
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${lang === l ? "bg-signal/20 text-signal" : "text-fog hover:text-ice"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div ref={ref} className="absolute inset-x-0 bottom-0 h-px origin-left bg-signal" style={{ transform: "scaleX(0)" }} />;
}

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const nav = "font-mono text-[11px] uppercase tracking-[0.18em] text-fog hover:text-ice transition-colors";
  return (
    <nav className="sticky top-0 z-50 border-b border-edge/70 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button className={nav}>{t({ pt: "Soluções", en: "Solutions" })}</button>
            <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="glass grid grid-cols-2 gap-1 rounded-2xl p-3">
                {products.map((p) => (
                  <Link key={p.slug} to={`/${p.slug}` as `/${ProductSlug}`} className="rounded-lg p-3 transition-colors hover:bg-edge/40">
                    <span className="font-mono text-[10px] text-signal">{p.code}</span>
                    <p className="text-sm font-semibold text-ice">{t(p.name)}</p>
                    <p className="text-xs text-fog">{t(p.short)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/messaging" className={nav}>Kafka · RabbitMQ</Link>
          <Link to="/infrastructure" className={nav}>{t({ pt: "Servidores", en: "Servers" })}</Link>
          <Link to="/" hash="pricing" className={nav}>{t({ pt: "Preços", en: "Pricing" })}</Link>
        </div>
        <div className="flex items-center gap-3">
          <LangToggle />
          <Link to="/" hash="contact" className="hidden rounded-md bg-signal px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-wide text-ink transition-colors hover:bg-signal/80 sm:inline-block">
            {t({ pt: "Falar com vendas", en: "Talk to sales" })}
          </Link>
          <button onClick={() => setOpen(!open)} className="font-mono text-xs text-fog md:hidden" aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <div className="grid gap-1 border-t border-edge/60 px-6 py-4 md:hidden">
          {products.map((p) => (
            <Link key={p.slug} to={`/${p.slug}` as `/${ProductSlug}`} onClick={() => setOpen(false)} className="py-2 text-sm text-ice">
              {t(p.name)}
            </Link>
          ))}
        </div>
      )}
      <ScrollProgress />
    </nav>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <>
      <footer className="border-t border-edge/50 bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-fog">
              {t({ pt: "SaaS, IaaS e integrações para empresas que querem escalar.", en: "SaaS, IaaS and integrations for companies built to scale." })}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {products.map((p) => (
              <Link key={p.slug} to={`/${p.slug}` as `/${ProductSlug}`} className="text-sm text-fog transition-colors hover:text-ice">
                {t(p.name)}
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl border-t border-edge/40 px-6 py-6 font-mono text-[11px] text-fog/70">
          © {new Date().getFullYear()} Geode Salt · {t({ pt: "Apache Kafka e RabbitMQ são marcas de seus respectivos donos; oferecemos operação gerenciada.", en: "Apache Kafka and RabbitMQ are trademarks of their owners; we provide managed operation." })}
        </div>
      </footer>
      {/* Botão flutuante renderizado globalmente junto ao rodapé */}
      <WhatsAppFloat />
    </>
  );
}