// Page: Home/Landing
import { Hero } from '@components/Hero';
import { Ticker } from '@components/Ticker';
import { PartnershipModels } from '@components/PartnershipModels';
import { Navigation } from '@components/Navigation';
import { Footer } from '@components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main>
        <Hero />
        <Ticker />
        <PartnershipModels />
        
        {/* Features Section */}
        <section id="proposta" className="section bg-mist/20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-eyebrow mb-4">Por que FaceStore?</div>
                <h2 className="text-display mb-6">
                  Conteúdo que <em className="text-editorial-red not-italic">converte</em>
                </h2>
                <p className="text-subtitle mb-6">
                  Não somos apenas um marketplace. Somos uma plataforma de <strong>editorial commerce</strong>, 
                  onde conteúdo de qualidade encontra produtos de qualidade.
                </p>
                <ul className="space-y-4">
                  {[
                    'Artigos editoriais com produtos integrados',
                    'Reviews verificados de compradores reais',
                    'Algoritmo que entende a comunidade brasileira',
                    'Suporte em português, pensado para você',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold text-sm font-bold">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-forest/10 rounded-sm" />
                  <div className="aspect-square bg-gold/20 rounded-sm" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square bg-editorial-red/10 rounded-sm" />
                  <div className="aspect-[3/4] bg-ink/5 rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section bg-ink text-cream">
          <div className="container-custom text-center">
            <h2 className="text-display mb-6">
              Pronto para vender mais?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Junte-se a centenas de empresas brasileiras que já estão 
              conquistando clientes através do FaceStore.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/parceiros" className="btn-gold">
                Quero ser parceiro
              </a>
              <a href="/loja" className="btn-secondary border-cream/30 text-cream hover:bg-cream hover:text-ink">
                Explorar a loja
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
