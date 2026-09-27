import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";

export const Route = createFileRoute("/messaging")({
  head: () => ({
    meta: [
      { title: "Kafka e RabbitMQ as a Service — Geode Salt" },
      { name: "description", content: "Clusters Kafka e RabbitMQ gerenciados, mais WhatsApp, e-mail e SMS." },
      { property: "og:title", content: "Kafka e RabbitMQ as a Service — Geode Salt" },
      { property: "og:description", content: "Clusters Kafka e RabbitMQ gerenciados, mais WhatsApp, e-mail e SMS." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/messaging" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/messaging" }],
  }),
  component: MessagingPage,
});

function MessagingPage() {
  return <ProductPage slug="messaging" />;
}
