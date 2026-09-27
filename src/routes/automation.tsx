import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";

export const Route = createFileRoute("/automation")({
  head: () => ({
    meta: [
      { title: "Automação e Web Scraping — Geode Salt" },
      { name: "description", content: "Navegação humanizada por IA, RPA e automação de redes sociais." },
      { property: "og:title", content: "Automação e Web Scraping — Geode Salt" },
      { property: "og:description", content: "Navegação humanizada por IA, RPA e automação de redes sociais." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/automation" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/automation" }],
  }),
  component: AutomationPage,
});

function AutomationPage() {
  return <ProductPage slug="automation" />;
}
