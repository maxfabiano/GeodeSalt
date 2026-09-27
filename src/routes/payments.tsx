import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: "Pagamentos as a Service B2B — Geode Salt" },
      { name: "description", content: "Pix, boleto, cartão e split em uma API com conciliação automática." },
      { property: "og:title", content: "Pagamentos as a Service B2B — Geode Salt" },
      { property: "og:description", content: "Pix, boleto, cartão e split em uma API com conciliação automática." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/payments" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/payments" }],
  }),
  component: PaymentsPage,
});

function PaymentsPage() {
  return <ProductPage slug="payments" />;
}
