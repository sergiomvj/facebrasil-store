import Image from 'next/image';
import { Database } from '@/types/supabase';
import { ShoppingBag, Star } from 'lucide-react';

type Product = Database['public']['Tables']['products']['Row'] & {
    partners: Database['public']['Tables']['partners']['Row'] | null;
};

interface ProductCardProps {
    product: Product;
    variant?: 'default' | 'compact';
}

function getTrackingUrl(productId: string, slug?: string): string {
    const params = new URLSearchParams({ pid: productId });
    if (slug) params.set('slug', slug);
    return `/api/track?${params.toString()}`;
}

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
    return (
        <div className={`group relative bg-white border border-[rgba(0,0,0,0.08)] rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 ${variant === 'compact' ? 'flex' : 'flex-col'}`}>

            <div className={`relative overflow-hidden bg-mist ${variant === 'compact' ? 'w-1/3 aspect-square' : 'w-full aspect-[4/3]'}`}>
                {product.image_url ? (
                    <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink/20">Sem imagem</div>
                )}

                {product.is_verified && (
                    <div className="absolute top-2 right-2 bg-gold/90 backdrop-blur-sm text-ink text-[10px] font-mono font-bold px-2 py-1 uppercase tracking-wider rounded-sm z-10 flex items-center gap-1">
                        <Star size={10} className="fill-ink" /> Verificado
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-1">
                {product.partners && (
                    <div className="flex items-center gap-2 mb-2">
                        {product.partners.logo_url && (
                            <div className="w-4 h-4 relative rounded-full overflow-hidden">
                                <Image src={product.partners.logo_url} alt={product.partners.name} fill className="object-cover" />
                            </div>
                        )}
                        <span className="text-[10px] uppercase tracking-widest text-[#888] font-mono">{product.partners.name}</span>
                    </div>
                )}

                <h3 className={`font-serif font-bold text-ink leading-tight mb-2 ${variant === 'compact' ? 'text-sm' : 'text-lg'}`}>
                    {product.name}
                </h3>

                {product.rating != null && (
                    <div className="flex items-center gap-1 mb-3">
                        <div className="flex text-gold">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} className={i < Math.round(product.rating!) ? "fill-gold" : "text-mist"} />
                            ))}
                        </div>
                        <span className="text-[11px] text-[#888] font-mono">({product.reviews_count})</span>
                    </div>
                )}

                <div className="mt-auto pt-4 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between">
                    <div className="font-mono font-bold text-editorial-red text-base">
                        {product.price != null ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price) : 'Sob Consulta'}
                    </div>

                    <a
                        href={getTrackingUrl(product.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ink text-cream hover:bg-editorial-red transition-colors w-8 h-8 flex items-center justify-center rounded-sm"
                    >
                        <ShoppingBag size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
}
