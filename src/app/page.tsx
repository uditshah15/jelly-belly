'use client';

import { JellyBeanList } from '@/features/jelly-beans';
import { Header, Footer } from '@/components/layout';

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
 
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <JellyBeanList />
      </main>
 
      <Footer />
    </div>
  );
}
