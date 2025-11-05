import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  /*experimental: {
    ppr: 'incremental'
  },*/
  experimental: {
    cacheComponents: true
  }
  /*experimental: {
    cacheComponents: 'incremental'
  },*/
};


export default nextConfig;
