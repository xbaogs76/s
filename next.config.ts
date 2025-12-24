import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 性能优化
  compress: true,
  poweredByHeader: false,

  // 图片优化（移动端优先）
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7天缓存
  },

  // React 严格模式
  reactStrictMode: true,

  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

export default nextConfig;
