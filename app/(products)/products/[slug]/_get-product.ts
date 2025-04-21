import { prisma } from '@/lib/prisma';

export async function getProduct(slug: string) {
  const product = await prisma.product.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      price: true,
      images: true,
    },
  });

  return product;
}
