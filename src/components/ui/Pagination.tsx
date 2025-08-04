'use client';

import { Button } from '@/components';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  isLoading 
}: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage || isLoading}
      >
        Previous
      </Button>

      <span>{currentPage} / {totalPages}</span>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage || isLoading}
      >
        Next
      </Button>
    </div>
  );
} 