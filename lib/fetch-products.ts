import { prisma } from '@/lib/prisma';
type ProductFromPrisma = {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
};

export async function getProducts() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      price: true,
      images: true,
    },
  });

  return products.map((product: ProductFromPrisma) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    image: product.images?.[0] || '/placeholder.svg',
  }));
}
