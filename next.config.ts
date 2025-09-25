/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.jsdelivr.net",  "avatars.githubusercontent.com"], // ✅ allow faker avatars
  },
};

export default nextConfig;