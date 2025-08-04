import { transformGetJellyBeansResponse, TransformedJellyBean } from './getJellyBeansTransformation';
import { validateGetJellyBeansResponse, validateGetJellyBeansParams } from './getJellyBeansValidation';

const JELLY_BELLY_API_BASE = 'https://jellybellywikiapi.onrender.com/api/Beans';

export async function getJellyBeans(page: number = 1, pageSize: number = 24): Promise<TransformedJellyBean[]> {
  try {
    validateGetJellyBeansParams.parse({ page, pageSize })

    const response = await fetch(`${JELLY_BELLY_API_BASE}/?page=${page}&pageSize=${pageSize}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = await response.json();
    validateGetJellyBeansResponse.parse(data);

    return transformGetJellyBeansResponse(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data.");
  }
}