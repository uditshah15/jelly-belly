import Image from 'next/image';

export default function LoadingSpinner() {
  const loadingGifs = [
    '/loading-1.gif',
    '/loading-2.webp',
    '/loading-3.webp',
     ];

  return (
    <div className="flex items-center justify-center flex-col">
      <Image 
        src={loadingGifs[Math.floor(Math.random() * loadingGifs.length)]}
        alt="Loading animation"
        width={256}
        height={256}
        className="mb-4"
      />
      <h3 className="text-lg font-semibold">Loading...</h3>
    </div>
  );
} 