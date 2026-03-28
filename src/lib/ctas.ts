import { LINKS, WHATSAPP_MESSAGES, getWhatsAppUrl } from './links';

export const CTAS = {
  hero: {
    label: 'Quero desenrolar meu negócio',
    href: LINKS.contato,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.default),
  },
  heroSecondary: {
    label: 'Ver soluções',
    href: LINKS.solucoes,
  },
  
  pricing: {
    label: 'Quero implementar IA',
    href: LINKS.contato,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.budget),
  },
  pricingAlt: {
    label: 'Agendar diagnóstico',
    href: LINKS.contato,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.contact),
  },
  pricingContact: {
    label: 'Fale com a gente',
    href: LINKS.contatoSection,
  },
  
  finalCta: {
    label: 'Falar com especialista',
    href: LINKS.contato,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.contact),
  },
  
  talkToConsultant: {
    label: 'Falar com um consultor',
    href: LINKS.contato,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.contact),
  },
  
  portfolio: {
    label: 'Ver portfólio',
    href: LINKS.portfolio,
  },
  
  faq: {
    label: 'Agendar Conversa',
    href: LINKS.contato,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.contact),
  },
  
  productShowcase: {
    label: 'Quero saber mais',
    href: LINKS.contato,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.services),
  },
  
  navbarCta: {
    label: 'Fale Conosco',
    href: LINKS.contato,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.default),
  },
  
  cases: {
    label: 'Ver todos os cases',
    href: LINKS.portfolio,
    whatsapp: getWhatsAppUrl(WHATSAPP_MESSAGES.portfolio),
  },
};
