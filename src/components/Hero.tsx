// Component: Hero Section
import { ArrowRight } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Empresas anunciantes' },
  { number: '16', label: 'Anos de presença' },
  { number: '3', label: 'Modelos de parceria' },
];

export function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 pt-20 overflow-hidden">
      {/* Left Column */}
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-12 lg:py-20">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="text-eyebrow flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-editorial-red" />
            <span>Projeto Conceitual · Facebrasil Commerce</span>
          </div>
          
          {/* Title */}
          <h1 className="text-display mb-6 leading-none">
            A loja dos{' '}
            <em className="text-editorial-red not-italic">brasileiros</em>
            <br />
            nos Estados Unidos
          </h1>
          
          {/* Subtitle */}
          <p className="text-subtitle text-lg mb-8 max-w-md">
            Conectando você aos melhores produtos e serviços da comunidade brasileira. 
            Compra com confiança, apoia quem entende de você.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="/parceiros" className="btn-primary">
              Quero ser parceiro
            </a>
            <a href="#proposta" className="group flex items-center gap-2 text-sm font-medium hover:text-editorial-red transition-colors">
              Ver proposta completa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-mist">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-2xl sm:text-3xl font-display font-bold text-editorial-red">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-ink/60 mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right Column - Visual */}
      <div className="relative bg-mist/30 hidden lg:block">
        <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
          {/* Abstract grid background */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-forest/10 rounded-sm" />
            <div className="aspect-square bg-gold/20 rounded-sm" />
          </div>
          <div className="space-y-4 pt-12">
            <div className="aspect-square bg-rust/10 rounded-sm" />
            <div className="aspect-[4/5] bg-ink/5 rounded-sm" />
          </div>
        </div>
        
        {/* Featured Card Mock */}
        <div className="absolute bottom-12 left-12 right-12 bg-white p-6 shadow-xl rounded-sm">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gold/20 rounded-sm flex items-center justify-center text-3xl">
              🛋️
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-editorial-red">Facebrasil</span>
                <span className="text-xs text-ink/40">Ed. Digital · 2026</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-1">
                Tendências em Design de Interiores para 2026
              </h3>
              <p className="text-sm text-ink/60 mb-3">
                Especialistas apontam que o biofílico e o minimalismo...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-mist rounded-full" />
                  <div>
                    <div className="text-xs font-medium">Sofá Orgânico Premium</div>
                    <div className="text-xs text-editorial-red font-bold">R$ 4.890</div>
                  </div>
                </div>
                <button className="text-xs bg-ink text-white px-3 py-1.5 rounded-sm hover:bg-editorial-red transition-colors">
                  Comprar
                </button>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex gap-2 mt-4 pt-4 border-t border-mist">
            <span className="text-xs bg-gold/20 px-2 py-1 rounded-sm">Review Verificado</span>
            <span className="text-xs bg-mist px-2 py-1 rounded-sm">Frete grátis</span>
            <span className="text-xs bg-mist px-2 py-1 rounded-sm">Parceiro FB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
