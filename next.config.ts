// import type { NextConfig } from 'next';
// import type { Configuration } from 'webpack';

// const nextConfig: NextConfig = {
//   webpack(config: Configuration) {
//     config.module?.rules?.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// };

// export default nextConfig;

// next.config.js
// next.config.js
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack(config: Configuration, { isServer }: { isServer: boolean }) {
    const fileLoaderRule = config.module?.rules?.find((rule: any) =>
      rule.test?.toString().includes('.svg')
    );

    if (fileLoaderRule) {
      (fileLoaderRule as any).exclude = /\.svg$/i;
    }

    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
