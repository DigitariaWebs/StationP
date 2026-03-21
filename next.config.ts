/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tiles.stadiamaps.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;