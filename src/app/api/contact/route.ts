import { NextResponse } from 'next/server';

interface ContactPayload {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    interest?: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
        
        console.log('[API /contact] CONTACT_WEBHOOK_URL:', webhookUrl);

        if (!webhookUrl) {
            console.error('[API /contact] CONTACT_WEBHOOK_URL não configurada');
            return NextResponse.json(
                { error: 'Configuração inválida' },
                { status: 500 }
            );
        }

        const body: ContactPayload = await request.json();

        const payload = {
            ...body,
            timestamp: new Date().toISOString(),
        };

        console.log('[API /contact] Enviando para webhook:', webhookUrl);
        console.log('[API /contact] Payload:', payload);

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[API /contact] Webhook error:', response.status, errorText);
            return NextResponse.json(
                { error: 'Falha ao enviar formulário' },
                { status: response.status }
            );
        }

        console.log('[API /contact] Sucesso!');
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[API /contact] Erro:', error);
        return NextResponse.json(
            { error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
