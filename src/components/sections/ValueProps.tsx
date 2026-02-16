export function ValueProps() {
    return (
        <section className="bg-forest text-cream relative overflow-hidden py-24 px-6 md:px-14" id="valor">
            <div className="absolute font-serif text-[320px] font-black text-[rgba(255,255,255,0.03)] -top-16 -right-10 pointer-events-none leading-none tracking-[-10px] hidden lg:block">
                VALOR
            </div>

            <div className="font-mono text-[11px] tracking-[3px] uppercase text-gold mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-gold">
                Proposta de Valor
            </div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black leading-[1.1] tracking-[-1.5px] mb-6 text-cream">
                Por que a<br />FaceStore funciona
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-start">
                <div>
                    <p className="text-xl leading-[1.7] text-[rgba(247,243,236,0.8)] font-light mb-10">
                        Conteúdo editorial de qualidade já cria intenção de compra. A FaceStore fecha o ciclo —
                        transformando leitores engajados em compradores qualificados, sem abandonar a credibilidade
                        construída em 16 anos.
                    </p>
                    <div className="flex flex-col gap-6">
                        {[
                            { icon: '📖', title: 'Autoridade Editorial', text: 'Cada recomendação nasce de um artigo jornalístico real, não de um banner. O leitor confia porque a Facebrasil já provou seu valor.' },
                            { icon: '🎯', title: 'Audiência Qualificada', text: '16 anos de leitores segmentados por interesse — empresários, consumidores de alto ticket, profissionais liberais. Conversão orgânica, não forçada.' },
                            { icon: '🔗', title: 'Contexto como Vantagem', text: 'Produtos aparecem exatamente no artigo certo, no momento certo. O link afiliado dentro de um review consome é 8x mais clicado que um banner genérico.' }
                        ].map((pillar, i) => (
                            <div key={i} className="bg-[rgba(255,255,255,0.05)] border border-[rgba(201,168,76,0.2)] border-l-[3px] border-l-gold p-6 md:p-7 rounded-sm hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                                <div className="text-2xl mb-2.5">{pillar.icon}</div>
                                <div className="font-serif text-xl font-bold text-cream mb-2">{pillar.title}</div>
                                <div className="text-sm text-[rgba(247,243,236,0.65)] leading-[1.7]">{pillar.text}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                        { big: '8×', desc: 'Mais cliques em links contextuais vs. banners tradicionais' },
                        { big: '73%', desc: 'Dos consumidores pesquisa em revistas digitais antes de comprar' },
                        { big: 'R$0', desc: 'Custo inicial para parceiros no modelo de comissão por venda' },
                        { big: '360°', desc: 'Integração: artigo, email, redes sociais e push notification' }
                    ].map((metric, i) => (
                        <div key={i} className="bg-[rgba(255,255,255,0.06)] border border-[rgba(201,168,76,0.15)] p-7 rounded-sm text-center">
                            <div className="font-serif text-5xl font-black text-gold leading-none mb-2">{metric.big}</div>
                            <div className="text-[13px] text-[rgba(247,243,236,0.6)] leading-relaxed">{metric.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
