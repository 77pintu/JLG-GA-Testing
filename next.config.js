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
        hostname: 'cpcontents.adobe.com%25',
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
