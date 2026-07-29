import Image from "next/image";

type Props = {
  images: string[];
};

export default function GearGallery({ images }: Props) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-xl border">
        <Image src={images[0]} alt="Gear" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <div
            key={image}
            className="relative aspect-square overflow-hidden rounded-lg border"
          >
            <Image src={image} alt="Gear" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
