interface ITitleSection {
  title: string;
  description?: string;
  containerClass?: string;
  titleClass?: string;
  descriptionClass?: string;
}

export default function TitleSection({
  title,
  description,
  containerClass,
  titleClass,
  descriptionClass,
}: ITitleSection) {
  return (
    <div className={`${containerClass}`}>
      <h1 className={`text-2xl md:text-5xl font-semibold mb-4 ${titleClass}`}>
        {title}
      </h1>
      <p className={`text-xs md:text-sm ${descriptionClass}`}>{description}</p>
    </div>
  );
}
