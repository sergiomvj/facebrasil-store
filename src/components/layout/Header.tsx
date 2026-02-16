import Link from 'next/link';

export function Header() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-14 bg-[rgba(247,243,236,0.92)] backdrop-blur-md border-b border-[rgba(201,168,76,0.25)]">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-editorial-red flex items-center justify-center font-serif font-black text-white text-base tracking-tighter" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    FB
                </div>
                <div className="font-serif text-xl font-bold tracking-tight">
                    Face<span className="text-editorial-red">Store</span>
                </div>
            </div>
            <ul className="hidden md:flex gap-9 list-none items-center">
                <li><Link href="#valor" className="text-ink text-[13px] font-medium tracking-[0.5px] uppercase hover:text-editorial-red transition-colors">Proposta de Valor</Link></li>
                <li><Link href="#parceria" className="text-ink text-[13px] font-medium tracking-[0.5px] uppercase hover:text-editorial-red transition-colors">Parcerias</Link></li>
                <li><Link href="#inovacao" className="text-ink text-[13px] font-medium tracking-[0.5px] uppercase hover:text-editorial-red transition-colors">Recursos</Link></li>
                <li><Link href="#visual" className="text-ink text-[13px] font-medium tracking-[0.5px] uppercase hover:text-editorial-red transition-colors">Visual</Link></li>
                <li>
                    <Link href="#parceria" className="bg-ink text-cream px-6 py-2.5 rounded-sm text-[13px] font-medium tracking-[0.5px] uppercase hover:bg-editorial-red hover:text-white transition-colors">
                        Seja Parceiro
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
