import { ProductCard } from '@/components/commerce/ProductCard';
import { ReviewBox } from '@/components/commerce/ReviewBox';
import { ComparisonTable } from '@/components/commerce/ComparisonTable';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Database } from '@/types/supabase';

type Product = Database['public']['Tables']['products']['Row'] & {
    partners: Database['public']['Tables']['partners']['Row'] | null;
};

const mockPartners: Record<string, Database['public']['Tables']['partners']['Row']> = {
    amazon: { id: 'p1', name: 'Amazon', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg', website_url: 'https://amazon.com.br', status: 'active', created_at: '' },
    magalu: { id: 'p2', name: 'Magalu', logo_url: '', website_url: 'https://magazineluiza.com.br', status: 'active', created_at: '' }
};

const mockProducts: Product[] = [
    {
        id: 'prod1', name: 'Sofá Retrátil 3 Lugares Suede', description: 'Conforto absoluto com espuma D33 e estrutura em madeira maciça.',
        price: 1890.00, rating: 4.8, reviews_count: 124,
        image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
        affiliate_link: 'https://amazon.com.br', is_verified: true,
        partners: mockPartners.amazon, created_at: '', category_id: null, partner_id: 'p1'
    },
    {
        id: 'prod2', name: 'Poltrona Decorativa Opala', description: 'Design clássico que combina com qualquer ambiente.',
        price: 450.00, rating: 4.2, reviews_count: 45,
        image_url: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800',
        affiliate_link: 'https://magazineluiza.com.br', is_verified: false,
        partners: mockPartners.magalu, created_at: '', category_id: null, partner_id: 'p2'
    },
    {
        id: 'prod3', name: 'Mesa de Jantar Industrial', description: 'Estilo loft novaiorquino com tampo de madeira rústica.',
        price: 1200.00, rating: 4.9, reviews_count: 89,
        image_url: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&q=80&w=800',
        affiliate_link: 'https://amazon.com.br', is_verified: true,
        partners: mockPartners.amazon, created_at: '', category_id: null, partner_id: 'p1'
    }
];

export default function DemoPage() {
    return (
        <div className="bg-cream min-h-screen">
            <Header />
            <div className="max-w-4xl mx-auto pt-32 pb-20 px-6">
                <h1 className="font-serif text-4xl font-bold mb-4">Componentes de Commerce</h1>
                <p className="mb-12 text-[#666]">Demonstração dos blocos de produto da FaceStore. CTAs rastreiam cliques via <code className="font-mono text-xs bg-mist px-1.5 py-0.5 rounded">/api/track</code>.</p>

                <section className="mb-20">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-[#999] mb-6">1. Product Cards (Grid)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {mockProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-[#999] mb-6">2. Product Card (Compact/Horizontal)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProductCard product={mockProducts[0]} variant="compact" />
                        <ProductCard product={mockProducts[2]} variant="compact" />
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-[#999] mb-6">3. Review Box (Rich Snippet)</h2>
                    <ReviewBox
                        product={mockProducts[0]}
                        verdict="O melhor custo-benefício para salas compactas. A espuma D33 realmente faz diferença no conforto a longo prazo, embora o tecido possa esquentar um pouco em dias muito quentes."
                        pros={['Espuma de alta densidade', 'Entrega rápida', 'Fácil montagem']}
                        cons={['Tecido retém calor']}
                    />
                </section>

                <section className="mb-20">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-[#999] mb-6">4. Comparison Table</h2>
                    <ComparisonTable
                        title="Melhores Opções de 2026"
                        products={mockProducts}
                    />
                </section>
            </div>
            <Footer />
        </div>
    );
}
