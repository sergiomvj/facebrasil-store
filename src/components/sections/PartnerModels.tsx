export function PartnerModels() {
    return (
        <section className="bg-ink text-cream py-24 px-6 md:px-14" id="parceria">
            <div className="font-mono text-[11px] tracking-[3px] uppercase text-gold mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-gold">
                Modelos de Parceria
            </div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black leading-[1.1] tracking-[-1.5px] mb-6 text-cream">
                Três caminhos<br />para parceiros
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden">

                {/* MODELO 1 */}
                <div className="bg-ink p-10 hover:bg-[#161616] transition-colors group cursor-pointer relative">
                    <div className="font-mono text-[10px] tracking-[2px] uppercase text-gold mb-4">Modelo 01 · Afiliado</div>
                    <div className="font-serif text-2xl font-bold text-cream mb-1.5">Performance Pura</div>
                    <div className="text-[13px] text-[rgba(255,255,255,0.4)] mb-5">Risco zero para ambos os lados</div>
                    <p className="text-sm text-[rgba(255,255,255,0.6)] leading-[1.7] mb-6">
                        Ideal para empresas que já têm programa de afiliados ativo (Hotmart, Amazon, Shopify, etc.). A Facebrasil integra os links nos artigos e recebe comissão por venda gerada.
                    </p>
                    <ul className="flex flex-col gap-2.5">
                        {['Sem custo de entrada', 'Comissão de 5% a 30%', 'Relatórios mensais', 'Badge "Recomendado"', 'Todas as plataformas'].map((item, i) => (
                            <li key={i} className="text-[13px] text-[rgba(255,255,255,0.65)] flex gap-2.5 items-start before:content-['→'] before:text-gold before:font-mono before:text-[11px] before:mt-0.5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* MODELO 2 - FEATURED */}
                <div className="bg-editorial-red p-10 cursor-pointer relative z-10 scale-[1.02] shadow-xl">
                    <div className="absolute top-0 right-0 bg-gold text-ink font-mono text-[9px] font-bold px-3 py-1.5 uppercase tracking-wider">Mais Popular</div>
                    <div className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(255,255,255,0.85)] mb-4">Modelo 02 · Editorial</div>
                    <div className="font-serif text-2xl font-bold text-cream mb-1.5">Review Patrocinado</div>
                    <div className="text-[13px] text-[rgba(255,255,255,0.8)] mb-5">Conteúdo + Performance</div>
                    <p className="text-sm text-[rgba(255,255,255,0.75)] leading-[1.7] mb-6">
                        O parceiro paga uma taxa editorial fixa e ainda ativa o sistema de comissão. A Facebrasil produz um review aprofundado, com distribuição total.
                    </p>
                    <ul className="flex flex-col gap-2.5">
                        {['Artigo editorial completo', 'Bloco de produto integrado', 'Distribuição em email/push', 'Comissão + taxa fixa', 'Relatório de alcance', 'Destaque por 30 dias'].map((item, i) => (
                            <li key={i} className="text-[13px] text-[rgba(255,255,255,0.85)] flex gap-2.5 items-start before:content-['→'] before:text-gold before:font-mono before:text-[11px] before:mt-0.5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* MODELO 3 */}
                <div className="bg-ink p-10 hover:bg-[#161616] transition-colors group cursor-pointer relative">
                    <div className="font-mono text-[10px] tracking-[2px] uppercase text-gold mb-4">Modelo 03 · Loja Parceira</div>
                    <div className="font-serif text-2xl font-bold text-cream mb-1.5">Vitrine Permanente</div>
                    <div className="text-[13px] text-[rgba(255,255,255,0.4)] mb-5">Presença contínua</div>
                    <p className="text-sm text-[rgba(255,255,255,0.6)] leading-[1.7] mb-6">
                        Para marcas que querem presença duradoura. Uma página dedicada na FaceStore com catálogo de produtos e histórico de reviews.
                    </p>
                    <ul className="flex flex-col gap-2.5">
                        {['Página exclusiva na Store', 'Catálogo de 50 produtos', 'Integração e-commerce', 'Destaque em temáticos', 'Relatório trimestral'].map((item, i) => (
                            <li key={i} className="text-[13px] text-[rgba(255,255,255,0.65)] flex gap-2.5 items-start before:content-['→'] before:text-gold before:font-mono before:text-[11px] before:mt-0.5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
