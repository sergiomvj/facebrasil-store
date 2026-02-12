# 🛍️ FaceStore — Facebrasil Commerce Hub

**E-commerce premium integrado ao ecossistema FaceBrasil**

Transformando conteúdo editorial em experiência de compra fluida para a comunidade brasileira nos EUA.

---

## 🎯 Conceito

O **FaceStore** é a camada de monetização do FaceBrasil, oferecendo:

- **Editorial Commerce**: Conteúdo que converte
- **Reviews Verificados**: Avaliações autênticas
- **Affiliate Marketing**: Parcerias estratégicas
- **Marketplace Local**: Conectando brasileiros a negócios brasileiros nos EUA

---

## 🚀 Status do Projeto

| Fase | Status | Descrição |
|------|--------|-----------|
| **Landing Page** | ✅ Pronta | HTML/CSS conceitual implementado |
| **Next.js Migration** | 🔄 A fazer | Converter para app React moderno |
| **Backend** | ⏳ Pendente | API, pagamentos, autenticação |
| **Integração FB** | ⏳ Pendente | Single sign-on, dados compartilhados |
| **Parceiros** | ⏳ Pendente | Painel de admin para lojistas |

---

## 🛠️ Tecnologia

```
Frontend:  Next.js 14 + React + TypeScript
Styling:   Tailwind CSS + CSS Modules
CMS:       Integração com FaceBrasil
Auth:      Supabase Auth (shared with FaceBrasil)
Payment:   Stripe
Deploy:    Vercel
```

---

## 📦 Estrutura do Projeto

```
facebrasil-store/
├── app/                 # Next.js app directory
│   ├── (sections)/     # Seções da landing
│   ├── api/            # API routes
│   └── parceiros/      # Área de parceiros
├── components/         # Componentes React
│   ├── hero/
│   ├── product/
│   ├── review/
│   └── ui/
├── lib/                # Utilitários
├── supabase/           # Migrations e config
├── public/             # Assets estáticos
└── index.html          # Landing atual (legacy)
```

---

## 🎨 Design System

### Paleta de Cores
```
--ink:           #0D0D0D     (texto principal)
--cream:         #F7F3EC     (fundo)
--gold:          #C9A84C     (acento premium)
--gold-light:    #E8C96A     (hover)
--rust:          #C94F2A     (CTAs)
--forest:        #1E3A2F     (detalhes)
--editorial-red: #D0351C     (marca)
```

### Tipografia
- **Títulos**: Playfair Display (serif)
- **Corpo**: DM Sans (sans-serif)
- **Código/Dados**: Space Mono (monospace)

---

## 📋 Roadmap

### Sprint 1: Foundation
- [ ] Setup Next.js + TypeScript + Tailwind
- [ ] Componentizar landing page atual
- [ ] Configurar Supabase connection

### Sprint 2: Autenticação
- [ ] SSO com FaceBrasil
- [ ] Login/cadastro de usuários
- [ ] Perfil de comprador

### Sprint 3: Produtos
- [ ] Catálogo de produtos
- [ ] Página de produto individual
- [ ] Carrinho de compras

### Sprint 4: Pagamentos
- [ ] Integração Stripe
- [ ] Checkout flow
- [ ] Pós-compra (reviews, recompensas)

### Sprint 5: Parceiros
- [ ] Painel para lojistas
- [ ] Gestão de produtos
- [ ] Dashboard de vendas

---

## 🤝 Modelos de Parceria

1. **Listing Básico**: Presença no diretório
2. **Featured**: Destaque editorial + reviews
3. **Commerce Full**: Vendas diretas integradas

---

## 📞 Contato

**FaceBrasil Team**
- Website: https://facebrasil.com
- Email: parceiros@facebrasil.com

---

*Última atualização: 2026-02-12*
*Versão: 0.1.0-concept*
