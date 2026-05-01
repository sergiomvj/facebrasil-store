-- =============================================
-- FaceStore - Migration completa para Supabase
-- Execute TODO este script no SQL Editor do Supabase
-- =============================================

-- 1. SCHEMA (tabelas)

CREATE TABLE IF NOT EXISTS partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_id UUID REFERENCES partners(id) ON DELETE SET NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  affiliate_link TEXT NOT NULL,
  image_url TEXT,
  rating DECIMAL(2, 1) CHECK (rating IS NULL OR (rating >= 0 AND rating <= 5)),
  reviews_count INTEGER DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  article_slug TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. RLS (Row Level Security)

ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public partners read" ON partners FOR SELECT USING (true);
CREATE POLICY "Public categories read" ON categories FOR SELECT USING (true);
CREATE POLICY "Public products read" ON products FOR SELECT USING (true);
CREATE POLICY "Public click insert" ON clicks FOR INSERT WITH CHECK (true);

-- 3. INDEXES

CREATE INDEX IF NOT EXISTS idx_products_partner_id ON products(partner_id);
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_clicks_product_id ON clicks(product_id);
CREATE INDEX IF NOT EXISTS idx_clicks_created_at ON clicks(created_at);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

-- 4. SEED DATA (parceiros, categorias, produtos)

INSERT INTO partners (id, name, logo_url, website_url, status) VALUES
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Amazon Brasil', 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg', 'https://amazon.com.br', 'active'),
  ('a1b2c3d4-0001-4000-8000-000000000002', 'Magazine Luiza', '', 'https://magazineluiza.com.br', 'active'),
  ('a1b2c3d4-0001-4000-8000-000000000003', 'Casas Bahia', '', 'https://casasbahia.com.br', 'active'),
  ('a1b2c3d4-0001-4000-8000-000000000004', 'Leroy Merlin', '', 'https://leroymerlin.com.br', 'active'),
  ('a1b2c3d4-0001-4000-8000-000000000005', 'Fast Shop', '', 'https://fastshop.com.br', 'active')
ON CONFLICT DO NOTHING;

INSERT INTO categories (id, name, slug) VALUES
  ('b1b2c3d4-0001-4000-8000-000000000001', 'Sofás e Poltronas', 'sofas-e-poltronas'),
  ('b1b2c3d4-0001-4000-8000-000000000002', 'Mesas', 'mesas'),
  ('b1b2c3d4-0001-4000-8000-000000000003', 'Decoração', 'decoracao'),
  ('b1b2c3d4-0001-4000-8000-000000000004', 'Iluminação', 'iluminacao'),
  ('b1b2c3d4-0001-4000-8000-000000000005', 'Eletrônicos', 'eletronicos')
ON CONFLICT DO NOTHING;

INSERT INTO products (id, partner_id, category_id, name, description, price, affiliate_link, image_url, rating, reviews_count, is_verified) VALUES
  ('c1b2c3d4-0001-4000-8000-000000000001',
   'a1b2c3d4-0001-4000-8000-000000000001',
   'b1b2c3d4-0001-4000-8000-000000000001',
   'Sofá Retrátil 3 Lugares Suede',
   'Conforto absoluto com espuma D33 e estrutura em madeira maciça. Ideal para salas compactas.',
   1890.00,
   'https://amazon.com.br/dp/B09EXAMPLE1',
   'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
   4.8, 124, true),

  ('c1b2c3d4-0001-4000-8000-000000000002',
   'a1b2c3d4-0001-4000-8000-000000000002',
   'b1b2c3d4-0001-4000-8000-000000000001',
   'Poltrona Decorativa Opala',
   'Design clássico que combina com qualquer ambiente. Estofado em tecido premium.',
   450.00,
   'https://magazineluiza.com.br/produto/example2',
   'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800',
   4.2, 45, false),

  ('c1b2c3d4-0001-4000-8000-000000000003',
   'a1b2c3d4-0001-4000-8000-000000000001',
   'b1b2c3d4-0001-4000-8000-000000000002',
   'Mesa de Jantar Industrial',
   'Estilo loft novaiorquino com tampo de madeira rústica e base em ferro industrial.',
   1200.00,
   'https://amazon.com.br/dp/B09EXAMPLE3',
   'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&q=80&w=800',
   4.9, 89, true),

  ('c1b2c3d4-0001-4000-8000-000000000004',
   'a1b2c3d4-0001-4000-8000-000000000003',
   'b1b2c3d4-0001-4000-8000-000000000003',
   'Luminária Arc de Chão',
   'Luminária arco em metal dourado com cúpula branca. Perfeita para sala de estar.',
   389.90,
   'https://casasbahia.com.br/produto/example4',
   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
   4.5, 67, true),

  ('c1b2c3d4-0001-4000-8000-000000000005',
   'a1b2c3d4-0001-4000-8000-000000000004',
   'b1b2c3d4-0001-4000-8000-000000000004',
   'Pendente Industrial Retro',
   'Luminária pendente estilo vintage com fio ajustável. Ideal para mesa de jantar.',
   159.90,
   'https://leroymerlin.com.br/produto/example5',
   'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&q=80&w=800',
   4.3, 33, false),

  ('c1b2c3d4-0001-4000-8000-000000000006',
   'a1b2c3d4-0001-4000-8000-000000000001',
   'b1b2c3d4-0001-4000-8000-000000000005',
   'Soundbar Bluetooth Premium',
   'Som surround 2.1 com subwoofer wireless e conectividade Bluetooth 5.0.',
   899.00,
   'https://amazon.com.br/dp/B09EXAMPLE6',
   'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
   4.7, 201, true),

  ('c1b2c3d4-0001-4000-8000-000000000007',
   'a1b2c3d4-0001-4000-8000-000000000005',
   'b1b2c3d4-0001-4000-8000-000000000005',
   'Smart TV 55" 4K OLED',
   'Tela OLED com cores vibrantes e pretos perfeitos. Android TV integrado.',
   4299.00,
   'https://fastshop.com.br/produto/example7',
   'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800',
   4.9, 312, true),

  ('c1b2c3d4-0001-4000-8000-000000000008',
   'a1b2c3d4-0001-4000-8000-000000000002',
   'b1b2c3d4-0001-4000-8000-000000000001',
   'Sofá Canto L-shape Cinza',
   'Sofá de canto em formato L com chaise reversible. Tecido suede premium.',
   2590.00,
   'https://magazineluiza.com.br/produto/example8',
   'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800',
   4.6, 78, true),

  ('c1b2c3d4-0001-4000-8000-000000000009',
   'a1b2c3d4-0001-4000-8000-000000000003',
   'b1b2c3d4-0001-4000-8000-000000000003',
   'Quadro Decorativo Abstract Set 3pc',
   'Conjunto de 3 quadros abstratos em tela. Moldura em MDF preto fosco.',
   249.90,
   'https://casasbahia.com.br/produto/example9',
   'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800',
   4.1, 22, false),

  ('c1b2c3d4-0001-4000-8000-000000000010',
   'a1b2c3d4-0001-4000-8000-000000000004',
   'b1b2c3d4-0001-4000-8000-000000000002',
   'Mesa Lateral Nórdica Carvalho',
   'Mesa de centro lateral em madeira maciça de carvalho com design escandinavo.',
   549.00,
   'https://leroymerlin.com.br/produto/example10',
   'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
   4.4, 41, true)
ON CONFLICT DO NOTHING;
