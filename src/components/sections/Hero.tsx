import Image from 'next/image';

export function Hero() {
    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-20 overflow-hidden">
            <div className="flex flex-col justify-center px-6 py-20 lg:px-14 relative">
                <div className="font-mono text-[11px] tracking-[3px] uppercase text-editorial-red mb-6 flex items-center gap-3 before:content-[''] before:w-8 before:h-[1px] before:bg-editorial-red animate-fadeUp">
                    Projeto Conceitual · Facebrasil Commerce
                </div>
                <h1 className="font-serif text-[clamp(52px,6vw,88px)] font-black leading-[0.95] tracking-[-2px] mb-8 animate-fadeUp [animation-delay:100ms]">
                    16 anos<br />
                    de <em className="text-editorial-red italic">autoridade.</em><br />
                    Agora<br />convertendo.
                </h1>
                <p className="text-lg font-light leading-[1.7] text-[#444] max-w-[480px] mb-12 animate-fadeUp [animation-delay:200ms]">
                    A FaceStore transforma o legado editorial da Facebrasil em um ecossistema de vendas vivo — onde cada
                    artigo, review e tendência conecta leitores às melhores marcas e produtos do mercado.
                </p>
                <div className="flex flex-wrap gap-4 items-center mb-16 animate-fadeUp [animation-delay:300ms]">
                    <a href="#parceria" className="bg-editorial-red text-white px-9 py-4 font-sans text-[15px] font-semibold tracking-[0.3px] transition-all hover:-translate-y-0.5 hover:bg-ink inline-block" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                        Quero ser parceiro
                    </a>
                    <a href="#valor" className="text-ink text-sm font-medium flex items-center gap-2 border-b border-ink pb-0.5 hover:text-editorial-red hover:border-editorial-red transition-colors">
                        Ver proposta completa →
                    </a>
                </div>
                <div className="flex gap-10 border-t border-[rgba(0,0,0,0.1)] pt-8 animate-fadeUp [animation-delay:400ms]">
                    <div>
                        <div className="font-serif text-4xl font-black text-editorial-red leading-none">500+</div>
                        <div className="text-xs text-[#888] uppercase tracking-[1px] mt-1">Empresas anunciantes</div>
                    </div>
                    <div>
                        <div className="font-serif text-4xl font-black text-editorial-red leading-none">16</div>
                        <div className="text-xs text-[#888] uppercase tracking-[1px] mt-1">Anos de presença</div>
                    </div>
                    <div>
                        <div className="font-serif text-4xl font-black text-editorial-red leading-none">3</div>
                        <div className="text-xs text-[#888] uppercase tracking-[1px] mt-1">Modelos de parceria</div>
                    </div>
                </div>
            </div>

            <div className="relative bg-ink min-h-[500px] lg:min-h-auto">
                <div className="absolute inset-0">
                    <Image
                        src="/partners.png"
                        alt="Parceiros Facebrasil"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-transparent" />
                <div className="relative z-10 p-12 lg:p-[60px_50px] flex items-end justify-center min-h-[500px] lg:min-h-full">
                    <div className="bg-cream rounded overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] max-w-[380px] w-full transition-transform duration-500 [transform:perspective(800px)_rotateY(-6deg)_rotateX(2deg)] hover:[transform:perspective(800px)_rotateY(0deg)_rotateX(0deg)] animate-fadeUp [animation-delay:300ms]">
                        <div className="bg-editorial-red px-5 py-4 flex items-center justify-between">
                            <div className="font-serif text-white text-[22px] font-black tracking-[-0.5px]">Facebrasil</div>
                            <div className="font-mono text-[rgba(255,255,255,0.7)] text-[10px]">Ed. Digital · 2026</div>
                        </div>
                        <div className="p-6">
                            <div className="font-serif text-xl font-bold leading-[1.3] mb-2.5">Tendências em Design de Interiores para 2026</div>
                            <div className="text-[13px] text-[#666] leading-[1.6] mb-4">
                                Especialistas apontam que o biofílico e o minimalismo brasileiro lideram as preferências dos consumidores...
                            </div>
                            <div className="bg-mist rounded p-3.5 flex items-center gap-3.5">
                                <div className="w-12 h-12 bg-gradient-to-br from-gold to-rust rounded-md shrink-0 flex items-center justify-center text-xl">🛋️</div>
                                <div className="flex-1">
                                    <div className="text-[13px] font-semibold mb-0.5 text-ink">Sofá Orgânico Premium</div>
                                    <div className="font-mono text-[15px] font-bold text-editorial-red">R$ 4.890</div>
                                </div>
                                <button className="bg-editorial-red text-white border-0 px-3.5 py-2 text-[11px] font-semibold rounded-sm uppercase tracking-[0.5px] cursor-pointer">Comprar</button>
                            </div>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-sm bg-gold border border-gold text-white">Review Verificado</span>
                                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-sm bg-cream border border-[rgba(0,0,0,0.15)] text-[#555]">Frete grátis</span>
                                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-sm bg-cream border border-[rgba(0,0,0,0.15)] text-[#555]">Parceiro FB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
