import type { Metadata } from 'next';
import Link from 'next/link';

interface Props {
    params: Promise<{ slug: string }>;
}

// Next.js 15+: params is a Promise and must be awaited
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return {
        title: `${title} | DesenrolaAI Blog`,
        description: 'Leia este artigo da DesenrolaAI sobre tecnologia, IA e automação para negócios.',
    };
}

export default async function ArticlePage({ params }: Props) {
    // Next.js 15+: await the params Promise
    const { slug } = await params;
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <div style={{ paddingTop: '160px', paddingBottom: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link
                    href="/blog"
                    style={{ color: 'var(--accent-blue)', fontSize: '14px', display: 'block', marginBottom: 'var(--space-md)' }}
                >
                    ← Voltar ao Blog
                </Link>
                <span className="tag">Em Breve</span>
                <h1 className="section-title" style={{ marginTop: '16px' }}>{title}</h1>
                <div className="glass" style={{ padding: 'var(--space-xl)', marginTop: 'var(--space-xl)', textAlign: 'center' }}>
                    <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
                        🚀 Este artigo está sendo preparado com muito carinho.
                        <br /><br />
                        Em breve você terá acesso a conteúdo exclusivo sobre IA, automação e tecnologia para o seu negócio!
                    </p>
                </div>
            </div>
        </div>
    );
}
