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

export async function addProduct(data: {
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}) {
  await prisma.product.create({
    data,
  });
}

export async function deleteProduct(productId: string) {
  await prisma.product.delete({
    where: { id: productId },
  });
}
