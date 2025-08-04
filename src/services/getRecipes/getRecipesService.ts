import { transformGetRecipesResponse, TransformedRecipes } from './getRecipesTransformation';
import { validateGetRecipesResponse } from './getRecipesValidation';

const RECIPES_API_BASE = 'https://jellybellywikiapi.onrender.com/api/Recipes';

const randomPageIndex = Math.floor(Math.random() * 12);

export async function getRecipes(): Promise<TransformedRecipes> {
  try {
    const response = await fetch(`${RECIPES_API_BASE}?pageSize=2&pageIndex=${randomPageIndex}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = await response.json();

    validateGetRecipesResponse.parse(data);

    return transformGetRecipesResponse(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data.");
  }
}
