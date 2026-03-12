import Image from 'next/image';
import styles from './Features.module.css';

export default function Features() {
    return (
        <section className="section" id="diferenciais">
            <div className="container">
                {/* Feature 1 */}
                <div className="feature-detail">
                    <div className="feature-image">
                        <Image
                            src="/assets/systems.png"
                            alt="Visualização de sistemas sob medida integrados e eficientes"
                            width={600}
                            height={338}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="feature-content">
                        <span className="tag">Exclusivo</span>
                        <h2 className="section-title">Sistemas que falam a língua do seu negócio</h2>
                        <p className="section-desc" style={{ textAlign: 'left', margin: '24px 0' }}>
                            Desenvolvemos arquiteturas robustas que escalam com você. Sem gambiarras, apenas
                            engenharia de alta performance pensada para a experiência do usuário.
                        </p>
                        <ul className={styles.checkList}>
                            <li>✓ Interfaces Intuitivas</li>
                            <li>✓ Integração Total via API</li>
                            <li>✓ Segurança de Dados Bancária</li>
                        </ul>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="feature-detail">
                    <div className="feature-image">
                        <Image
                            src="/assets/automation.png"
                            alt="Fluxo de automação inteligente otimizando processos manuais repetitivos"
                            width={600}
                            height={338}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="feature-content">
                        <span className="tag">Eficiência</span>
                        <h2 className="section-title">Liberte seu time do trabalho manual</h2>
                        <p className="section-desc" style={{ textAlign: 'left', margin: '24px 0' }}>
                            A automação não substitui pessoas, ela as potencializa. Reduza erros operacionais
                            em até 99% e foque na estratégia enquanto nós cuidamos dos fluxos repetitivos.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-value">99%</div>
                                <div className="stat-label">Menos Erros</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">10x</div>
                                <div className="stat-label">Mais Velocidade</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
