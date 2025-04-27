'use client';

type ProductType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[];
};

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { updateProduct } from '@/app/actions/update-product';
import { useState } from 'react';

export function EditProductForm({ product }: { product: ProductType }) {
  const router = useRouter();
  const [uploadedImages, setUploadedImages] = useState<string[]>(
    product.images || []
  );
  const [uploading, setUploading] = useState(false);

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'seor_upload');

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/di5gzj58g/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await res.json();

    if (data.secure_url) {
      setUploadedImages((prev) => [...prev, data.secure_url]);
      toast.success('Image uploaded!');
    } else {
      toast.error('Image upload failed.');
    }

    setUploading(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const slug = formData.get('slug') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const category = (formData.get('category') as string).toLowerCase();

    await updateProduct(product.id, {
      name,
      slug,
      description,
      price,
      category,
      images: uploadedImages,
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

      {/* Cloudinary Upload */}
      <div>
        <label className="block mb-1 font-semibold">Upload New Images</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border p-2 rounded"
        />
        {uploading && (
          <p className="text-sm text-gray-500 mt-1">Uploading...</p>
        )}

        {/* Show uploaded images */}
        <div className="flex flex-wrap gap-2 mt-2">
          {uploadedImages.map((url: string, index: number) => (
            <img
              key={index}
              src={url}
              alt="Uploaded"
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
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
