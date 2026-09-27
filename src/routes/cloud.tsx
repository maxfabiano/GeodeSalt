import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";

export const Route = createFileRoute("/cloud")({
  head: () => ({
    meta: [
      { title: "Administração Cloud e Azure — Geode Salt" },
      { name: "description", content: "Operação gerenciada de Azure, FinOps e nuvem híbrida." },
      { property: "og:title", content: "Administração Cloud e Azure — Geode Salt" },
      { property: "og:description", content: "Operação gerenciada de Azure, FinOps e nuvem híbrida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cloud" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cloud" }],
  }),
  component: CloudPage,
});

function CloudPage() {
  return <ProductPage slug="cloud" />;
}
