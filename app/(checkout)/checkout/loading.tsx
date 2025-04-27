export default function LoadingCheckoutPage() {
  return (
    <div className="min-h-screen py-16 px-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Billing Form */}
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="h-10 bg-gray-200 animate-pulse rounded-md"
            />
          ))}
          <div className="h-12 bg-gray-300 animate-pulse rounded-md" />
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <div className="h-40 bg-gray-200 animate-pulse rounded-md" />
          <div className="h-20 bg-gray-300 animate-pulse rounded-md" />
        </div>
      </div>
    </div>
  );
}
