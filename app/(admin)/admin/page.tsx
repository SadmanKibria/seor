import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { formatPrice } from '@/lib/format-price';

type RecentOrderType = {
  id: string;
  status: string;
  totalPrice: number;
  createdAt: Date;
  user: {
    email: string | null;
  } | null;
};

export default async function AdminDashboardPage() {
  const [totalOrders, totalProducts, totalSales, recentOrders] =
    await Promise.all([
      prisma.order.count(),
      prisma.product.count(),
      prisma.order.aggregate({
        _sum: { totalPrice: true },
      }),
      prisma.order.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: { user: true },
      }),
    ]);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Sales"
          value={formatPrice(totalSales._sum.totalPrice || 0)}
        />
        <DashboardCard title="Orders" value={totalOrders.toString()} />
        <DashboardCard title="Products" value={totalProducts.toString()} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-8 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Order ID</th>
                <th className="py-2 px-4 border-b text-left">User</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
                <th className="py-2 px-4 border-b text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order: RecentOrderType) => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b">{order.id}</td>
                  <td className="py-2 px-4 border-b">
                    {order.user?.email || 'Unknown'}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {formatPrice(order.totalPrice)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link
          href="/admin/orders"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
          View All Orders →
        </Link>
      </div>
    </div>
  );
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white shadow-sm rounded-sm p-6 border">
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
