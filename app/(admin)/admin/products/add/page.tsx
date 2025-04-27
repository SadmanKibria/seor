'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createProduct } from '@/app/actions/create-product';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().min(0),
  category: z.string().min(1),
  images: z.array(z.string()).min(1),
});

export default function AddProductPage() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

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
      setValue('images', [...uploadedImages, data.secure_url]);
      toast.success('Image uploaded!');
    } else {
      toast.error('Image upload failed.');
    }

    setUploading(false);
  }

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await createProduct({
      ...data,
    });
    toast.success('Product created successfully!');
    router.push('/admin/products');
    router.refresh();
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
            step="0.01"
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
          <label className="block mb-1 font-semibold">Upload Images</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border p-2 rounded"
          />
          {uploading && (
            <p className="text-sm text-gray-500 mt-1">Uploading...</p>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {uploadedImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Uploaded"
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>
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
