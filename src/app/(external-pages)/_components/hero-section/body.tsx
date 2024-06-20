import Image from 'next/image';
import heroImage from '../../public/image.png';
export function HeroImage() {
  return (
    <div className="max-w-[1104px] h-[514px] rounded-lg overflow-hidden relative">
      <Image
        src={heroImage}
        alt="Desk"
        className="w-[1104px] h-full object-cover"
      />
    </div>
  );
}
