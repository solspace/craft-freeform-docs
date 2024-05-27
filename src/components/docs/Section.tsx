import ThemedImage from '@theme/ThemedImage';

interface SectionProps {
  whiteImgSrc?: string;
  blackImgSrc?: string;
  imgAlt?: string;
  title: string;
  subtitle: string;
  description?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  whiteImgSrc,
  blackImgSrc,
  imgAlt,
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 w-full xl:w-3/4">
          {whiteImgSrc && blackImgSrc && (
            <div className="max-w-24">
              <ThemedImage
                alt={imgAlt || title}
                sources={{
                  light: blackImgSrc,
                  dark: whiteImgSrc,
                }}
              />
            </div>
          )}
          <h2 className="text-6xl font-normal text-amber-600 mb-2">{title}</h2>
          <h3 className="text-2xl text-center font-normal dark:text-gray-300 mb-4">
            {subtitle}
          </h3>
          {description && (
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
              {description}
            </p>
          )}
        </div>
      </div>

      {children}
    </section>
  );
};

export { Section };
