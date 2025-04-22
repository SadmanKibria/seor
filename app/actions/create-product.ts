'use server';

import { prisma } from '@/lib/prisma';

export async function createProduct(data: {
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
