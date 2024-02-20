"use client";

import Slider from "react-slick";
import DonationCard from "../DonationCard";
import TitleSection from "../TitleSection";
import MyButton from "../Button";

import donations from "@/dummies/donations.json";
import donationCategories from "@/dummies/donationCategories.json";
import { useState } from "react";
import CardFeature from "../CardFeature";
import { NextArrow, PrevArrow } from "../SliderArrow";

export default function DonationOption() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const donationsFilter =
    donations.filter(
      (donation) =>
        donation.category === selectedCategory || selectedCategory === "all"
    ) ?? [];

  const slideToShow =
    donationsFilter.length % 2 === 1 ? donationsFilter.length % 3 : 3;

  return (
    <div className="mx-auto max-w-[1140px] pb-20">
      <TitleSection
        title="Donasi Pilihan"
        description="Pilih dan salurkan donasi melalui program-program kami yang berarti bagi sahabat Cinta quran."
        containerClass="mb-8"
      />
      <div className="flex md:flex-wrap justify-between mb-4 overflow-auto">
        {donationCategories.slice(0, 4).map((category) => (
          <MyButton
            key={category.name}
            leftIcon={<img src={category.icon} alt={category.name} />}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
            className={`text-xs md:text-base${
              selectedCategory === category.name &&
              "text-accents-color border-accents-color bg-accents-color bg-opacity-10"
            }`}
          >
            {category.label}
          </MyButton>
        ))}
        <MyButton
          leftIcon={<img src="/icon/ic-other.svg" alt="other category" />}
        >
          Lainnya
        </MyButton>
      </div>
      <div className="slider-container">
        <Slider
          speed={500}
          dots
          slidesToShow={3}
          slidesToScroll={3}
          nextArrow={<NextArrow slideToShow={slideToShow} />}
          prevArrow={<PrevArrow />}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {donationsFilter.map((donation, i) => (
            <DonationCard
              key={i}
              imageSrc={donation.thumbnail}
              title={donation.title}
              totalDonation={donation.total_donation}
              lastDay={donation.expire_date}
              containerClass="mx-3 my-4"
              progress={donation.progress}
            />
          ))}
        </Slider>
      </div>
      <div className="flex items-baseline justify-between mt-20 gap-6 md:flex-row flex-col">
        <CardFeature
          image="/icon/ic-zakat100.svg"
          title="Zakat 100%"
          description="Tunaikan Zakat Anda melalui Program Zakat 100% Amanah."
        />
        <CardFeature
          image="/icon/ic-barang-berkah.svg"
          title="Barang Berkah"
          description="Yuk berikan barang bekas yang masih layak pakai untuk sahabat kita."
        />
        <CardFeature
          image="/icon/ic-amazing.svg"
          title="Amazing Box"
          description="Isi penuh Amazing Box selama 1 bulan, kembalikan kepada kami."
        />
      </div>
    </div>
  );
}
