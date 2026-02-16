import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-ink text-cream pt-16 border-t border-[rgba(201,168,76,0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-16 px-6 md:px-14 pb-16">
                <div className="footer-brand">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 bg-editorial-red flex items-center justify-center font-serif font-black text-white text-sm" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>FB</div>
                        <div className="font-serif text-lg font-bold">FaceStore</div>
                    </div>
                    <p className="text-sm text-[rgba(247,243,236,0.55)] leading-relaxed max-w-xs">
                        A plataforma de editorial commerce que conecta a autoridade da Facebrasil às melhores marcas e produtos.
                    </p>
                </div>

                <div>
                    <h4 className="font-serif text-sm font-bold mb-5 text-gold">Plataforma</h4>
                    <ul className="flex flex-col gap-2.5">
                        <li><Link href="#valor" className="text-[13px] text-[rgba(247,243,236,0.55)] hover:text-cream transition-colors">Proposta de Valor</Link></li>
                        <li><Link href="#como-funciona" className="text-[13px] text-[rgba(247,243,236,0.55)] hover:text-cream transition-colors">Como Funciona</Link></li>
                        <li><Link href="#inovacao" className="text-[13px] text-[rgba(247,243,236,0.55)] hover:text-cream transition-colors">Recursos</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-sm font-bold mb-5 text-gold">Parceiros</h4>
                    <ul className="flex flex-col gap-2.5">
                        <li><Link href="#parceria" className="text-[13px] text-[rgba(247,243,236,0.55)] hover:text-cream transition-colors">Modelos de Parceria</Link></li>
                        <li><Link href="#" className="text-[13px] text-[rgba(247,243,236,0.55)] hover:text-cream transition-colors">Cases de Sucesso</Link></li>
                        <li><Link href="#" className="text-[13px] text-[rgba(247,243,236,0.55)] hover:text-cream transition-colors">Fale Conosco</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-sm font-bold mb-5 text-gold">Legal</h4>
                    <ul className="flex flex-col gap-2.5">
                        <li><Link href="#" className="text-[13px] text-[rgba(247,243,236,0.55)] hover:text-cream transition-colors">Termos de Uso</Link></li>
                        <li><Link href="#" className="text-[13px] text-[rgba(247,243,236,0.55)] hover:text-cream transition-colors">Privacidade</Link></li>
                    </ul>
                </div>
            </div>

            <div className="bg-ink px-6 md:px-14 py-5 border-t border-[rgba(255,255,255,0.06)] flex justify-between items-center">
                <div className="font-mono text-[11px] text-[rgba(255,255,255,0.25)] tracking-[0.5px]">
                    © 2026 Facebrasil Commerce. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
