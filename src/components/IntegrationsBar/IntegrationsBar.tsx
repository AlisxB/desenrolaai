import { MessageSquare, CreditCard, ShoppingCart, Link2, FileText, Zap, Mail, BarChart3, Bot, Settings } from 'lucide-react';
import styles from './IntegrationsBar.module.css';

const integrations = [
    { name: 'OpenAI', icon: Bot, color: '#10A37F' },
    { name: 'WhatsApp', icon: MessageSquare, color: '#25D366' },
    { name: 'HubSpot', icon: BarChart3, color: '#FF7A59' },
    { name: 'Shopify', icon: ShoppingCart, color: '#96BF48' },
    { name: 'Stripe', icon: CreditCard, color: '#635BFF' },
    { name: 'Slack', icon: MessageSquare, color: '#4A154B' },
    { name: 'Notion', icon: FileText, color: '#FFFFFF' },
    { name: 'Zapier', icon: Zap, color: '#FF4F00' },
    { name: 'Google', icon: Mail, color: '#4285F4' },
    { name: 'Make', icon: Settings, color: '#2563EB' },
];

const LogoItem = ({ name, icon: Icon, color }: { name: string; icon: typeof Bot; color: string }) => (
    <div className={styles.logoItem} style={{ '--brand-color': color } as React.CSSProperties}>
        <div className={styles.iconWrapper}>
            <Icon size={24} />
        </div>
        <span className={styles.logoText}>{name}</span>
    </div>
);

export default function IntegrationsBar() {
    const items = [...integrations, ...integrations, ...integrations, ...integrations];

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.label}>Integra com as ferramentas que você já usa</span>
            </div>
            <div className={styles.track}>
                <div className={styles.marquee}>
                    {items.map((item, i) => (
                        <LogoItem key={i} name={item.name} icon={item.icon} color={item.color} />
                    ))}
                </div>
            </div>
        </div>
    );
}
