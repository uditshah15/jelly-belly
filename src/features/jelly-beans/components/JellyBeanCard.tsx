'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { gsap } from 'gsap';

type JellyBeanCardProps = {
  beanId: number;
  flavorName: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  isReverse?: boolean;
  isLgReverse?: boolean;
}

export default function JellyBeanCard(props: JellyBeanCardProps) {
  const { beanId, flavorName, description, imageUrl, backgroundColor, isReverse, isLgReverse } = props;
  const router = useRouter();
  const textBoxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const reverseClass = () => {
    const classes = [
      isReverse ? 'flex-row-reverse' : '',
      isLgReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    ];

    return classes.join(' ');
  }

  const handleMouseEnter = () => {
    if (!textBoxRef.current || !titleRef.current || !descriptionRef.current) {
      return;
    }

    gsap.to([titleRef.current, descriptionRef.current], {
      color: '#fff',
      duration: 0.5,
      ease: 'power2.inOut'
    });

    gsap.fromTo(
      textBoxRef.current,
      {
        x: isLgReverse ? '100%' : '-100%',
      },
      {
        x: '0%',
        backgroundColor: backgroundColor,
        duration: 0.5,
        ease: 'power2.inOut',
      }
    );
    
  };

  const handleMouseLeave = () => {
    if (!textBoxRef.current || !titleRef.current || !descriptionRef.current) {
      return;
    }

    gsap.to(textBoxRef.current, {
      backgroundColor: '#ffffff',
      duration: 0.5,
      ease: 'power2.out'
    });

    gsap.to([titleRef.current, descriptionRef.current], {
      color: '#111827',
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleClick = () => {
    router.push(`/bean/${beanId}`);
  };

  return (
    <div>
      <div 
        className={`flex flex-row h-64 lg:h-80 bg-white ${reverseClass()} cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className={`flex justify-center w-1/2`} style={{ background: backgroundColor }}>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={flavorName}
              height={180}
              width={180}
              className='object-contain'
            />
          )}
        </div>

        <div 
          ref={textBoxRef}
          className='p-4 md:p-8 w-1/2'
        >
          <h3 
            ref={titleRef}
            className='mb-4 text-xl md:text-2xl font-semibold'
          >
            {flavorName}
          </h3>
          
          {description && (
            <p 
              ref={descriptionRef}
              className='text-sm md:text-base'
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 