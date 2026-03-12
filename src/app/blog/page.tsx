import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog | DesenrolaAI — Tecnologia, IA e Automação para Negócios',
    description: 'Artigos sobre Inteligência Artificial, automação de processos e como a tecnologia pode acelerar o crescimento do seu negócio.',
};

// Em breve: os artigos virão de um CMS ou arquivos MDX
const placeholderPosts = [
    { slug: 'ia-no-atendimento-ao-cliente', title: 'Como a IA pode transformar seu atendimento ao cliente', date: '2025-03-01', tag: 'IA' },
    { slug: 'automatize-tarefas-repetitivas', title: '5 tarefas repetitivas que você pode automatizar hoje', date: '2025-02-15', tag: 'Automação' },
    { slug: 'sistemas-sob-medida-vs-saas', title: 'Sistema sob medida vs. SaaS: qual o melhor para a sua empresa?', date: '2025-02-01', tag: 'Sistemas' },
];

export default function BlogPage() {
    return (
        <>
            <div style={{ paddingTop: '160px', paddingBottom: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div className="section-head">
                        <span className="tag">Blog</span>
                        <h1 className="section-title">Conteúdo que desenrola</h1>
                        <p className="section-desc">
                            Insights sobre IA, automação e tecnologia para o seu negócio crescer sem complicação.
                        </p>
                    </div>

                    <div className="grid-3" style={{ marginTop: 'var(--space-xl)' }}>
                        {placeholderPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                                <article className="card glass" style={{ cursor: 'pointer' }}>
                                    <span className="tag">{post.tag}</span>
                                    <h2 className="card-title" style={{ fontSize: '22px', marginTop: '8px' }}>{post.title}</h2>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: 'auto', paddingTop: '24px' }}>
                                        {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                                    </p>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
