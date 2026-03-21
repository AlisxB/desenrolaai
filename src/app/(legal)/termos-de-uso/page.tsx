import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout/LegalLayout';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Termos de Uso | DesenrolaAI',
    description:
        'Conheça os Termos de Uso da DesenrolaAI. Ao utilizar nossa plataforma, você concorda com as condições aqui descritas.',
    robots: { index: false, follow: true },
};

const sections = [
    { id: 'aceitacao-das-condicoes', title: '1. Aceitação das Condições' },
    { id: 'descricao-do-servico', title: '2. Descrição do Serviço' },
    { id: 'cadastro-e-conta', title: '3. Cadastro e Conta' },
    { id: 'uso-do-servico', title: '4. Uso do Serviço' },
    { id: 'propriedade-intelectual', title: '5. Propriedade Intelectual' },
    { id: 'isencao-de-responsabilidade', title: '6. Isenção de Responsabilidade' },
    { id: 'limitacao-de-responsabilidade', title: '7. Limitação de Responsabilidade' },
    { id: 'modificacoes-dos-termos', title: '8. Modificações dos Termos' },
    { id: 'lei-aplicavel-e-foro', title: '9. Lei Aplicável e Foro' },
    { id: 'contato', title: '10. Contato' },
];

export default function TermosDeUso() {
    return (
        <LegalLayout title="Termos de Uso" lastUpdated="21 de Março de 2026" sections={sections}>
            <div className={styles.intro}>
                <p>
                    A <strong>DesenrolaAI LTDA</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o n.º
                    XX.XXX.XXX/0001-XX, com sede na cidade de São Paulo, Estado de São Paulo, doravante denominada
                    simplesmente <strong>DesenrolaAI</strong>, oferece sua plataforma de automação inteligente,
                    sistemas sob medida e agentes de inteligência artificial mediante as condições descritas a seguir.
                </p>
                <p>
                    Ao acessar, navegar ou utilizar qualquer funcionalidade da plataforma DesenrolaAI, o usuário
                    declara ter lido, compreendido e concordado, de forma plena e irrestrita, com todos os termos
                    e condições aqui estabelecidos. Caso não concorde com qualquer parte destes Termos de Uso,
                    o usuário deve imediatamente cessar o uso da plataforma.
                </p>
            </div>

            <section id="aceitacao-das-condicoes">
                <h2>1. Aceitação das Condições</h2>
                <p>
                    1.1. O presente documento constitui o acordo integral entre o usuário e a DesenrolaAI
                    relativamente ao uso da plataforma e dos serviços nela disponibilizados, prevalecendo
                    sobre quaisquer acordos, propostas ou comunicações anteriores, sejam elas escritas ou orais.
                </p>
                <p>
                    1.2. O usuário reconhece que a navegação e o cadastro na plataforma configuram aceite
                    expresso e inequívoco às presentes condições, dispensando a assinatura manuscrita
                    conforme autorizado pelo Código Civil (Lei n.º 10.406/2002, art. 107).
                </p>
                <p>
                    1.3. A DesenrolaAI reserva-se o direito de modificar unilateralmente estes termos a
                    qualquer tempo, sendo obrigação do usuário consultar esta página periodicamente. O
                    uso continuado da plataforma após qualquer alteração implica aceite das novas condições.
                </p>
            </section>

            <section id="descricao-do-servico">
                <h2>2. Descrição do Serviço</h2>
                <p>
                    2.1. A DesenrolaAI oferece uma plataforma digital que engloba as seguintes funcionalidades
                    principais, sem caráter exaustivo: automação de processos empresariais, desenvolvimento de
                    sistemas sob medida, implantação de agentes de inteligência artificial, integração com APIs
                    de terceiros e ferramentas de produtividade.
                </p>
                <p>
                    2.2. Os serviços podem ser oferecidos em planos gratuitos e pagos, com escopo, limites e
                    funcionalidades variáveis conforme o plano contratado. As características de cada plano
                    estão descritas na página de Preços da plataforma.
                </p>
                <p>
                    2.3. A DesenrolaAI envida esforços comerciais razoáveis para manter a disponibilidade da
                    plataforma, mas não garante acesso contínuo, ininterrupto ou livre de erros técnicos.
                </p>
            </section>

            <section id="cadastro-e-conta">
                <h2>3. Cadastro e Conta</h2>
                <p>
                    3.1. Para utilizar determinadas funcionalidades da plataforma, o usuário deve realizar um
                    cadastro fornecendo informações verdadeiras, precisas, atuais e completas, conforme solicitado
                    no formulário de inscrição.
                </p>
                <p>
                    3.2. O usuário é exclusivamente responsável por manter a confidencialidade de suas credenciais
                    de acesso (login e senha) e por todas as atividades realizadas em sua conta. A DesenrolaAI
                    não será responsável por acessos não autorizados decorrentes de negligência do usuário
                    no cuidado de suas credenciais.
                </p>
                <p>
                    3.3. O usuário menores de 18 anos deve obter autorização prévia, expressa e comprovada de
                    seu representante legal para utilizar a plataforma. A DesenrolaAI não coleta intencionalmente
                    dados de crianças sem a devida verificação, conforme a Lei n.º 13.709/2018 (LGPD).
                </p>
                <p>
                    3.4. A DesenrolaAI reserva-se o direito de recusar, suspender ou encerrar contas que
                    apresentem informações falsas, fraudulentas ou em desacordo com estes termos.
                </p>
            </section>

            <section id="uso-do-servico">
                <h2>4. Uso do Serviço</h2>
                <p>
                    4.1. O usuário compromete-se a utilizar a plataforma exclusivamente para fins lícitos,
                    em conformidade com a legislação brasileira vigente, e de maneira que não infrinja direitos
                    de terceiros, incluindo direitos de propriedade intelectual, privacidade e honra.
                </p>
                <p>
                    4.2. É expressamente proibido ao usuário: (a) utilizar a plataforma para finalidades
                    ilegais, fraudulentas ou que violem direitos de terceiros; (b) tentar acessar áreas
                    restritas sem autorização; (c) inserir ou transmitir conteúdos maliciosos, vírus,
                    malware ou qualquer outro código nocivo; (d) realizar engenharia reversa,
                    descompilação ou derivação do código da plataforma; (e) utilizar a plataforma
                    para spam, coleta massiva de dados ou práticas anticompetitivas.
                </p>
                <p>
                    4.3. O usuário é o único responsável por todo o conteúdo que inserir, armazenar ou
                    transmitir por meio da plataforma (&quot;Conteúdo do Usuário&quot;). O usuário declara e garante
                    ser titular ou ter licença sobre todos os direitos relativos ao Conteúdo do Usuário.
                </p>
                <p>
                    4.4. A violação de qualquer disposição desta seção poderá resultar, a critério exclusivo
                    da DesenrolaAI, na suspensão imediata do acesso ou no encerramento definitivo da conta,
                    sem prejuízo das medidas judiciais cabíveis.
                </p>
            </section>

            <section id="propriedade-intelectual">
                <h2>5. Propriedade Intelectual</h2>
                <p>
                    5.1. Todos os direitos de propriedade intelectual sobre a plataforma DesenrolaAI,
                    incluindo, sem limitação, o layout, textos, gráficos, logotipos, ícones, imagens,
                    código-fonte, algoritmos, bancos de dados e demais componentes, são de titularidade
                    exclusiva da DesenrolaAI ou de seus licenciantes, sendo protegidos pelas leis de
                    propriedade intelectual brasileiras (Lei n.º 9.279/1996) e tratados internacionais.
                </p>
                <p>
                    5.2. A concessão de uso da plataforma não implica transferência de qualquer direito
                    de propriedade intelectual ao usuário. Fica vedada a reprodução, distribuição, alteração,
                    comunicação pública, exibição ou qualquer forma de exploração comercial da plataforma
                    sem autorização prévia e escrita da DesenrolaAI.
                </p>
                <p>
                    5.3. O usuário mantém a titularidade de todo o Conteúdo do Usuário, mas concede à
                    DesenrolaAI licença worldwide, irrevogável, isenta de royalties e não exclusiva para
                    utilizar referidos conteúdos exclusivamente para os fins de prestação do serviço
                    contratado, nos termos da Política de Privacidade.
                </p>
            </section>

            <section id="isencao-de-responsabilidade">
                <h2>6. Isenção de Responsabilidade</h2>
                <p>
                    6.1. A plataforma DesenrolaAI é fornecida &quot;no estado em que se encontra&quot; e &quot;conforme
                    disponível&quot;. A DesenrolaAI não oferece garantias expressas ou implícitas quanto à
                    adequação, confiabilidade, disponibilidade, precisão ou completude da plataforma
                    para qualquer finalidade específica.
                </p>
                <p>
                    6.2. A DesenrolaAI não será responsável por danos decorrentes de: (a) interrupções,
                    erros, defeitos ou atrasos no funcionamento da plataforma causados por fatores
                    externos, incluindo falhas de conexão à internet do usuário; (b) ações de terceiros
                    que não estejam sob controle da DesenrolaAI; (c) casos de força maior, conforme
                    definidos no art. 393 do Código Civil; (d) resultados específicos obtidos pelo
                    usuário com o uso da plataforma — já que os agentes de IA geram respostas
                    probabilísticas não determinísticas.
                </p>
                <p>
                    6.3. A DesenrolaAI não tem obrigação de fiscalizar o Conteúdo do Usuário, mas pode
                    remover conteúdos que considere, a seu exclusivo critério, ilegais, ofensivos ou
                    em violação destes termos.
                </p>
            </section>

            <section id="limitacao-de-responsabilidade">
                <h2>7. Limitação de Responsabilidade</h2>
                <p>
                    7.1. Na máxima extensão permitida pela legislação aplicável, a responsabilidade total
                    da DesenrolaAI perante o usuário por quaisquer danos diretos decorrentes do uso da
                    plataforma não excederá, em qualquer hipótese, o valor total pago pelo usuário à
                    DesenrolaAI nos 12 (doze) meses imediatamente anteriores ao evento que deu causa
                    ao dano.
                </p>
                <p>
                    7.2. Em nenhuma circunstância a DesenrolaAI será responsável por danos indiretos,
                    incidentais, especiais, exemplares, punitivos ou consequenciais — incluindo, mas
                    não limitado a, perda de lucros, receita, dados, oportunidades de negócio ou
                    economias预期的 — ainda que tenha sido informada da possibilidade de tais danos.
                </p>
                <p>
                    7.3. As limitações desta seção não se aplicam em casos de dolo ou culpa grave da
                    DesenrolaAI, fraude, violação de direitos de terceiros ou violaçãoMandatory da
                    legislação de proteção de dados pessoais.
                </p>
            </section>

            <section id="modificacoes-dos-termos">
                <h2>8. Modificações dos Termos</h2>
                <p>
                    8.1. A DesenrolaAI pode alterar estes Termos de Uso a qualquer momento, a seu
                    exclusivo critério, mediante aviso prévio razonable — que pode incluir, a critério
                    da DesenrolaAI: notificação por e-mail, aviso na plataforma ou publicação de
                    versão atualizada com data de revisão.
                </p>
                <p>
                    8.2. As alterações entrarão em vigor no momento de sua publicação, salvo disposição
                    em contrário. Se a alteração representar mudança substancial nas obrigações do
                    usuário, a DesenrolaAI buscará oferecer prazo adicional para que o usuário possa
                    manifestar eventual descordo.
                </p>
                <p>
                    8.3. A continuidade do uso da plataforma após a vigência das alterações constitui
                    aceite inequívoco da nova versão dos termos.
                </p>
            </section>

            <section id="lei-aplicavel-e-foro">
                <h2>9. Lei Aplicável e Foro</h2>
                <p>
                    9.1. Estes Termos de Uso são regidos e interpretados de acordo com as leis da
                    República Federativa do Brasil, em especial o Código Civil (Lei n.º 10.406/2002),
                    o Código de Defesa do Consumidor (Lei n.º 8.078/1990) e a Lei Geral de Proteção
                    de Dados (Lei n.º 13.709/2018).
                </p>
                <p>
                    9.2. Para dirimir quaisquer questões,litígios ou controvérsias decorrentes da
                    interpretação ou execução destes termos, fica eleitocompetente o Foro da
                    Comarca de São Paulo, Estado de São Paulo, com renúncia expressa a qualquer
                    outro, por mais privilegiado que seja ou que possa vir a ser.
                </p>
            </section>

            <section id="contato">
                <h2>10. Contato</h2>
                <p>
                    10.1. Para dúvidas, reclamações, solicitações ou comunicações referentes a estes
                    Termos de Uso, o usuário pode entrar em contato com a DesenrolaAI pelos seguintes
                    canais:
                </p>
                <ul>
                    <li><strong>E-mail:</strong> contato@desenrola.ai</li>
                    <li><strong>Encarregado de Proteção de Dados (DPO):</strong> dpo@desenrola.ai</li>
                </ul>
                <p>
                    10.2. A DesenrolaAI compromete-se a responder a todas as comunicações recebidas
                    em prazo razoável, conforme a natureza da solicitação.
                </p>
            </section>
        </LegalLayout>
    );
}
