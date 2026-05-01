import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <div className="font-serif text-[120px] font-black text-[rgba(0,0,0,0.06)] leading-none mb-2">404</div>
                <h2 className="font-serif text-2xl font-bold text-ink mb-3">Página não encontrada</h2>
                <p className="text-[#666] text-sm mb-8">
                    A página que você procura não existe ou foi movida.
                </p>
                <Link
                    href="/"
                    className="bg-ink text-cream px-6 py-3 rounded-sm text-sm font-medium uppercase tracking-wider hover:bg-editorial-red transition-colors inline-block"
                >
                    Voltar ao Início
                </Link>
            </div>
        </div>
    );
}
