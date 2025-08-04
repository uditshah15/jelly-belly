import { GetJellyBeansResponse } from './getJellyBeansValidation';

export type TransformedJellyBean = {
  flavorName: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  groupName: string[];
};

type Pagination = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
};

export type TransformedGetJellyBeansResponse = {
  items: TransformedJellyBean[];
  pagination: Pagination;
};

export function transformGetJellyBeansResponse(apiResponse: GetJellyBeansResponse): TransformedGetJellyBeansResponse {
  return {
    items: apiResponse.items.map((item) => ({
      flavorName: item.flavorName,
      description: item.description,
      imageUrl: item.imageUrl,
      backgroundColor: item.backgroundColor === '#' ? '#000000' : item.backgroundColor,
      groupName: item.groupName,
    })),
    pagination: {
      totalCount: apiResponse.totalCount,
      pageSize: apiResponse.pageSize,
      currentPage: apiResponse.currentPage,
      totalPages: apiResponse.totalPages,
    },
  };
}