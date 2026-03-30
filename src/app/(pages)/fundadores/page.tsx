'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Linkedin, ArrowRight } from 'lucide-react';
import { CTAS } from '@/lib/ctas';
import LogoBackground from '@/components/LogoBackground/LogoBackground';
import styles from './fundadores.module.css';

const founders = [
    {
        name: 'Alison Santos',
        role: 'Head de Engenharia e Inovação Aplicada',
        bio: 'Especialista em IA aplicada e arquitetura de sistemas escaláveis. Com mais de 10 anos de experiência, Alison lidera a equipe técnica da DesenrolaAI, criando soluções inovadoras que transformam negócios. Sua visão estratégica combina tecnologia de ponta com resultados mensuráveis.',
        linkedin: 'https://linkedin.com/in/alison-santos',
        image: '/assets/profile_1.webp',
    },
    {
        name: 'João Frota',
        role: 'Desenvolvedor Full Stack',
        bio: 'Apaixonado por resolver problemas complexos com código limpo e eficiente. João traz toda sua expertise em desenvolvimento web para criar interfaces intuitivas e sistemas robustos. Focado em experiência do usuário e performance, ele garante que cada projeto seja entregar com excelência.',
        linkedin: 'https://linkedin.com/in/joao-frota',
        image: '/assets/profile_4.webp',
    },
    {
        name: 'Ítalo Lima',
        role: 'Desenvolvedor Full Stack',
        bio: 'Especialista em automação e integração de sistemas. Ítalo transforma processos manuais em soluções automatizadas, aumentando a eficiência dos clientes. Sua habilidade em conectar diferentes tecnologias permite criar ecossistemas digitais completos e integrados.',
        linkedin: 'https://linkedin.com/in/italo-lima',
        image: '/assets/profile_5.webp',
    },
    {
        name: 'Paulo Victor',
        role: 'Sócio',
        bio: 'Com visão estratégica de negócio e implementação de tecnologia, Paulo lidera a área comercial e de crescimento da DesenrolaAI. Focado em escalabilidade, ele auxilía empresas a alcançarem seu potencial máximo através de soluções tecnológicas inovadoras.',
        linkedin: 'https://linkedin.com/in/paulo-victor',
        image: '/assets/profile_2.webp',
    },
    {
        name: 'Abraão Henrique',
        role: 'Sócio Fundador',
        bio: 'Empreendedor nato com foco em inovação e tecnologia. Abraão acredita que a IA pode transformar negócios brasileiros, democratizando o acesso a ferramentas poderosas. Sua liderança inspira a equipe a sempre buscar a excelência e resultados extraordinários.',
        linkedin: 'https://linkedin.com/in/abraao-henrique',
        image: '/assets/profile_3.webp',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

function FounderCard({ founder, index }: { founder: typeof founders[0]; index: number }) {
    const isEven = index % 2 === 0;
    const cardRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start'],
    });
    
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -20]);

    return (
        <motion.div
            ref={cardRef}
            className={`${styles.card} ${isEven ? styles.cardLeft : styles.cardRight}`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
        >
            <motion.div 
                className={styles.cardImage}
                variants={imageVariants}
            >
                <motion.div style={{ y: imageY, width: '100%', height: '100%' }}>
                    <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className={styles.image}
                    />
                </motion.div>
            </motion.div>
            <motion.div 
                className={styles.cardContent}
                variants={contentVariants}
            >
                <motion.h2 className={styles.cardName} variants={textItemVariants}>{founder.name}</motion.h2>
                <motion.span className={styles.cardRole} variants={textItemVariants}>{founder.role}</motion.span>
                <motion.p className={styles.cardBio} variants={textItemVariants}>{founder.bio}</motion.p>
                <motion.a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                    variants={textItemVariants}
                    whileHover={{ gap: 12 }}
                >
                    <Linkedin size={18} />
                    <span>Conectar no LinkedIn</span>
                    <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ArrowRight size={16} />
                    </motion.span>
                </motion.a>
            </motion.div>
        </motion.div>
    );
}

export default function FoundersPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <LogoBackground />
                <div className="container">
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.heroLabel}>FUNDADORES</span>
                        <h1 className={styles.heroTitle}>
                            Pessoas por trás da <span className={styles.highlight}>DesenrolaAI</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Somos um time de empreendedores e desenvolvedores comprometidos 
                            em transformar negócios através da tecnologia e inteligência artificial.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.founders}>
                <div className="container">
                    <motion.div
                        className={styles.list}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {founders.map((founder, index) => (
                            <FounderCard key={founder.name} founder={founder} index={index} />
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container">
                    <motion.div
                        className={styles.ctaContent}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.ctaTitle}>Quer trocar uma ideia?</h2>
                        <p className={styles.ctaDesc}>
                            Estamos sempre abertos para conversar sobre novos projetos e oportunidades.
                        </p>
                        <Link href={CTAS.talkToConsultant.href} className={`btn btn-primary ${styles.ctaButton}`}>
                            {CTAS.talkToConsultant.label}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
