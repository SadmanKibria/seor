'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { updateProduct } from '@/app/actions/update-product';

export function EditProductForm({ product }: { product: any }) {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const slug = formData.get('slug') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const category = (formData.get('category') as string).toLowerCase();
    const imagesString = formData.get('images') as string;
    const images = imagesString.split(',').map((url) => url.trim());

    await updateProduct(product.id, {
      name,
      slug,
      description,
      price,
      category,
      images,
    });

    toast.success('Product updated successfully!');
    router.push('/admin/products');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
          name="name"
          defaultValue={product.name}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Slug</label>
        <input
          name="slug"
          defaultValue={product.slug}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Description</label>
        <textarea
          name="description"
          defaultValue={product.description}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Price (£)</label>
        <input
          type="number"
          step="0.01"
          name="price"
          defaultValue={product.price}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Category</label>
        <input
          name="category"
          defaultValue={product.category}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">
          Image URLs (comma separated)
        </label>
        <input
          name="images"
          defaultValue={product.images.join(', ')}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded hover:opacity-90"
      >
        Save Changes
      </button>
    </form>
  );
}
