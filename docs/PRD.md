# Product Requirements Document (PRD) — FaceStore
**Versão:** 1.0  
**Data:** 12 de Fevereiro de 2026  
**Status:** Planejamento  

---

## 1. Resumo Executivo
A **FaceStore** é a evolução natural da Facebrasil, transformando 16 anos de autoridade editorial em um ecossistema de *editorial commerce*. O objetivo é monetizar a influência da marca conectando leitores com alta intenção de compra aos produtos de parceiros verificados. Diferente de um marketplace tradicional, a FaceStore vende através da **confiança**: cada produto é apresentado dentro de um contexto jornalístico, validado por especialistas e integrado organicamente à leitura.

**A Missão:** Tornar-se o "Wirecutter" da comunidade brasileira, onde a recomendação da Facebrasil é o fator decisivo para a compra.

---

## 2. Personas e Dores

| Persona | Quem é | Dor Principal | Solução FaceStore |
|---|---|---|---|
| **O Leitor** | Brasileiro, 30-55 anos, busca qualidade e validação. | "Não sei em quem confiar online. Reviews parecem falsos ou comprados." | Curadoria editorial com selo de verificação e reviews aprofundados. |
| **O Parceiro (Marca)** | Empresa buscando visibilidade e vendas reais. | "Anúncios tradicionais estão caros e influencers não trazem ROI claro." | Contexto editorial que gera conversão qualificada + Dashboard de ROI transparente. |
| **O Editor** | Jornalista da Facebrasil. | "Preciso monetizar meu conteúdo sem perder a integridade jornalística." | Ferramentas que integram produtos ao texto de forma natural e ética. |

---

## 3. Roadmap de Desenvolvimento

O projeto será dividido em 4 fases estratégicas para validar o modelo rapidamente e escalar com tecnologia.

### Fase 1: Fundação (MVP) — "O Ciclo da Confiança"
**Foco:** Lançar a plataforma, validar modelos de parceria e gerar as primeiras vendas manuais.
*   **Frontend Next.js:** Landing page institucional (concluído) e templates de artigos "Shoppable".
*   **CMS Headless:** Gestão de conteúdo editorial integrado com dados de produtos.
*   **Blocos de Produto:** Componentes UI (`ProductCard`, `ReviewBox`, `ComparisonTable`) para inserir produtos em artigos.
*   **Tracking Básico:** Uso de UTMs e links de afiliados manuais (Amazon, Hotmart).
*   **Catálogo Manual:** Cadastro simples de produtos parceiros no Supabase.

### Fase 2: Plataforma de Parceiros — "Transparência Total"
**Foco:** Automatização e entrega de valor para o anunciante.
*   **Portal do Parceiro:** Dashboard onde o anunciante vê cliques, visualizações e estimativa de conversão em tempo real.
*   **Gestão de Links:** Sistema para gerenciar e rotacionar links de afiliados centralizadamente.
*   **Newsletter Commerce:** Módulo para gerar newsletters com produtos curados automaticamente.
*   **Geração de Leads:** Captura de e-mail integrada a reviews ("Avise-me quando baixar o preço").

### Fase 3: Inteligência e Escala — "Automagic"
**Foco:** Aumentar o LTV e reduzir esforço operacional.
*   **AI Contextual Matching:** Algoritmo que lê artigos antigos e novos e sugere produtos do catálogo que se encaixam no contexto.
*   **Verificação de Preços:** Crawler que atualiza preços e disponibilidade dos produtos parceiros diariamente.
*   **Gamificação:** Sistema de badges para leitores ("Expert", "Reviewer Verificado").

### Fase 4: Ecossistema — "A Experiência Completa"
**Foco:** Inovação de formato e transação.
*   **Video Commerce:** Players de vídeo estilo "TikTok" integrados aos artigos, com produtos clicáveis sobre o vídeo.
*   **Checkout Nativo (Moonshot):** Integração de pagamento direta na página para produtos selecionados, sem redirect.
*   **App FaceStore:** Experiência mobile-first focada em ofertas relâmpago e curadoria.

---

## 4. Recursos Inovadores (Selling Points)
*Para vender o conceito a Parceiros e Investidores.*

### 🚀 1. O "Context Engine" (Motor de Contexto)
Diferente do Google Ads, que interrompe, a FaceStore **contextualiza**.
*   **O Recurso:** Um sistema que insere o produto *exatamente* no parágrafo que fala sobre a dor que ele resolve.
*   **Argumento de Venda:** "Seu produto não é um banner no topo da página que ninguém vê. Ele é a resposta que o leitor procura no meio do texto."

### 📊 2. Dashboard de "Influência Comprovada"
A maioria dos influencers entrega "alcance". Nós entregamos "intenção".
*   **O Recurso:** Painel em tempo real mostrando: Leitura do Artigo -> Clique no Produto -> Tempo na Loja.
*   **Argumento de Venda:** "Pare de pagar por likes. Pague por clientes qualificados que leram 5 minutos sobre seu produto antes de clicar."

### 🛡️ 3. Selo de Confiança Blockchain (Conceito)
Auditabilidade da reputação.
*   **O Recurso:** Um selo digital único para parceiros que mantêm nota alta em reviews e atendimento, potencialmente registrado de forma imutável.
*   **Argumento de Venda:** "O Selo Facebrasil não é comprado, é conquistado. Ter isso no seu site aumenta a conversão de todo o seu tráfego, não só o que vem de nós."

### 🎥 4. "Shop the Look" em Vídeo
A união do editorial com o viral.
*   **O Recurso:** Vídeos curtos onde cada peça de roupa ou objeto em cena é clicável.
*   **Argumento de Venda:** "Transforme a inspiração visual em compra imediata com a tecnologia de vídeo interativo da FaceStore."

---

## 5. Requisitos Técnicos

### Stack Tecnológica
*   **Frontend:** Next.js 15 (App Router), React, Tailwind CSS v4, Framer Motion.
*   **Backend/Dados:** Supabase (PostgreSQL, Auth, Realtime).
*   **Analytics:** PostHog ou Supabase Analytics para tracking granular.
*   **CMS:** Integração com CMS existente (WordPress?) ou Headless (Sanity/Strapi) - *A definir*.

### Integrações Necessárias
1.  **APIs de Afiliados:** Amazon Associates API, Hotmart API, Rakuten.
2.  **Gateways de Pagamento (Fase 4):** Stripe / Pagar.me.
3.  **E-mail Marketing:** Integração com ferramenta de disparo para Newsletter Commerce.

---

## 6. Critérios de Sucesso (KPIs)
*   **Curto Prazo (3 meses):** Lançamento do MVP, 10 Parceiros Âncora cadastrados, 50 artigos "sualizados" (com produtos).
*   **Médio Prazo (6 meses):** R$ 50k em GMV (Gross Merchandise Value) gerado para parceiros.
*   **Longo Prazo (12 meses):** 500 parceiros ativos, sistema de IA rodando, 20% da receita da Facebrasil vinda de Commerce.
