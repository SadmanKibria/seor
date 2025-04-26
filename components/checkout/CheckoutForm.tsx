'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { createOrder } from '@/app/actions/create-order';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/cart-context';

export default function CheckoutForm() {
  const router = useRouter();
  const { user } = useUser();
  const { items, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  }

  function calculateTotalPrice() {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log('User from Clerk:', user);

    const newErrors: typeof errors = {
      fullName: '',
      email: '',
      address: '',
      city: '',
      postcode: '',
    };

    // Validation
    if (!formData.fullName.trim())
      newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required.';

    const hasErrors = Object.values(newErrors).some((error) => error !== '');

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    if (!user?.id) {
      toast.error('You must be logged in to place an order.');
      return;
    }

    if (items.length === 0) {
      toast.error('Your cart is empty.');
      return;
    }

    try {
      await createOrder({
        userId: user.id,
        totalPrice: calculateTotalPrice(),
        cartItems: items.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
      });

      clearCart();

      toast.success('Order placed successfully!');
      router.push('/thank-you');
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-sm shadow-sm space-y-6"
    >
      <h2 className="text-lg font-serif font-light mb-6">Billing Details</h2>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Street Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="House number and street name"
            className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          {errors.address && (
            <p className="text-xs text-red-500 mt-1">{errors.address}</p>
          )}
        </div>

        {/* City and Postcode */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.city && (
              <p className="text-xs text-red-500 mt-1">{errors.city}</p>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-2">Postcode</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              placeholder="Postcode"
              className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.postcode && (
              <p className="text-xs text-red-500 mt-1">{errors.postcode}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 text-sm rounded-none hover:bg-black transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
}
