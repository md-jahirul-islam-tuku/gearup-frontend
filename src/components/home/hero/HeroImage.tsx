import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">
      <Image
        src="/images/gear_hero_image.png"
        alt="Sports Gear"
        width={700}
        height={700}
        priority
        className="mx-auto rounded-2xl object-cover"
      />
    </div>
  );
}
