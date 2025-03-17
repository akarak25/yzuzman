'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Kök yolu varsayılan dile yönlendir
export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/tr');
  }, [router]);
  
  return null;
}