import { z } from 'zod';

export const validateGetRecipesResponse = z.object({
  items: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      totalTime: z.string(),
    })
  ),
});

export type GetRecipesResponse = z.infer<typeof validateGetRecipesResponse>; 