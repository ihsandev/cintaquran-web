import Image from "next/image";

interface ICardFeature {
  image: string;
  title: string;
  description: string;
}

export default function CardFeature({
  image,
  title,
  description,
}: ICardFeature) {
  return (
    <div className="flex items-start gap-4">
      <div>
        <Image src={image} alt={title} width={117} height={108} />
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
        <button>Selengkapnya</button>
      </div>
    </div>
  );
}
