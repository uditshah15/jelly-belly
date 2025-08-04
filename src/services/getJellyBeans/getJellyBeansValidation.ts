import { z } from 'zod';

export const validateGetJellyBeansResponse = z.object({
  pageSize: z.number(),
  currentPage: z.number(),
  totalPages: z.number(),
  items: z.array(
    z.object({
      beanId: z.number().positive(),
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