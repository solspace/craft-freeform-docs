import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';
import {
  SimpleTextLink,
  PrimaryButtonWithLink,
} from '@site/src/components/utils';

const footer = {
  links: [
    { label: 'Home', to: '/' },
    { label: 'Support', to: 'https://docs.solspace.com/support/' },
    {
      label: 'Premium Support',
      to: 'https://docs.solspace.com/support/premium/',
    },
    {
      label: 'License Agreement',
      to: 'https://docs.solspace.com/license-agreement/',
    },
    {
      label: 'Legacy Account',
      to: 'https://docs.solspace.com/legacy-account/',
    },
  ],
  copyright: `© ${new Date().getFullYear()} Solspace, Inc.`,
};

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const { links, copyright } = footer;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}
    >
      {canDisplayTagsRow && (
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterTagsRow
          )}
        >
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          className={clsx(
            'margin-top--sm',
            ThemeClassNames.docs.docFooterEditMetaRow
          )}
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
        />
      )}
      <div className="flex flex-col m-auto mb-16 mt-32 items-center gap-6 max-w-7xl">
        <div className="pt-12 pb-12 px-6 md:px-12 lg:px-24 lg:pb-24 text-center rounded-lg transition-all duration-500">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">
            Need Extra Help?
          </h4>
          <p className="text-lg md:text-xl mb-8">
            Stuck on a tough development problem? Our expert team at Solspace is
            here to help you overcome any challenges and keep your projects on
            track.
          </p>
          <PrimaryButtonWithLink
            to="https://solspace.com/services/developer-support/"
            label="  Get Developer Support Now"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link, index) => (
            <SimpleTextLink
              classes="text-black dark:text-white"
              key={index}
              to={link.to}
              label={link.label}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <span>{copyright}</span>
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
          className="max-w-4xl bg-slate-200 dark:bg-gray-800 py-4 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-emerald-900 transition duration-500"
        >
          <p className="mb-0 text-sm text-gray-800 dark:text-white leading-6 text-center text--semibold">
            Solspace is not just a plugin company. We also build and maintain
            websites. In fact, we often help other developers with their website
            builds. Learn more about our{' '}
            <b>second chair development services</b> today.
          </p>
        </a>
      </div>
    </footer>
  );
}
