import styles from './IntegrationsBar.module.css';

const integrations = [
    { name: 'OpenAI', svg: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: 'WhatsApp', svg: '' },
    { name: 'HubSpot', svg: '' },
    { name: 'Shopify', svg: '' },
    { name: 'Stripe', svg: '' },
    { name: 'Slack', svg: '' },
    { name: 'Notion', svg: '' },
    { name: 'Zapier', svg: '' },
    { name: 'Google Sheets', svg: '' },
    { name: 'Make', svg: '' },
];

// Render logos as styled text-based badges
const LogoItem = ({ name }: { name: string }) => (
    <div className={styles.logoItem}>
        <span className={styles.logoText}>{name}</span>
    </div>
);

export default function IntegrationsBar() {
    const items = [...integrations, ...integrations]; // duplicate for seamless loop

    return (
        <div className={styles.wrapper} aria-label="Integrações disponíveis">
            <div className={styles.header}>
                <span className={styles.label}>Integra com as ferramentas que você já usa</span>
            </div>
            <div className={styles.track}>
                <div className={styles.marquee}>
                    {items.map((item, i) => (
                        <LogoItem key={i} name={item.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
