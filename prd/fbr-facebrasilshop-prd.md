# FBR FacebrasilShop PRD Unificado

Status: Planejamento executivo
Data base: 08/04/2026
Prazo final alvo: 10/04/2026
Escopo deste documento: apenas sistemas FBR

## 1. Premissas de contexto

- Este documento foi derivado do conceito em `docs/conceito.md`, do PRD prévio em `docs/PRD.md` e da estrutura atual do repositório.
- Não foram encontrados no workspace os arquivos canônicos citados pelo fluxo FBR (`fbr-arquitetura.md`, `securitycoderules.md` e `DESIGN_STANDARDS.md`).
- Como consequência, as invariantes abaixo foram inferidas a partir do código existente em `src/`, `src/app/api/track`, `src/lib/supabase.ts`, `src/types/supabase.ts` e `supabase/migrations/`.
- Neste ciclo vamos focar somente no ecossistema FBR do projeto FacebrasilShop, sem expandir para integrações externas profundas além do necessário para tracking e catálogo.

## 2. Conceito FBR do sistema

SISTEMA: FBR FacebrasilShop
PROPOSITO: converter autoridade editorial da Facebrasil em receita rastreável por meio de experiências de editorial commerce
TIPO: Hub Central
CANAL FBR-CLICK: N/A
OWNER: Produto FBR + Engenharia FBR

### 2.1 Objetivo de negócio

O sistema deve permitir que a Facebrasil publique uma experiência de commerce editorial em que:

- leitores descubram produtos dentro de conteúdo com contexto e confiança
- parceiros exponham produtos e recebam tráfego qualificado
- o time FBR rastreie cliques, valide catálogo e evolua para operação escalável

### 2.2 Proposta operacional do MVP até 10/04/2026

- consolidar a landing e a demonstração de commerce como vitrine coerente
- estabilizar o fluxo de catálogo e tracking já iniciado com Supabase
- preparar base técnica para artigos compráveis, cards de produto, blocos comparativos e analytics mínimos
- fechar o projeto com backlog priorizado em duas frentes paralelas: frontend e backend/demais partes

## 3. Documento de algoritmo

### 3.1 Entidades centrais

ENTIDADE: Partner
ATRIBUTOS OBRIGATORIOS: `id: UUID`, `name: text`
ATRIBUTOS OPCIONAIS: `logo_url?: text`, `website_url?: text`, `status?: text`, `created_at?: timestamptz`
INVARIANTES:
- todo parceiro precisa possuir `name`
- `status` deve representar estado operacional válido
- parceiro não pode quebrar integridade referencial dos produtos
RELACIONAMENTOS:
- `Partner ->[1:N]-> Product` via `products.partner_id`
CICLO DE VIDA: `[CREATED -> ACTIVE -> INACTIVE]`

ENTIDADE: Category
ATRIBUTOS OBRIGATORIOS: `id: UUID`, `name: text`, `slug: text`
ATRIBUTOS OPCIONAIS: `created_at?: timestamptz`
INVARIANTES:
- `slug` é único
- categoria deve ser legível e usável em navegação e filtros
RELACIONAMENTOS:
- `Category ->[1:N]-> Product` via `products.category_id`
CICLO DE VIDA: `[CREATED -> ACTIVE -> ARCHIVED]`

ENTIDADE: Product
ATRIBUTOS OBRIGATORIOS: `id: UUID`, `name: text`, `affiliate_link: text`
ATRIBUTOS OPCIONAIS: `partner_id?: UUID`, `category_id?: UUID`, `description?: text`, `price?: decimal`, `image_url?: text`, `rating?: decimal`, `reviews_count?: integer`, `is_verified?: boolean`, `created_at?: timestamptz`
INVARIANTES:
- todo produto precisa ter `affiliate_link`
- produto exposto no frontend precisa ter nome, CTA e estado visual consistente
- produtos destacados como verificados devem possuir evidência editorial ou regra de negócio correspondente
RELACIONAMENTOS:
- `Product ->[N:1]-> Partner` via `partner_id`
- `Product ->[N:1]-> Category` via `category_id`
- `Product ->[1:N]-> Click` via `clicks.product_id`
CICLO DE VIDA: `[CREATED -> REVIEWABLE -> PUBLISHED -> RETIRED]`

ENTIDADE: Click
ATRIBUTOS OBRIGATORIOS: `id: UUID`, `product_id: UUID`
ATRIBUTOS OPCIONAIS: `article_slug?: text`, `user_agent?: text`, `created_at?: timestamptz`
INVARIANTES:
- clique deve sempre apontar para um produto válido
- clique não pode impedir o redirecionamento do usuário por falha secundária de analytics
- clique precisa ser armazenado com carimbo de tempo
RELACIONAMENTOS:
- `Click ->[N:1]-> Product` via `product_id`
CICLO DE VIDA: `[CAPTURED -> STORED]`

### 3.2 Fluxos algorítmicos

FLUXO: RenderizarLandingFacebrasilShop
TRIGGER: request HTTP para `/`
PRE-CONDICOES:
- aplicação Next.js operacional
- componentes de seção compilando sem erro
PASSOS:
1. renderizar `Header`
2. renderizar seções institucionais em ordem editorial
3. aplicar identidade visual global via `globals.css`
4. renderizar `CTA` final para parceiros e audiência
POS-CONDICOES:
- landing comunica proposta de valor e modelos de parceria
- navegação principal e rodapé aparecem de forma consistente
CASOS DE FALHA:
- se componente quebrar, a página não pode sair com layout inconsistente sem erro visível em desenvolvimento
INVARIANTES DE SEGURANCA:
- nenhum secret exposto no HTML
- nenhuma chamada privilegiada deve acontecer no client sem necessidade

FLUXO: ExibirBlocosCommerceDemo
TRIGGER: request HTTP para `/demo`
PRE-CONDICOES:
- componentes `ProductCard`, `ReviewBox` e `ComparisonTable` disponíveis
- dataset de demonstração coerente
PASSOS:
1. carregar mock de produtos e parceiros
2. renderizar grid de cards
3. renderizar versão compacta dos cards
4. renderizar review box com prós e contras
5. renderizar tabela comparativa
POS-CONDICOES:
- equipe FBR consegue validar rapidamente os blocos de commerce
- demo serve como base visual para futura integração com conteúdo real
CASOS DE FALHA:
- se imagem externa falhar, componente deve degradar sem colapsar layout
INVARIANTES DE SEGURANCA:
- demo não deve depender de segredos
- links externos devem ser tratados como navegação controlada

FLUXO: RegistrarCliqueEAcionarRedirecionamento
TRIGGER: request HTTP para `/api/track?pid=<id>&slug=<slug>`
PRE-CONDICOES:
- `pid` recebido
- cliente Supabase inicializado
PASSOS:
1. ler `pid` e `slug` dos query params
2. validar presença de `pid`
3. buscar `affiliate_link` do produto em `products`
4. inserir registro em `clicks`
5. redirecionar para `affiliate_link`
POS-CONDICOES:
- clique válido gera evento analítico
- usuário é encaminhado ao destino afiliado
CASOS DE FALHA:
- se `pid` ausente, responder `400`
- se produto não existir, responder `404`
- se persistência do clique falhar, o sistema deve definir explicitamente se bloqueia ou não o redirect
INVARIANTES DE SEGURANCA:
- entrada deve ser validada antes de consultar banco
- rota não deve permitir abuso sem limite mínimo ou validação futura

FLUXO: GerirCatalogoBase
TRIGGER: operação de seed, admin manual ou integração futura
PRE-CONDICOES:
- schema Supabase aplicado
- tabelas `partners`, `categories` e `products` existentes
PASSOS:
1. criar ou atualizar parceiro
2. criar ou atualizar categoria
3. criar ou atualizar produto vinculado
4. disponibilizar produto para leitura pública
POS-CONDICOES:
- catálogo base pode ser exibido pelo frontend
- relação entre parceiro, categoria e produto permanece íntegra
CASOS DE FALHA:
- se `slug` de categoria duplicar, operação deve falhar
- se `affiliate_link` faltar, produto não deve ser publicado
INVARIANTES DE SEGURANCA:
- RLS habilitado nas tabelas aplicáveis
- escrita privilegiada não deve ficar aberta publicamente além do mínimo intencional

### 3.3 Contratos de interface

CONTRATO: TrackClickAPI
TIPO: REST
DIRECAO: Frontend Next.js -> Supabase -> Destino Afiliado
AUTENTICACAO: N/A no estado atual
PAYLOAD:
```json
{
  "pid": "uuid",
  "slug?": "string"
}
```
RESPOSTA_SUCESSO: `307/308` com redirecionamento para `affiliate_link`
RESPOSTA_ERRO: `400 { error }` ou `404 { error }`
IDEMPOTENTE: NAO
RATE_LIMIT: NAO - precisa entrar no backlog

CONTRATO: PublicCatalogRead
TIPO: REST / Supabase Query
DIRECAO: Frontend -> Supabase
AUTENTICACAO: leitura pública com RLS permissiva no estado atual
PAYLOAD:
```json
{
  "filters?": {
    "category": "string",
    "partner": "string"
  }
}
```
RESPOSTA_SUCESSO: lista de parceiros, categorias ou produtos
RESPOSTA_ERRO: erro padrão do Supabase client
IDEMPOTENTE: SIM
RATE_LIMIT: NAO

### 3.4 Invariantes globais

- todas as tabelas do domínio de commerce devem manter RLS habilitado
- nenhum secret pode ser hardcoded em componentes, rotas ou docs
- toda task deste ciclo deve apontar para path, contrato ou artefato verificável
- frontend deve consumir somente contratos explicitamente definidos
- toda resposta de erro de backend deve ser determinística e sem vazar detalhes sensíveis
- nenhum item marcado como concluído pode depender de decisão ainda não tomada
- tudo que ficar fora do prazo de `10/04/2026` deve permanecer explicitamente fora do escopo deste sprint

## 4. PRD Frontend

### 4.1 Objetivo do frontend

Entregar uma experiência institucional e comercial coerente, com linguagem editorial premium da Facebrasil e blocos de commerce prontos para conectar catálogo e conteúdo.

### 4.2 Escopo frontend deste sprint

- consolidar a landing institucional em `src/app/page.tsx`
- estabilizar identidade visual e tokens em `src/app/globals.css`
- revisar header, footer e seções para coerência de navegação e CTA
- amadurecer a página `src/app/demo/page.tsx` como showcase interno de blocos comerciais
- preparar componentes de commerce para dados reais vindos do backend em etapa seguinte

### 4.3 Requisitos funcionais frontend

- a home precisa comunicar claramente conceito, proposta de valor, funcionamento e modelos de parceria
- a demo precisa provar visualmente `ProductCard`, `ReviewBox` e `ComparisonTable`
- todos os CTAs principais devem possuir destino definido
- a UI deve suportar conteúdo editorial com estética premium e leitura confortável
- componentes precisam aceitar dados consistentes para futura substituição do mock por fetch real

### 4.4 Requisitos não funcionais frontend

- layout responsivo funcional em desktop e mobile
- consistência visual com paleta editorial já definida
- sem regressão de tipografia, espaçamento e contraste
- sem dependência de segredos ou lógica sensível no client

### 4.5 Critérios de aceite frontend

- home e demo renderizam sem erro
- componentes de commerce possuem estados consistentes
- navegação principal e rodapé estão coerentes
- estilos globais sustentam a identidade do produto sem conflitos óbvios

## 5. PRD Backend

### 5.1 Objetivo do backend

Entregar a base operacional de catálogo e tracking para que o frontend deixe de ser apenas conceitual e passe a possuir rastreabilidade e dados de commerce.

### 5.2 Escopo backend deste sprint

- consolidar schema Supabase do domínio commerce
- revisar o contrato da rota `src/app/api/track/route.ts`
- alinhar `src/lib/supabase.ts` com uso seguro e previsível
- verificar aderência do tipo `src/types/supabase.ts` ao domínio efetivamente usado
- preparar backlog imediato para catálogo real, leitura pública controlada e analytics mínimos

### 5.3 Requisitos funcionais backend

- parceiros, categorias, produtos e cliques devem existir como entidades persistidas
- tracking deve receber `pid`, resolver produto e redirecionar para o afiliado
- cliques devem ser armazenados com contexto mínimo
- o schema precisa suportar catálogo manual inicial

### 5.4 Requisitos não funcionais backend

- integridade referencial entre entidades
- RLS habilitado e políticas mínimas declaradas
- respostas previsíveis para erros de request
- sem acoplamento desnecessário entre UI e forma interna do banco

### 5.5 Critérios de aceite backend

- migration de commerce cobre entidades base
- rota de tracking responde corretamente para casos válidos e inválidos
- cliente Supabase funciona com ambiente configurado
- backlog de endurecimento de segurança e observabilidade fica explícito

## 6. Plano de sprints até 10/04/2026

### Blue Sprint

Definição: tudo que é relacionado ao frontend e vive majoritariamente em `src/app`, `src/components` e `src/app/globals.css`.
Janela: 08/04/2026 a 10/04/2026
Objetivo: fechar a camada visual e a experiência comercial institucional

### Gray Sprint

Definição: tudo que é relacionado à pasta backend e todas as demais partes e arquivos fora do frontend principal, com foco em `src/app/api`, `src/lib`, `src/types`, `supabase`, `docs`, config e validação estrutural.
Janela: 08/04/2026 a 10/04/2026
Objetivo: fechar base de dados, tracking e sustentação técnica do projeto

## 7. Tasklist única

## Blue Sprint

TASK: BLUE-01 - Revisar composição da home institucional
TAG: [FRONTEND]
BATCH: Blue Sprint
DOMINIO: Frontend
ESTIMATIVA: 3h
DEPENDE DE: N/A
OBJETIVO ALGORITMICO:
Implementar o fluxo `RenderizarLandingFacebrasilShop`.
INPUT:
- `src/app/page.tsx`
- `src/components/sections/*`
- `src/components/layout/*`
OUTPUT ESPERADO:
- home consolidada com ordem de narrativa editorial clara
ESPECIFICACAO TECNICA:
- validar ordem e presença de `Hero`, `Ticker`, `ValueProps`, `HowItWorks`, `PartnerModels`, `Innovation`, `VisualIdentity` e `CTA`
- remover redundâncias narrativas e alinhar CTAs
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- a home deve continuar renderizando integralmente
- nenhuma seção crítica pode perder contexto de negócio
CASOS DE BORDA OBRIGATORIOS:
- [ ] seção longa não quebra leitura em mobile
- [ ] CTA continua visível sem dependência de JS externo
- [ ] ausência futura de dados dinâmicos não inviabiliza layout base
CRITERIO DE DONE:
- [ ] ordem final da home está definida no código
- [ ] narrativa cobre proposta, funcionamento e parceria
- [ ] renderização da página permanece íntegra
NAO FAZER NESTA TASK:
- não integrar dados reais de catálogo

TASK: BLUE-02 - Endurecer identidade visual global
TAG: [FRONTEND]
BATCH: Blue Sprint
DOMINIO: Frontend
ESTIMATIVA: 3h
DEPENDE DE: TASK BLUE-01
OBJETIVO ALGORITMICO:
Fortalecer os requisitos não funcionais do frontend.
INPUT:
- `src/app/globals.css`
- `src/app/layout.tsx`
OUTPUT ESPERADO:
- tokens e comportamento visual global consistentes
ESPECIFICACAO TECNICA:
- revisar variáveis CSS, tipografia, textura, animações e comportamento base de body/html
- garantir que o sistema visual reflita o conceito editorial commerce
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- não remover suporte às fontes atuais
- manter compatibilidade com Tailwind v4
CASOS DE BORDA OBRIGATORIOS:
- [ ] contraste continua legível em seções claras e escuras
- [ ] overlay visual não bloqueia interação
- [ ] animações não prejudicam leitura inicial
CRITERIO DE DONE:
- [ ] tokens globais cobrem paleta e tipografia do produto
- [ ] não há regressão visual estrutural óbvia
- [ ] CSS global continua compilando normalmente
NAO FAZER NESTA TASK:
- não criar novo design system completo

TASK: BLUE-03 - Padronizar Header e Footer
TAG: [FRONTEND]
BATCH: Blue Sprint
DOMINIO: Frontend
ESTIMATIVA: 2h
DEPENDE DE: TASK BLUE-01
OBJETIVO ALGORITMICO:
Estabilizar moldura de navegação do produto.
INPUT:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
OUTPUT ESPERADO:
- navegação principal e rodapé consistentes com posicionamento do produto
ESPECIFICACAO TECNICA:
- revisar rótulos, links, hierarquia visual e coerência entre home e demo
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- header e footer devem funcionar nas páginas existentes
- navegação não pode apontar para destinos inexistentes sem sinalização
CASOS DE BORDA OBRIGATORIOS:
- [ ] header não colapsa em telas menores
- [ ] footer não perde contraste em fundo creme
- [ ] links externos ficam distinguíveis de internos
CRITERIO DE DONE:
- [ ] header e footer possuem conteúdo final do sprint
- [ ] experiência é consistente entre páginas
- [ ] não existem links vazios críticos
NAO FAZER NESTA TASK:
- não implementar CMS ou menu dinâmico

TASK: BLUE-04 - Preparar componentes de commerce para dados reais
TAG: [FRONTEND]
BATCH: Blue Sprint
DOMINIO: Frontend
ESTIMATIVA: 4h
DEPENDE DE: TASK BLUE-02
OBJETIVO ALGORITMICO:
Preparar o fluxo `ExibirBlocosCommerceDemo` para transição do mock para catálogo real.
INPUT:
- `src/components/commerce/ProductCard.tsx`
- `src/components/commerce/ReviewBox.tsx`
- `src/components/commerce/ComparisonTable.tsx`
- `src/app/demo/page.tsx`
OUTPUT ESPERADO:
- componentes com interface de props previsível e estado visual robusto
ESPECIFICACAO TECNICA:
- revisar contratos de props
- tratar ausência de imagem, rating ou partner
- alinhar CTA para uso do endpoint de tracking
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- demo deve continuar utilizável com mock
- componentes devem suportar produto verificado e não verificado
CASOS DE BORDA OBRIGATORIOS:
- [ ] produto sem imagem não quebra card
- [ ] produto sem rating mantém layout consistente
- [ ] tabela comparativa com lista curta continua legível
CRITERIO DE DONE:
- [ ] componentes aceitam dados mínimos do domínio `Product`
- [ ] estados incompletos estão tratados
- [ ] demo continua apresentando todos os blocos
NAO FAZER NESTA TASK:
- não buscar dados diretamente do Supabase ainda

TASK: BLUE-05 - Refinar página de demonstração interna
TAG: [FRONTEND]
BATCH: Blue Sprint
DOMINIO: Frontend
ESTIMATIVA: 2h
DEPENDE DE: TASK BLUE-04
OBJETIVO ALGORITMICO:
Transformar `/demo` em artefato interno de validação do sistema FBR.
INPUT:
- `src/app/demo/page.tsx`
OUTPUT ESPERADO:
- página de demo com narrativa, labels e organização prontos para revisão interna
ESPECIFICACAO TECNICA:
- ajustar títulos, microcopy, ordem dos blocos e coesão visual
- explicitar que a página demonstra blocos do commerce editorial
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- demo continua simples e rápida de validar
- não introduzir dependência em auth
CASOS DE BORDA OBRIGATORIOS:
- [ ] conteúdo textual continua compreensível sem contexto oral
- [ ] grid se ajusta em mobile
- [ ] links de demonstração não criam navegação quebrada
CRITERIO DE DONE:
- [ ] `/demo` comunica claramente seu propósito
- [ ] os blocos aparecem em ordem validável
- [ ] revisão interna consegue usar a página como showcase
NAO FAZER NESTA TASK:
- não transformar a demo em página pública final de parceiros

TASK: BLUE-06 - Checklist final de frontend
TAG: [FRONTEND]
BATCH: Blue Sprint
DOMINIO: Teste
ESTIMATIVA: 2h
DEPENDE DE: TASK BLUE-03, TASK BLUE-05
OBJETIVO ALGORITMICO:
Validar critérios de aceite do frontend.
INPUT:
- home
- demo
- componentes e estilos globais
OUTPUT ESPERADO:
- evidência binária de que o sprint visual fechou
ESPECIFICACAO TECNICA:
- revisar renderização, responsividade básica, consistência visual e integridade de navegação
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- teste deve refletir o código final do sprint
- nenhuma validação deve mascarar bug conhecido
CASOS DE BORDA OBRIGATORIOS:
- [ ] home carrega sem erro
- [ ] demo carrega sem erro
- [ ] interação básica permanece funcional
CRITERIO DE DONE:
- [ ] critérios de aceite do frontend foram revisados contra o código
- [ ] pendências restantes foram explicitadas no backlog
- [ ] Blue Sprint pode ser marcado como fechado
NAO FAZER NESTA TASK:
- não abrir novo escopo visual

## Gray Sprint

TASK: GRAY-01 - Revisar schema Supabase do commerce
TAG: [BACKEND]
BATCH: Gray Sprint
DOMINIO: Database
ESTIMATIVA: 3h
DEPENDE DE: N/A
OBJETIVO ALGORITMICO:
Consolidar o fluxo `GerirCatalogoBase`.
INPUT:
- `supabase/migrations/20260212_initial_commerce_schema.sql`
OUTPUT ESPERADO:
- schema alinhado ao domínio atual de parceiros, categorias, produtos e cliques
ESPECIFICACAO TECNICA:
- revisar chaves, tipos, defaults, restrições e políticas RLS já definidas
- identificar lacunas para catálogo e analytics mínimos
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- RLS permanece habilitado
- integridade referencial continua explícita
CASOS DE BORDA OBRIGATORIOS:
- [ ] produto sem parceiro continua permitido apenas se for decisão explícita
- [ ] categoria duplicada por slug falha
- [ ] clique órfão não é possível
CRITERIO DE DONE:
- [ ] migration representa o domínio mínimo do sprint
- [ ] lacunas relevantes foram listadas
- [ ] banco está pronto para catálogo manual inicial
NAO FAZER NESTA TASK:
- não expandir para checkout nativo

TASK: GRAY-02 - Endurecer contrato da rota de tracking
TAG: [BACKEND]
BATCH: Gray Sprint
DOMINIO: Backend
ESTIMATIVA: 4h
DEPENDE DE: TASK GRAY-01
OBJETIVO ALGORITMICO:
Consolidar o fluxo `RegistrarCliqueEAcionarRedirecionamento`.
INPUT:
- `src/app/api/track/route.ts`
- `src/lib/supabase.ts`
OUTPUT ESPERADO:
- rota com validação explícita, erros previsíveis e decisão clara sobre persistência versus redirect
ESPECIFICACAO TECNICA:
- validar query params
- revisar busca do produto
- tratar falha de insert em `clicks`
- definir estratégia segura de redirecionamento
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- request inválida retorna erro determinístico
- request válida redireciona para link existente
CASOS DE BORDA OBRIGATORIOS:
- [ ] `pid` ausente retorna 400
- [ ] `pid` inexistente retorna 404
- [ ] falha no insert não deixa comportamento ambíguo
CRITERIO DE DONE:
- [ ] rota cobre casos válidos e inválidos definidos
- [ ] comportamento em falha analítica está documentado no código ou PRD
- [ ] integração com Supabase está consistente
NAO FAZER NESTA TASK:
- não introduzir autenticação completa de admin

TASK: GRAY-03 - Alinhar cliente Supabase e tipagem do domínio
TAG: [BACKEND]
BATCH: Gray Sprint
DOMINIO: Backend
ESTIMATIVA: 3h
DEPENDE DE: TASK GRAY-01
OBJETIVO ALGORITMICO:
Reduzir inconsistência entre schema efetivo e tipagens usadas.
INPUT:
- `src/lib/supabase.ts`
- `src/types/supabase.ts`
OUTPUT ESPERADO:
- cliente e tipos coerentes com o domínio de commerce usado neste projeto
ESPECIFICACAO TECNICA:
- verificar se a tipagem atual representa o banco deste repositório
- definir estratégia para tipos de `products`, `partners`, `categories` e `clicks`
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- inicialização do client continua simples
- o domínio de commerce não fica dependente de tipos irrelevantes
CASOS DE BORDA OBRIGATORIOS:
- [ ] ambiente ausente falha de forma identificável
- [ ] tipos não induzem campos inexistentes
- [ ] consumo futuro por componentes de frontend fica viável
CRITERIO DE DONE:
- [ ] o domínio usado pelo app possui tipagem rastreável
- [ ] não há ambiguidade crítica entre migration e tipos
- [ ] base está pronta para fetch real em etapa seguinte
NAO FAZER NESTA TASK:
- não tipar módulos de outros sistemas fora do escopo FBR deste app

TASK: GRAY-04 - Definir contrato de leitura pública do catálogo
TAG: [BACKEND]
BATCH: Gray Sprint
DOMINIO: Integracao
ESTIMATIVA: 3h
DEPENDE DE: TASK GRAY-03
OBJETIVO ALGORITMICO:
Preparar o backend para alimentar os componentes de commerce.
INPUT:
- schema Supabase
- componentes de commerce
OUTPUT ESPERADO:
- contrato explícito para leitura de produtos, parceiros e categorias
ESPECIFICACAO TECNICA:
- documentar shape mínimo dos dados que o frontend precisa
- definir se a leitura virá direto do Supabase client ou por rota intermediária
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- contrato deve ser minimalista e suficiente
- leitura pública não pode expor dado administrativo desnecessário
CASOS DE BORDA OBRIGATORIOS:
- [ ] produto sem rating continua serializável
- [ ] produto sem partner não quebra contrato
- [ ] ausência de categoria não impede listagem básica
CRITERIO DE DONE:
- [ ] contrato de catálogo está explicitado
- [ ] frontend consegue apontar para shape único de produto
- [ ] risco de acoplamento indevido foi reduzido
NAO FAZER NESTA TASK:
- não implementar engine de matching inteligente

TASK: GRAY-05 - Organizar documentação operacional FBR
TAG: [BACKEND]
BATCH: Gray Sprint
DOMINIO: Integracao
ESTIMATIVA: 2h
DEPENDE DE: TASK GRAY-02, TASK GRAY-04
OBJETIVO ALGORITMICO:
Fechar a lacuna entre conceito, produto e implementação.
INPUT:
- `docs/conceito.md`
- `docs/PRD.md`
- `prd/fbr-facebrasilshop-prd.md`
OUTPUT ESPERADO:
- documentação operacional unificada para execução do sprint
ESPECIFICACAO TECNICA:
- consolidar premissas, escopo atual, entidades, fluxos e backlog
- garantir que o time execute o projeto olhando um único artefato principal
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- o PRD unificado deve permanecer aderente ao repositório
- não misturar iniciativas fora do escopo FBR
CASOS DE BORDA OBRIGATORIOS:
- [ ] ausência dos docs canônicos FBR fica registrada
- [ ] prazo final fica explícito no documento
- [ ] fronteira entre Blue e Gray Sprint fica inequívoca
CRITERIO DE DONE:
- [ ] documento único existe e cobre conceito, frontend, backend e tasklist
- [ ] time consegue usar o arquivo como fonte principal
- [ ] pendências fora de escopo ficaram demarcadas
NAO FAZER NESTA TASK:
- não produzir documentação paralela concorrente

TASK: GRAY-06 - Checklist final de backend e estrutura
TAG: [BACKEND]
BATCH: Gray Sprint
DOMINIO: Teste
ESTIMATIVA: 2h
DEPENDE DE: TASK GRAY-01, TASK GRAY-05
OBJETIVO ALGORITMICO:
Validar critérios de aceite técnicos do sprint.
INPUT:
- migration
- rota `/api/track`
- cliente Supabase
- documentação final
OUTPUT ESPERADO:
- confirmação binária de que a base técnica fecha até 10/04/2026
ESPECIFICACAO TECNICA:
- revisar entidade, contrato, invariantes e pendências de segurança/escala
INVARIANTES QUE ESTA TASK DEVE RESPEITAR:
- nenhuma pendência crítica pode ficar implícita
- riscos devem ser registrados com clareza
CASOS DE BORDA OBRIGATORIOS:
- [ ] contrato de tracking permanece consistente
- [ ] schema continua compatível com leitura pública planejada
- [ ] backlog fora do sprint está explicitamente fora do done
CRITERIO DE DONE:
- [ ] critérios de aceite do backend foram revisados
- [ ] riscos remanescentes estão explícitos
- [ ] Gray Sprint pode ser marcado como fechado
NAO FAZER NESTA TASK:
- não abrir nova fase arquitetural

## 8. Priorização por data

### 08/04/2026

- iniciar `BLUE-01`, `BLUE-02`, `GRAY-01` e `GRAY-05`
- fechar definição final do escopo de entrega

### 09/04/2026

- executar `BLUE-03`, `BLUE-04`, `GRAY-02`, `GRAY-03` e `GRAY-04`
- reduzir ambiguidades entre UI, contrato e banco

### 10/04/2026

- executar `BLUE-05`, `BLUE-06` e `GRAY-06`
- validar entrega final e congelar escopo

## 9. Fora de escopo deste fechamento

- portal completo do parceiro
- CMS headless integrado
- newsletter commerce automatizada
- matching inteligente por IA
- atualização automática de preços
- checkout nativo
- video commerce
- aplicativo mobile

## 10. Definição de sucesso até 10/04/2026

O projeto estará considerado fechado neste ciclo quando:

- existir um artefato único de PRD e execução para o sistema FBR
- a frente visual estiver organizada sob a Blue Sprint com tasks concluíveis
- a frente técnica estiver organizada sob a Gray Sprint com tasks concluíveis
- o domínio mínimo de catálogo e tracking estiver claramente definido
- todo o time conseguir distinguir o que pertence ao frontend e o que pertence ao backend/demais partes
