import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout/LegalLayout';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Termos de Uso | DesenrolaAI',
    description:
        'Conheça os Termos de Uso da DesenrolaAI. Ao utilizar nosso site, você concorda com as condições aqui descritas.',
    robots: { index: false, follow: true },
};

const sections = [
    { id: 'aceitacao-das-condicoes', title: '1. Aceitação das Condições' },
    { id: 'descricao-do-servico', title: '2. Descrição do Serviço' },
    { id: 'uso-do-servico', title: '3. Uso do Serviço' },
    { id: 'propriedade-intelectual', title: '4. Propriedade Intelectual' },
    { id: 'isencao-de-responsabilidade', title: '5. Isenção de Responsabilidade' },
    { id: 'limitacao-de-responsabilidade', title: '6. Limitação de Responsabilidade' },
    { id: 'modificacoes-dos-termos', title: '7. Modificações dos Termos' },
    { id: 'lei-aplicavel-e-foro', title: '8. Lei Aplicável e Foro' },
    { id: 'contato', title: '9. Contato' },
];

export default function TermosDeUso() {
    return (
        <LegalLayout title="Termos de Uso" lastUpdated="22 de Março de 2026" sections={sections}>
            <div className={styles.intro}>
                <p>
                    A <strong>DesenrolaAI Soluções Inteligentes LTDA</strong>, pessoa jurídica de direito privado,
                    inscrita no CNPJ sob o n.º 12.345.678/0001-99, com sede na cidade de Fortaleza,
                    Estado do Ceará, doravante denominada simplesmente <strong>DesenrolaAI</strong>,
                    oferece serviços de desenvolvimento de sistemas personalizados, automação de processos
                    empresariais e implementação de agentes de inteligência artificial mediante as condições
                    descritas a seguir.
                </p>
                <p>
                    Ao acessar, navegar ou utilizar qualquer funcionalidade do site da DesenrolaAI, o usuário
                    declara ter lido, compreendido e concordado, de forma plena e irrestrita, com todos os termos
                    e condições aqui estabelecidos. Caso não concorde com qualquer parte destes Termos de Uso,
                    o usuário deve imediatamente cessar o uso do site.
                </p>
            </div>

            <section id="aceitacao-das-condicoes">
                <h2>1. Aceitação das Condições</h2>
                <p>
                    1.1. O presente documento constitui o acordo integral entre o usuário e a DesenrolaAI
                    relativamente ao uso do site e dos serviços nele disponibilizados, prevalecendo
                    sobre quaisquer acordos, propostas ou comunicações anteriores, sejam elas escritas ou orais.
                </p>
                <p>
                    1.2. O usuário reconhece que a navegação no site configura aceite expresso e inequívoco
                    às presentes condições, dispensando a assinatura manuscrita conforme autorizado pelo
                    Código Civil (Lei n.º 10.406/2002, art. 107).
                </p>
                <p>
                    1.3. A DesenrolaAI reserva-se o direito de modificar unilateralmente estes termos a
                    qualquer tempo, sendo obrigação do usuário consultar esta página periodicamente. O
                    uso continuado do site após qualquer alteração implica aceite das novas condições.
                </p>
            </section>

            <section id="descricao-do-servico">
                <h2>2. Descrição do Serviço</h2>
                <p>
                    2.1. A DesenrolaAI oferece serviços de desenvolvimento de sistemas personalizados,
                    automação de processos empresariais, criação de chatbots e agentes de inteligência
                    artificial, integração com APIs de terceiros e soluções sob medida para necessidades
                    específicas de cada cliente.
                </p>
                <p>
                    2.2. Cada projeto é conduzido de forma personalizada, com escopo, cronograma,
                    entregas e condições comerciais definidos em proposta comercial e contrato
                    específico entre as partes.
                </p>
                <p>
                    2.3. A DesenrolaAI envida esforços razoáveis para cumprir os prazos e entregas
                    estabelecidos em contrato, mas não garante acesso contínuo, ininterrupto ou livre
                    de erros técnicos em ambientes de demonstração ou desenvolvimento.
                </p>
            </section>

            <section id="uso-do-servico">
                <h2>3. Uso do Serviço</h2>
                <p>
                    3.1. O usuário compromete-se a utilizar o site exclusivamente para fins lícitos,
                    em conformidade com a legislação brasileira vigente, e de maneira que não infrinja direitos
                    de terceiros, incluindo direitos de propriedade intelectual, privacidade e honra.
                </p>
                <p>
                    3.2. É expressamente proibido ao usuário: (a) utilizar o site para finalidades
                    ilegais, fraudulentas ou que violem direitos de terceiros; (b) tentar acessar áreas
                    restritas sem autorização; (c) inserir ou transmitir conteúdos maliciosos, vírus,
                    malware ou qualquer outro código nocivo; (d) realizar engenharia reversa,
                    descompilação ou derivação do código do site; (e) utilizar o site
                    para spam, coleta massiva de dados ou práticas anticompetitivas.
                </p>
                <p>
                    3.3. A violação de qualquer disposição desta seção poderá resultar, a critério exclusivo
                    da DesenrolaAI, na suspensão imediata do acesso ao site, sem prejuízo das
                    medidas judiciais cabíveis.
                </p>
            </section>

            <section id="propriedade-intelectual">
                <h2>4. Propriedade Intelectual</h2>
                <p>
                    4.1. Todos os direitos de propriedade intelectual sobre o site DesenrolaAI,
                    incluindo, sem limitação, o layout, textos, gráficos, logotipos, ícones, imagens,
                    código-fonte, algoritmos e demais componentes, são de titularidade exclusiva da
                    DesenrolaAI ou de seus licenciantes, sendo protegidos pelas leis de propriedade
                    intelectual brasileiras (Lei n.º 9.279/1996) e tratados internacionais.
                </p>
                <p>
                    4.2. A concessão de uso do site não implica transferência de qualquer direito
                    de propriedade intelectual ao usuário. Fica vedada a reprodução, distribuição, alteração,
                    comunicação pública, exibição ou qualquer forma de exploração comercial do site
                    sem autorização prévia e escrita da DesenrolaAI.
                </p>
            </section>

            <section id="isencao-de-responsabilidade">
                <h2>5. Isenção de Responsabilidade</h2>
                <p>
                    5.1. A DesenrolaAI não oferece garantias expressas ou implícitas quanto à adequação,
                    confiabilidade, disponibilidade, precisão ou completude de seus serviços para qualquer
                    finalidade específica, sendo os mesmos prestados conforme disponíveis.
                </p>
                <p>
                    5.2. A DesenrolaAI não será responsável por danos decorrentes de: (a) interrupções,
                    erros, defeitos ou atrasos causados por fatores externos, incluindo falhas de conexão
                    à internet do usuário ou de provedores de computação em nuvem; (b) ações de terceiros
                    que não estejam sob controle da DesenrolaAI; (c) casos de força maior ou caso fortuito,
                    conforme definidos no art. 393 do Código Civil, incluindo, mas não limitado a:
                    quedas de serviços de terceiros, interrupções de APIs externas, mudanças regulatórias
                    aplicáveis à inteligência artificial, pandemias, desastres naturais ou ataques
                    cibernéticos; (d) resultados específicos obtidos pelo usuário com o uso dos serviços,
                    uma vez que agentes de inteligência artificial geram respostas probabilísticas
                    e não determinísticas.
                </p>
            </section>

            <section id="limitacao-de-responsabilidade">
                <h2>6. Limitação de Responsabilidade</h2>
                <p>
                    6.1. Na máxima extensão permitida pela legislação aplicável, a responsabilidade total
                    da DesenrolaAI perante o usuário por quaisquer danos diretos decorrentes do uso dos
                    serviços não excederá, em qualquer hipótese, o valor total do contrato ou proposta
                    comercial celebrada entre as partes.
                </p>
                <p>
                    6.2. Em nenhuma circunstância a DesenrolaAI será responsável por danos indiretos,
                    incidentais, especiais, exemplares, punitivos ou consequenciais, incluindo, mas
                    não limitado a, perda de lucros, receita, dados, oportunidades de negócio ou
                    economias, ainda que tenha sido informada da possibilidade de tais danos.
                </p>
                <p>
                    6.3. As limitações desta seção não se aplicam em casos de dolo ou culpa grave da
                    DesenrolaAI, fraude, violação de direitos de terceiros ou violação da legislação
                    de proteção de dados pessoais.
                </p>
            </section>

            <section id="modificacoes-dos-termos">
                <h2>7. Modificações dos Termos</h2>
                <p>
                    7.1. A DesenrolaAI pode alterar estes Termos de Uso a qualquer momento, a seu
                    exclusivo critério, mediante aviso prévio razoável, que pode incluir, a critério
                    da DesenrolaAI: notificação por e-mail, aviso no site ou publicação de
                    versão atualizada com data de revisão.
                </p>
                <p>
                    7.2. As alterações entrarão em vigor no momento de sua publicação, salvo disposição
                    em contrário. Se a alteração representar mudança substancial nas obrigações do
                    usuário, a DesenrolaAI buscará oferecer prazo adicional para que o usuário possa
                    manifestar eventual discordância.
                </p>
                <p>
                    7.3. A continuidade do uso do site após a vigência das alterações constitui
                    aceite inequívoco da nova versão dos termos.
                </p>
            </section>

            <section id="lei-aplicavel-e-foro">
                <h2>8. Lei Aplicável e Foro</h2>
                <p>
                    8.1. Estes Termos de Uso são regidos e interpretados de acordo com as leis da
                    República Federativa do Brasil, em especial o Código Civil (Lei n.º 10.406/2002),
                    o Código de Defesa do Consumidor (Lei n.º 8.078/1990) e a Lei Geral de Proteção
                    de Dados (Lei n.º 13.709/2018).
                </p>
                <p>
                    8.2. Para dirimir quaisquer questões, litígios ou controvérsias decorrentes da
                    interpretação ou execução destes termos, fica eleito competente o Foro da
                    Comarca de Fortaleza, Estado do Ceará, com renúncia expressa a qualquer
                    outro, por mais privilegiado que seja ou que possa vir a ser.
                </p>
            </section>

            <section id="contato">
                <h2>9. Contato</h2>
                <p>
                    9.1. Para dúvidas, reclamações, solicitações ou comunicações referentes a estes
                    Termos de Uso, o usuário pode entrar em contato com a DesenrolaAI pelos seguintes
                    canais:
                </p>
                <ul>
                    <li><strong>E-mail:</strong> contato@desenrolaai.com.br</li>
                    <li><strong>Encarregado de Proteção de Dados (DPO):</strong> dpo@desenrolaai.com.br</li>
                </ul>
                <p>
                    9.2. A DesenrolaAI compromete-se a responder a todas as comunicações recebidas
                    em prazo razoável, conforme a natureza da solicitação.
                </p>
            </section>
        </LegalLayout>
    );
}
