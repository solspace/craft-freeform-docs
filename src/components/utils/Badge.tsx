type BadgeType = 'lite' | 'pro' | 'feature' | 'addon' | 'recommended';

interface BadgeProps {
  type: BadgeType;
  text?: string;
}

interface BadgeGroupProps {
  children: React.ReactNode;
}

const badgeStyles: { [key in BadgeType]: string } = {
  lite: 'bg-gray-200 text-gray-800',
  pro: 'bg-gradient-to-r from-red-500 to-orange-500 text-white',
  feature: 'bg-gradient-to-r from-blue-800 to-violet-600 text-white',
  addon: 'bg-gradient-to-r from-amber-300 to-yellow-600 text-black',
  recommended: 'bg-gradient-to-r from-lime-700 to-lime-500 text-black',
};

const badgeIcons: { [key in BadgeType]?: string } = {
  lite: '&#9734;', // star outline
  pro: '&#9733;', // solid star
  recommended: '&#128077;', // thumbs up
};

const Badge: React.FC<BadgeProps> = ({ type, text }) => {
  return (
    <span
      className={`badge align-top !text-[10px] !font-bold mt-0.5 px-2 py-0.5 rounded-full ${badgeStyles[type]} ${type}`}
    >
      {badgeIcons[type] && (
        <span
          className="mr-1"
          dangerouslySetInnerHTML={{ __html: badgeIcons[type] }}
        />
      )}
      {text && <span>{text}</span>}
    </span>
  );
};

const BadgeGroup: React.FC<BadgeGroupProps> = ({ children }) => {
  return <div className="inline-table rounded badge-group">{children}</div>;
};

export { Badge, BadgeGroup };
