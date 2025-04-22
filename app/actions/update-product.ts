'use server';

import { prisma } from '@/lib/prisma';

export async function updateProduct(
  productId: string,
  data: {
    name: string;
    slug: string;
    description: string;
    price: number;
    category: string;
    images: string[];
  }
) {
  await prisma.product.update({
    where: { id: productId },
    data,
  });
}
