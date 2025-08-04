'use client';

import { JellyBeanList } from '@/features';

export default function Home() {
  return (
    <div className="min-h-screen"> 
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <JellyBeanList />
      </main>
    </div>
  );
}
