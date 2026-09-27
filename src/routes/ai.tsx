import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "Fine-tuning de IA para Empresas — Geode Salt" },
      { name: "description", content: "Modelos especializados treinados com seus dados, em GPU dedicada." },
      { property: "og:title", content: "Fine-tuning de IA para Empresas — Geode Salt" },
      { property: "og:description", content: "Modelos especializados treinados com seus dados, em GPU dedicada." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai" }],
  }),
  component: AiPage,
});

function AiPage() {
  return <ProductPage slug="ai" />;
}
