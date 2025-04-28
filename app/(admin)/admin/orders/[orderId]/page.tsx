import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import {
  markOrderAsCompleted,
  markOrderAsPending,
} from '@/app/actions/update-order-status';
import { revalidatePath } from 'next/cache';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

type OrderItemType = {
  id: string;
  quantity: number;
  product: {
    name: string;
    price: number;
  };
};

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
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Order not found</h2>
        <Link href="/admin/orders" className="text-blue-600 hover:underline">
          ← Back to Orders
        </Link>
      </div>
    );
  }

  async function handleMarkCompleted() {
    'use server';
    if (!order) {
      throw new Error('Order not found');
    }
    await markOrderAsCompleted(order.id);
    revalidatePath(`/admin/orders/${order.id}`);
    redirect(`/admin/orders/${order.id}`);
  }

  async function handleMarkPending() {
    'use server';
    if (!order) {
      throw new Error('Order not found');
    }
    await markOrderAsPending(order.id);
    revalidatePath(`/admin/orders/${order.id}`);
    redirect(`/admin/orders/${order.id}`);
  }

  return (
    <div className="p-8 space-y-10">
      {/* Top Section: Order Overview */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-2">Order Details</h1>
          <p className="text-gray-700">
            <strong>Order ID:</strong> {order.id}
          </p>
          <p className="text-gray-700">
            <strong>Status:</strong>
            <span
              className={`ml-2 inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                order.status === 'Completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {order.status}
            </span>
          </p>
          <p className="text-gray-700">
            <strong>Total:</strong> £{order.totalPrice.toFixed(2)}
          </p>
          <p className="text-gray-700">
            <strong>Created:</strong>{' '}
            {new Date(order.createdAt).toLocaleString()}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
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
            {order.status !== 'Pending' && (
              <form action={handleMarkPending}>
                <Button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  Mark as Pending
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Billing Information */}
        <div className="bg-gray-100 p-6 rounded-md text-sm shadow-sm w-full md:w-[300px]">
          <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {order.fullName}
            </p>
            <p>
              <strong>Email:</strong> {order.email}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>City:</strong> {order.city}
            </p>
            <p>
              <strong>Postcode:</strong> {order.postcode}
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Ordered Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {order.orderItems.map((item: OrderItemType) => (
            <div
              key={item.id}
              className="border p-4 rounded-md shadow-sm space-y-2"
            >
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

      {/* Back Link */}
      <div>
        <Link
          href="/admin/orders"
          className="inline-block mt-8 text-blue-600 hover:underline"
        >
          ← Back to Orders
        </Link>
      </div>
    </div>
  );
}
