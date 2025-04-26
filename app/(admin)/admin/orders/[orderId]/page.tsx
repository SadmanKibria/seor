import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { markOrderAsCompleted } from '@/app/actions/update-order-status';
import { revalidatePath } from 'next/cache';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

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

  async function handleMarkCompleted() {
    'use server';
    await markOrderAsCompleted(order.id);
    revalidatePath(`/admin/orders/${order.id}`); // refresh this page
    redirect(`/admin/orders/${order.id}`);
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">Order Details</h1>
          <p className="text-gray-700">Order ID: {order.id}</p>
          <p className="text-gray-700">Customer: {order.user.email}</p>
          <p className="text-gray-700">Total: £{order.totalPrice.toFixed(2)}</p>

          {/* Status Badge */}
          <div className="mt-2">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                order.status === 'Completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {order.status}
            </span>
          </div>

          <p className="text-gray-700 mt-2">
            Created: {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>

        {/* Mark Completed Button */}
        {order.status !== 'Completed' && (
          <form action={handleMarkCompleted}>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Mark as Completed
            </Button>
          </form>
        )}
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
