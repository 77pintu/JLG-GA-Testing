/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
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
  output: "standalone",
}

module.exports = nextConfig
