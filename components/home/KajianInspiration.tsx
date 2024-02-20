"use client";

import { useState } from "react";
import MyButton from "../Button";
import TitleSection from "../TitleSection";

import kajianInspiration from "@/dummies/kajianInspiratif.json";
import kajianCategories from "@/dummies/kajianCategories.json";
import CardOption from "../CardOption";

export default function KajianInspiration() {
  const [selectedKajian, setSelectedKajian] = useState("all");

  const kajiansFilter =
    kajianInspiration.filter(
      (kajian) => kajian.category === selectedKajian || selectedKajian === "all"
    ) ?? [];

  return (
    <div className="mx-auto max-w-[1140px] py-20 -mt-32">
      <div className="text-center">
        <TitleSection
          title="Kajian Inspiratif"
          description="Program kajian inspiratif dari kami untuk menemani aktivitas Sahabat Cinta Qur’an."
        />
        <div className="flex flex-wrap justify-between my-8">
          {kajianCategories.slice(0, 4).map((category) => (
            <MyButton
              key={category.name}
              leftIcon={<img src={category.icon} alt={category.name} />}
              onClick={() => {
                setSelectedKajian(category.name);
              }}
              className={`${
                selectedKajian === category.name &&
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
        <div className="grid md:grid-cols-6 gap-6 h-auto">
          {kajiansFilter.map((kajian, i) => (
            <CardOption
              key={i}
              image={kajian.image}
              title={kajian.category === "berlangsung" ? kajian.title : ""}
              date={kajian.category === "berlangsung" ? kajian.date : ""}
              time={kajian.category === "berlangsung" ? kajian.time : ""}
              isLive={kajian.category === "berlangsung"}
              smallTitle={
                kajian.category === "berlangsung" ? kajian.creator : ""
              }
              height="auto"
              className={`${
                kajian.category === "berlangsung"
                  ? "md:h-[520px] h-[420px]"
                  : "md:h-[158px] h-[100px]"
              } ${
                kajian.category === "berlangsung" &&
                "col-span-3 row-span-3 text-start"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
