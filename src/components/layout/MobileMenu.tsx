'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/catalogo', label: 'Catálogo' },
    { href: '#parceria', label: 'Parcerias' },
    { href: '#inovacao', label: 'Recursos' },
    { href: '#visual', label: 'Visual' },
];

export function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="text-ink p-2"
                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {open && (
                <div className="fixed inset-0 top-0 z-40 bg-cream">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(201,168,76,0.25)]">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-editorial-red flex items-center justify-center font-serif font-black text-white text-base tracking-tighter" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                FB
                            </div>
                            <div className="font-serif text-xl font-bold tracking-tight">
                                Face<span className="text-editorial-red">Store</span>
                            </div>
                        </div>
                        <button onClick={() => setOpen(false)} className="text-ink p-2" aria-label="Fechar menu">
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col px-6 py-8 gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-ink text-base font-medium py-3 border-b border-[rgba(0,0,0,0.06)]"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#parceria"
                            onClick={() => setOpen(false)}
                            className="mt-6 bg-ink text-cream px-6 py-3.5 rounded-sm text-center text-sm font-medium uppercase hover:bg-editorial-red transition-colors"
                        >
                            Seja Parceiro
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}
