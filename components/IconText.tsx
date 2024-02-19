import Image from "next/image";
import { ReactNode } from "react";

interface IIconText {
  icon?: ReactNode;
  iconSrc?: string;
  title: string;
  counter?: number;
  icSize?: number;
  direction?: "col" | "row";
  className?: string;
}

export default function IconText({
  icon,
  iconSrc,
  title,
  counter,
  icSize = 24,
  direction = "col",
  className,
}: IIconText) {
  return (
    <div className={`flex flex-${direction} gap-y-2 ${className}`}>
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={`ic-${title}`}
          width={icSize}
          height={icSize}
          className={`w-[${icSize}px] h-[${icSize}]px`}
        />
      ) : (
        icon
      )}
      <span>{title}</span>
      {counter && (
        <span className="text-accents-color text-xl font-medium">
          +{counter}
        </span>
      )}
    </div>
  );
}
