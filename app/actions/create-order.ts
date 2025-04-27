'use server';

import { prisma } from '@/lib/prisma';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { BillingData } from '@/components/checkout/CheckoutForm';
import { sendOrderConfirmationEmail } from '@/app/actions/send-order-confirmation';

export async function createOrder(data: {
  userId: string;
  totalPrice: number;
  cartItems: { productId: string; quantity: number }[];
  billingDetails: BillingData;
}) {
  console.log('createOrder received userId:', data.userId);

  let user = await prisma.user.findUnique({
    where: { id: data.userId },
  });

  if (!user) {
    console.log('⚡ User not found in Prisma. Fetching from Clerk...');
    const clerkUser = await clerkClient.users.getUser(data.userId);

    if (!clerkUser) {
      throw new Error('User not found in Clerk.');
    }

    user = await prisma.user.create({
      data: {
        id: clerkUser.id,
        email: clerkUser.emailAddresses[0].emailAddress,
        name: clerkUser.firstName || '',
        password: '',
      },
    });

    console.log('User created successfully in Prisma.');
  }

  console.log('User confirmed. Creating order.');

  const order = await prisma.order.create({
    data: {
      userId: data.userId,
      totalPrice: data.totalPrice,
      fullName: data.billingDetails.fullName,
      email: data.billingDetails.email,
      address: data.billingDetails.address,
      city: data.billingDetails.city,
      postcode: data.billingDetails.postcode,
      orderItems: {
        create: data.cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      },
    },
  });

  // After order created send confirmation email
  try {
    await sendOrderConfirmationEmail({
      to: order.email,
      fullName: order.fullName,
      orderId: order.id,
      totalPrice: order.totalPrice,
    });
    console.log('Order confirmation email sent successfully.');
  } catch (error) {
    console.error('Failed to send order confirmation email:', error);
  }

  return order;
}
