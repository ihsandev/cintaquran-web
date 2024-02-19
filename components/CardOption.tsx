import Image from "next/image";
import MyButton from "./Button";

interface ICardOption {
  title?: string;
  description?: string;
  date?: string;
  time?: string;
  smallTitle?: string;
  image?: string;
  height?: string;
  className?: string;
  isLive?: boolean;
}

export default function CardOption({
  title,
  description,
  date,
  time,
  smallTitle,
  image = "/img/img4.jpg",
  height = "200px",
  className,
  isLive,
}: ICardOption) {
  return (
    <div
      className={`w-full h-[${height}] relative overflow-hidden rounded-3xl p-8 flex cursor-pointer group ${className}`}
    >
      {isLive && (
        <MyButton
          disabled
          className="absolute top-4 left-4 z-10 bg-red-500 text-white border-none"
          leftIcon={<img src="/icon/ic-live-white.svg" alt="live badge" />}
        >
          Sedang Berlangsung
        </MyButton>
      )}
      {image && (
        <Image
          className="absolute group-hover:scale-125 ease-in duration-150"
          fill
          src={image}
          alt="card-option"
        />
      )}
      <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-gradient-to-t from-stone-900 to-transparent" />
      <div className="relative self-end text-white">
        {smallTitle && <h6>{smallTitle}</h6>}
        <h3 className="text-2xl font-semibold">{title}</h3>
        {description && <p>{description}</p>}
        {date && time && (
          <div className="mt-4">
            <p className="text-yellow-400">{date}</p>
            <p>{time}</p>
          </div>
        )}
      </div>
    </div>
  );
}
