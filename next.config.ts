import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration for cPanel
  output: 'export',
  trailingSlash: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization - modified for static export
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Note: turbo config removed as it may not work well with static export
  },

  // Note: Headers are disabled for static export
  // Configure these headers in your web server (Apache, Nginx, etc.) instead
  // async headers() { ... }

  // Bundle analyzer in development
  webpack: (config, { dev, isServer }) => {
    // Optimize imports
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    // Bundle analyzer for development
    if (dev && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: false,
        })
      );
    }

    return config;
  },
};

export default nextConfig;