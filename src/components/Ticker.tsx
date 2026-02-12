// Component: Scrolling Ticker Banner
const items = [
  'Editorial Commerce',
  'Affiliate Marketing',
  'Reviews Verificados',
  'Conteúdo + Conversão',
  '500+ Parceiros',
  'Frete Grátis',
  'Produtos Brasileiros',
  'Confiança e Qualidade',
];

export function Ticker() {
  return (
    <div className="bg-ink text-cream py-3 overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center mx-8">
            <span className="w-2 h-2 bg-gold rounded-full mr-4" />
            <span className="font-mono text-sm tracking-wider uppercase">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
