'use client';

import Image from 'next/image';

type JellyBeanCardProps = {
  flavorName: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  isReverse?: boolean;
  isLgReverse?: boolean;
}

export default function JellyBeanCard(props: JellyBeanCardProps) {
  const { flavorName, description, imageUrl, backgroundColor, isReverse, isLgReverse } = props;

  const reverseClass = () => {
    const classes = [
      isReverse ? 'flex-row-reverse' : '',
      isLgReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    ];

    return classes.join(' ');
  }

  return (
    <div>
      <div className={`flex flex-row h-64 lg:h-80 bg-white ${reverseClass()}`}>
        <div className={`flex justify-center w-1/2`} style={{ background: backgroundColor }}>
          {imageUrl && (
              <Image
                src={imageUrl}
                alt={flavorName}
                height={180}
                width={180}
                className="object-contain"
              />
          )}
        </div>

        <div className="p-8 w-1/2">
          <h3 className="mb-4 text-2xl font-semibold">
            {flavorName}
          </h3>
          
          {description && (
            <p>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 