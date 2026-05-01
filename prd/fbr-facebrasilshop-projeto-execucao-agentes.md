# FBR FacebrasilShop Projeto de Execucao para Equipe de Agentes

Status: Plano de execucao operacional
Data: 22/04/2026
Contexto temporal: o prazo alvo original do projeto era 10/04/2026; como esta data ja passou, este documento define um plano de recuperacao e delegacao para equipe de agentes virtuais
Escopo: apenas sistemas FBR deste repositorio
Documento base: `prd/fbr-facebrasilshop-prd.md`

## 1. Objetivo do Projeto de Execucao

Este documento existe para permitir delegacao do projeto para uma equipe de LLMs de baixo custo sem perda relevante de qualidade de execucao.

Para isso, cada task deve:

- ter objetivo binario e verificavel
- apontar para arquivos e artefatos exatos
- ter ownership claro
- limitar escopo com `NAO FAZER`
- definir entregaveis concretos
- definir como documentar a execucao e o handoff

## 2. Principios de execucao para LLMs de baixo custo

- nenhum agente recebe contexto aberto do projeto inteiro se uma secao menor resolver
- toda task deve caber em uma unica responsabilidade tecnica
- toda task deve ter entrada, saida, criterio de done e casos de borda
- toda task deve ser executavel sem inferencia arquitetural adicional
- todo handoff deve citar arquivos alterados, comportamento esperado, riscos e pendencias
- nenhum agente junior pode decidir mudanca de contrato, schema ou arquitetura sem aprovacao do Senior responsavel
- nenhum merge ou conclusao de task acontece sem revisao do Revisor

## 3. Estrutura da equipe

### 3.1 Composicao

- 1 Coordenacao Geral
- 1 Revisor
- 2 Devs Senior
- 4 Devs Junior

### 3.2 Papeis formais

PAPEL: Coordenacao Geral
RESPONSABILIDADE:
- controlar backlog, sequenciamento e prioridades
- quebrar tarefas para os agentes
- garantir que cada agente receba contexto minimo suficiente
- consolidar status, bloqueios e decisao de escopo
- validar se cada entrega respeita o documento base
NAO FAZ:
- nao implementa mudancas profundas enquanto coordena o fluxo

PAPEL: Revisor
RESPONSABILIDADE:
- revisar qualidade tecnica, regressao, risco e aderencia ao PRD
- validar documentacao de handoff
- aprovar ou rejeitar entregas com justificativa binaria
- garantir que tasks fechadas tenham evidencia concreta
NAO FAZ:
- nao redefine produto ou arquitetura sozinho

PAPEL: Dev Senior Frontend
RESPONSABILIDADE:
- ownership da trilha Blue Sprint
- definir contratos de props e fronteiras de componentes
- quebrar tasks frontend para Juniors FE
- absorver tarefas de maior ambiguidade visual ou estrutural
NAO FAZ:
- nao aprova sozinho alteracoes de backend ou banco

PAPEL: Dev Senior Backend
RESPONSABILIDADE:
- ownership da trilha Gray Sprint
- definir contratos de API, tipos e schema
- quebrar tasks backend para Juniors BE
- absorver tarefas de maior ambiguidade estrutural e de dados
NAO FAZ:
- nao aprova sozinho alteracoes visuais amplas

PAPEL: Dev Junior
RESPONSABILIDADE:
- executar tasks pequenas, fechadas e com output objetivo
- documentar exatamente o que mudou
- escalar bloqueios cedo
- nunca assumir requisitos nao escritos
NAO FAZ:
- nao muda contrato, schema ou arquitetura por conta propria

## 4. Mapa de ownership da equipe

- Coordenacao Geral: backlog mestre, sequenciamento e handoff entre frentes
- Revisor: gate final de todas as tasks
- Senior 1: frente Frontend
- Senior 2: frente Backend
- Junior 1: frontend institucional
- Junior 2: frontend commerce components
- Junior 3: backend tracking e endpoint
- Junior 4: backend schema, types e documentacao tecnica

## 5. Protocolo de delegacao

### 5.1 Pacote minimo que toda task deve receber

Cada task delegada a uma LLM de baixo custo deve conter exatamente estes blocos:

```text
TASK ID:
OWNER:
OBJETIVO:
ARQUIVOS DE ENTRADA:
ARQUIVOS DE SAIDA:
CONTRATO A RESPEITAR:
ENTREGAVEIS:
COMO DOCUMENTAR:
CRITERIO DE DONE:
NAO FAZER:
```

### 5.2 Formato obrigatorio de resposta do agente executor

```text
STATUS: [DONE | BLOCKED | REVIEW]
ARQUIVOS ALTERADOS:
- <path>

O QUE FOI FEITO:
- <mudanca binaria>

VALIDACAO EXECUTADA:
- <teste, leitura, verificacao>

RISCOS OU PENDENCIAS:
- <se houver>

DOCUMENTACAO GERADA/ATUALIZADA:
- <path ou N/A>
```

### 5.3 Regra de qualidade do handoff

- se a task alterou codigo, deve citar paths exatos
- se a task alterou comportamento, deve descrever antes e depois
- se a task nao foi concluida, o bloqueio deve apontar causa objetiva
- se a task criou duvida de produto, ela volta para Coordenacao Geral

## 6. Regras de documentacao por task

Toda task deve gerar documentacao proporcional ao impacto.

### 6.1 Quando a task altera codigo

Documentar:

- arquivo alterado
- objetivo da alteracao
- contrato afetado
- comportamento esperado
- validacao feita

### 6.2 Quando a task altera contrato ou schema

Documentar:

- motivacao
- shape antigo versus shape novo
- impacto no frontend ou backend
- dependencia criada
- riscos

### 6.3 Quando a task e apenas exploratoria ou de revisao

Documentar:

- achados objetivos
- riscos confirmados
- recomendacao binaria
- proxima task sugerida

## 7. Fluxo operacional da equipe

### 7.1 Coordenacao Geral

1. seleciona o batch ativo
2. envia contexto minimo ao Senior dono da frente
3. Senior subdivide e distribui tasks aos Juniors
4. Junior entrega pacote de handoff
5. Senior faz triagem tecnica
6. Revisor aprova ou devolve
7. Coordenacao atualiza backlog mestre

### 7.2 Regra de escalonamento

- duvida de layout ou composicao: Junior FE -> Senior Frontend
- duvida de contrato, schema ou rota: Junior BE -> Senior Backend
- conflito entre frentes: Senior -> Coordenacao Geral
- risco de regressao, seguranca ou ambiguidade de aceite: qualquer papel -> Revisor

## 8. Batches de execucao

BATCH: EXE-1 - Governanca e preparacao de execucao
DIAS: 22/04/2026-22/04/2026
PARALELO_COM: N/A
OBJETIVO_ALGORITMICO: transformar PRD em fila executavel para equipe multiagente

PRE-REQUISITOS:
- `prd/fbr-facebrasilshop-prd.md` existente

ESCOPO:
- definir papeis
- definir ownership
- definir formato de task e handoff

FORA DE ESCOPO:
- implementacao de produto

CRITERIOS DE DONE DO BATCH:
- [ ] equipe e ownership definidos
- [ ] modelo de task para LLM barata definido
- [ ] fluxo de revisao definido

BATCH: EXE-2 - Blue Sprint operacional
DIAS: 22/04/2026-24/04/2026
PARALELO_COM: EXE-3
OBJETIVO_ALGORITMICO: executar frontend institucional e componentes de commerce

PRE-REQUISITOS:
- ownership frontend definido

ESCOPO:
- landing
- identidade visual
- header/footer
- demo
- componentes de commerce

FORA DE ESCOPO:
- integracao completa com dados reais se bloquear fechamento visual

CRITERIOS DE DONE DO BATCH:
- [ ] home e demo coerentes
- [ ] componentes preparados para dados reais
- [ ] validacao visual registrada

BATCH: EXE-3 - Gray Sprint operacional
DIAS: 22/04/2026-24/04/2026
PARALELO_COM: EXE-2
OBJETIVO_ALGORITMICO: executar base tecnica de catalogo, tracking e contrato de dados

PRE-REQUISITOS:
- ownership backend definido

ESCOPO:
- schema
- tracking API
- tipagem
- contrato de leitura publica
- documentacao tecnica

FORA DE ESCOPO:
- features futuras fora do MVP FBR

CRITERIOS DE DONE DO BATCH:
- [ ] schema e rota de tracking revisados
- [ ] contrato de dados definido
- [ ] documentacao tecnica consolidada

BATCH: EXE-4 - Revisao e fechamento
DIAS: 24/04/2026-25/04/2026
PARALELO_COM: N/A
OBJETIVO_ALGORITMICO: validar entregas, remover ambiguidades e congelar escopo

PRE-REQUISITOS:
- entregas dos batches 2 e 3

ESCOPO:
- revisao cruzada
- consolidacao de pendencias
- encerramento de sprint

FORA DE ESCOPO:
- iniciar novo escopo

CRITERIOS DE DONE DO BATCH:
- [ ] todas as tasks executadas foram revisadas
- [ ] backlog residual foi separado do done
- [ ] pacote final de status foi consolidado

## 9. Distribuicao da equipe por frente

### Frente A - Frontend

- Senior 1: lider tecnico da frente
- Junior 1: home, secoes institucionais e navegacao
- Junior 2: componentes de commerce e pagina demo

### Frente B - Backend

- Senior 2: lider tecnico da frente
- Junior 3: rota de tracking, validacoes e erros
- Junior 4: migration, tipos e contrato de catalogo

### Frente C - Controle e qualidade

- Coordenacao Geral: fila, prioridade, dependencias e handoffs
- Revisor: gate final de qualidade e aceite

## 10. Matriz de tasks por papel

TASK: EXE-01 - Construir backlog mestre da execucao
BATCH: EXE-1
DOMINIO: Agente
ESTIMATIVA: 2h
DEPENDE DE: N/A
OWNER: Coordenacao Geral
OBJETIVO:
Transformar o PRD base em fila executavel para os 8 agentes.
ENTREGAVEIS:
- mapa de tasks ativas
- dependencias entre tasks
- definicao de owners
COMO DOCUMENTAR:
- atualizar este documento ou documento mestre de execucao com status por task
CRITERIO DE DONE:
- [ ] cada task tem owner primario
- [ ] dependencias estao explicitas
- [ ] nao existem tasks sem fronteira tecnica
NAO FAZER:
- nao escrever implementacao de produto nesta task

TASK: EXE-02 - Definir criterio de aceite e checklist de review
BATCH: EXE-1
DOMINIO: Teste
ESTIMATIVA: 2h
DEPENDE DE: TASK EXE-01
OWNER: Revisor
OBJETIVO:
Criar checklist unico de aprovacao para que as entregas dos agentes sejam avaliadas de forma consistente.
ENTREGAVEIS:
- checklist de review
- criterios de rejeicao
- padrao de parecer final
COMO DOCUMENTAR:
- registrar checklist neste documento e citar evidencias exigidas
CRITERIO DE DONE:
- [ ] existe regra clara para aprovar, devolver ou bloquear
- [ ] frontend, backend e docs possuem criterios separados
- [ ] checklist e reutilizavel por LLM barata
NAO FAZER:
- nao redesenhar backlog

TASK: EXE-03 - Liderar trilha frontend e quebrar tasks dos Juniors FE
BATCH: EXE-2
DOMINIO: Frontend
ESTIMATIVA: 3h
DEPENDE DE: TASK EXE-01
OWNER: Senior 1
OBJETIVO:
Traduzir a Blue Sprint em tasks pequenas, sem ambiguidade e com fronteira de ownership entre Junior 1 e Junior 2.
ENTREGAVEIS:
- cards de task para Junior 1
- cards de task para Junior 2
- definicao de revisao tecnica da frente
COMO DOCUMENTAR:
- gerar cards de task com arquivos de entrada, saida e criterio de done
CRITERIO DE DONE:
- [ ] tasks frontend cabem em execucao previsivel
- [ ] sobreposicao entre Juniors foi eliminada
- [ ] riscos de composicao foram explicitados
NAO FAZER:
- nao assumir ownership de backend

TASK: EXE-04 - Liderar trilha backend e quebrar tasks dos Juniors BE
BATCH: EXE-3
DOMINIO: Backend
ESTIMATIVA: 3h
DEPENDE DE: TASK EXE-01
OWNER: Senior 2
OBJETIVO:
Traduzir a Gray Sprint em tasks pequenas e seguras para Junior 3 e Junior 4.
ENTREGAVEIS:
- cards de task backend
- definicao de contratos que nao podem ser violados
- plano de integracao com frontend
COMO DOCUMENTAR:
- gerar cards de task com contrato, entregavel e `NAO FAZER`
CRITERIO DE DONE:
- [ ] tasks backend possuem fronteira clara
- [ ] schema, rota e tipagem tem ownership definido
- [ ] riscos de integracao ficaram explicitos
NAO FAZER:
- nao redesenhar o produto

TASK: EXE-05 - Implementar revisao da home, secoes e navegacao
BATCH: EXE-2
DOMINIO: Frontend
ESTIMATIVA: 4h
DEPENDE DE: TASK EXE-03
OWNER: Junior 1
OBJETIVO:
Fechar a experiencia institucional da home, header e footer.
ENTREGAVEIS:
- atualizacoes em `src/app/page.tsx`
- atualizacoes em `src/components/layout/*`
- ajustes nas secoes institucionais afetadas
COMO DOCUMENTAR:
- listar paths alterados
- descrever ordem final da narrativa
- informar validacao visual executada
CRITERIO DE DONE:
- [ ] home comunica conceito, funcionamento e parceria
- [ ] header e footer ficam coerentes
- [ ] nenhuma navegacao critica fica vazia
NAO FAZER:
- nao alterar contratos de backend

TASK: EXE-06 - Implementar componentes de commerce e pagina demo
BATCH: EXE-2
DOMINIO: Frontend
ESTIMATIVA: 4h
DEPENDE DE: TASK EXE-03
OWNER: Junior 2
OBJETIVO:
Fechar `ProductCard`, `ReviewBox`, `ComparisonTable` e `/demo` para showcase interno.
ENTREGAVEIS:
- atualizacoes em `src/components/commerce/*`
- atualizacoes em `src/app/demo/page.tsx`
- tratamento de estados incompletos
COMO DOCUMENTAR:
- citar props tratadas
- listar edge cases cobertos
- informar se CTA ja esta pronto para usar tracking
CRITERIO DE DONE:
- [ ] demo apresenta todos os blocos
- [ ] estados sem imagem/rating nao quebram layout
- [ ] componentes ficam aptos para consumo de dados reais
NAO FAZER:
- nao fazer fetch real do Supabase sem alinhamento do Senior

TASK: EXE-07 - Implementar endurecimento da rota de tracking
BATCH: EXE-3
DOMINIO: Backend
ESTIMATIVA: 4h
DEPENDE DE: TASK EXE-04
OWNER: Junior 3
OBJETIVO:
Fechar a rota `/api/track` com validacao previsivel e comportamento claro em falha.
ENTREGAVEIS:
- atualizacoes em `src/app/api/track/route.ts`
- definicao de comportamento para `400`, `404` e falha de insert
COMO DOCUMENTAR:
- registrar fluxos validos e invalidos
- listar respostas de erro
- informar decisao sobre redirect em falha analitica
CRITERIO DE DONE:
- [ ] `pid` ausente responde `400`
- [ ] produto ausente responde `404`
- [ ] comportamento do redirect esta definido e verificavel
NAO FAZER:
- nao criar sistema completo de auth ou rate limit

TASK: EXE-08 - Revisar schema, tipos e contrato de catalogo
BATCH: EXE-3
DOMINIO: Database
ESTIMATIVA: 4h
DEPENDE DE: TASK EXE-04
OWNER: Junior 4
OBJETIVO:
Alinhar migration, tipagem e shape minimo de dados consumidos pelo frontend.
ENTREGAVEIS:
- revisao de `supabase/migrations/20260212_initial_commerce_schema.sql`
- revisao de `src/types/supabase.ts`
- definicao do contrato `PublicCatalogRead`
COMO DOCUMENTAR:
- registrar shape minimo de `Product`, `Partner`, `Category` e `Click`
- listar inconsistencias encontradas
- apontar impacto na UI
CRITERIO DE DONE:
- [ ] schema minimo do commerce esta coerente
- [ ] tipos usados pelo app sao rastreaveis
- [ ] contrato de leitura publica esta definido
NAO FAZER:
- nao expandir escopo para features futuras

TASK: EXE-09 - Consolidar revisao tecnica da frente frontend
BATCH: EXE-2
DOMINIO: Frontend
ESTIMATIVA: 2h
DEPENDE DE: TASK EXE-05, TASK EXE-06
OWNER: Senior 1
OBJETIVO:
Revisar entregas dos Juniors FE e garantir que a frente frontend possa seguir para gate final.
ENTREGAVEIS:
- parecer tecnico da frente
- lista de ajustes ou aprovacao
COMO DOCUMENTAR:
- registrar achados por path
- marcar `APPROVED` ou `RETURN`
CRITERIO DE DONE:
- [ ] entregas FE foram revisadas
- [ ] ajustes necessarios ficaram objetivos
- [ ] frente FE esta pronta para o Revisor
NAO FAZER:
- nao absorver bugs backend nesta task

TASK: EXE-10 - Consolidar revisao tecnica da frente backend
BATCH: EXE-3
DOMINIO: Backend
ESTIMATIVA: 2h
DEPENDE DE: TASK EXE-07, TASK EXE-08
OWNER: Senior 2
OBJETIVO:
Revisar entregas dos Juniors BE e garantir consistencia de contrato e schema.
ENTREGAVEIS:
- parecer tecnico da frente backend
- lista de ajustes ou aprovacao
COMO DOCUMENTAR:
- registrar achados por contrato, arquivo e risco
- marcar `APPROVED` ou `RETURN`
CRITERIO DE DONE:
- [ ] entregas BE foram revisadas
- [ ] integracao com frontend foi checada
- [ ] frente BE esta pronta para o Revisor
NAO FAZER:
- nao abrir nova arquitetura de dados

TASK: EXE-11 - Gate final de qualidade e aceite
BATCH: EXE-4
DOMINIO: Teste
ESTIMATIVA: 3h
DEPENDE DE: TASK EXE-09, TASK EXE-10
OWNER: Revisor
OBJETIVO:
Aplicar o checklist unico de review e decidir o aceite final de cada entrega.
ENTREGAVEIS:
- parecer final por task
- lista de rework
- pacote de aceite ou bloqueio
COMO DOCUMENTAR:
- registrar findings por severidade
- apontar status final por task
- indicar o que entra e o que nao entra no done
CRITERIO DE DONE:
- [ ] todas as tasks tem status final
- [ ] riscos remanescentes ficaram explicitos
- [ ] nenhuma entrega sem evidencia foi aceita
NAO FAZER:
- nao assumir implementacao corretiva longa nesta task

TASK: EXE-12 - Fechar pacote final de execucao
BATCH: EXE-4
DOMINIO: Agente
ESTIMATIVA: 2h
DEPENDE DE: TASK EXE-11
OWNER: Coordenacao Geral
OBJETIVO:
Consolidar resultado da operacao multiagente e congelar backlog residual.
ENTREGAVEIS:
- resumo final por frente
- backlog residual separado
- status consolidado do projeto
COMO DOCUMENTAR:
- atualizar o documento de execucao com `DONE`, `BLOCKED` e `NEXT`
- citar dependencias abertas
CRITERIO DE DONE:
- [ ] status final do projeto esta consolidado
- [ ] backlog residual esta separado do concluido
- [ ] equipe sabe a proxima acao sem nova interpretacao
NAO FAZER:
- nao reabrir escopo fechado

## 11. Cards prontos para delegacao a LLMs baratas

### Card para Junior 1

```text
TASK ID: EXE-05
OWNER: Junior 1
OBJETIVO: Fechar a experiencia institucional da home, header e footer.
ARQUIVOS DE ENTRADA:
- src/app/page.tsx
- src/components/layout/Header.tsx
- src/components/layout/Footer.tsx
- src/components/sections/*
ARQUIVOS DE SAIDA:
- mesmos paths acima, se necessario
CONTRATO A RESPEITAR:
- a home deve comunicar conceito, funcionamento e parceria
- navegacao critica nao pode ficar vazia
ENTREGAVEIS:
- home coerente
- header/footer coerentes
- narrativa final da pagina
COMO DOCUMENTAR:
- liste arquivos alterados
- descreva a ordem final da narrativa
- informe validacao visual executada
CRITERIO DE DONE:
- home coerente
- header/footer coerentes
- nenhuma navegacao critica vazia
NAO FAZER:
- nao alterar backend
```

### Card para Junior 2

```text
TASK ID: EXE-06
OWNER: Junior 2
OBJETIVO: Fechar componentes de commerce e pagina demo para showcase interno.
ARQUIVOS DE ENTRADA:
- src/components/commerce/ProductCard.tsx
- src/components/commerce/ReviewBox.tsx
- src/components/commerce/ComparisonTable.tsx
- src/app/demo/page.tsx
ARQUIVOS DE SAIDA:
- mesmos paths acima, se necessario
CONTRATO A RESPEITAR:
- demo deve exibir todos os blocos
- estados incompletos nao podem quebrar layout
ENTREGAVEIS:
- componentes robustos
- demo organizada
- estados de borda tratados
COMO DOCUMENTAR:
- listar edge cases cobertos
- listar props tratadas
- informar se CTA esta pronto para tracking
CRITERIO DE DONE:
- demo funcional
- layout resiliente
- componentes aptos para dados reais
NAO FAZER:
- nao ligar fetch real sem aprovacao
```

### Card para Junior 3

```text
TASK ID: EXE-07
OWNER: Junior 3
OBJETIVO: Endurecer a rota /api/track com erros previsiveis e redirect claro.
ARQUIVOS DE ENTRADA:
- src/app/api/track/route.ts
- src/lib/supabase.ts
ARQUIVOS DE SAIDA:
- mesmos paths acima, se necessario
CONTRATO A RESPEITAR:
- pid ausente = 400
- produto ausente = 404
- redirect e insert precisam ter comportamento definido
ENTREGAVEIS:
- rota revisada
- erros claros
- decisao sobre falha analitica
COMO DOCUMENTAR:
- listar respostas por caso
- listar paths alterados
- informar validacao feita
CRITERIO DE DONE:
- 400 definido
- 404 definido
- redirect definido
NAO FAZER:
- nao criar auth completa
```

### Card para Junior 4

```text
TASK ID: EXE-08
OWNER: Junior 4
OBJETIVO: Alinhar schema, tipos e contrato de catalogo.
ARQUIVOS DE ENTRADA:
- supabase/migrations/20260212_initial_commerce_schema.sql
- src/types/supabase.ts
- prd/fbr-facebrasilshop-prd.md
ARQUIVOS DE SAIDA:
- mesmos paths acima, se necessario
CONTRATO A RESPEITAR:
- schema do commerce deve ser coerente
- tipos do app devem ser rastreaveis
- contrato PublicCatalogRead deve ficar explicito
ENTREGAVEIS:
- revisao de schema
- revisao de tipos
- shape minimo de catalogo
COMO DOCUMENTAR:
- listar inconsistencias
- registrar shape minimo das entidades
- apontar impacto na UI
CRITERIO DE DONE:
- schema coerente
- tipos rastreaveis
- contrato de leitura definido
NAO FAZER:
- nao ampliar escopo de produto
```

## 12. Checklist do Revisor

- a task respeitou exatamente o objetivo declarado
- os arquivos alterados batem com o ownership da task
- existe evidencia concreta de validacao
- nenhum contrato foi mudado por Junior sem aprovacao do Senior
- `NAO FAZER` foi respeitado
- a documentacao do handoff ficou suficiente para outro agente continuar
- o resultado pode ser consumido por uma LLM barata sem contexto adicional grande

## 13. Definicao de sucesso da operacao multiagente

Esta operacao sera considerada bem-sucedida quando:

- a equipe estiver organizada com ownership inequívoco
- cada papel tiver tasks compatíveis com seu nivel de decisao
- Juniors conseguirem executar com contexto minimo e output verificavel
- Seniors fizerem somente trabalho de ambiguidade alta e revisao tecnica da frente
- o Revisor operar como gate binario de qualidade
- a Coordenacao Geral conseguir redistribuir o trabalho sem reexplicar o projeto inteiro
