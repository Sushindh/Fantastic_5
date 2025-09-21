/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: isProd
          ? "https://socialguard-api.onrender.com/:path*" // 👈 your Render FastAPI URL
          : "http://localhost:8000/:path*", // 👈 local dev FastAPI
      },
    ];
  },
};

export default nextConfig;
