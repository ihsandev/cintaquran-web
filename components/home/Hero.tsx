import Image from "next/image";
import MyButton from "../Button";
import IconText from "../IconText";

export default function Hero() {
  return (
    <div className="mx-auto max-w-[1140px] flex items-center gap-12 flex-col md:flex-row">
      <figure className="flex-1 md:px-0 px-2">
        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          Dukung Program Dakwah Syiar Qur’an Project.
        </h1>
        <p className="text-base">
          Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan
          program-program islami terbaik dan kreatif.
        </p>
        <div className="mt-8">
          <MyButton
            className="bg-accents-color text-white px-4 py-[15px] text-base font-semibold"
            rightIcon={
              <img src="/icon/ic-arrow-right.svg" alt="donation-button-icon" />
            }
          >
            Donasi Sekarang
          </MyButton>
        </div>
        <div className="flex items-baseline gap-6 mt-16">
          <IconText
            title="Kajian Perkantoran"
            iconSrc="/icon/ic-kajian.svg"
            counter={124}
          />
          <IconText
            title="Majelis Cinta Quran"
            iconSrc="/icon/ic-mosque.svg"
            counter={43}
          />
          <IconText
            title="Kajian Online"
            iconSrc="/icon/ic-kajian-online.svg"
            counter={92}
          />
        </div>
      </figure>
      <figure className="flex-1">
        <Image
          src="/hero-image.png"
          alt="hero-image"
          width={1000}
          height={800}
          className="md:w-full md:h-full w-4/5"
        />
      </figure>
    </div>
  );
}
