import { TransformedJellyBeanDetails, transformGetJellyBeanByIdResponse } from './getJellyBeanByIdTransformation';
import { validateGetJellyBeanByIdResponse, validateGetJellyBeanByIdParams } from './getJellyBeanByIdValidation';

const JELLY_BELLY_API_BASE = 'https://jellybellywikiapi.onrender.com/api/Beans';

export async function getJellyBeanById(beanId: number): Promise<TransformedJellyBeanDetails> {
  try {
    validateGetJellyBeanByIdParams.parse({ beanId });

    const response = await fetch(`${JELLY_BELLY_API_BASE}/${beanId}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch jelly bean data.");
    }

    const data = await response.json();

    validateGetJellyBeanByIdResponse.parse(data);

    return transformGetJellyBeanByIdResponse(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch jelly bean data.");
  }
} 