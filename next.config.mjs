/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
