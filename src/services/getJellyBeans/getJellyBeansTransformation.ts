import { GetJellyBeansResponse } from './getJellyBeansValidation';

export type TransformedJellyBean = {
  beanId: number;
  flavorName: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  groupName: string[];
};

type Pagination = {
  pageSize: number;
  currentPage: number;
  totalPages: number;
};

export type TransformedGetJellyBeansResponse = {
  items: TransformedJellyBean[];
  pagination: Pagination;
};

export function transformGetJellyBeansResponse(response: GetJellyBeansResponse): TransformedGetJellyBeansResponse {
  return {
    items: response.items.map((item) => ({
      beanId: item.beanId,
      flavorName: item.flavorName,
      description: item.description,
      imageUrl: item.imageUrl,
      backgroundColor: item.backgroundColor === '#' ? '#000000' : item.backgroundColor,
      groupName: item.groupName,
    })),
    pagination: {
      pageSize: response.pageSize,
      currentPage: response.currentPage,
      totalPages: response.totalPages,
    },
  };
}