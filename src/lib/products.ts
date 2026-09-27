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
    name: L("Geode Payments", "Geode Payments"),
    title: L("Motor financeiro corporativo pronto para plugar", "Corporate financial engine ready to plug in"),
    tagline: L("Licencie nosso gateway. Ele funciona como a infraestrutura da Stripe ou Adyen, mas encarroçado com a sua marca e direto na sua conta.", "License our gateway. It works like Stripe or Adyen's infrastructure, but white-labeled with your brand directly into your account."),
    short: L("Motor de pagamentos white-label pronto.", "Ready white-label payment engine."),
    stats: [
      { v: "Plug & Play", l: L("API única", "single API") },
      { v: "D+0", l: L("conciliação automática", "auto reconciliation") },
      { v: "100%", l: L("white-label", "white-label") },
    ],
    features: [
      { t: L("Arquitetura modelo Stripe", "Stripe-like architecture"), d: L("O sistema já existe. Você integra uma única API e passa a aceitar Pix, cartões e split exatamente como os gigantes do mercado.", "The system already exists. You integrate a single API and start accepting Pix, cards, and splits just like the market giants.") },
      { t: L("Split de Recebíveis nativo", "Native Receivables Split"), d: L("Funciona como o motor do iFood: o cliente paga, e o Geode Payments divide automaticamente o dinheiro entre você e seus parceiros.", "Works like an Uber/iFood engine: the client pays, and Geode Payments automatically splits the funds between you and your partners.") },
      { t: L("Faturamento e Recorrência", "Billing and Recurrence"), d: L("Módulo pronto para gerenciar assinaturas B2B, emissão de faturas e cobrança inteligente de inadimplentes.", "Ready-made module to manage B2B subscriptions, invoicing, and smart dunning for defaulters.") },
      { t: L("Ledger de Conciliação", "Reconciliation Ledger"), d: L("O dinheiro entrou no banco? O sistema dá baixa no ERP automaticamente, sem intervenção humana.", "Money hit the bank? The system automatically reconciles it in the ERP, with zero human intervention.") },
    ],
    specs: ["REST + Webhooks", "Idempotency keys", "PCI-ready vault", "Smart Routing", "Multi-adquirente"],
    useCases: [L("Bancos digitais e Fintechs", "Digital banks and Fintechs"), L("Marketplaces complexos", "Complex marketplaces"), L("SaaS B2B de alto volume", "High-volume B2B SaaS")],
  },
  {
    slug: "messaging",
    code: "MSG",
    name: L("Geode Stream", "Geode Stream"),
    title: L("Integrador de Alta Latência (Kafka & RabbitMQ)", "High-Latency Integrator (Kafka & RabbitMQ)"),
    tagline: L("O ecossistema já está montado. Plugue seus sistemas legados ao nosso hub de mensageria e garanta que nenhum dado se perca no processo.", "The ecosystem is already built. Plug your legacy systems into our messaging hub and ensure zero data loss."),
    short: L("Integrador Kafka/RabbitMQ pré-configurado.", "Pre-configured Kafka/RabbitMQ integrator."),
    stats: [
      { v: "Zero", l: L("perda de dados", "data loss") },
      { v: "Pronto", l: L("cluster gerenciado", "managed cluster") },
      { v: "2M msg/s", l: L("capacidade de fila", "queue capacity") },
    ],
    features: [
      { t: L("Hub Kafka Pronto para Uso", "Ready-to-Use Kafka Hub"), d: L("Opera como o sistema nervoso central do Uber: todos os seus sistemas se comunicam simultaneamente sem sobrecarregar o banco de dados principal.", "Acts as the central nervous system (like Uber's): all your systems communicate simultaneously without overloading the main database.") },
      { t: L("RabbitMQ Integrado", "Integrated RabbitMQ"), d: L("Sistema de filas maduro já instanciado. Ideal para garantir que e-mails, processos pesados e rotinas noturnas sejam executados na ordem exata.", "Mature queue system already instantiated. Ideal for ensuring emails, heavy processes, and nightly routines run in exact order.") },
      { t: L("Camada Omnichannel Inclusa", "Included Omnichannel Layer"), d: L("O integrador já vem com conectores prontos para disparar eventos no WhatsApp Business, SMS e E-mail automaticamente.", "The integrator comes with ready-made connectors to fire events via WhatsApp Business, SMS, and Email automatically.") },
      { t: L("Painel de Observabilidade", "Observability Dashboard"), d: L("Fornecemos o monitoramento visual completo. Veja o tráfego dos seus dados em tempo real com alertas de gargalos.", "We provide full visual monitoring. Watch your data traffic in real-time with bottleneck alerts.") },
    ],
    specs: ["Apache Kafka 3.x", "RabbitMQ 3.13", "TLS + SASL/SCRAM", "Dead Letter Queues", "Grafana Dashboards"],
    useCases: [L("Sincronização de ERPs legados", "Legacy ERP synchronization"), L("Microsserviços de E-commerce", "E-commerce microservices"), L("Transações financeiras críticas", "Critical financial transactions")],
  },
  {
    slug: "accounting",
    code: "ACC",
    name: L("Geode Ledger", "Geode Ledger"),
    title: L("Sistema Contábil Corporativo e ERP White-label", "Corporate Accounting System and White-label ERP"),
    tagline: L("Licencie um motor contábil do nível de um SAP ou Oracle NetSuite, mas desenhado exclusivamente para a interface e lógica da sua corporação.", "License an accounting engine on the level of SAP or Oracle NetSuite, but designed exclusively for your corporation's UI and logic."),
    short: L("ERP e Motor Fiscal personalizado.", "Custom ERP and Tax Engine."),
    stats: [
      { v: "Fiscal", l: L("motor tributário nativo", "native tax engine") },
      { v: "Real-time", l: L("DRE e fluxo de caixa", "P&L and cash flow") },
      { v: "SPED", l: L("geração automatizada", "automated generation") },
    ],
    features: [
      { t: L("Fundação ERP Robusta", "Robust ERP Foundation"), d: L("Não comece um sistema do zero. Licencie nossa base madura que já entende plano de contas, balancetes e centros de custo perfeitamente.", "Don't start a system from scratch. License our mature base that already perfectly understands charts of accounts, trial balances, and cost centers.") },
      { t: L("Motor de Nota Fiscal Automático", "Automatic Invoice Engine"), d: L("Integração direta com prefeituras e SEFAZ. Funciona nos bastidores emitindo notas assim que o pagamento é aprovado.", "Direct integration with tax authorities. Works behind the scenes issuing invoices as soon as payment is approved.") },
      { t: L("Folha e Departamento Pessoal", "Payroll & HR"), d: L("Módulo corporativo para cálculo de impostos, eSocial e holerites, personalizável para regras sindicais específicas.", "Corporate module for tax calculation, eSocial, and payslips, customizable for specific union rules.") },
      { t: L("Consolidação Multi-CNPJ", "Multi-Entity Consolidation"), d: L("Holding com várias filiais? O sistema consolida as informações fiscais de todas as empresas do grupo em um único dashboard D+0.", "Holding with multiple branches? The system consolidates tax info for all group companies into a single live dashboard.") },
    ],
    specs: ["NF-e / NFS-e Automáticas", "Geração de SPED", "Integração eSocial", "Contabilidade D+0", "Compliance Bacen"],
    useCases: [L("Holdings e Grupos Empresariais", "Holdings and Corporate Groups"), L("Franquias Multi-lojas", "Multi-store Franchises"), L("BPOs e Escritórios de Contabilidade", "BPOs and Accounting Firms")],
  },
  {
    slug: "infrastructure",
    code: "IAAS",
    name: L("Geode Datacenter", "Geode Datacenter"),
    title: L("Servidores Bare Metal em Datacenter Privado", "Bare Metal Servers in Private Datacenter"),
    tagline: L("Fuja dos custos imprevisíveis da nuvem. Hospedamos seus sistemas nos nossos próprios racks, garantindo hardware físico exclusivo para a sua operação.", "Escape unpredictable cloud costs. We host your systems on our own racks, guaranteeing exclusive physical hardware for your operation."),
    short: L("Datacenter próprio, Bare metal e VMs.", "Owned datacenter, Bare metal, and VMs."),
    stats: [
      { v: "Físico", l: L("servidores bare metal", "bare metal servers") },
      { v: "Zero", l: L("custo surpresa", "surprise costs") },
      { v: "Uplink", l: L("10 GbE duplo", "dual 10 GbE uplink") },
    ],
    features: [
      { t: L("Performance AWS, Controle On-Premise", "AWS Performance, On-Premise Control"), d: L("Oferecemos a mesma robustez de um 'Dedicated Host' da AWS, mas o equipamento é nosso. Isso significa previsibilidade financeira absoluta no fim do mês.", "We offer the same robustness as an AWS 'Dedicated Host', but we own the gear. This means absolute financial predictability at month's end.") },
      { t: L("Bare Metal Dedicado", "Dedicated Bare Metal"), d: L("O servidor físico é 100% da sua empresa. Sem compartilhamento de processamento ou memória com vizinhos ruidosos.", "The physical server is 100% your company's. No CPU or memory sharing with noisy neighbors.") },
      { t: L("Virtualização Corporativa (VMs)", "Enterprise Virtualization (VMs)"), d: L("Fatiamos nossa infraestrutura para criar Máquinas Virtuais (VMs) de alta performance, caso você queira revender cloud com a sua própria marca.", "We slice our infra to create high-performance VMs, in case you want to resell cloud computing under your own brand.") },
      { t: L("Infraestrutura como Código (IaC)", "Infrastructure as Code (IaC)"), d: L("Nossos servidores são orquestrados via Terraform (HCL). Você não aperta botões, você gerencia a infraestrutura através de código seguro.", "Our servers are orchestrated via Terraform (HCL). You don't click buttons; you manage infra through secure code.") },
    ],
    specs: ["DDR5 ECC RAM", "Clusterização NVMe RAID", "Processadores Intel/AMD Enterprise", "IPMI remoto", "Refrigeração Dedicada"],
    useCases: [L("Sistemas de missão crítica", "Mission-critical systems"), L("Treinamento de Inteligência Artificial", "AI Model Training"), L("Provedores de Software B2B", "B2B Software Providers")],
  },
  {
    slug: "ai",
    code: "AI",
    name: L("Geode AI Core", "Geode AI Core"),
    title: L("Modelos Privados de IA (Corporate Fine-Tuning)", "Private AI Models (Corporate Fine-Tuning)"),
    tagline: L("Licencie motores de IA que funcionam como o ChatGPT, mas treinados exclusivamente com o conhecimento da sua empresa e rodando isolados nos nossos servidores.", "License AI engines that work like ChatGPT, but trained exclusively on your company's knowledge and running isolated on our servers."),
    short: L("Sua própria IA corporativa isolada.", "Your own isolated corporate AI."),
    stats: [
      { v: "Privado", l: L("dados não saem da empresa", "data stays in-house") },
      { v: "Custom", l: L("treinado com seu PDF/ERP", "trained on your PDF/ERP") },
      { v: "API", l: L("integração plug & play", "plug & play integration") },
    ],
    features: [
      { t: L("O Seu Próprio ChatGPT", "Your Own ChatGPT"), d: L("Fornecemos o modelo fundacional e injetamos toda a base de conhecimento (manuais, tickets, contratos) da sua corporação dentro dele.", "We provide the foundational model and inject your corporation's entire knowledge base (manuals, tickets, contracts) into it.") },
      { t: L("Isolamento Físico de Dados (LGPD)", "Physical Data Isolation (GDPR)"), d: L("Diferente da OpenAI, seus dados comerciais nunca vão para a internet. O modelo roda encapsulado nos nossos servidores Bare Metal.", "Unlike OpenAI, your trade secrets never hit the public web. The model runs encapsulated on our Bare Metal servers.") },
      { t: L("Fine-Tuning Especializado", "Specialized Fine-Tuning"), d: L("Ajustamos os pesos neurais para que a IA fale o jargão do seu negócio, seja jurídico, contábil ou engenharia industrial.", "We adjust neural weights so the AI speaks your industry's jargon, whether legal, accounting, or industrial engineering.") },
      { t: L("RAG e Agentes Autônomos", "RAG & Autonomous Agents"), d: L("A IA não apenas responde, ela executa. Conectamos o modelo ao Geode Stream para que a IA possa disparar ações no seu sistema real.", "The AI doesn't just reply, it acts. We connect the model to Geode Stream so the AI can trigger actions in your real system.") },
    ],
    specs: ["Llama 3 / Mistral Base", "Arquitetura RAG + Vector DB", "Treinamento em GPU H100/A100", "Compatível com API OpenAI", "Certificação LGPD"],
    useCases: [L("Análise massiva de contratos jurídicos", "Massive legal contract analysis"), L("Copiloto corporativo para vendas", "Corporate sales copilot"), L("Triagem autônoma de suporte técnico", "Autonomous IT support triage")],
  },
  {
    slug: "automation",
    code: "BOT",
    name: L("Geode Autobot", "Geode Autobot"),
    title: L("Scraping Avançado e Robôs de Processo (RPA)", "Advanced Scraping and Process Bots (RPA)"),
    tagline: L("Implante funcionários virtuais que trabalham 24/7. Eles navegam na web, quebram captchas e automatizam tarefas operacionais no seu ERP exatamente como um humano faria.", "Deploy virtual employees working 24/7. They browse the web, solve captchas, and automate operational tasks in your ERP exactly as a human would."),
    short: L("Robôs corporativos anti-bloqueio.", "Anti-block corporate robots."),
    stats: [
      { v: "24/7", l: L("operação ininterrupta", "uninterrupted operation") },
      { v: "Anti-Bot", l: L("by-pass de proteções", "protection bypass") },
      { v: "Escala", l: L("milhões de acessos", "millions of requests") },
    ],
    features: [
      { t: L("Scraping Inteligente (Fuga de Captchas)", "Intelligent Scraping (Captcha Bypass)"), d: L("Nossos robôs simulam movimentos humanos de mouse, possuem fingerprints validados e rotacionam IPs para extrair dados de sites blindados sem serem bloqueados.", "Our bots simulate human mouse movements, use valid fingerprints, and rotate IPs to extract data from shielded sites without getting blocked.") },
      { t: L("RPA (Automação de Backoffice)", "RPA (Backoffice Automation)"), d: L("Tem um sistema do governo ou ERP sem API? Nossos robôs logam, clicam, baixam planilhas e sobem no seu banco de dados automaticamente.", "Have a legacy government portal or ERP without an API? Our bots log in, click, download sheets, and push to your DB automatically.") },
      { t: L("Inteligência Competitiva", "Competitive Intelligence"), d: L("Configure robôs para monitorar os preços da concorrência, extrair catálogos de e-commerce e abastecer seu pipeline de vendas diário.", "Set up bots to monitor competitor pricing, scrape e-commerce catalogs, and feed your daily sales pipeline.") },
      { t: L("Automação de Redes Sociais", "Social Media Automation"), d: L("Gerenciamento automatizado de interações (Instagram/LinkedIn) em escala, gerando engajamento e aquisição de leads sem esforço manual.", "Automated interaction management (Instagram/LinkedIn) at scale, driving engagement and lead acquisition without manual effort.") },
    ],
    specs: ["Headless Puppeteer/Playwright", "Residential Proxy Networks", "Bypass de Cloudflare/Akamai", "OCR e Visão Computacional", "Integração direta com Kafka"],
    useCases: [L("Coleta massiva de preços concorrentes", "Massive competitor price scraping"), L("Alimentação de banco de dados imobiliário", "Real estate database population"), L("Lançamento de notas fiscais legado", "Legacy invoice data entry")],
  },
  {
    slug: "cloud",
    code: "CLOUD",
    name: L("Geode Cloud Ops", "Geode Cloud Ops"),
    title: L("Governança Híbrida e Gestão de Azure", "Hybrid Governance and Azure Management"),
    tagline: L("Terceirize a dor de cabeça da nuvem. Atuamos como a sua equipe Sênior de Engenharia de Confiabilidade (SRE), operando seu Microsoft Azure e orquestrando infraestruturas híbridas.", "Outsource the cloud headache. We act as your Senior Site Reliability Engineering (SRE) team, operating your Microsoft Azure and orchestrating hybrid infrastructures."),
    short: L("Gestão SRE de nuvem Azure e Híbrida.", "SRE management for Azure and Hybrid."),
    stats: [
      { v: "SRE", l: L("Engenharia de Confiabilidade", "Reliability Engineering") },
      { v: "Híbrido", l: L("Azure + Geode Datacenter", "Azure + Geode Datacenter") },
      { v: "FinOps", l: L("Otimização de custos", "Cost optimization") },
    ],
    features: [
      { t: L("Operação SRE (Padrão Google)", "SRE Operations (Google Standard)"), d: L("Seu time foca em programar o produto. Nós monitoramos o tráfego, garantimos que a nuvem escale nos horários de pico e não deixe o site cair.", "Your team focuses on coding the product. We monitor traffic, ensure the cloud scales during peak hours, and prevent downtime.") },
      { t: L("Integração Azure Native", "Azure Native Integration"), d: L("Somos especialistas no ecossistema Microsoft. Orquestramos seu Entra ID (AD), AKS (Kubernetes) e Pipelines de DevOps com maestria.", "We are experts in the Microsoft ecosystem. We orchestrate your Entra ID (AD), AKS (Kubernetes), and DevOps Pipelines with mastery.") },
      { t: L("FinOps (Redução de Custos)", "FinOps (Cost Reduction)"), d: L("A nuvem é uma torneira aberta de dinheiro. Aplicamos engenharia financeira para desligar máquinas ociosas e otimizar rotas, reduzindo sua fatura no final do mês.", "The cloud is an open money tap. We apply financial engineering to shut down idle machines and optimize routes, slashing your monthly bill.") },
      { t: L("Arquitetura Híbrida Blindada", "Shielded Hybrid Architecture"), d: L("Conecte a segurança e a escala do Azure Cloud diretamente aos servidores físicos Bare Metal da Geode, unindo o melhor dos dois mundos.", "Connect the security and scale of Azure Cloud directly to Geode's physical Bare Metal servers, blending the best of both worlds.") },
    ],
    specs: ["Azure Kubernetes Service (AKS)", "Azure DevOps CI/CD", "Orquestração Terraform", "Monitoramento Grafana 24/7", "Auditoria de Segurança (SOC2)"],
    useCases: [L("Refatoração de infraestrutura legada", "Legacy infrastructure refactoring"), L("Empresas com fatura alta na nuvem", "Companies with high cloud bills"), L("Operações críticas de Black Friday", "Critical Black Friday operations")],
  },
];

export const getProduct = (slug: ProductSlug) => products.find((p) => p.slug === slug)!;