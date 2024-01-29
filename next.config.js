/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
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
      {
        protocol: 'https',
        hostname: 'stjlgprodstaticwebapp.blob.core.windows.net',
      },
    ],
  }
}

module.exports = nextConfig
