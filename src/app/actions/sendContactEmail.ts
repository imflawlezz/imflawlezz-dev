'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
});

export async function sendContactEmail(formData: FormData) {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
        return { error: 'Invalid form data' };
    }

    try {
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: process.env.RESEND_TO_EMAIL!,
            subject: `New message from ${parsed.data.name}`,
            replyTo: parsed.data.email,
            text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
        });

        return { success: true };
    } catch (error) {
        console.error('Resend error:', error);
        return { error: 'Failed to send email' };
    }
}
