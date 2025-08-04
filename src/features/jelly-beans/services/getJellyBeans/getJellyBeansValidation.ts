import { z } from 'zod';

export const validateJellyBean = z.object({
  flavorName: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  backgroundColor: z.string(),
  groupName: z.array(z.string()),
});

export const validateGetJellyBeansResponse = z.object({
  items: z.array(validateJellyBean),
});

export const validateGetJellyBeansParams = z.object({
  page: z.number().positive(),
  pageSize: z.number().positive(),
});

export type GetJellyBeansResponse = z.infer<typeof validateGetJellyBeansResponse>;