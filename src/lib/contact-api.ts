export interface ContactPayload {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    interest?: string;
    message: string;
}

interface ContactApiResponse {
    success: boolean;
    error?: string;
}

export async function sendContactForm(data: ContactPayload): Promise<ContactApiResponse> {
    console.log('[ContactForm] Enviando para /api/contact');

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log('[ContactForm] Response status:', response.status);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('[ContactForm] Erro da API:', errorData);
            throw new Error(errorData.error || 'Falha ao enviar formulário');
        }

        return { success: true };
    } catch (error) {
        console.error('[ContactForm] Erro:', error);
        if (error instanceof TypeError && error.message.includes('fetch')) {
            throw new Error('Erro de conexão. Verifique sua internet.');
        }
        throw error;
    }
}
