'use server';

import { prisma } from '@/lib/prisma';
import { clerkClient } from '@clerk/clerk-sdk-node';

export async function createOrder(data: {
  userId: string;
  totalPrice: number;
  cartItems: { productId: string; quantity: number }[];
}) {
  console.log('🔵 createOrder received userId:', data.userId);

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

    console.log('✅ User created successfully in Prisma.');
  }

  console.log('✅ User confirmed. Creating order.');

  return prisma.order.create({
    data: {
      userId: data.userId,
      totalPrice: data.totalPrice,
      orderItems: {
        create: data.cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      },
    },
  });
}
