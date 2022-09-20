// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Collapsenav.Net.Tool',
  tagline: '我觉得可以提升(我自己的)开发效率的dotnet工具包',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CollapseNav', // Usually your GitHub org/user name.
  projectName: 'CollapseNav Docs', // Usually your repo name.
  plugins: ['mdx-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          // editUrl: 'https://github.com/CollapseNav/Collapsenav.Net.Tool',
        },
        blog: {
          // showReadingTime: true,
          postsPerPage: 'ALL',
          blogTitle: '我的博客',
          blogDescription: '兴趣使然做的博客',
          // Please change this to your repo.
          // editUrl: 'https://github.com/CollapseNav/Collapsenav.Net.Tool',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
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
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'knowledge',
            label: '技术栈',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'markdown',
            label: 'MarkDown介绍',
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
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
};

module.exports = config;
