'use server';

import { prisma } from '@/lib/prisma';

export async function createOrder(data: {
  userId: string;
  totalPrice: number;
  cartItems: { productId: string; quantity: number }[];
}) {
  const order = await prisma.order.create({
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

  return order;
}
