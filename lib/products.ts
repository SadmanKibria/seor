import { prisma } from '@/lib/prisma';

export async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      category: true,
      price: true,
      createdAt: true,
    },
  });

  return products;
}
