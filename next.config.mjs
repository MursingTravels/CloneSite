const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // If deploying to a custom domain (like mursingtravels.com), leave basePath/assetPrefix empty
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  output: 'export', // Required for static export
}

export default nextConfig
