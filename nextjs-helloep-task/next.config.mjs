/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
