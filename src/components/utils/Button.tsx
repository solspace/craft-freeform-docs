import Link from '@docusaurus/Link';

interface PrimaryButtonWithLink {
  to: string;
  label?: string;
  arrowDown?: boolean;
  classes?: string;
}

interface ButtonProps {
  items: PrimaryButtonWithLink[];
}

const PrimaryButtonWithLink: React.FC<PrimaryButtonWithLink> = ({
  to,
  label,
  arrowDown = false,
  classes,
}) => {
  return (
    <Link to={to} className={`primary-btn ${classes}`}>
      <span className={`${arrowDown ? 'arrow-down' : ''}`}>
        {label || 'Learn more'}
      </span>
    </Link>
  );
};

const FlexButton: React.FC<ButtonProps> = ({ items }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <PrimaryButtonWithLink
            to={item.to}
            label={item.label || 'Learn more'}
            arrowDown={item?.arrowDown || false}
          />
        ))}
      </div>
    </div>
  );
};

export { PrimaryButtonWithLink, FlexButton };
