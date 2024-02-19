"use client";

import Slider from "react-slick";
import Card from "../Card";
import Image from "next/image";
import TitleSection from "../TitleSection";

export default function AmazingGroup() {
  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const settings2 = {
    ...settings1,
    slidesToShow: 6,
    slidesToScroll: 4,
  };
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <TitleSection title="Amazing Group" containerClass="mb-3" />
      </div>
      <div className="slider-container">
        <Slider {...settings1} autoplay>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqsi.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqc.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqs.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqf.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqc.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqsi.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqc.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqs.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqf.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6">
            <Card>
              <Image src="/logo/logo-cqc.svg" fill alt="logo cqsi" />
            </Card>
          </div>
        </Slider>
      </div>
      <div className="slider-container mt-3">
        <Slider {...settings2} autoplay>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqsi.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqc.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqs.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqf.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqc.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqsi.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqc.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqs.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqf.svg" fill alt="logo cqsi" />
            </Card>
          </div>
          <div className="pr-6 ml-3">
            <Card>
              <Image src="/logo/logo-cqc.svg" fill alt="logo cqsi" />
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
}
