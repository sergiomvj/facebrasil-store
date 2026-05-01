'use client';

import { useEffect } from 'react';

export function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('[ErrorBoundary]', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <div className="font-serif text-6xl font-black text-editorial-red mb-6">!</div>
                <h2 className="font-serif text-2xl font-bold text-ink mb-3">Algo deu errado</h2>
                <p className="text-[#666] text-sm mb-8">
                    Ocorreu um erro inesperado. Tente novamente.
                </p>
                <button
                    onClick={reset}
                    className="bg-ink text-cream px-6 py-3 rounded-sm text-sm font-medium uppercase tracking-wider hover:bg-editorial-red transition-colors"
                >
                    Tentar Novamente
                </button>
            </div>
        </div>
    );
}
