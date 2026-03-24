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
        <LegalLayout title="Termos de Uso" lastUpdated="24 de Março de 2026" sections={sections}>
            <div className={styles.intro}>
                <p>
                    A <strong>DesenrolaAI Soluções Inteligentes LTDA</strong>, pessoa jurídica de direito privado,
                    inscrita no CNPJ sob o n.º XX.XXX.XXX/0001-XX, com sede na cidade de Fortaleza,
                    Estado do Ceará, doravante denominada simplesmente <strong>DesenrolaAI</strong>,
                    oferece serviços de desenvolvimento de sistemas personalizados, automação de processos
                    empresariais e implementação de agentes de inteligência artificial mediante as condições
                    descritas a seguir.
                </p>
                <p>
                    O aceite a estes Termos de Uso ocorre mediante manifestação expressa e inequívoca do usuário,
                    por meio de marcação de caixa de confirmação (checkbox) disponível no momento do cadastro ou
                    do início da contratação. A mera navegação no site não implica, por si só, aceitação dos
                    termos nem autoriza o tratamento de dados pessoais para quaisquer finalidades.
                </p>
            </div>

            <section id="aceitacao-das-condicoes">
                <h2>1. Aceitação das Condições</h2>
                <p>
                    1.1. O presente documento constitui o acordo integral entre o usuário e a DesenrolaAI
                    relativamente ao uso do site e dos serviços nele disponibilizados, prevalecendo
                    sobre quaisquer acordos, propostas ou comunicações anteriores, sejam escritas ou orais.
                </p>
                <p>
                    1.2. O aceite a estes Termos de Uso ocorre mediante manifestação expressa e inequívoca
                    do usuário, por meio de marcação de caixa de confirmação (checkbox) disponível no
                    momento do cadastro ou do início da contratação. A mera navegação no site não implica,
                    por si só, aceitação dos termos nem autoriza o tratamento de dados pessoais para
                    quaisquer finalidades.
                </p>
                <p>
                    1.3. A DesenrolaAI reserva-se o direito de modificar estes Termos, observado o
                    procedimento previsto na Seção 7. O uso continuado do site após a vigência das
                    alterações, desde que devidamente notificado, constituirá aceite das novas condições.
                </p>
                <p>
                    1.4. Caso o usuário não concorde com qualquer alteração substancial, poderá rescindir
                    o contrato no prazo de 30 (trinta) dias a contar da notificação, sem ônus, nos
                    termos da cláusula 7.3.
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
                    entregas e condições comerciais definidos em proposta comercial e contrato específico
                    celebrado entre as partes, que prevalece sobre estes Termos em caso de conflito.
                </p>
                <p>
                    2.3. A DesenrolaAI emprega esforços razoáveis para cumprir os prazos e entregas
                    estabelecidos em contrato, mas não garante acesso contínuo, ininterrupto ou livre
                    de erros técnicos em ambientes de demonstração ou desenvolvimento.
                </p>
                <p>
                    2.4. Os serviços que utilizam tecnologias de inteligência artificial geram respostas
                    de natureza probabilística e não determinística. O usuário reconhece que tais respostas
                    podem conter imprecisões, alucinações ou informações desatualizadas, sendo sua
                    responsabilidade verificar criticamente os resultados antes de utilizá-los para
                    tomada de decisão.
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
                    3.2. É expressamente vedado ao usuário: (a) utilizar o site para finalidades
                    ilegais, fraudulentas ou que violem direitos de terceiros; (b) tentar acessar áreas
                    restritas sem autorização; (c) inserir ou transmitir conteúdos maliciosos, vírus,
                    malware ou qualquer outro código nocivo; (d) realizar engenharia reversa,
                    descompilação ou derivação do código do site; (e) utilizar o site
                    para spam, coleta massiva de dados ou práticas anticompetitivas; (f) inserir
                    dados pessoais de terceiros sem o respectivo consentimento ou base legal adequada.
                </p>
                <p>
                    3.3. A violação de qualquer disposição desta seção poderá resultar, a critério exclusivo
                    da DesenrolaAI, na suspensão imediata do acesso ao site, sem prejuízo das medidas
                    judiciais e extrajudiciais cabíveis e da responsabilização civil e criminal do infrator.
                </p>
            </section>

            <section id="propriedade-intelectual">
                <h2>4. Propriedade Intelectual</h2>
                <p>
                    4.1. Todos os direitos de propriedade intelectual sobre o site DesenrolaAI,
                    incluindo layout, textos, gráficos, logotipos, ícones, imagens, código-fonte,
                    algoritmos e demais componentes, são de titularidade exclusiva da DesenrolaAI
                    ou de seus licenciantes, sendo protegidos pela Lei de Propriedade Industrial
                    (Lei nº 9.279/1996), pela Lei de Direitos Autorais (Lei nº 9.610/1998) e por
                    tratados internacionais.
                </p>
                <p>
                    4.2. A concessão de uso do site não implica transferência de qualquer direito
                    de propriedade intelectual ao usuário. Fica vedada a reprodução, distribuição,
                    alteração, comunicação pública, exibição ou qualquer forma de exploração
                    comercial do site sem autorização prévia e escrita da DesenrolaAI.
                </p>
                <p>
                    4.3. Os outputs, relatórios, automações e demais entregáveis produzidos pela
                    DesenrolaAI no âmbito dos projetos contratados serão de titularidade do cliente
                    contratante, conforme definido no contrato específico de prestação de serviços.
                    Na ausência de previsão contratual expressa, aplica-se o disposto no art. 4º da
                    Lei nº 9.610/1998.
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
                    conforme definidos no art. 393 do Código Civil, incluindo, mas não limitado a,
                    quedas de serviços de terceiros, interrupções de APIs externas, mudanças regulatórias,
                    pandemias, desastres naturais ou ataques cibernéticos; (d) resultados específicos
                    obtidos pelo usuário com o uso dos serviços de inteligência artificial, tendo em
                    vista a natureza probabilística e não determinística de tais tecnologias.
                </p>
            </section>

            <section id="limitacao-de-responsabilidade">
                <h2>6. Limitação de Responsabilidade</h2>
                <p>
                    <em>
                        As cláusulas 6.1 e 6.2 aplicam-se integralmente nas relações empresariais (B2B).
                        Nas relações de consumo (B2C), prevalecem os limites do Código de Defesa do Consumidor,
                        sendo a exclusão de danos indiretos da cláusula 6.2 inaplicável ao consumidor final.
                    </em>
                </p>
                <p>
                    6.1. Na máxima extensão permitida pela legislação aplicável, a responsabilidade total
                    da DesenrolaAI perante o usuário por quaisquer danos diretos decorrentes do uso dos
                    serviços não excederá, em qualquer hipótese, o valor total efetivamente pago pelo
                    usuário à DesenrolaAI nos 12 (doze) meses anteriores ao evento danoso.
                </p>
                <p>
                    6.2. Em nenhuma circunstância a DesenrolaAI será responsável por danos indiretos,
                    incidentais, especiais, exemplares, punitivos ou consequenciais, nas relações em
                    que o usuário não ostente a qualidade de consumidor final, incluindo, mas não
                    limitado a, perda de lucros, receita, dados, oportunidades de negócio ou economias,
                    ainda que tenha sido informada da possibilidade de tais danos.
                </p>
                <p>
                    6.3. As limitações desta seção não se aplicam em casos de dolo ou culpa grave da
                    DesenrolaAI, fraude, violação de direitos de terceiros, violação da legislação de
                    proteção de dados pessoais ou em qualquer hipótese em que a exclusão ou limitação
                    de responsabilidade seja vedada pela legislação aplicável.
                </p>
            </section>

            <section id="modificacoes-dos-termos">
                <h2>7. Modificações dos Termos</h2>
                <p>
                    7.1. A DesenrolaAI pode alterar estes Termos de Uso a qualquer momento, mediante
                    comunicação prévia ao usuário com antecedência mínima de 30 (trinta) dias para
                    alterações substanciais e de 10 (dez) dias para alterações não substanciais,
                    por meio de: (a) notificação por e-mail ao endereço cadastrado; (b) aviso em
                    destaque no site; ou (c) publicação de versão atualizada com data de revisão indicada.
                </p>
                <p>
                    7.2. As alterações entrarão em vigor ao término do prazo de notificação, salvo
                    disposição em contrário. A DesenrolaAI publicará, no próprio site, o histórico
                    de versões dos Termos de Uso, identificando data de vigência de cada versão.
                </p>
                <p>
                    7.3. Em caso de alteração substancial — assim entendida aquela que impacte direitos
                    do usuário, preços, escopo dos serviços ou limitações de responsabilidade — o
                    usuário terá o direito de rescindir o contrato sem ônus dentro de 30 (trinta) dias
                    contados da notificação. A continuidade do uso do site após este prazo constituirá
                    aceite inequívoco da nova versão.
                </p>
            </section>

            <section id="lei-aplicavel-e-foro">
                <h2>8. Lei Aplicável e Foro</h2>
                <p>
                    8.1. Estes Termos de Uso são regidos e interpretados de acordo com as leis da
                    República Federativa do Brasil, em especial o Código Civil (Lei nº 10.406/2002),
                    o Código de Defesa do Consumidor (Lei nº 8.078/1990), a Lei Geral de Proteção de
                    Dados (Lei nº 13.709/2018) e o Marco Civil da Internet (Lei nº 12.965/2014).
                </p>
                <p>
                    8.2. Para dirimir quaisquer questões, litígios ou controvérsias decorrentes da
                    interpretação ou execução destes termos em relações empresariais (B2B), fica
                    eleito o Foro da Comarca de Fortaleza, Estado do Ceará, com renúncia expressa
                    a qualquer outro, por mais privilegiado que seja.
                </p>
                <p>
                    8.3. Nas relações de consumo (B2C), o usuário consumidor poderá optar pelo foro
                    de seu domicílio para propositura de ações, conforme garantia prevista no art.
                    101, inciso I, do Código de Defesa do Consumidor.
                </p>
            </section>

            <section id="contato">
                <h2>9. Contato</h2>
                <p>
                    9.1. Para dúvidas, reclamações, solicitações ou comunicações referentes a estes
                    Termos de Uso ou ao tratamento de dados pessoais, o usuário pode entrar em
                    contato com a DesenrolaAI pelos seguintes canais:
                </p>
                <ul>
                    <li><strong>E-mail geral:</strong> contato@desenrolaai.com.br</li>
                    <li><strong>Encarregado de Proteção de Dados (DPO):</strong> dpo@desenrolaai.com.br</li>
                </ul>
                <p>
                    9.2. A DesenrolaAI compromete-se a responder a todas as comunicações recebidas
                    em prazo razoável, não superior a 15 (quinze) dias úteis para solicitações
                    relacionadas a direitos de titulares de dados pessoais, conforme previsto na LGPD.
                </p>
            </section>
        </LegalLayout>
    );
}
