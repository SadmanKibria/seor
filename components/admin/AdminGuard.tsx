'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const allowedAdmins = ['sadmankibria3@gmail.com'];

export default function AdminGuard({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (
        !user ||
        !allowedAdmins.includes(user.primaryEmailAddress?.emailAddress || '')
      ) {
        router.push('/');
      }
    }
  }, [user, isLoaded, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (
    !user ||
    !allowedAdmins.includes(user.primaryEmailAddress?.emailAddress || '')
  ) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Access Denied</h1>
      </div>
    );
  }

  return <>{children}</>;
}
