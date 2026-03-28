export const LINKS = {
  home: '/',
  servicos: '/servicos',
  portfolio: '/portfolio',
  sobre: '/sobre',
  contato: '/contato',
  
  termosDeUso: '/termos-de-uso',
  politicaPrivacidade: '/politica-de-privacidade',
  
  diferenciais: '#diferenciais',
  solucoes: '#solucoes',
  contatoSection: '#contato',
  
  linkedin: 'https://linkedin.com/company/desenrolaai',
  instagram: 'https://instagram.com/desenrolaai',
  
  whatsapp: {
    number: '5511999999999',
    baseUrl: 'https://wa.me',
  },
};

export const WHATSAPP_MESSAGES = {
  default: 'Olá! Vim pelo site da DesenrolaAI e gostaria de mais informações.',
  contact: 'Olá! Gostaria de entrar em contato com a DesenrolaAI.',
  services: 'Olá! Tenho interesse nos serviços da DesenrolaAI. Podem me ajudar?',
  portfolio: 'Olá! Vim pelo site e gostaria de ver alguns cases de sucesso.',
  budget: 'Olá! Gostaria de solicitar um orçamento para um projeto.',
};

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || WHATSAPP_MESSAGES.default);
  return `${LINKS.whatsapp.baseUrl}/${LINKS.whatsapp.number}?text=${text}`;
}

export function getContatoUrl(message?: string): string {
  if (message) {
    return `${LINKS.contato}?msg=${encodeURIComponent(message)}`;
  }
  return LINKS.contato;
}
