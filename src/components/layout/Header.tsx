import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-center py-8">
      <Image 
        src="/jelly-belly-logo.webp" 
        alt="Jelly Belly Logo"
        width={160}
        height={160}
      />
    </header>
  );
} 