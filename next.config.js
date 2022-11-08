/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/gallery': { page: '/gallery' },
      '/infrastructure': { page: '/infrastructure' },
      '/proposal': { page: '/proposal' },
    }
  },
}

module.exports = nextConfig
