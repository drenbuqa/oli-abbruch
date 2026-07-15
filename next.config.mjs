/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Ensures CSS is always included as a proper <link> tag, not injected by JS
  // This prevents the "unstyled flash" when the JS bundle is slow to execute
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
