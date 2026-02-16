export function VisualIdentity() {
    return (
        <section className="bg-mist border-t border-[rgba(0,0,0,0.08)] py-24 px-6 md:px-14" id="visual">
            <div className="font-mono text-[11px] tracking-[3px] uppercase text-editorial-red mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-[1px] before:bg-editorial-red">
                Identidade Visual
            </div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black leading-[1.1] tracking-[-1.5px] mb-6 text-ink">
                Como o projeto<br />deve se apresentar
            </h2>

            <p className="text-[17px] text-[#555] leading-[1.7] max-w-[660px] mb-10">
                A FaceStore herda o DNA editorial da Facebrasil — credibilidade, profissionalismo e presença — mas adiciona
                uma camada comercial vibrante que convida à ação sem comprometer a seriedade.
            </p>

            <div className="flex gap-0.5 h-20 mt-8 rounded overflow-hidden mb-10">
                <div className="flex-1 flex flex-col justify-end p-3 font-mono text-[9px] tracking-[0.5px] uppercase bg-ink text-cream">Tinta<br />#0D0D0D</div>
                <div className="flex-1 flex flex-col justify-end p-3 font-mono text-[9px] tracking-[0.5px] uppercase bg-editorial-red text-cream">Red<br />#D0351C</div>
                <div className="flex-1 flex flex-col justify-end p-3 font-mono text-[9px] tracking-[0.5px] uppercase bg-gold text-ink">Ouro<br />#C9A84C</div>
                <div className="flex-1 flex flex-col justify-end p-3 font-mono text-[9px] tracking-[0.5px] uppercase bg-forest text-cream">Floresta<br />#1E3A2F</div>
                <div className="flex-1 flex flex-col justify-end p-3 font-mono text-[9px] tracking-[0.5px] uppercase bg-cream text-ink border border-[#ddd]">Creme<br />#F7F3EC</div>
                <div className="flex-1 flex flex-col justify-end p-3 font-mono text-[9px] tracking-[0.5px] uppercase bg-mist text-ink border border-[#ddd]">Névoa<br />#E8E3DA</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                <div className="p-8 bg-white border border-[rgba(0,0,0,0.08)] rounded-sm">
                    <div className="font-mono text-[10px] text-[#999] uppercase tracking-[1px] mb-3">Display — Playfair Display</div>
                    <div className="font-serif text-[38px] font-black leading-[1.1] tracking-[-1px]">O artigo que vende.</div>
                </div>
                <div className="p-8 bg-white border border-[rgba(0,0,0,0.08)] rounded-sm">
                    <div className="font-mono text-[10px] text-[#999] uppercase tracking-[1px] mb-3">Body — DM Sans</div>
                    <div className="font-sans text-base leading-[1.7] text-[#444]">
                        Conteúdo editorial que informa e, ao mesmo tempo, conecta leitores a produtos e serviços de qualidade verificada.
                    </div>
                </div>
                <div className="p-8 bg-white border border-[rgba(0,0,0,0.08)] rounded-sm">
                    <div className="font-mono text-[10px] text-[#999] uppercase tracking-[1px] mb-3">Code/Tags — Space Mono</div>
                    <div className="font-mono text-[13px] leading-[1.8] text-[#888]">
                        PARCEIRO VERIFICADO<br />
                        R$ 299,90 → COMPRAR<br />
                        REVIEW · ARTIGO Nº 4.821
                    </div>
                </div>
            </div>
        </section>
    );
}
