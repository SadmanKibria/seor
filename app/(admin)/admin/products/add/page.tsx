'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { addProduct } from '@/lib/products';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().min(0),
  category: z.string().min(1),
  images: z.string().min(1), // comma-separated URLs
});

export default function AddProductPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const imagesArray = data.images.split(',').map((url) => url.trim());
    await addProduct({
      ...data,
      images: imagesArray,
    });
    router.push('/admin/products');
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input {...register('name')} className="w-full border p-2 rounded" />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Slug</label>
          <input {...register('slug')} className="w-full border p-2 rounded" />
          {errors.slug && (
            <p className="text-red-500 text-sm">{errors.slug.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            {...register('description')}
            className="w-full border p-2 rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Price (£)</label>
          <input
            type="number"
            {...register('price')}
            className="w-full border p-2 rounded"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <input
            {...register('category')}
            className="w-full border p-2 rounded"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Image URLs (comma separated)
          </label>
          <input
            {...register('images')}
            className="w-full border p-2 rounded"
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white px-6 py-2 rounded hover:opacity-90"
        >
          {isSubmitting ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}
