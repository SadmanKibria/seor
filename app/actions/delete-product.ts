'use server';

import { prisma } from '@/lib/prisma';

export async function deleteProduct(productId: string) {
  await prisma.product.delete({
    where: { id: productId },
  });
}
