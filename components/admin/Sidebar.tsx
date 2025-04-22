'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const adminLinks = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/products/add', label: 'Add Product' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <div className="h-full flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="flex flex-col space-y-4">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium hover:text-black ${
                pathname === link.href ? 'text-black' : 'text-gray-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
