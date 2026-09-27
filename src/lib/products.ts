import type { Loc } from "./i18n";

export type ProductSlug = "payments" | "messaging" | "accounting" | "infrastructure" | "ai" | "automation" | "cloud";

export type Product = {
  slug: ProductSlug;
  code: string;
  name: Loc;
  title: Loc;
  tagline: Loc;
  short: Loc;
  stats: { v: string; l: Loc }[];
  features: { t: Loc; d: Loc }[];
  specs: string[];
  useCases: Loc[];
};

const L = (pt: string, en: string): Loc => ({ pt, en });

export const products: Product[] = [
  {
    slug: "payments",
    code: "PAY",
    name: L("Pagamentos", "Payments"),
    title: L("Pagamentos as a Service para operações B2B", "Payments as a Service for B2B operations"),
    tagline: L("Pix, boleto, cartão e split em uma única API, com conciliação automática.", "Pix, boleto, cards and split payments in a single API, with automatic reconciliation."),
    short: L("Pix, boleto, cartão, split e recorrência em uma API.", "Pix, boleto, cards, split and billing in one API."),
    stats: [
      { v: "1 API", l: L("para todos os meios", "for every method") },
      { v: "D+0", l: L("conciliação", "reconciliation") },
      { v: "99,95%", l: L("disponibilidade", "availability") },
    ],
    features: [
      { t: L("Checkout white-label", "White-label checkout"), d: L("Sua marca, nossa infraestrutura. Pronto para marketplaces e plataformas.", "Your brand, our rails. Ready for marketplaces and platforms.") },
      { t: L("Split & marketplace", "Split & marketplace"), d: L("Divida recebíveis entre parceiros com regras por transação.", "Split receivables between partners with per-transaction rules.") },
      { t: L("Recorrência B2B", "B2B billing"), d: L("Assinaturas, faturas por uso e cobrança de inadimplentes.", "Subscriptions, usage invoices and dunning.") },
      { t: L("Conciliação automática", "Auto reconciliation"), d: L("Ledger único que conversa com o seu ERP e com o nosso software contábil.", "A single ledger that syncs with your ERP and our accounting software.") },
    ],
    specs: ["REST + Webhooks", "Idempotency keys", "PCI-ready vault", "Multi-acquirer routing", "Stripe · PagBank · Mercado Pago"],
    useCases: [L("SaaS com cobrança por assento", "Per-seat SaaS billing"), L("Marketplaces com split", "Split marketplaces"), L("Distribuidores com faturamento recorrente", "Distributors with recurring invoicing")],
  },
  {
    slug: "messaging",
    code: "MSG",
    name: L("Mensageria", "Messaging"),
    title: L("Kafka e RabbitMQ as a Service, gerenciados por nós", "Kafka and RabbitMQ as a Service, fully managed"),
    tagline: L("Clusters de streaming e filas prontos em minutos, mais WhatsApp, e-mail e SMS no mesmo plano.", "Streaming clusters and queues ready in minutes, plus WhatsApp, email and SMS on the same plan."),
    short: L("Kafka, RabbitMQ, WhatsApp e e-mail gerenciados.", "Managed Kafka, RabbitMQ, WhatsApp and email."),
    stats: [
      { v: "2M msg/s", l: L("throughput por cluster", "throughput per cluster") },
      { v: "< 5 min", l: L("para subir um cluster", "to launch a cluster") },
      { v: "3 AZs", l: L("replicação", "replication") },
    ],
    features: [
      { t: L("Kafka gerenciado", "Managed Kafka"), d: L("Brokers, tópicos, Schema Registry e Connect com upgrades sem downtime.", "Brokers, topics, Schema Registry and Connect with zero-downtime upgrades.") },
      { t: L("RabbitMQ gerenciado", "Managed RabbitMQ"), d: L("Filas quorum, exchanges e shovels com monitoramento 24/7.", "Quorum queues, exchanges and shovels with 24/7 monitoring.") },
      { t: L("Mensageria omnichannel", "Omnichannel messaging"), d: L("WhatsApp Business, Telegram, e-mail e SMS em um único grafo de eventos.", "WhatsApp Business, Telegram, email and SMS in one event graph.") },
      { t: L("Observabilidade", "Observability"), d: L("Lag de consumidores, alertas e dashboards incluídos.", "Consumer lag, alerts and dashboards included.") },
    ],
    specs: ["Apache Kafka 3.x", "RabbitMQ 3.13", "TLS + SASL/SCRAM", "Terraform provider", "Prometheus metrics"],
    useCases: [L("Event-driven para fintechs", "Event-driven fintechs"), L("Filas de pedidos em e-commerce", "E-commerce order queues"), L("Notificações em massa para clientes", "Bulk customer notifications")],
  },
  {
    slug: "accounting",
    code: "ACC",
    name: L("Software Contábil", "Accounting Software"),
    title: L("Software contábil em nuvem para escritórios e empresas", "Cloud accounting software for firms and companies"),
    tagline: L("Escrituração, fiscal, folha e DRE em tempo real, integrado aos seus pagamentos.", "Bookkeeping, tax, payroll and real-time P&L, integrated with your payments."),
    short: L("Fiscal, folha, DRE e conciliação em nuvem.", "Tax, payroll, P&L and reconciliation in the cloud."),
    stats: [
      { v: "NF-e", l: L("emissão integrada", "built-in e-invoicing") },
      { v: "Real-time", l: L("DRE e fluxo de caixa", "P&L and cash flow") },
      { v: "Multi-CNPJ", l: L("gestão de grupos", "group management") },
    ],
    features: [
      { t: L("Escrituração automática", "Automated bookkeeping"), d: L("Lançamentos gerados a partir de extratos e pagamentos, com regras por IA.", "Entries generated from statements and payments, with AI rules.") },
      { t: L("Módulo fiscal", "Tax module"), d: L("Apuração de impostos, SPED e emissão de notas.", "Tax calculation, SPED filings and invoice issuing.") },
      { t: L("Folha e RH", "Payroll & HR"), d: L("Folha de pagamento, eSocial e portal do colaborador.", "Payroll, eSocial and employee portal.") },
      { t: L("Portal do escritório", "Firm portal"), d: L("Escritórios contábeis gerenciam centenas de clientes em um painel.", "Accounting firms manage hundreds of clients in one panel.") },
    ],
    specs: ["NF-e / NFS-e", "SPED", "eSocial", "Open Finance", "API para ERPs"],
    useCases: [L("Escritórios contábeis", "Accounting firms"), L("Grupos empresariais multi-CNPJ", "Multi-entity groups"), L("Startups que querem DRE em tempo real", "Startups needing live P&L")],
  },
  {
    slug: "infrastructure",
    code: "IAAS",
    name: L("Servidores IaaS", "IaaS Servers"),
    title: L("Servidores as a Service para empresas e revendas", "Servers as a Service for companies and resellers"),
    tagline: L("Bare metal e VMs em nossos racks HCL, prontos para revender com a sua marca.", "Bare metal and VMs on our HCL racks, ready to resell under your brand."),
    short: L("Bare metal e VMs white-label nos nossos racks.", "White-label bare metal and VMs on our racks."),
    stats: [
      { v: "40 cores", l: L("por node", "per node") },
      { v: "10 GbE", l: L("uplink duplo", "dual uplink") },
      { v: "99,95%", l: L("SLA contratual", "contractual SLA") },
    ],
    features: [
      { t: L("Bare metal dedicado", "Dedicated bare metal"), d: L("Hardware exclusivo com NVMe RAID e memória ECC.", "Exclusive hardware with NVMe RAID and ECC memory.") },
      { t: L("Revenda white-label", "White-label resale"), d: L("Outras marcas vendem nossa infraestrutura como se fosse delas.", "Other brands sell our infrastructure as their own.") },
      { t: L("Rede e IPs", "Network & IPs"), d: L("Blocos de IP dedicados, anti-DDoS e VLANs privadas.", "Dedicated IP blocks, anti-DDoS and private VLANs.") },
      { t: L("Provisionamento por API", "API provisioning"), d: L("Suba máquinas por painel, API ou Terraform.", "Launch machines via panel, API or Terraform.") },
    ],
    specs: ["128 GB DDR5 ECC", "4 TB NVMe RAID", "2× 20-core CPUs", "IPMI remoto", "Terraform + API REST"],
    useCases: [L("Provedores que revendem cloud", "Providers reselling cloud"), L("Cargas de IA e GPU", "AI and GPU workloads"), L("Empresas saindo da nuvem pública", "Companies leaving public cloud")],
  },
  {
    slug: "ai",
    code: "AI",
    name: L("Fine-tuning de IA", "AI Fine-tuning"),
    title: L("IA especializada, treinada com os dados da sua empresa", "Specialized AI, trained on your company's data"),
    tagline: L("Modelos ajustados ao seu domínio, hospedados na nossa infraestrutura, com seus dados privados.", "Models tuned to your domain, hosted on our infrastructure, with your data kept private."),
    short: L("Modelos ajustados ao seu setor, em GPU dedicada.", "Domain-tuned models on dedicated GPUs."),
    stats: [
      { v: "LoRA", l: L("e fine-tuning completo", "and full fine-tuning") },
      { v: "Privado", l: L("dados nunca saem", "data never leaves") },
      { v: "API", l: L("compatível OpenAI", "OpenAI-compatible") },
    ],
    features: [
      { t: L("Curadoria de dados", "Data curation"), d: L("Limpamos e estruturamos seus documentos, tickets e bases.", "We clean and structure your docs, tickets and databases.") },
      { t: L("Treino em GPU dedicada", "Dedicated GPU training"), d: L("Execução isolada nos nossos servidores.", "Isolated runs on our own servers.") },
      { t: L("Avaliação contínua", "Continuous evaluation"), d: L("Benchmarks do seu negócio antes de ir para produção.", "Business-specific benchmarks before production.") },
      { t: L("Agentes e RAG", "Agents & RAG"), d: L("Conecte o modelo aos seus sistemas internos.", "Connect the model to your internal systems.") },
    ],
    specs: ["LoRA / QLoRA", "RAG + vector DB", "OpenAI-compatible API", "On-prem opcional", "LGPD"],
    useCases: [L("Atendimento jurídico e financeiro", "Legal and finance support"), L("Copilotos para vendas", "Sales copilots"), L("Análise de documentos", "Document analysis")],
  },
  {
    slug: "automation",
    code: "BOT",
    name: L("Automação & Scraping", "Automation & Scraping"),
    title: L("Automação de navegador e coleta de dados em escala", "Browser automation and data collection at scale"),
    tagline: L("Navegação humanizada guiada por IA, bots de processo e automação de redes sociais para marcas.", "AI-guided human-like browsing, process bots and social media automation for brands."),
    short: L("Scraping resiliente, bots de processo e social.", "Resilient scraping, process bots and social."),
    stats: [
      { v: "IA", l: L("movimento humanizado", "human-like motion") },
      { v: "Proxies", l: L("residenciais rotativos", "rotating residential") },
      { v: "24/7", l: L("execução gerenciada", "managed execution") },
    ],
    features: [
      { t: L("Scraping resiliente", "Resilient scraping"), d: L("Navegadores reais com cursor movido por IA para sites com proteções modernas.", "Real browsers with an AI-driven cursor for sites with modern protections.") },
      { t: L("Bots de processo (RPA)", "Process bots (RPA)"), d: L("Automatize portais, ERPs e tarefas repetitivas.", "Automate portals, ERPs and repetitive tasks.") },
      { t: L("Automação para Instagram", "Instagram automation"), d: L("Agendamento, respostas e crescimento de perfil para marcas.", "Scheduling, replies and profile growth for brands.") },
      { t: L("Entrega de dados", "Data delivery"), d: L("Resultados via API, webhook, Kafka ou planilha.", "Results via API, webhook, Kafka or spreadsheet.") },
    ],
    specs: ["Headless Chromium", "AI cursor engine", "Proxy pool", "Cron + webhooks", "Kafka sink"],
    useCases: [L("Monitoramento de preços", "Price monitoring"), L("Geração de leads B2B", "B2B lead generation"), L("Automação de backoffice", "Back-office automation")],
  },
  {
    slug: "cloud",
    code: "CLOUD",
    name: L("Cloud & Azure", "Cloud & Azure"),
    title: L("Administração de cloud e integração com Azure", "Cloud administration and Azure integration"),
    tagline: L("Nosso time opera, protege e otimiza sua nuvem enquanto o seu time entrega produto.", "Our team runs, secures and optimizes your cloud while your team ships product."),
    short: L("Operação gerenciada de Azure e nuvem híbrida.", "Managed Azure and hybrid cloud ops."),
    stats: [
      { v: "-30%", l: L("meta de redução de custo", "cost reduction target") },
      { v: "24/7", l: L("NOC e plantão", "NOC and on-call") },
      { v: "Híbrido", l: L("Azure + racks HCL", "Azure + HCL racks") },
    ],
    features: [
      { t: L("Integração com Azure", "Azure integration"), d: L("Entra ID, AKS, Functions e DevOps conectados aos seus sistemas.", "Entra ID, AKS, Functions and DevOps connected to your systems.") },
      { t: L("FinOps", "FinOps"), d: L("Revisão contínua de custos e rightsizing.", "Continuous cost review and rightsizing.") },
      { t: L("Segurança e compliance", "Security & compliance"), d: L("Políticas, backups e LGPD.", "Policies, backups and LGPD.") },
      { t: L("Nuvem híbrida", "Hybrid cloud"), d: L("Combine Azure com nossos servidores dedicados.", "Combine Azure with our dedicated servers.") },
    ],
    specs: ["Azure AKS", "Entra ID", "Azure DevOps", "Terraform / Bicep", "Grafana"],
    useCases: [L("Migração para a nuvem", "Cloud migration"), L("Operação gerenciada", "Managed operations"), L("Redução de custos", "Cost reduction")],
  },
];

export const getProduct = (slug: ProductSlug) => products.find((p) => p.slug === slug)!;
