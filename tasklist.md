# 📋 TASKLIST - FaceBrasil Store

**E-commerce premium integrado ao FaceBrasil**

---

## 🔴 CRÍTICO (MVP Funcional)

### Setup e Foundation
- [ ] **TASK-001** - Inicializar projeto Vite + React + TypeScript | `medium`
- [ ] **TASK-002** - Configurar Tailwind CSS com design tokens | `medium`
- [ ] **TASK-003** - Estrutura de pastas (components, pages, lib) | `small`
- [ ] **TASK-004** - Configurar Supabase client | `small`
- [ ] **TASK-005** - Configurar Zustand (state management) | `small`

### Landing Page (Migração)
- [ ] **TASK-006** - Componentizar Hero section | `large`
- [ ] **TASK-007** - Componentizar Navigation | `medium`
- [ ] **TASK-008** - Componentizar Footer | `medium`
- [ ] **TASK-009** - Componentizar Features/Benefits | `medium`
- [ ] **TASK-010** - Componentizar Ticker/Rolagem | `small`
- [ ] **TASK-011** - Componentizar Magazine Mock | `medium`
- [ ] **TASK-012** - Componentizar CTA sections | `medium`
- [ ] **TASK-013** - Componentizar Modelos de Parceria | `medium`
- [ ] **TASK-014** - Responsividade mobile | `large`
- [ ] **TASK-015** - Animações com Framer Motion | `large`

### Autenticação
- [ ] **TASK-016** - Setup Supabase Auth | `medium`
- [ ] **TASK-017** - Componente Login | `medium`
- [ ] **TASK-018** - Componente Cadastro | `medium`
- [ ] **TASK-019** - Componente Recuperar Senha | `small`
- [ ] **TASK-020** - Proteger rotas (RequireAuth) | `small`
- [ ] **TASK-021** - Perfil de usuário | `medium`

---

## 🟠 IMPORTANTE (Funcionalidades Core)

### Catálogo de Produtos
- [ ] **TASK-022** - Migration: tabela products | `small`
- [ ] **TASK-023** - Migration: tabela categories | `small`
- [ ] **TASK-024** - Migration: tabela product_images | `small`
- [ ] **TASK-025** - API: GET /products (listar) | `medium`
- [ ] **TASK-026** - API: GET /products/:id (detalhe) | `medium`
- [ ] **TASK-027** - Componente ProductCard | `medium`
- [ ] **TASK-028** - Componente ProductGrid | `medium`
- [ ] **TASK-029** - Página: Catálogo (/loja) | `large`
- [ ] **TASK-030** - Página: Produto (/produto/:slug) | `large`
- [ ] **TASK-031** - Filtros por categoria | `medium`
- [ ] **TASK-032** - Busca de produtos | `medium`
- [ ] **TASK-033** - Sort (preço, relevância) | `small`

### Carrinho de Compras
- [ ] **TASK-034** - Store: cartStore (Zustand) | `medium`
- [ ] **TASK-035** - Componente CartIcon | `small`
- [ ] **TASK-036** - Componente CartDrawer | `medium`
- [ ] **TASK-037** - Componente CartItem | `medium`
- [ ] **TASK-038** - Hooks: useCart | `small`
- [ ] **TASK-039** - LocalStorage persistence | `small`

### Checkout
- [ ] **TASK-040** - Migration: tabela orders | `small`
- [ ] **TASK-041** - Migration: tabela order_items | `small`
- [ ] **TASK-042** - API: POST /orders (criar) | `medium`
- [ ] **TASK-043** - API: POST /checkout/stripe-session | `medium`
- [ ] **TASK-044** - Componente CheckoutForm | `large`
- [ ] **TASK-045** - Componente AddressForm | `medium`
- [ ] **TASK-046** - Componente PaymentMethod | `medium`
- [ ] **TASK-047** - Página: Checkout (/checkout) | `large`
- [ ] **TASK-048** - Página: Sucesso (/sucesso) | `medium`
- [ ] **TASK-049** - Integração Stripe | `large`

### Reviews
- [ ] **TASK-050** - Migration: tabela product_reviews | `small`
- [ ] **TASK-051** - API: POST /reviews (criar) | `small`
- [ ] **TASK-052** - API: GET /reviews (listar por produto) | `small`
- [ ] **TASK-053** - Componente StarRating | `small`
- [ ] **TASK-054** - Componente ReviewForm | `medium`
- [ ] **TASK-055** - Componente ReviewsList | `medium`

---

## 🟢 MELHORIAS (Nice to have)

### Área de Parceiros
- [ ] **TASK-056** - Layout: Dashboard Parceiro | `large`
- [ ] **TASK-057** - Página: Cadastrar produto | `large`
- [ ] **TASK-058** - Página: Listar produtos | `medium`
- [ ] **TASK-059** - Página: Pedidos vendidos | `medium`
- [ ] **TASK-060** - Página: Estatísticas | `large`
- [ ] **TASK-061** - Upload de imagens | `medium`

### Integrações FaceBrasil
- [ ] **TASK-062** - SSO: Login com FaceBrasil | `large`
- [ ] **TASK-063** - Shared user profile | `medium`
- [ ] **TASK-064** - Shared XP/Points | `large`
- [ ] **TASK-065** - Shared gamification | `large`
- [ ] **TASK-066** - Artigos relacionados a produtos | `large`

### Extra
- [ ] **TASK-067** - Wishlist/Favoritos | `medium`
- [ ] **TASK-068** - Notificações push | `large`
- [ ] **TASK-069** - Chat/Atendimento | `large`
- [ ] **TASK-070** - Newsletter | `small`

---

## 📊 Estatísticas

| Categoria | Quantidade | Esforço Estimado |
|-----------|------------|------------------|
| Crítico | 21 tasks | ~6h |
| Importante | 34 tasks | ~20h |
| Melhorias | 15 tasks | ~12h |
| **TOTAL** | **70 tasks** | **~38h** |

---

## 🎨 Design Assets

### Cores (FaceStore Brand)
```css
--ink: #0D0D0D           /* Texto principal */
--cream: #F7F3EC         /* Background */
--gold: #C9A84C          /* Premium accent */
--gold-light: #E8C96A    /* Hover */
--rust: #C94F2A          /* Destaque */
--forest: #1E3A2F        /* Natureza */
--mist: #E8E3DA          /* Sub-cards */
--editorial-red: #D0351C /* Brand principal */
```

### Tipografia
- **Playfair Display**: Títulos, headlines
- **DM Sans**: Body text, UI
- **Space Mono**: Dados, labels

---

## 📅 Sugestão de Sprints

### Sprint 1 (Semana 1): Foundation
- TASK-001 a TASK-005

### Sprint 2 (Semana 2): Landing Page
- TASK-006 a TASK-015

### Sprint 3 (Semana 3): Autenticação
- TASK-016 a TASK-021

### Sprint 4 (Semana 4-5): Produtos + Carrinho
- TASK-022 a TASK-039

### Sprint 5 (Semana 6-7): Checkout + Pagamentos
- TASK-040 a TASK-049

---

**Criado em:** 2026-02-12  
**Por:** Leon Guavamango 🦁  
**Versão:** 1.0
