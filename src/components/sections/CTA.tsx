export function CTA() {
    return (
        <section className="bg-editorial-red text-white text-center py-32 px-6 relative overflow-hidden" id="contato">
            <div className="absolute font-serif text-[280px] font-black text-[rgba(255,255,255,0.05)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap tracking-[-8px] hidden md:block">
                PARCERIA
            </div>

            <div className="font-mono text-[11px] tracking-[3px] uppercase text-[rgba(255,255,255,0.7)] mb-4 flex items-center justify-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-[rgba(255,255,255,0.5)]">
                Próximo Passo
            </div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black leading-[1.1] tracking-[-1.5px] max-w-[700px] mx-auto mb-6 text-white relative z-10">
                Pronto para transformar<br />conteúdo em receita?
            </h2>

            <p className="text-xl font-light text-[rgba(255,255,255,0.8)] max-w-[600px] mx-auto mb-12 leading-[1.6] relative z-10">
                Junte-se a mais de 500 parceiros que já usam a autoridade da Facebrasil para impulsionar vendas reais.
            </p>

            <div className="flex gap-4 justify-center items-center relative z-10">
                <button className="bg-white text-editorial-red border-0 px-9 py-4 font-sans text-[15px] font-bold cursor-pointer transition-all hover:bg-gold hover:text-ink inline-block" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                    Falar com consultor
                </button>
                <a href="#" className="text-white no-underline text-sm font-medium flex items-center gap-2 border-b border-[rgba(255,255,255,0.5)] pb-0.5 hover:border-white transition-colors">
                    Baixar Mídia Kit
                </a>
            </div>
        </section>
    );
}
