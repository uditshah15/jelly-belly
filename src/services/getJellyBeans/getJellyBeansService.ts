import { transformGetJellyBeansResponse, TransformedGetJellyBeansResponse } from './getJellyBeansTransformation';
import { validateGetJellyBeansResponse, validateGetJellyBeansParams } from './getJellyBeansValidation';

const API_URL = 'https://jellybellywikiapi.onrender.com/api/Beans';

export async function getJellyBeans(page: number, groupName: string): Promise<TransformedGetJellyBeansResponse> {
  try {
    validateGetJellyBeansParams.parse({ page, groupName })

    const response = await fetch(`${API_URL}/?pageIndex=${page}&groupName=${groupName}&pageSize=10`);
    
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