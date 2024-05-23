import Link from '@docusaurus/Link';

const PrimaryButtonWithLink = ({ to, label, arrowDown = false }) => {
  return (
    <Link to={to} className="primary-btn">
      <span className={`${arrowDown ? 'arrow-down' : ''}`}>{label}</span>
    </Link>
  );
};

export { PrimaryButtonWithLink };
