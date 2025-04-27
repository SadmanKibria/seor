export default function LoadingAdminOrdersPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Orders</h1>

      <div className="overflow-x-auto">
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="h-12 bg-gray-200 animate-pulse rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
