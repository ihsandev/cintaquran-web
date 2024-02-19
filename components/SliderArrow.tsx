import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function NextArrow(props: any) {
  const { onClick, currentSlide, slideCount, slideToShow, nextClass } = props;
  return (
    <button
      className={`h-12 w-12 absolute -top-44 md:-top-36 right-0 border-2 border-accents-color rounded-full flex items-center justify-center ${
        slideCount - currentSlide === slideToShow && "opacity-50"
      } ${nextClass}`}
      onClick={onClick}
      disabled={currentSlide + slideToShow === slideCount}
    >
      <FiChevronRight size={33} className="text-accents-color" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick, currentSlide, prevClass } = props;
  return (
    <button
      className={`h-12 w-12 absolute -top-44 md:-top-36 right-16 border-2 border-accents-color rounded-full flex items-center justify-center ${
        currentSlide === 0 && "opacity-50"
      } ${prevClass}`}
      onClick={onClick}
      disabled={currentSlide === 0}
    >
      <FiChevronLeft size={33} className="text-accents-color" />
    </button>
  );
}

export { NextArrow, PrevArrow };
