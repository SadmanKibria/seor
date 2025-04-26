'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export type BillingData = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postcode: string;
};

export default function CheckoutForm({
  onSave,
}: {
  onSave: (data: BillingData) => void;
}) {
  const [formData, setFormData] = useState<BillingData>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
  });

  const [errors, setErrors] = useState<Partial<BillingData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof BillingData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Partial<BillingData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Required.';
    if (!formData.email.trim()) newErrors.email = 'Required.';
    if (!formData.address.trim()) newErrors.address = 'Required.';
    if (!formData.city.trim()) newErrors.city = 'Required.';
    if (!formData.postcode.trim()) newErrors.postcode = 'Required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      onSave(formData);
      toast.success('Billing details saved!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to save billing info.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-sm shadow-sm space-y-6"
    >
      <h2 className="text-lg font-serif font-light mb-6">Billing Details</h2>

      <div className="space-y-4">
        {['fullName', 'email', 'address', 'city', 'postcode'].map((field) => (
          <div key={field}>
            <label className="block text-sm text-gray-700 mb-2 capitalize">
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={formData[field as keyof BillingData]}
              onChange={handleChange}
              placeholder={field === 'email' ? 'you@example.com' : ''}
              className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors[field as keyof BillingData] && (
              <p className="text-xs text-red-500 mt-1">
                {errors[field as keyof BillingData]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-900 text-white py-3 text-sm rounded-none hover:bg-black transition disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save & Continue'}
        </button>
      </div>
    </form>
  );
}
