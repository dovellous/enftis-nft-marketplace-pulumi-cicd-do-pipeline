const fs = require('fs')
const path = require('path')

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8')
)
const env = process.env.NEXT_PUBLIC_ENV
const release = `${pkg.name}@${pkg.version}-${env}`

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer(
  {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // distDir: 'build',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is 'basePath-ready'.
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
    appDir: true,
  },
  images: {
    loader: 'custom',
  },
  redirects: async function () {
    return [
      {
        source: '/blog/post/:path*',
        destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/posts/:path*`,
        permanent: false,
      },
    ]
  },
  exportPathMap: async function () {
    return {
      '/404.html': { page: '/404' },
      '/docs/': { page: '/docs/quickstart', statusCode: 301 }
    }
  },
})

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

const config = withNextra({ ...nextConfig })

module.exports = nextConfig
