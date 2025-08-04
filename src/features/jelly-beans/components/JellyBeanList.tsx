'use client';

import { useEffect, useState } from 'react';
import JellyBeanCard from './JellyBeanCard';
import { LoadingSpinner, ErrorMessage, Pagination } from '@/components';
import { getJellyBeans, TransformedJellyBean } from '@/services';

export default function JellyBeanList() {
  const [jellyBeans, setJellyBeans] = useState<TransformedJellyBean[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await getJellyBeans(currentPage); 
        
        setJellyBeans(response.items);
        setTotalPages(response.pagination.totalPages);
      } catch (error) {
        setError('Unable to fetch jelly beans. Please try again later.');
        console.error(error);
      }
      
      setLoading(false);
    })();
  }, [currentPage]);
  
  if (loading) {
    return (
      <div className="h-128">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage message={error} />
    );
  }

  const reverse = (idx: number) => {
    const col = Math.floor(idx / 2) + 1;

    return col % 2 === 0;
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        {jellyBeans.map((jellyBean, idx) => (
          <JellyBeanCard key={idx} {...jellyBean} isReverse={idx % 2 === 0} isLgReverse={reverse(idx)} />
        ))}
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        isLoading={loading}
      />
    </div>
  );
} 