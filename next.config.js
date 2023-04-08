/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'signaturesbydoyen.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env:{
    GET_KEY: process.env.GET_KEY,
    POST_KEY: process.env.POST_KEY,
    API_BASE_URL: process.env.API_BASE_URL,
  },
}

module.exports = nextConfig
