import { z } from 'zod';

export const validateGetJellyBeanByIdResponse = z.object({
  beanId: z.number().positive(),
  flavorName: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  backgroundColor: z.string(),
  colorGroup: z.string(),
  groupName: z.array(z.string()),
  ingredients: z.array(z.string()),
  glutenFree: z.boolean(),
  kosher: z.boolean(),
});

export const validateGetJellyBeanByIdParams = z.object({
  beanId: z.number().positive(),
});

export type GetJellyBeanByIdResponse = z.infer<typeof validateGetJellyBeanByIdResponse>; 