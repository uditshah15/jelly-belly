import { GetJellyBeansResponse } from './getJellyBeansValidation';

export type TransformedJellyBean = {
  flavorName: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  groupName: string[];
};

export function transformGetJellyBeansResponse(apiResponse: GetJellyBeansResponse): TransformedJellyBean[] {
  return apiResponse.items.map((item) => ({
    flavorName: item.flavorName,
    description: item.description,
    imageUrl: item.imageUrl,
    backgroundColor: item.backgroundColor === '#' ? '#000000' : item.backgroundColor,
    groupName: item.groupName,
  }));
}