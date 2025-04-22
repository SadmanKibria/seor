import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminOrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  const order = await prisma.order.findUnique({
    where: { id: params.orderId },
    include: {
      user: true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order) {
    return <div className="p-8">Order not found.</div>;
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Order Details</h1>
        <p className="text-gray-700">Order ID: {order.id}</p>
        <p className="text-gray-700">Customer: {order.user.email}</p>
        <p className="text-gray-700">Total: £{order.totalPrice.toFixed(2)}</p>
        <p className="text-gray-700">Status: {order.status}</p>
        <p className="text-gray-700">
          Created: {new Date(order.createdAt).toLocaleString()}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="space-y-4">
          {order.orderItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-md shadow-sm">
              <p>
                <strong>Product:</strong> {item.product.name}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Price Each:</strong> £{item.product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/admin/orders"
        className="inline-block mt-6 text-blue-600 hover:underline"
      >
        ← Back to Orders
      </Link>
    </div>
  );
}
