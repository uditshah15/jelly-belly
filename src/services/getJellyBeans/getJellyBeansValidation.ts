import { z } from 'zod';

export const validateGetJellyBeansResponse = z.object({
  totalCount: z.number().positive(),
  pageSize: z.number().positive(),
  currentPage: z.number().positive(),
  totalPages: z.number().positive(),
  items: z.array(
    z.object({
      flavorName: z.string(),
      description: z.string(),
      imageUrl: z.string(),
      backgroundColor: z.string(),
      groupName: z.array(z.string()),
    })
  ).nonempty(),
});

export const validateGetJellyBeansParams = z.object({
  page: z.number().positive(),
  groupName: z.string(),
});

export type GetJellyBeansResponse = z.infer<typeof validateGetJellyBeansResponse>;