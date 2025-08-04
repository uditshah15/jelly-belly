'use client';

import { useEffect, useState } from 'react';
import JellyBeanCard from './JellyBeanCard';
import { LoadingSpinner, ErrorMessage, Pagination } from '@/components';
import { getJellyBeans, TransformedJellyBean } from '@/services';
import Filter from './Filter';

export default function JellyBeanList() {
  const [jellyBeans, setJellyBeans] = useState<TransformedJellyBean[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedGroup, setSelectedGroup] = useState<string>('');

  const handleGroupChange = (group: string) => {
    setSelectedGroup(group);
    setCurrentPage(1);
  };

  const reverse = (idx: number) => {
    const col = Math.floor(idx / 2) + 1;
    return col % 2 === 0;
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await getJellyBeans(currentPage, selectedGroup); 
        
        setJellyBeans(response.items);
        setTotalPages(response.pagination.totalPages);
      } catch (error) {
        setError('Unable to fetch jelly beans. Please try again later.');
        console.error(error);
      }
      
      setLoading(false);
    })();
  }, [currentPage, selectedGroup]);
  
  if (loading) {
    return (
      <>
        <Filter 
          selectedGroup={selectedGroup}
          onGroupChange={handleGroupChange}
          isLoading={loading}
        />
  
        <div className='pt-12 md:pt-24'>
          <LoadingSpinner />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <ErrorMessage message={error} />
    );
  }

  return (
    <div className='w-full'>
        <Filter 
          selectedGroup={selectedGroup}
          onGroupChange={handleGroupChange}
          isLoading={loading}
        />

      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
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