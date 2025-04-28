import { prisma } from '@/lib/prisma';

export async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      slug: true,
      category: true,
      price: true,
      createdAt: true,
      images: true,
    },
  });

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    price: product.price,
    createdAt: product.createdAt,
    image: product.images?.[0] || '/placeholder.svg',
  }));
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
