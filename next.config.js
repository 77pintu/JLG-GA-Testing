/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'media.go1static.com',
      },
      {
        protocol: 'https',
        hostname: 'cpcontents.adobe.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lynda.com',
      },
    ],
  },
}

module.exports = nextConfig
