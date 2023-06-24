/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
}

const { withContentlayer } = require('next-contentlayer')
module.exports = withContentlayer({ ...nextConfig })
