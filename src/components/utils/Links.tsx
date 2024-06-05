import Link from '@docusaurus/Link';

interface SimpleTextLink {
  to: string;
  label?: string;
  classes?: string;
}

const SimpleTextLink: React.FC<SimpleTextLink> = ({ to, label, classes }) => {
  return (
    <Link
      to={to}
      className={`underline decoration-green-600  hover:decoration-amber-500 hover:underline ${classes}`}
    >
      {label}
    </Link>
  );
};

export { SimpleTextLink };
