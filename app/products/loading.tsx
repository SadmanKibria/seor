export default function LoadingProductsPage() {
  return (
    <div className="min-h-screen py-16 px-4 container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-gray-200 animate-pulse rounded-md h-60"
          />
        ))}
      </div>
    </div>
  );
}
