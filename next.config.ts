import { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export', 
  assetPrefix: isProd ? '/store/' : '',
  basePath: isProd ? '/store' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
