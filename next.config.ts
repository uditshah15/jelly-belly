import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // This is the key for Turbopack configuration
  turbopack: {
    // Example: Configuring a rule for SVG files
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    // Example: Configuring module aliases
    resolveAlias: {
      '@/components': './src/components',
      '@/styles': './src/styles',
    },
    // Example: Overriding default file extensions to resolve
    resolveExtensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
    ],
  },
  // Other Next.js configurations can go here as well
  reactStrictMode: true,
};

export default nextConfig;
