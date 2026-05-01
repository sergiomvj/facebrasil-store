import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/commerce/ProductCard';
import { getProducts, getCategories, type ProductWithPartner } from '@/lib/supabase';
import Link from 'next/link';

export const metadata = {
    title: 'Catálogo — FaceStore',
    description: 'Explore produtos selecionados pela Facebrasil com reviews verificadas e links de compra seguros.',
    openGraph: {
        title: 'Catálogo — FaceStore',
        description: 'Produtos selecionados pela Facebrasil com reviews verificadas.',
        type: 'website',
    },
};

export default async function CatalogoPage({
    searchParams,
}: {
    searchParams: Promise<{ categoria?: string }>;
}) {
    const params = await searchParams;
    const [products, categories] = await Promise.all([
        getProducts(params.categoria),
        getCategories(),
    ]);

    return (
        <div className="bg-cream min-h-screen">
            <Header />
            <div className="max-w-6xl mx-auto pt-28 pb-20 px-6">
                <div className="mb-12">
                    <Link href="/" className="text-[13px] text-[#888] font-mono uppercase tracking-wider hover:text-editorial-red transition-colors">
                        &larr; Voltar ao Início
                    </Link>
                    <h1 className="font-serif text-[clamp(36px,4vw,52px)] font-black leading-tight tracking-[-1px] mt-4 text-ink">
                        Catálogo de Produtos
                    </h1>
                    <p className="text-lg text-[#666] mt-3 max-w-xl">
                        Produtos selecionados pela equipe editorial da Facebrasil. Cada recomendação é baseada em reviews reais.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                    <Link
                        href="/catalogo"
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                            !params.categoria
                                ? 'bg-ink text-cream border-ink'
                                : 'bg-white text-ink border-[rgba(0,0,0,0.12)] hover:border-ink'
                        }`}
                    >
                        Todos
                    </Link>
                    {categories.map(cat => (
                        <Link
                            key={cat.id}
                            href={`/catalogo?categoria=${cat.slug}`}
                            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                                params.categoria === cat.slug
                                    ? 'bg-ink text-cream border-ink'
                                    : 'bg-white text-ink border-[rgba(0,0,0,0.12)] hover:border-ink'
                            }`}
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="font-serif text-2xl font-bold text-ink mb-3">Nenhum produto encontrado</div>
                        <p className="text-[#888] text-sm">O catálogo será preenchido em breve com produtos de parceiros verificados.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product: ProductWithPartner) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
