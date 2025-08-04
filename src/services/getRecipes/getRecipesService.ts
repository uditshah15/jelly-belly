import { transformGetRecipesResponse, TransformedRecipes } from './getRecipesTransformation';
import { validateGetRecipesResponse } from './getRecipesValidation';

const API_URL = 'https://jellybellywikiapi.onrender.com/api/Recipes';

export async function getRecipes(): Promise<TransformedRecipes> {
  try {
    const randomPageIndex = Math.floor(Math.random() * 12);
    const response = await fetch(`${API_URL}?pageSize=2&pageIndex=${randomPageIndex}`);
    
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
