export function HowItWorks() {
    return (
        <section className="bg-cream py-24 px-6 md:px-14" id="como-funciona">
            <div className="font-mono text-[11px] tracking-[3px] uppercase text-editorial-red mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-editorial-red">
                Editorial Commerce
            </div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black leading-[1.1] tracking-[-1.5px] mb-6 text-ink">
                Como a FaceStore<br />funciona na prática
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                {[
                    { icon: '✍️', step: '01', title: 'Conteúdo Editorial Publicado', text: 'A equipe da Facebrasil produz artigos, reportagens e reviews sobre produtos e serviços dos parceiros — com a mesma voz editorial de sempre. Sem parecer propaganda.' },
                    { icon: '🔗', step: '02', title: 'Produto Integrado ao Texto', text: 'Dentro do artigo, um bloco visual apresenta o produto avaliado com preço, link de compra e badge "Parceiro Verificado Facebrasil" — gerando confiança sem interromper a leitura.' },
                    { icon: '💰', step: '03', title: 'Comissão Automática por Venda', text: 'Cada clique que gera compra retorna uma comissão diretamente para a Facebrasil via plataformas como Hotmart, Amazon Afiliados, Rakuten ou link próprio do parceiro — tudo rastreado em dashboard.' }
                ].map((item, i) => (
                    <div key={i} className="relative pt-16">
                        <div className="font-serif text-[96px] font-black text-[rgba(0,0,0,0.06)] leading-none absolute -top-5 -left-2.5 select-none">{item.step}</div>
                        <div className="relative z-10">
                            <div className="w-[52px] h-[52px] bg-editorial-red flex items-center justify-center text-[22px] mb-5" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                {item.icon}
                            </div>
                            <div className="font-serif text-[22px] font-bold mb-3 text-ink">{item.title}</div>
                            <div className="text-[15px] text-[#555] leading-[1.7]">{item.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
