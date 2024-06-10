import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';

import { SimpleTextLink, Badge } from '@site/src/components/utils';

interface CardProps {
  fullCardLink?: string;
  linkWithDescription?: string;
  linkWithDescriptionLabel?: string;
  title: string;
  titleBadge?: string;
  description: string;
  imgAlt?: string;
  imgSrc?: string;
}

interface FieldProps {
  link: string;
  title: string;
  titleBadge?: string;
  description: string;
  imgSrc?: string;
  imgAlt?: string;
}

interface IntegrationPhotoProps {
  title: string;
  iconSrc: string;
  link: string;
}

interface IntegrationPhotoCardsProps {
  items: IntegrationPhotoProps[];
}

interface CardSectionProps {
  items: CardProps[];
}

interface FieldCardsProps {
  items: FieldProps[];
}

const Card: React.FC<CardProps> = ({
  fullCardLink,
  linkWithDescription,
  linkWithDescriptionLabel,
  title,
  titleBadge,
  description,
  imgSrc,
  imgAlt,
}) => {
  if (fullCardLink) {
    return (
      <Link
        to={fullCardLink}
        className="group flex flex-row gap-2 border rounded-lg bg-gray-100 py-2 px-3 max-w-80 2xl:max-w-fit transition-all duration-500 dark:text-white dark:bg-slate-800 hover:bg-sky-400 hover:dark:bg-sky-400"
      >
        <div className="max-w-10 pt-2">
          {imgSrc && (
            <Image alt={imgAlt || title} className="opacity-85" img={imgSrc} />
          )}
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-0 text-black dark:text-white">
            {title}
            {titleBadge && <Badge type="feature" text={titleBadge} />}
          </h3>
          <p className="text-gray-700 mb-1 dark:text-gray-300 transition-all duration-500 dark:group-hover:text-gray-50 ">
            {description}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="group flex flex-row gap-2 border rounded-lg py-2 px-3 max-w-80 2xl:max-w-fit transition-all duration-500 dark:text-white">
      <div className="max-w-10 pt-2">
        {imgSrc && (
          <Image alt={imgAlt || title} className="opacity-85	" img={imgSrc} />
        )}
      </div>
      <div className="">
        <h3 className="text-lg font-semibold mb-0 text-black dark:text-white">
          {title}
          {titleBadge && <Badge type="feature" text={titleBadge} />}
        </h3>
        <p className="text-gray-700 mb-1 dark:text-gray-300 ">
          {description}{' '}
          {linkWithDescription && (
            <SimpleTextLink
              to={linkWithDescription}
              label={
                linkWithDescriptionLabel
                  ? linkWithDescriptionLabel
                  : 'Learn more'
              }
            />
          )}
        </p>
      </div>
    </div>
  );
};

const FlexCards: React.FC<CardSectionProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap p-6 2xl:grid 2xl:grid-cols-3 justify-center gap-4">
      {items.map((item, index) => (
        <Card
          key={`flex-cards-${index}`}
          fullCardLink={item.fullCardLink}
          linkWithDescription={item.linkWithDescription}
          linkWithDescriptionLabel={item.linkWithDescriptionLabel}
          title={item.title}
          titleBadge={item?.titleBadge}
          description={item.description}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
        />
      ))}
    </div>
  );
};

const FieldCards: React.FC<FieldCardsProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 py-6 my-10 gap-4">
      {items.map((item, index) => (
        <Link
          key={`field-cards-${index}`}
          to={item.link}
          className="group flex flex-col items-center gap-2 border rounded-lg bg-gray-100 py-7 px-10 max-w-80 transition-all duration-500 dark:text-white dark:bg-slate-800 hover:bg-gray-200 hover:dark:bg-slate-900"
        >
          <div className="max-w-10 pt-4">
            <Image
              alt={item.imgAlt || item.title}
              className="opacity-85	"
              img={item.imgSrc}
            />
          </div>
          <div className="text-center pb-4">
            <h3 className="flex justify-center text-base font-semibold mb-0 text-black dark:text-white">
              {item.title}{' '}
              {item.titleBadge && (
                <Badge type="feature" text={item.titleBadge} />
              )}
            </h3>
            <p className="text-xs mb-1 text-gray-800 dark:text-gray-300 transition-all duration-500 dark:group-hover:text-gray-50 ">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const PhotoCards: React.FC<IntegrationPhotoCardsProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <a
          key={`${item.title}-${index}`}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-3 m-2 bg-gray-800 !dark:bg-red rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
        >
          <Image img={item.iconSrc} alt={item.title} />
        </a>
      ))}
    </>
  );
};

const IntegrationPhotoCards: React.FC<IntegrationPhotoCardsProps> = ({
  items,
}) => {
  return (
    <div className="relative block overflow-hidden mt-10 min-h-[650px] rounded-lg">
      <div className="api-grid-wrapper-inner">
        <div className="api-grid-wrapper-outer">
          <div className="feature-grid feature-api-grid">
            {[...Array(2)].map((_value: undefined, index: number) => (
              <PhotoCards key={index} items={items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card, FlexCards, FieldCards, IntegrationPhotoCards };
