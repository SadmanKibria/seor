import { prisma } from '@/lib/prisma';
import { EditProductForm } from '@/components/admin/EditProductForm';

export default async function EditProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: params.productId },
  });

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
      <EditProductForm product={product} />
    </div>
  );
}
