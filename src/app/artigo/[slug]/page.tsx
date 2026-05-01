import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/commerce/ProductCard';
import { ReviewBox } from '@/components/commerce/ReviewBox';
import { ComparisonTable } from '@/components/commerce/ComparisonTable';
import { getProducts, type ProductWithPartner } from '@/lib/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticleData {
    slug: string;
    title: string;
    excerpt: string;
    content: string[];
    category: string;
    readTime: string;
    date: string;
}

const articles: Record<string, ArticleData> = {
    'melhores-sofas-2026': {
        slug: 'melhores-sofas-2026',
        title: 'Os 5 Melhores Sofás de 2026 segundo a Redação',
        excerpt: 'Testamos e avaliamos os sofás mais vendidos do mercado. Veja qual é o melhor para cada tipo de sala.',
        content: [
            'A busca pelo sofá perfeito é uma das decisões mais importantes na hora de mobiliar a casa. Em 2026, o mercado oferece opções cada vez mais sofisticadas, com tecidos tecnológicos e espumas de alta densidade que prometem conforto duradouro.',
            'Nossa equipe editorial testou mais de 20 modelos ao longo de três meses, avaliando conforto, durabilidade do tecido, facilidade de montagem e custo-benefício. O resultado é um guia completo para ajudar você a fazer a melhor escolha.',
            'O critério de avaliação considera o perfil do consumidor brasileiro: valorizamos produtos que oferecem bom suporte lombar, tecidos que não acumulam calor e estrutura resistente para uso diário. Todos os produtos recomendados passaram pelo nosso processo de verificação editorial.',
        ],
        category: 'Sofás e Poltronas',
        readTime: '8 min',
        date: '15 de Abril, 2026',
    },
    'decoracao-sala-guia': {
        slug: 'decoracao-sala-guia',
        title: 'Guia Completo de Decoração de Sala em 2026',
        excerpt: 'Do minimalismo brasileiro ao biofílico: tendências e produtos para transformar sua sala.',
        content: [
            'A decoração de interiores em 2026 está marcada pela valorização de materiais naturais, cores terrosas e peças que contam histórias. O minimalismo brasileiro continua forte, mas agora com camadas de textura e personalidade.',
            'Neste guia, selecionamos produtos que representam o melhor do design nacional e importado. Cada peça foi escolhida não apenas pela estética, mas também pela qualidade construtiva e durabilidade.',
            'A iluminação é o grande diferencial deste ano. Pendentes industriais e luminárias de chão em arco são as apostas dos designers para criar ambientes acolhedores e sofisticados ao mesmo tempo.',
        ],
        category: 'Decoração',
        readTime: '6 min',
        date: '10 de Abril, 2026',
    },
};

export async function generateStaticParams() {
    return Object.keys(articles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles[slug];
    if (!article) return { title: 'Artigo não encontrado' };

    return {
        title: `${article.title} — FaceStore`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
        },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles[slug];

    if (!article) {
        notFound();
    }

    const products = await getProducts();
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="bg-cream min-h-screen">
            <Header />
            <article className="max-w-3xl mx-auto pt-28 pb-20 px-6">
                <div className="mb-12">
                    <Link href="/catalogo" className="text-[13px] text-[#888] font-mono uppercase tracking-wider hover:text-editorial-red transition-colors">
                        &larr; Catálogo
                    </Link>
                    <div className="flex items-center gap-3 mt-6 mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-red bg-editorial-red/10 px-2.5 py-1 rounded-sm">
                            {article.category}
                        </span>
                        <span className="font-mono text-[11px] text-[#888]">{article.readTime} de leitura</span>
                    </div>
                    <h1 className="font-serif text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-1px] text-ink">
                        {article.title}
                    </h1>
                    <p className="text-lg text-[#666] mt-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[rgba(0,0,0,0.06)]">
                        <div className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-cream font-serif text-xs font-bold">
                            FB
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-ink">Redação Facebrasil</div>
                            <div className="text-[11px] text-[#888]">{article.date}</div>
                        </div>
                    </div>
                </div>

                <div className="prose-editorial">
                    {article.content.map((paragraph, i) => (
                        <p key={i} className="text-base leading-[1.8] text-[#444] mb-6">{paragraph}</p>
                    ))}
                </div>

                {featuredProducts.length >= 3 && (
                    <>
                        <div className="my-16">
                            <div className="font-mono text-[10px] uppercase tracking-wider text-gold mb-4">Produto Destaque</div>
                            <ReviewBox
                                product={featuredProducts[0]}
                                verdict="O melhor custo-benefício da categoria. Combinando qualidade construtiva com preço acessível, este produto se destaca em todos os critérios que avaliamos."
                                pros={['Excelente qualidade', 'Bom custo-benefício', 'Entrega rápida']}
                                cons={['Disponibilidade limitada']}
                            />
                        </div>

                        <div className="my-16">
                            <div className="font-mono text-[10px] uppercase tracking-wider text-gold mb-4">Comparativo</div>
                            <ComparisonTable
                                title="Comparativo Rápido"
                                products={featuredProducts}
                            />
                        </div>
                    </>
                )}

                {featuredProducts.length > 0 && (
                    <div className="my-16">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-gold mb-6">Produtos mencionados</div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {featuredProducts.map((product: ProductWithPartner) => (
                                <ProductCard key={product.id} product={product} variant="compact" />
                            ))}
                        </div>
                    </div>
                )}
            </article>
            <Footer />
        </div>
    );
}
