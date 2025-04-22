'use client';

import { deleteProduct } from '@/app/actions/delete-product'; // NEW import
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function DeleteProductButton({ productId }: { productId: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(productId);
      toast.success('Product deleted successfully!');
      router.refresh();
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:underline text-sm"
    >
      Delete
    </button>
  );
}
