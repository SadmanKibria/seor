import { getProducts } from '@/lib/products';
import { DeleteProductButton } from '@/components/admin/DeleteProductButton';
import { formatPrice } from '@/lib/format-price';
import Link from 'next/link';

type ProductType = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  createdAt: Date;
};

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      {products.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Created
                </th>
                <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: ProductType) => (
                <tr key={product.id} className="border-t">
                  <td className="py-4 px-6 text-sm">{product.name}</td>
                  <td className="py-4 px-6 text-sm capitalize">
                    {product.category}
                  </td>
                  <td className="py-4 px-6 text-sm">
                    {formatPrice(product.price)}
                  </td>
                  <td className="py-4 px-6 text-sm">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 flex justify-center items-center space-x-4">
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </Link>
                    <DeleteProductButton productId={product.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
