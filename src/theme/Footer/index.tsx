import React from 'react';

import { useThemeConfig } from '@docusaurus/theme-common';

import { SimpleTextLink } from '@site/src/components/utils';

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links } = footer;

  return (
    <footer className="flex flex-col m-auto mb-16 mt-32 items-center gap-6 max-w-7xl">
      <div className="flex gap-6">
        {links.map((link, index) => (
          <SimpleTextLink
            classes="text-black dark:text-white"
            key={`${link}-${index}`}
            to={link.to}
            label={link.label}
          />
        ))}
      </div>
      <div className="flex flex-col items-center">
        {copyright}
        <p className="text-xs italic">
          Icons created by{' '}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            Flaticon
          </a>
          .
        </p>
      </div>
      <a
        href="https://solspace.com/services/second-chair-development?_gl=1*17jxj3w*_ga*MTIyMjkzNTcwNy4xNjk2OTIwNDIy*_ga_ZH27K6C83C*MTcxNzU3MzMxMC4xNDAuMS4xNzE3NTc0NjMxLjExLjAuMTEyNTY4ODI2OA.."
        className="max-w-4xl bg-slate-200 dark:bg-gray-800 py-4 px-6 rounded-lg  hover:bg-gray-300 dark:hover:bg-emerald-900 transition duration-500 "
      >
        <p className="mb-0 text-sm text-gray-800 dark:text-white leading-6 text-center text--semibold ">
          Solspace is not just a plugin company. We also build and maintain
          websites. In fact, we often help other developers with their website
          builds. Learn more about our <b>second chair development services</b>{' '}
          today.
        </p>
      </a>
    </footer>
  );
}

export default React.memo(Footer);
