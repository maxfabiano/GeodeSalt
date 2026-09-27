import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Servidores IaaS White-label — Geode Salt" },
      { name: "description", content: "Bare metal e VMs em racks HCL, prontos para revenda B2B." },
      { property: "og:title", content: "Servidores IaaS White-label — Geode Salt" },
      { property: "og:description", content: "Bare metal e VMs em racks HCL, prontos para revenda B2B." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/infrastructure" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/infrastructure" }],
  }),
  component: InfrastructurePage,
});

function InfrastructurePage() {
  return <ProductPage slug="infrastructure" />;
}
