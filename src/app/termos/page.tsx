import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Termos de Uso — FaceStore',
    description: 'Termos e condições de uso da plataforma FaceStore.',
};

export default function TermosPage() {
    return (
        <div className="bg-cream min-h-screen">
            <Header />
            <div className="max-w-3xl mx-auto pt-28 pb-20 px-6">
                <Link href="/" className="text-[13px] text-[#888] font-mono uppercase tracking-wider hover:text-editorial-red transition-colors">
                    &larr; Voltar ao Início
                </Link>
                <h1 className="font-serif text-4xl font-bold mt-6 mb-8 text-ink">Termos de Uso</h1>

                <div className="space-y-6 text-[15px] leading-[1.8] text-[#555]">
                    <p><strong className="text-ink">Última atualização:</strong> Abril de 2026</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">1. Aceitação dos Termos</h2>
                    <p>Ao acessar e utilizar a plataforma FaceStore (facebrasil commerce hub), você concorda com estes Termos de Uso. Se não concordar com qualquer parte dos termos, não utilize a plataforma.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">2. Descrição do Serviço</h2>
                    <p>A FaceStore é uma plataforma de editorial commerce que conecta leitores a produtos e serviços de parceiros por meio de conteúdo editorial. Os produtos apresentados são vendidos por terceiros e a Facebrasil atua como intermediária no processo de indicação.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">3. Links de Afiliados</h2>
                    <p>A plataforma utiliza links de afiliados. Ao clicar em um produto e realizar uma compra no site do parceiro, a Facebrasil pode receber uma comissão sem custo adicional para o consumidor. Isso não interfere na imparcialidade das recomendações editoriais.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">4. Responsabilidade sobre Produtos</h2>
                    <p>Os produtos exibidos na FaceStore são de responsabilidade exclusiva dos parceiros e lojas parceiras. Questões como entrega, troca, devolução e garantia devem ser tratadas diretamente com o vendedor.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">5. Propriedade Intelectual</h2>
                    <p>Todo o conteúdo editorial, design, logos e marcas apresentados na FaceStore são propriedade da Facebrasil ou de seus respectivos titulares. A reprodução sem autorização é proibida.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">6. Privacidade</h2>
                    <p>O tratamento de dados pessoais segue nossa <Link href="/privacidade" className="text-editorial-red underline">Política de Privacidade</Link>.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
