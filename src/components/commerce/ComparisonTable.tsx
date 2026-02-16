import Link from 'next/link';
import { Database } from '@/types/supabase';
import { Star, Check, X } from 'lucide-react';
import Image from 'next/image';

type Product = Database['public']['Tables']['products']['Row'] & {
    partners: Database['public']['Tables']['partners']['Row'] | null;
};

interface ComparisonTableProps {
    products: Product[];
    title: string;
}

export function ComparisonTable({ products, title }: ComparisonTableProps) {
    return (
        <div className="my-12 overflow-hidden border border-[rgba(0,0,0,0.08)] rounded-sm bg-white">
            <div className="bg-ink text-white p-4 font-serif text-lg font-bold">
                {title}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-[rgba(0,0,0,0.06)] w-[200px]"></th>
                            {products.map(p => (
                                <th key={p.id} className="p-4 border-b border-[rgba(0,0,0,0.06)] align-top">
                                    <div className="relative w-24 h-24 mx-auto mb-3 bg-mist rounded-sm overflow-hidden">
                                        {p.image_url && <Image src={p.image_url} alt={p.name} fill className="object-contain p-2" />}
                                    </div>
                                    <div className="text-center font-serif font-bold text-sm text-ink line-clamp-2 h-10 leading-tight">
                                        {p.name}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Price Row */}
                        <tr>
                            <td className="p-4 border-b border-[rgba(0,0,0,0.06)] font-mono text-xs uppercase text-[#888] font-bold">Preço</td>
                            {products.map(p => (
                                <td key={p.id} className="p-4 border-b border-[rgba(0,0,0,0.06)] text-center font-mono font-bold text-editorial-red">
                                    {p.price ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.price) : '-'}
                                </td>
                            ))}
                        </tr>

                        {/* Rating Row */}
                        <tr>
                            <td className="p-4 border-b border-[rgba(0,0,0,0.06)] font-mono text-xs uppercase text-[#888] font-bold">Avaliação</td>
                            {products.map(p => (
                                <td key={p.id} className="p-4 border-b border-[rgba(0,0,0,0.06)] text-center">
                                    <div className="flex justify-center text-gold gap-0.5">
                                        <span className="text-sm font-bold mr-1 text-ink">{p.rating}</span>
                                        <Star size={14} className="fill-gold" />
                                    </div>
                                </td>
                            ))}
                        </tr>

                        {/* Partner Row */}
                        <tr>
                            <td className="p-4 border-b border-[rgba(0,0,0,0.06)] font-mono text-xs uppercase text-[#888] font-bold">Vendido por</td>
                            {products.map(p => (
                                <td key={p.id} className="p-4 border-b border-[rgba(0,0,0,0.06)] text-center text-xs text-[#555]">
                                    {p.partners?.name || '-'}
                                </td>
                            ))}
                        </tr>

                        {/* CTA Row */}
                        <tr>
                            <td className="p-4 bg-cream/30"></td>
                            {products.map(p => (
                                <td key={p.id} className="p-4 bg-cream/30 text-center">
                                    <a
                                        href={p.affiliate_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-ink text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-editorial-red transition-colors w-full"
                                    >
                                        Ver Oferta
                                    </a>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
