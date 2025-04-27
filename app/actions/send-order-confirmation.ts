'use server';

import { resend } from '@/lib/resend';

interface SendOrderEmailProps {
  to: string;
  fullName: string;
  orderId: string;
  totalPrice: number;
}

export async function sendOrderConfirmationEmail({
  to,
  fullName,
  orderId,
  totalPrice,
}: SendOrderEmailProps) {
  try {
    const data = await resend.emails.send({
      from: 'SEOR <orders@seorstore.com>', // add domain here
      to: [to],
      subject: `Thank you for your order, ${fullName}!`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1>Thank you for shopping with SEOR!</h1>
          <p>Hi ${fullName},</p>
          <p>We have received your order <strong>#${orderId.slice(0, 8)}...</strong>.</p>
          <p><strong>Total Paid:</strong> £${totalPrice.toFixed(2)}</p>
          <p>We are now processing your order and will notify you once it's shipped!</p>
          <br />
          <p>Warm regards,</p>
          <p>The SEOR Team</p>
        </div>
      `,
    });

    return data;
  } catch (error) {
    console.error('Failed to send email', error);
    throw new Error('Email failed');
  }
}
