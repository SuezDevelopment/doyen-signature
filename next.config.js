/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.flos1-2.fna.fbcdn.net',
        port: '',
        pathname: '/v/**',
      },
    ],
  },
}

module.exports = nextConfig
