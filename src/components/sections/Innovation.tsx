export function Innovation() {
    return (
        <section className="bg-cream py-24 px-6 md:px-14" id="inovacao">
            <div className="font-mono text-[11px] tracking-[3px] uppercase text-editorial-red mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-editorial-red">
                Recursos Inovadores
            </div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black leading-[1.1] tracking-[-1.5px] mb-6 text-ink">
                O que torna a<br />FaceStore diferente
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-16 auto-rows-auto">

                {/* Card 1 - Dark - col-3 */}
                <div className="bg-ink border-ink text-cream p-8 rounded-sm lg:col-span-3 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-3xl mb-4">🤖</div>
                    <h3 className="font-serif text-xl font-bold mb-2.5 leading-tight">Matching Inteligente</h3>
                    <p className="text-sm text-[rgba(247,243,236,0.65)] leading-relaxed mb-4">
                        Um sistema semi-automatizado analisa o conteúdo de cada artigo e sugere produtos do catálogo de parceiros mais relevantes.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="font-mono text-[10px] px-2.5 py-1 border border-[rgba(255,255,255,0.2)] rounded-sm uppercase tracking-wider text-[rgba(247,243,236,0.7)]">IA Editorial</span>
                        <span className="font-mono text-[10px] px-2.5 py-1 border border-[rgba(255,255,255,0.2)] rounded-sm uppercase tracking-wider text-[rgba(247,243,236,0.7)]">Automação</span>
                    </div>
                </div>

                {/* Card 2 - Red - col-3 */}
                <div className="bg-editorial-red border-editorial-red text-white p-8 rounded-sm lg:col-span-3 transition-transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="text-3xl mb-4">📊</div>
                        <h3 className="font-serif text-xl font-bold mb-2.5 leading-tight">Dashboard em Tempo Real</h3>
                        <p className="text-sm text-[rgba(255,255,255,0.8)] leading-relaxed">
                            Cada parceiro acessa um painel exclusivo com cliques, conversões, receita gerada e os artigos que mais performaram.
                        </p>
                    </div>
                    <div className="font-serif text-[80px] font-black leading-none opacity-15 absolute bottom-2 right-5">📈</div>
                </div>

                {/* Card 3 - Light - col-2 */}
                <div className="bg-white border border-[rgba(0,0,0,0.08)] p-8 rounded-sm lg:col-span-2 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-3xl mb-4">⭐</div>
                    <h3 className="font-serif text-xl font-bold mb-2.5 leading-tight text-ink">Selo de Confiança</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                        Produtos avaliados pela equipe editorial ganham um selo verificado — diferenciando parceiros sérios.
                    </p>
                </div>

                {/* Card 4 - Gold - col-2 */}
                <div className="bg-gold border-gold text-ink p-8 rounded-sm lg:col-span-2 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-3xl mb-4">📱</div>
                    <h3 className="font-serif text-xl font-bold mb-2.5 leading-tight">Compra Nativa</h3>
                    <p className="text-sm text-[rgba(13,13,13,0.75)] leading-relaxed">
                        O leitor não precisa sair da página. Um checkout rápido integrado ao artigo reduz o abandono.
                    </p>
                </div>

                {/* Card 5 - Light - col-2 */}
                <div className="bg-white border border-[rgba(0,0,0,0.08)] p-8 rounded-sm lg:col-span-2 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-3xl mb-4">🗓️</div>
                    <h3 className="font-serif text-xl font-bold mb-2.5 leading-tight text-ink">Calendário Comercial</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                        Planejamento compartilhado com parceiros: datas comemorativas e lançamentos alinhados com a pauta.
                    </p>
                </div>

                {/* Card 6 - Light - col-4 */}
                <div className="bg-white border border-[rgba(0,0,0,0.08)] p-8 rounded-sm lg:col-span-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-3xl mb-4">📩</div>
                    <h3 className="font-serif text-xl font-bold mb-2.5 leading-tight text-ink">Newsletter Commerce</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-4">
                        A newsletter da Facebrasil inclui uma seção &ldquo;O que a redação recomenda&rdquo;. Com base de leitores fiel, a conversão via email supera anúncios.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="font-mono text-[10px] px-2.5 py-1 border border-[rgba(0,0,0,0.15)] rounded-sm uppercase tracking-wider text-ink">Email Marketing</span>
                        <span className="font-mono text-[10px] px-2.5 py-1 border border-[rgba(0,0,0,0.15)] rounded-sm uppercase tracking-wider text-ink">Curadoria</span>
                        <span className="font-mono text-[10px] px-2.5 py-1 border border-[rgba(0,0,0,0.15)] rounded-sm uppercase tracking-wider text-ink">Alta Conversão</span>
                    </div>
                </div>

                {/* Card 7 - Dark - col-2 */}
                <div className="bg-ink border-ink text-cream p-8 rounded-sm lg:col-span-2 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-3xl mb-4">🎥</div>
                    <h3 className="font-serif text-xl font-bold mb-2.5 leading-tight">Reviews em Vídeo</h3>
                    <p className="text-sm text-[rgba(247,243,236,0.65)] leading-relaxed">
                        Formato Reels/Shorts integrado ao artigo — produto mostrado em 60s com link direto.
                    </p>
                </div>
            </div>
        </section>
    );
}
