import { GetJellyBeanByIdResponse } from './getJellyBeanByIdValidation';

export type TransformedJellyBeanDetails = {
    beanId: number;
    flavorName: string;
    description: string;
    imageUrl: string;
    backgroundColor: string;
    colorGroup: string;
    groupName: string;
    ingredients: string;
    glutenFree: boolean;
    kosher: boolean;
  };

  export function transformGetJellyBeanByIdResponse(response: GetJellyBeanByIdResponse): TransformedJellyBeanDetails {
    return {
      beanId: response.beanId,
      flavorName: response.flavorName,
      description: response.description,
      imageUrl: response.imageUrl,
      backgroundColor: response.backgroundColor,
      colorGroup: response.colorGroup,
      groupName: response.groupName.join(', '),
      ingredients: transformIngredients(response.ingredients),
      glutenFree: response.glutenFree,
      kosher: response.kosher,
    };
  };

  const transformIngredients = (ingredients: string[]): string => {
    const index = ingredients.findIndex(i => i === "Contains 2% Or Less Of The Following:");
  
    if (index === -1) {
      return ingredients.join(', ');
    }
  
    const mainIngredients = ingredients.slice(0, index + 1);
    const subIngredients = ingredients.slice(index + 1);
  
    return `${mainIngredients.join(', ')} (${subIngredients.join(', ')})`;
  };