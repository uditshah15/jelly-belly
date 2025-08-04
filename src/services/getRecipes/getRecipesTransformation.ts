import { GetRecipesResponse } from './getRecipesValidation';

type TransformedRecipe = {
  name: string;
  description: string;
  totalTime: string;
};

export type TransformedRecipes = {
  items: TransformedRecipe[];
};

export function transformGetRecipesResponse(response: GetRecipesResponse): TransformedRecipes {
  return {
    items: response.items.map((item) => ({
      name: item.name,
      description: item.description,
      totalTime: item.totalTime,
    })),
  };
}