/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;