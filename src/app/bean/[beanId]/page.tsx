'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LoadingSpinner, ErrorMessage } from '@/components';
import { getJellyBeanById, TransformedJellyBeanDetails } from '@/services';
import { Hero, Details } from '@/features';

export default function JellyBeanDetailPage() {
  const params = useParams();
  const router = useRouter();

  const beanId = Number(params.beanId);
  
  const [jellyBean, setJellyBean] = useState<TransformedJellyBeanDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await getJellyBeanById(beanId);
        setJellyBean(data);
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

  if (!jellyBean) {
    return (
      <ErrorMessage message="Jelly bean not found" />
    );
  }

  const { imageUrl, flavorName, backgroundColor, description, groupName, ingredients, glutenFree, kosher } = jellyBean;

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
          
          <div className='p-8 lg:p-12 text-white' style={{ background: jellyBean.colorGroup }}>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              Recipes
            </h3> 
          </div>
        </div>
      </main>
    </>
  );
};