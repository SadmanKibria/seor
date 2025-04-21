'use client';

export default function CheckoutForm() {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm space-y-6">
      <h2 className="text-lg font-serif font-light mb-6">Billing Details</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Street Address
          </label>
          <input
            type="text"
            placeholder="House number and street name"
            className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-2">City</label>
            <input
              type="text"
              placeholder="City"
              className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-2">Postcode</label>
            <input
              type="text"
              placeholder="Postcode"
              className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
