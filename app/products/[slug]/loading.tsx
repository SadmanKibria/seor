export default function LoadingProductDetailPage() {
  return (
    <div className="min-h-screen py-16 px-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image skeleton */}
        <div className="bg-gray-200 animate-pulse rounded-md h-96" />
        {/* Info skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-2/3 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-32 w-full bg-gray-200 rounded-md animate-pulse" />
          <div className="h-12 w-1/3 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}
