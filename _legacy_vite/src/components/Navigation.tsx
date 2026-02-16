// Component: Navigation Header
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { useCartCount } from '@stores/cartStore';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Loja', href: '/loja' },
  { label: 'Parceiros', href: '/parceiros' },
  { label: 'Sobre', href: '/sobre' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = useCartCount();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-gold/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-editorial-red flex items-center justify-center text-white font-display font-black text-sm clip-hexagon">
                FB
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Face<span className="text-editorial-red">Store</span>
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium uppercase tracking-wider text-ink/80 hover:text-editorial-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 hover:bg-mist/50 rounded-full transition-colors"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <a 
                href="/conta"
                className="hidden sm:flex p-2 hover:bg-mist/50 rounded-full transition-colors"
                aria-label="Minha conta"
              >
                <User className="w-5 h-5" />
              </a>
              
              <a 
                href="/carrinho"
                className="relative p-2 hover:bg-mist/50 rounded-full transition-colors"
                aria-label="Carrinho"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-editorial-red text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </a>
              
              <a
                href="/parceiros"
                className="hidden lg:flex btn-primary text-sm"
              >
                Seja Parceiro
              </a>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-6">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-2xl font-display font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 space-y-4">
            <a 
              href="/parceiros" 
              className="block btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Seja Parceiro
            </a>
            <a 
              href="/conta" 
              className="block btn-secondary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Minha Conta
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
