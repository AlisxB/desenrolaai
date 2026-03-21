import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout/LegalLayout';
import styles from '../termos-de-uso/page.module.css';

export const metadata: Metadata = {
    title: 'Política de Privacidade | DesenrolaAI',
    description:
        'Conheça a Política de Privacidade da DesenrolaAI. Seus dados são tratados com segurança e em conformidade com a LGPD (Lei 13.709/2018).',
    robots: { index: false, follow: true },
};

const sections = [
    { id: 'informacoes-que-coletamos', title: '1. Informações que Coletamos' },
    { id: 'como-usamos-seus-dados', title: '2. Como Usamos seus Dados' },
    { id: 'armazenamento-e-seguranca', title: '3. Armazenamento e Segurança' },
    { id: 'compartilhamento-de-dados', title: '4. Compartilhamento de Dados' },
    { id: 'seus-direitos-lgpd', title: '5. Seus Direitos (LGPD)' },
    { id: 'cookies', title: '6. Cookies' },
    { id: 'criancas-e-adolescentes', title: '7. Crianças e Adolescentes' },
    { id: 'alteracoes-a-esta-politica', title: '8. Alterações a Esta Política' },
    { id: 'contato-dpo', title: '9. Contato / DPO' },
];

export default function PoliticaDePrivacidade() {
    return (
        <LegalLayout title="Política de Privacidade" lastUpdated="21 de Março de 2026" sections={sections}>
            <div className={styles.intro}>
                <p>
                    A <strong>DesenrolaAI LTDA</strong> (&quot;DesenrolaAI&quot;, &quot;nós&quot; ou &quot;nosso&quot;) se compromete
                    com a proteção dos dados pessoais de seus usuários, clientes e visitantes (&quot;você&quot;).
                    Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e
                    compartilhamos suas informações pessoais, em conformidade com a{' '}
                    <strong>Lei Geral de Proteção de Dados Pessoais (LGPD — Lei n.º 13.709/2018)</strong>.
                </p>
                <p>
                    Recomendamos a leitura integral deste documento. Ao utilizar nossa plataforma,
                    você declara ter tomado conhecimento e concordar com as práticas aqui descritas.
                </p>
            </div>

            <section id="informacoes-que-coletamos">
                <h2>1. Informações que Coletamos</h2>
                <p>
                    1.1. <strong>Dados fornecidos diretamente por você:</strong> nome completo, endereço
                    de e-mail, número de telefone, empresa, Cargo, CNPJ e demais informações
                    preenchidas no formulário de cadastro ou durante a contratação de serviços.
                </p>
                <p>
                    1.2. <strong>Dados de uso da plataforma:</strong> ações realizadas na plataforma,
                    páginas acessadas, tempo de permanência, interações com funcionalidades de IA,
                    logs de acesso, endereço IP, tipo de navegador e dispositivo.
                </p>
                <p>
                    1.3. <strong>Dados de comunicação:</strong> registros de contatos realizados por
                    e-mail, chat, WhatsApp ou quaisquer outros canais de suporte.
                </p>
                <p>
                    1.4. <strong>Dados de navegação e cookies:</strong> conforme detalhado na
                    Seção 6, utilizamos cookies e tecnologias similares para coletar informações
                    sobre sua atividade de navegação. Para mais detalhes, consulte nossa política
                    de cookies.
                </p>
                <p>
                    1.5. <strong>Dados sensíveis:</strong> não coletamos intencionalmente dados
                    pessoais sensíveis (saúde, biometria, origem racial, opiniões políticas,
                    convicções religiosas, dados de menores) sem a devida base legal específica
                    e consentimento explícito, conforme art. 11 e 13 da LGPD.
                </p>
            </section>

            <section id="como-usamos-seus-dados">
                <h2>2. Como Usamos seus Dados</h2>
                <p>
                    2.1. Utilizamos seus dados pessoais com base nas seguintes <strong>bases legais</strong>{' '}
                    previstas no art. 7º da LGPD:
                </p>
                <ul>
                    <li>
                        <strong>Execução de contrato (art. 7º, V):</strong> para prestação dos serviços
                        contratados, criação e gestão da sua conta, fornecimento de acesso à plataforma.
                    </li>
                    <li>
                        <strong>Consentimento (art. 7º, I):</strong> para envio de comunicações
                        marketing, pesquisas de satisfação e funcionalidades opcionais.
                    </li>
                    <li>
                        <strong>Legítimo interesse (art. 10):</strong> para melhoria contínua da
                        plataforma, detecção de fraudes, segurança da informação e suporte técnico.
                    </li>
                    <li>
                        <strong>Obrigação legal (art. 7º, II):</strong> para cumprimento de obrigações
                        fiscais, contábeis e regulatórias.
                    </li>
                </ul>
                <p>
                    2.2. <strong>Finalidades específicas:</strong> seus dados são tratados para:
                    (a) criar e gerenciar sua conta de usuário; (b) personalizar sua experiência
                    na plataforma; (c) processar pagamentos e emitir notas fiscais; (d) enviar
                    atualizações sobre serviços e alterações nos termos; (e) responder a
                    solicitações de suporte; (f) treinar e aprimorar modelos de inteligência
                    artificial — anonimizando os dados sempre que possível.
                </p>
            </section>

            <section id="armazenamento-e-seguranca">
                <h2>3. Armazenamento e Segurança</h2>
                <p>
                    3.1. Os dados pessoais são armazenados em servidores seguros, com adoção de
                    medidas técnicasaptas a proteger os dados contra acessos não autorizados, situações
                    de perda ou destruição, conforme art. 46 da LGPD.
                </p>
                <p>
                    3.2. <strong>Medidas implementadas:</strong> criptografia de dados em trânsito
                    (TLS/SSL) e em repouso (AES-256); controle de acesso baseado em perfis e
                    autenticação multifator (MFA); backups periódicos; testes de vulnerabilidade;
                    políticas internas de segurança da informação.
                </p>
                <p>
                    3.3. <strong>Tempo de retenção:</strong> mantemos seus dados pelo tempo necessário
                    para as finalidades descritas nesta política. Dados de usuários inativos são
                    eliminados após 5 (cinco) anos da última atividade, salvo obrigação legal
                    de retenção mais prolongada. Dados anonimizados podem ser mantidos por tempo
                    indeterminado para fins estatísticos e melhoria de produtos.
                </p>
                <p>
                    3.4. Em caso de incidente de segurança que possa causar risco ou dano relevante
                    aos titulares de dados, a DesenrolaAI comunicará o fato ao ANPD e aos titulares
                    afetados em até 72 horas, conforme art. 48 da LGPD.
                </p>
            </section>

            <section id="compartilhamento-de-dados">
                <h2>4. Compartilhamento de Dados</h2>
                <p>
                    4.1. A DesenrolaAI <strong>não vende</strong> seus dados pessoais a terceiros.
                    O compartilhamento ocorre, quando necessário, nas seguintes hipóteses:
                </p>
                <ul>
                    <li>
                        <strong>Prestadores de serviços:</strong> empresas que auxiliam a operação da
                        plataforma (hospedagem, processamento de pagamentos, e-mail marketing,
                        análise de dados). Essas empresas agem como <em>operadoras</em> nos termos
                        da LGPD e estão contratualmente obrigadas a utilizar os dados apenas
                        para as finalidades especificadas.
                    </li>
                    <li>
                        <strong>Autoridades legais:</strong> quando exigido por lei, ordem judicial,
                        subpoena ou regulação governamental — incluindo órgãos como ANPD, Receita
                        Federal e autoridades de defesa do consumidor.
                    </li>
                    <li>
                        <strong>Proteção de direitos:</strong> quando necessário para proteger direitos
                        da DesenrolaAI, prevenir fraudes, garantir a segurança dos usuários ou
                        responder a emergências.
                    </li>
                </ul>
                <p>
                    4.2. Todo compartilhamento de dados pessoais com operadores fora do Brasil
                    (transferência internacional) será realizado em conformidade com os arts. 33 e 34
                    da LGPD, mediante garantias adequadas, como cláusulas contratuais padrão ou
                    certificação de países com nível de proteção equivalente.
                </p>
            </section>

            <section id="seus-direitos-lgpd">
                <h2>5. Seus Direitos (LGPD)</h2>
                <p>
                    5.1. De acordo com o art. 18 da LGPD, você possui os seguintes direitos:
                </p>
                <ul>
                    <li><strong>Confirmação e acesso:</strong> confirmar se tratamos seus dados e acessar o teor dos dados;</li>
                    <li><strong>Retificação:</strong> corrigir dados incompletos, desatualizados ou inexatos;</li>
                    <li><strong>Anonimização, bloqueio ou eliminação:</strong> solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários ou excessivos;</li>
                    <li><strong>Portabilidade:</strong> receber seus dados em formato interoperável e legível, ou transmitir a outro controlador, quando технически viável;</li>
                    <li><strong>Eliminação:</strong> solicitar a exclusão dos dados tratados com base no consentimento;</li>
                    <li><strong>Informação sobre compartilhamento:</strong> saber quais terceiros recebem seus dados;</li>
                    <li><strong>Informação sobre consequência:</strong> ser informado sobre a possibilidade de não fornecer consentimento e as consequências;</li>
                    <li><strong>Revogação do consentimento:</strong> revogar o consentimento a qualquer momento, sem prejuízo da обработка anterior;</li>
                    <li><strong>Oposição:</strong> opp-se ao tratamento realizado com base no legítimo interesse.</li>
                </ul>
                <p>
                    5.2. Para exercer seus direitos, envie uma solicitação para{' '}
                    <strong>dpo@desenrola.ai</strong>. Responderemos em prazo compatível com a
                    complexidade da solicitação, respeitando o prazo máximo de <strong>15 (quinze)
                    dias</strong> contados do recebimento da requisição, conforme art. 19 da LGPD.
                </p>
            </section>

            <section id="cookies">
                <h2>6. Cookies</h2>
                <p>
                    6.1. A DesenrolaAI utiliza <strong>cookies</strong> — pequenos arquivos de texto
                    armazenados no seu navegador — para garantir o funcionamento da plataforma,
                    analisar o tráfego e personalizar sua experiência.
                </p>
                <p>
                    6.2. <strong>Tipos de cookies utilizados:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Essenciais:</strong> necessários para o funcionamento da plataforma
                        (autenticação, sessão, segurança). Não podem ser desativados.
                    </li>
                    <li>
                        <strong>Analíticos:</strong> coletam informações sobre como você usa a
                        plataforma, ajudam a identificar erros e permitem melhorias. Utilizamos
                        ferramentas como Google Analytics e Hotjar.
                    </li>
                    <li>
                        <strong>Funcionais:</strong> lembram suas preferências (idioma, tema de
                        exibição) para personalizar sua experiência.
                    </li>
                    <li>
                        <strong>Marketing:</strong> utilizados para exibir anúncios relevantes,
                        limits the number of times que você vê um anúncio e medir a eficácia
                        de campanhas. Utilizamos plataformas como Google Ads e Meta Ads.
                        Esses cookies requerem seu consentimento explícito.
                    </li>
                </ul>
                <p>
                    6.3. Você pode configurar seu navegador para bloquear cookies, com exceção
                    dos essenciais. A desativação de cookies pode afetar a funcionalidade de
                    determinadas áreas da plataforma.
                </p>
            </section>

            <section id="criancas-e-adolescentes">
                <h2>7. Crianças e Adolescentes</h2>
                <p>
                    7.1. A plataforma DesenrolaAI não é direcionada a crianças e adolescentes
                    menores de 18 anos. Não coletamos intencionalmente dados pessoais de menores
                    sem autorização prévia, expressa e verificável de seu representante legal,
                    conforme art. 14 da LGPD.
                </p>
                <p>
                    7.2. Caso a DesenrolaAI tome conhecimento de que coletou dados de uma criança
                    ou adolescente sem a devida autorização, tais dados serão eliminados em caráter
                    de urgência. Se você suspeita que dados de menor foram coletados, entre em
                    contato imediatamente pelo e-mail <strong>dpo@desenrola.ai</strong>.
                </p>
            </section>

            <section id="alteracoes-a-esta-politica">
                <h2>8. Alterações a Esta Política</h2>
                <p>
                    8.1. Esta Política de Privacidade pode ser atualizada periodicamente para
                    refletir alterações nas práticas de tratamento de dados, na legislação
                    aplicável ou em funcionalidades da plataforma.
                </p>
                <p>
                    8.2. Quando realizarmos alterações relevantes — especialmente aquelas que
                    alterem as finalidades, os tipos de dados coletados ou as formas de
                    compartilhamento — notificaremos você por e-mail ou por aviso destacado
                    na plataforma, com antecedência mínima razoável.
                </p>
                <p>
                    8.3. A data da última atualização está indicada no topo deste documento.
                    A continuidade do uso da plataforma após as alterações constitui aceite
                    da nova versão.
                </p>
            </section>

            <section id="contato-dpo">
                <h2>9. Contato / DPO</h2>
                <p>
                    Para questões relacionadas à privacidade e proteção de dados pessoais,
                    entre em contato com nosso <strong>Encarregado de Proteção de Dados (DPO)</strong>:
                </p>
                <ul>
                    <li><strong>Responsável:</strong> Encarregado de Proteção de Dados — DesenrolaAI LTDA</li>
                    <li><strong>E-mail:</strong> dpo@desenrola.ai</li>
                    <li><strong>Empresa:</strong> DesenrolaAI LTDA | CNPJ: XX.XXX.XXX/0001-XX</li>
                    <li><strong>Endereço:</strong> São Paulo, SP — Brasil</li>
                </ul>
                <p>
                    Caso não esteja satisfeito com nossa resposta, você tem o direito de
                    apresentar uma reclamação junto à{' '}
                    <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>.
                </p>
            </section>
        </LegalLayout>
    );
}
