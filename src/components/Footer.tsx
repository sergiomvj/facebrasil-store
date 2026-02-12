// Component: Footer
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  loja: [
    { label: 'Todos os produtos', href: '/loja' },
    { label: 'Novidades', href: '/loja?filter=new' },
    { label: 'Mais vendidos', href: '/loja?filter=bestsellers' },
    { label: 'Ofertas', href: '/loja?filter=sale' },
  ],
  parceiros: [
    { label: 'Seja um parceiro', href: '/parceiros' },
    { label: 'Área do lojista', href: '/lojista' },
    { label: 'Sucesso dos parceiros', href: '/cases' },
    { label: 'Taxas e comissões', href: '/taxas' },
  ],
  ajuda: [
    { label: 'Como comprar', href: '/ajuda/comprar' },
    { label: 'Entregas', href: '/ajuda/entregas' },
    { label: 'Trocas e devoluções', href: '/ajuda/trocas' },
    { label: 'Perguntas frequentes', href: '/ajuda/faq' },
    { label: 'Fale conosco', href: '/contato' },
  ],
  empresa: [
    { label: 'Sobre o FaceStore', href: '/sobre' },
    { label: 'FaceBrasil Media', href: 'https://facebrasil.com', isExternal: true },
    { label: 'Imprensa', href: '/imprensa' },
    { label: 'Trabalhe conosco', href: '/carreiras' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Main Footer */}
      <div className="container-custom section-inset">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-editorial-red flex items-center justify-center text-white font-display font-black text-lg clip-hexagon">
                FB
              </div>
              <span className="font-display text-2xl font-bold">
                Face<span className="text-editorial-red">Store</span>
              </span>
            </a>
            <p className="text-cream/60 text-sm mb-6">
              O marketplace premium para a comunidade brasileira nos Estados Unidos.
            </p>
            
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Loja</h4>
            <ul className="space-y-2">
              {footerLinks.loja.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4">Parceiros</h4>
            <ul className="space-y-2">
              {footerLinks.parceiros.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4">Ajuda</h4>
            <ul className="space-y-2">
              {footerLinks.ajuda.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                    {...(link.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 grid md:grid-cols-3 gap-4">
          <a href="mailto:contato@facestore.com" className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors">
            <Mail className="w-5 h-5" />
            contato@facestore.com
          </a>
          <a href="tel:+15551234567" className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors">
            <Phone className="w-5 h-5" />
            +1 (555) 123-4567
          </a>
          <div className="flex items-center gap-3 text-sm text-cream/60">
            <MapPin className="w-5 h-5" />
            Miami, FL - USA
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-cream/10 py-6">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
            <p>© 2026 FaceStore · Uma empresa FaceBrasil Media</p>
            <div className="flex gap-6">
              <a href="/privacidade" className="hover:text-gold transition-colors">Política de Privacidade</a>
              <a href="/termos" className="hover:text-gold transition-colors">Termos de Uso</a>
              <a href="/cookies" className="hover:text-gold transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
