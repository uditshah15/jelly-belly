import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

  return (
    <header className="flex justify-center py-8">
      <Link href="/">
        <Image 
            src="/jelly-belly-logo.webp" 
            alt="Jelly Belly Logo"
            width={160}
            height={160}
          />
      </Link>
    </header>
  );
} 