export function Ticker() {
    return (
        <div className="bg-ink text-cream py-3 overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-0 animate-ticker">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-0">
                        <span className="inline-flex items-center gap-3 px-10 font-mono text-[11px] tracking-[1px] uppercase">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Editorial Commerce
                        </span>
                        <span className="inline-flex items-center gap-3 px-10 font-mono text-[11px] tracking-[1px] uppercase">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Affiliate Marketing
                        </span>
                        <span className="inline-flex items-center gap-3 px-10 font-mono text-[11px] tracking-[1px] uppercase">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Reviews Verificados
                        </span>
                        <span className="inline-flex items-center gap-3 px-10 font-mono text-[11px] tracking-[1px] uppercase">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Conteúdo + Conversão
                        </span>
                        <span className="inline-flex items-center gap-3 px-10 font-mono text-[11px] tracking-[1px] uppercase">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> 500+ Parceiros
                        </span>
                        <span className="inline-flex items-center gap-3 px-10 font-mono text-[11px] tracking-[1px] uppercase">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Programa de Parceria
                        </span>
                        <span className="inline-flex items-center gap-3 px-10 font-mono text-[11px] tracking-[1px] uppercase">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Receita Recorrente
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
