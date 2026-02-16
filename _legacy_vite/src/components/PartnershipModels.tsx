// Component: Partnership Models Section
import { Store, Star, Crown, Check } from 'lucide-react';

const models = [
  {
    icon: Store,
    name: 'Listing Básico',
    price: 'Grátis',
    priceNote: 'para começar',
    description: 'Presença no diretório de parceiros',
    features: [
      'Página de perfil da empresa',
      'Até 10 produtos listados',
      'Contato direto via WhatsApp',
      'Selo "Parceiro FB"',
      'Suporte por email',
    ],
    cta: 'Começar grátis',
    highlighted: false,
  },
  {
    icon: Star,
    name: 'Featured',
    price: '$99',
    priceNote: '/mês',
    description: 'Destaque editorial + reviews verificados',
    features: [
      'Tudo do plano Básico',
      'Produtos em destaque na home',
      'Sistema de reviews integrado',
      'Artigos editoriais patrocinados',
      'Até 50 produtos listados',
      'Suporte prioritário',
    ],
    cta: 'Virar Featured',
    highlighted: true,
  },
  {
    icon: Crown,
    name: 'Commerce Full',
    price: '$299',
    priceNote: '/mês',
    description: 'Vendas diretas integradas ao FaceStore',
    features: [
      'Tudo do plano Featured',
      'Checkout integrado',
      'Gestão de pedidos',
      'Dashboard de vendas',
      'Produtos ilimitados',
      'Taxas reduzidas',
      'Suporte dedicado',
    ],
    cta: 'Falar com vendas',
    highlighted: false,
  },
];

export function PartnershipModels() {
  return (
    <section id="parceria" className="section bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-eyebrow flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-editorial-red" />
            <span>Modelos de Parceria</span>
            <span className="w-8 h-px bg-editorial-red" />
          </div>
          <h2 className="text-display mb-4">
            Escolha seu <em className="text-editorial-red not-italic">crescimento</em>
          </h2>
          <p className="text-subtitle">
            Três formas de integrar seu negócio ao ecossistema FaceBrasil. 
            Comece com o que faz sentido para você e evolua conforme cresce.
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className={`relative p-6 lg:p-8 rounded-sm transition-all duration-300 ${
                model.highlighted
                  ? 'bg-ink text-cream shadow-2xl scale-105 z-10'
                  : 'bg-white border border-mist hover:shadow-lg'
              }`}
            >
              {model.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-ink text-xs font-bold px-4 py-1 rounded-full">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 ${
                model.highlighted ? 'bg-gold text-ink' : 'bg-mist text-ink'
              }`}>
                <model.icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-2">{model.name}</h3>
              <p className={`text-sm mb-4 ${model.highlighted ? 'text-cream/70' : 'text-ink/60'}`}>
                {model.description}
              </p>
              
              <div className="mb-6">
                <span className="text-3xl lg:text-4xl font-display font-bold">{model.price}</span>
                <span className={`text-sm ml-2 ${model.highlighted ? 'text-cream/60' : 'text-ink/50'}`}>
                  {model.priceNote}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {model.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      model.highlighted ? 'text-gold' : 'text-forest'
                    }`} />
                    <span className={model.highlighted ? 'text-cream/80' : 'text-ink/80'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 font-medium transition-colors ${
                model.highlighted
                  ? 'bg-gold text-ink hover:bg-gold-light'
                  : 'bg-ink text-cream hover:bg-editorial-red'
              }`}>
                {model.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
