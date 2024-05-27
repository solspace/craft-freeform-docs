import Link from '@docusaurus/Link';

const SimpleTextLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="underline decoration-green-600  hover:decoration-amber-500 hover:underline"
    >
      {label}
    </Link>
  );
};

export { SimpleTextLink };
