import { formatRupiah } from "@/libs/utils";
import Image from "next/image";

interface IDonationCard {
  imageSrc: string;
  title: string;
  totalDonation: number;
  progress?: number;
  lastDay: string;
  containerClass?: string;
}

export default function DonationCard({
  imageSrc,
  title,
  totalDonation,
  progress = 0,
  lastDay,
  containerClass,
}: IDonationCard) {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl overflow-hidden ${containerClass} group`}
    >
      <figure className="relative h-[360px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="group-hover:scale-125 ease-in duration-150"
        />
      </figure>
      <div className="py-6 px-4">
        <h3 className="text-lg font-semibold line-clamp-2 cursor-pointer">
          {title}
        </h3>
        <div className="mt-9 flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-500">Dana Terkumpul</span>
            <span className="text-accents-color text-base font-semibold">
              {formatRupiah(totalDonation)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-500">Sisa Waktu</span>
            <span className="text-accents-color text-base font-semibold">
              {lastDay}
            </span>
          </div>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2 mt-5">
          <div
            className={`bg-lime-600 h-2 rounded-full`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
