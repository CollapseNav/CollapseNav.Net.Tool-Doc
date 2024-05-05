// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CollapseNav个人站',
  tagline: '我觉得可以提升(我自己的)开发效率的dotnet工具包',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CollapseNav', // Usually your GitHub org/user name.
  projectName: 'CollapseNav Docs', // Usually your repo name.
  markdown: {
    mermaid: true
  },
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'other',
        path: 'other',
        routeBasePath: 'other',
        sidebarPath: require.resolve('./sidebarsOther.js'),
      }),

    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          // showReadingTime: true,
          postsPerPage: 'ALL',
          blogTitle: '我的博客',
          blogDescription: '兴趣使然做的博客',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ]
  ],
  themes: ['@docusaurus/theme-mermaid',
    [
      "@easyops-cn/docusaurus-search-local",
      ({
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexPages: true,
        indexBlog: true,
        indexDocs: true,
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'CollapseNav个人站',
        logo: {
          alt: 'My Site Logo',
          src: './img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'pack_intro',
            position: 'left',
            label: 'Tool文档',
          },
          {
            to: '/other/knowledge',
            label: '技术栈',
            position: 'left',
            activeBaseRegex: `/other/knowledge/`,
          },
          {
            to: '/other/Dotnet',
            label: 'Dotnet',
            position: 'left',
            activeBaseRegex: `/other/Dotnet/`,
          },
          {
            to: '/other/docusaurus/',
            label: 'docusaurus',
            position: 'left',
            activeBaseRegex: `/other/docusaurus/`,
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/CollapseNav/Collapsenav.Net.Tool',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Repo',
                href: 'https://github.com/CollapseNav/Collapsenav.Net.Tool',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/zh-CN/',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Nuget',
                href: 'https://www.nuget.org/packages?q=Collapsenav.Net.Tool',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CollapseNav/Collapsenav.Net.Tool',
              },
              {
                label: 'Author',
                href: 'https://github.com/CollapseNav',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CollapseNav, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-error-line',
            line: 'error-next-line',
            block: {
              start: 'error-start', end: 'error-end'
            }
          }
        ]
      },
    }),
};

module.exports = config;
