'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LoadingSpinner, ErrorMessage } from '@/components';
import { getJellyBeanDetails, TransformedJellyBeanDetails, TransformedRecipes } from '@/services';
import { Hero, Details, Recipes } from '@/features';

export default function JellyBeanDetailPage() {
  const params = useParams();
  const beanId = Number(params.beanId);
  
  const [jellyBean, setJellyBean] = useState<TransformedJellyBeanDetails | null>(null);
  const [recipes, setRecipes] = useState<TransformedRecipes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { jellyBean, recipes } = await getJellyBeanDetails(beanId);

        setJellyBean(jellyBean);
        setRecipes(recipes);
      } catch (error) {
        setError('Unable to fetch data. Please try again later.');
        console.error(error);
      }
      
      setLoading(false);
    })();
  }, [beanId]);

  if (loading) {
    return (
      <div className="pt-24">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage message={error} />
    );
  }

  if (jellyBean === null || recipes === null) {
    return (
      <ErrorMessage message="Unable to fetch data. Please try again later." />
    );
  }

  const { imageUrl, flavorName, backgroundColor, colorGroup, description, groupName, ingredients, glutenFree, kosher } = jellyBean;

  return (
    <>
      <main>
        <Hero imageUrl={imageUrl} flavorName={flavorName} />

        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
          <Details 
            backgroundColor={backgroundColor}
            description={description} 
            groupName={groupName} 
            ingredients={ingredients} 
            glutenFree={glutenFree} 
            kosher={kosher} 
          />
          
          <Recipes colorGroup={colorGroup} recipes={recipes} />
        </div>
      </main>
    </>
  );
};