import { prisma } from '@/lib/prisma';

export async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return products;
}
