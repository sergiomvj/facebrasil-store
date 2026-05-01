import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Política de Privacidade — FaceStore',
    description: 'Política de privacidade e tratamento de dados da plataforma FaceStore.',
};

export default function PrivacidadePage() {
    return (
        <div className="bg-cream min-h-screen">
            <Header />
            <div className="max-w-3xl mx-auto pt-28 pb-20 px-6">
                <Link href="/" className="text-[13px] text-[#888] font-mono uppercase tracking-wider hover:text-editorial-red transition-colors">
                    &larr; Voltar ao Início
                </Link>
                <h1 className="font-serif text-4xl font-bold mt-6 mb-8 text-ink">Política de Privacidade</h1>

                <div className="space-y-6 text-[15px] leading-[1.8] text-[#555]">
                    <p><strong className="text-ink">Última atualização:</strong> Abril de 2026</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">1. Dados Coletados</h2>
                    <p>A FaceStore coleta apenas os dados estritamente necessários para o funcionamento da plataforma:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Dados de navegação anônimos para melhorar a experiência do usuário.</li>
                        <li>Registros de cliques em produtos para rastreamento de conversão (sem identificação pessoal).</li>
                        <li>Dados de contato fornecidos voluntariamente através de formulários.</li>
                    </ul>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">2. Uso dos Dados</h2>
                    <p>Os dados coletados são utilizados exclusivamente para: operar a plataforma, gerar relatórios de performance para parceiros, melhorar a experiência editorial e cumprir obrigações legais.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">3. Compartilhamento de Dados</h2>
                    <p>Não compartilhamos dados pessoais com terceiros, exceto quando necessário para a prestação do serviço (ex: parceiros de infraestrutura) ou por exigência legal.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">4. Cookies e Rastreamento</h2>
                    <p>Utilizamos cookies essenciais para o funcionamento da plataforma e cookies de análise para entender padrões de uso. Você pode configurar seu navegador para rejeitar cookies.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">5. Segurança</h2>
                    <p>Adotamos medidas técnicas e organizacionais adequadas para proteger os dados coletados contra acesso não autorizado, destruição ou alteração.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">6. Direitos do Titular</h2>
                    <p>Você pode solicitar a qualquer momento: acesso aos seus dados, correção, exclusão ou portabilidade. Entre em contato conosco para exercer seus direitos.</p>

                    <h2 className="font-serif text-xl font-bold text-ink pt-4">7. Contato</h2>
                    <p>Para questões sobre privacidade, entre em contato pelo formulário de contato na plataforma ou pelo e-mail de suporte da Facebrasil.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
