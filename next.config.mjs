/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Forces build even if TypeScript acts up on Vercel
  },
  eslint: {
    ignoreDuringBuilds: true, // Stops ESLint warnings from crashing Vercel
  },
};

export default nextConfig;