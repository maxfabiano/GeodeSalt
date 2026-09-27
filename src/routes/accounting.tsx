import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";

export const Route = createFileRoute("/accounting")({
  head: () => ({
    meta: [
      { title: "Software Contábil em Nuvem — Geode Salt" },
      { name: "description", content: "Escrituração, fiscal, folha e DRE em tempo real para empresas e escritórios." },
      { property: "og:title", content: "Software Contábil em Nuvem — Geode Salt" },
      { property: "og:description", content: "Escrituração, fiscal, folha e DRE em tempo real para empresas e escritórios." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/accounting" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/accounting" }],
  }),
  component: AccountingPage,
});

function AccountingPage() {
  return <ProductPage slug="accounting" />;
}
