import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    config.experiments = {
      ...config.experiments,
      outputModule: false,
    };
    return config;
  },
};

export default nextConfig;
