'use server';

import { prisma } from '@/lib/prisma';

export async function markOrderAsCompleted(orderId: string) {
  await prisma.order.update({
    where: { id: orderId },
    data: { status: 'Completed' },
  });
}
