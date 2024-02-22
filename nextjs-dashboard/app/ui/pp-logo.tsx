import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

function Logo() {
    return (
        <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src="/perception-point-logo.png" alt="Perception Point Logo" width={300} height={112} />
    </div>
    );
}

export { Logo as default };