import Image from 'next/image';
import { Database } from '@/types/supabase';
import { Check, Info, ShoppingBag, Star, ThumbsUp } from 'lucide-react';

type Product = Database['public']['Tables']['products']['Row'] & {
    partners: Database['public']['Tables']['partners']['Row'] | null;
};

interface ReviewBoxProps {
    product: Product;
    verdict: string;
    pros: string[];
    cons?: string[];
}

export function ReviewBox({ product, verdict, pros, cons }: ReviewBoxProps) {
    return (
        <div className="my-10 border border-gold/30 bg-cream relative rounded-sm overflow-hidden">
            <div className="absolute top-0 left-0 bg-gold text-ink font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-wider z-10">
                Nossa Escolha
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-0">
                <div className="bg-white p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gold/20 relative">
                    <div className="relative w-full aspect-square max-w-[240px] mb-4">
                        {product.image_url ? (
                            <Image src={product.image_url} alt={product.name} fill className="object-contain" />
                        ) : (
                            <div className="w-full h-full bg-mist flex items-center justify-center">Sem Imagem</div>
                        )}
                    </div>

                    <div className="font-mono font-bold text-2xl text-editorial-red mb-3">
                        {product.price ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price) : ''}
                    </div>

                    <a
                        href={product.affiliate_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-editorial-red text-white font-sans font-bold text-center py-3 rounded-sm hover:bg-ink transition-colors flex items-center justify-center gap-2 uppercase text-sm tracking-wide"
                    >
                        <ShoppingBag size={16} /> Ver na {product.partners?.name || 'Loja'}
                    </a>
                    <div className="mt-2 text-[10px] text-[#888] text-center">Compra segura verificada</div>
                </div>

                <div className="p-6 md:p-8">
                    <h3 className="font-serif text-2xl font-bold mb-2">{product.name}</h3>

                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex text-gold">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className={i < Math.round(product.rating || 0) ? "fill-gold" : "text-[#ddd]"} />
                            ))}
                        </div>
                        <span className="text-xs font-mono text-[#888] uppercase tracking-wider">Review Facebrasil</span>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-bold text-sm uppercase tracking-wide mb-2 flex items-center gap-2 text-ink">
                            <Info size={14} className="text-gold" /> Veredito
                        </h4>
                        <p className="text-sm leading-relaxed text-[#555]">{verdict}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-[11px] uppercase tracking-wide mb-3 text-forest flex items-center gap-2">
                                <ThumbsUp size={12} /> Prós
                            </h4>
                            <ul className="space-y-2">
                                {pros.map((pro, i) => (
                                    <li key={i} className="text-[13px] text-[#666] flex items-start gap-2">
                                        <Check size={14} className="text-forest mt-0.5 shrink-0" />
                                        {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
