import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import tailwind from './plugins/tailwind-config.cjs';
import docusaurusGithubRemoteContent from './plugins/docusaurus-github-remote-content';

import type { Options as IdealImageOptions } from '@docusaurus/plugin-ideal-image';

const config: Config = {
  title: 'Freeform for Craft',
  tagline: 'Freeform is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://emd.solspace.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/craft/freeform',

  // Static directory
  staticDirectories: ['static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'solspace', // Usually your GitHub org/user name.
  projectName: 'freefrom-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-GB',
  //     },
  //   },
  // },

  // Mermaid
  markdown: {
    mermaid: true,
  },

  // Themes
  themes: ['@docusaurus/theme-mermaid'],

  // External plugins
  plugins: [
    [
      docusaurusGithubRemoteContent,
      {
        contents: [
          {
            version: 5,
            saveDir: 'docs/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-freeform/v5/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 5,
            },
          },
          {
            version: 4,
            saveDir: 'versioned_docs/version-v4/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-freeform/v4/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 5,
            },
          },
          {
            version: 3,
            saveDir: 'versioned_docs/version-v3/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-freeform/v3/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 5,
            },
          },
          {
            version: 2,
            saveDir: 'versioned_docs/version-v2/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-freeform/v2/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 5,
            },
          },
        ],
      },
    ],
    tailwind,
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 90,
        max: 2040, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      } satisfies IdealImageOptions,
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: '5.x',
              path: 'v5',
              badge: false,
            },
            v4: {
              label: '4.x',
              path: 'v4',
              badge: false,
            },
            v3: {
              label: '3.x',
              path: 'v3',
              badge: false,
            },
            v2: {
              label: '2.x',
              path: 'v2',
              badge: false,
            },
            v1: {
              label: '1.x',
              path: 'v1',
              badge: false,
            },
          },
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          admonitions: {
            keywords: ['youtube', 'guide'],
            extendDefaults: true,
          },
          editUrl:
            'https://github.com/solspace/craft-freeform-docs/edit/develop',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Algolia search
    algolia: {
      appId: '1DT1X6GS6A',
      apiKey: '31f6b0738d7142090aea0e2191164eaa',
      indexName: 'emd-solspace',
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },

    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Freeform for Craft',
      logo: {
        alt: 'Freeform',
        src: 'img/freeform-icon.png',
      },
      items: [
        { to: '/v5/', label: 'Docs', position: 'left' },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          label: 'Docs',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        { to: '/support', label: 'Support', position: 'right' },
        {
          type: 'html',
          position: 'right',
          className: 'github-icon',
          value:
            '<a href="https://github.com/solspace/craft-freeform/"><svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="fill-gray-700 dark:fill-white h-6 w-6 mt-2"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a>',
        },
      ],
    },
    footer: {
      links: [
        {
          label: 'Home',
          to: '/',
        },
        {
          label: 'Support',
          to: 'https://docs.solspace.com/support/',
        },
        {
          label: 'Premium Support',
          to: 'hhttps://docs.solspace.com/support/premium/',
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
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,

      additionalLanguages: ['markup-templating', 'twig'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
