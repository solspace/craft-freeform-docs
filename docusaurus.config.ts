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
  url: 'https://emd.solspace.net',
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
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

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
              label: 'v5 [latest]',
              path: 'v5',
            },
          },
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        { to: '/support', label: 'Support', position: 'right' },
        {
          href: 'https://github.com/solspace',
          label: 'GitHub',
          position: 'right',
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
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: ['markup-templating', 'twig'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
