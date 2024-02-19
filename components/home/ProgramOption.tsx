"use client";

import Slider from "react-slick";
import TitleSection from "../TitleSection";

import programs from "@/dummies/programs.json";
import { NextArrow, PrevArrow } from "../SliderArrow";
import CardOption from "../CardOption";

export default function ProgramOption() {
  return (
    <div className="mx-auto max-w-screen-lg pt-20">
      <div className="mb-6">
        <TitleSection
          title="Program Pilihan"
          description="Program-program terbaik dari Cinta QuraN Foundation untuk Sahabt Cinta Quran."
        />
      </div>
      <div>
        <div className="grid md:grid-cols-3 gap-6">
          <CardOption
            title={programs[0].title}
            description={programs[0].description}
            image={programs[0].image}
            height="420px"
            className="md:col-span-2 row"
          />
          <CardOption
            title={programs[1].title}
            description={programs[1].description}
            image={programs[1].image}
            height="auto"
          />
        </div>
      </div>
      <div className="slider-container mt-6">
        <Slider
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
          nextArrow={
            <NextArrow
              slideToShow={3}
              nextClass="-top-[720px] md:-top-[530px] right-6"
            />
          }
          prevArrow={
            <PrevArrow prevClass="-top-[720px] md:-top-[530px] mr-6" />
          }
          className="-mr-6"
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
          {programs.slice(2, programs.length - 1).map((program, i: number) => {
            return (
              <div key={i} className="pr-6 h-auto">
                <CardOption
                  title={program.title}
                  description={program.description}
                  image={program.image}
                  height="200px"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
