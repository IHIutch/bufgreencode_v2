import { withSentryConfig } from '@sentry/nextjs'
import { createContentlayerPlugin } from 'next-contentlayer'
import './utils/env.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=604800, stale-while-revalidate',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/article/1',
        destination: '/introductory-provisions/title-purpose-and-applicability',
        permanent: true,
      },
      {
        source: '/article/1/1-1',
        destination: '/introductory-provisions/title-purpose-and-applicability',
        permanent: true,
      },
      {
        source: '/article/1/1-2',
        destination: '/introductory-provisions/zoning-map',
        permanent: true,
      },
      {
        source: '/article/1/1-3',
        destination: '/introductory-provisions/title-purpose-and-applicability',
        permanent: true,
      },
      {
        source: '/article/2',
        destination: '/definitions-measurements/rules-of-interpretation',
        permanent: true,
      },
      {
        source: '/article/2/2-1',
        destination: '/definitions-measurements/rules-of-interpretation',
        permanent: true,
      },
      {
        source: '/article/2/2-1',
        destination: '/definitions-measurements/rules-of-interpretation',
        permanent: true,
      },
      {
        source: '/article/2/2-2',
        destination: '/definitions-measurements/glossary-of-terms',
        permanent: true,
      },
      {
        source: '/article/2/2-3',
        destination: '/definitions-measurements/measures-and-exceptions',
        permanent: true,
      },
      {
        source: '/article/3',
        destination: '/neighborhood-zones/zone-descriptions',
        permanent: true,
      },
      {
        source: '/article/3/3-1',
        destination: '/neighborhood-zones/zone-descriptions',
        permanent: true,
      },
      {
        source: '/article/3/3-2',
        destination: '/neighborhood-zones/building-types',
        permanent: true,
      },
      {
        source: '/article/3/3-3',
        destination: '/neighborhood-zones/frontage-elements',
        permanent: true,
      },
      {
        source: '/article/3/3-4',
        destination: '/neighborhood-zones/overlays',
        permanent: true,
      },
      {
        source: '/article/4',
        destination: '/district-zones/d-r-residential-campus',
        permanent: true,
      },
      {
        source: '/article/4/4-1',
        destination: '/district-zones/d-r-residential-campus',
        permanent: true,
      },
      {
        source: '/article/4/4-2',
        destination: '/district-zones/d-m-medical-campus',
        permanent: true,
      },
      {
        source: '/article/4/4-3',
        destination: '/district-zones/d-e-educational-campus',
        permanent: true,
      },
      {
        source: '/article/4/4-4',
        destination: '/district-zones/d-s-strip-retail',
        permanent: true,
      },
      {
        source: '/article/4/4-5',
        destination: '/district-zones/d-c-flex-commercial',
        permanent: true,
      },
      {
        source: '/article/4/4-6',
        destination: '/district-zones/d-il-light-industrial',
        permanent: true,
      },
      {
        source: '/article/4/4-7',
        destination: '/district-zones/d-ih-heavy-industrial',
        permanent: true,
      },
      {
        source: '/article/4/4-8',
        destination: '/district-zones/d-os-square',
        permanent: true,
      },
      {
        source: '/article/4/4-9',
        destination: '/district-zones/d-og-green',
        permanent: true,
      },
      {
        source: '/article/4/4-10',
        destination: '/district-zones/d-on-natural',
        permanent: true,
      },
      {
        source: '/article/5',
        destination: '/corridor-zones/c-m-metro-rail',
        permanent: true,
      },
      {
        source: '/article/5/5-1',
        destination: '/corridor-zones/c-m-metro-rail',
        permanent: true,
      },
      {
        source: '/article/5/5-2',
        destination: '/corridor-zones/c-r-rail',
        permanent: true,
      },
      {
        source: '/article/5/5-3',
        destination: '/corridor-zones/c-w-waterfront',
        permanent: true,
      },
      {
        source: '/article/6',
        destination: '/uses/principal-uses',
        permanent: true,
      },
      {
        source: '/article/6/6-1',
        destination: '/uses/principal-uses',
        permanent: true,
      },
      {
        source: '/article/6/6-2',
        destination: '/uses/accessory-uses',
        permanent: true,
      },
      {
        source: '/article/6/6-3',
        destination: '/uses/temporary-uses',
        permanent: true,
      },
      {
        source: '/article/7',
        destination: '/site-development/landscape',
        permanent: true,
      },
      {
        source: '/article/7/7-1',
        destination: '/site-development/landscape',
        permanent: true,
      },
      {
        source: '/article/7/7-2',
        destination: '/site-development/fences-and-walls',
        permanent: true,
      },
      {
        source: '/article/7/7-3',
        destination: '/site-development/stormwater',
        permanent: true,
      },
      {
        source: '/article/7/7-4',
        destination: '/site-development/outdoor-lighting',
        permanent: true,
      },
      {
        source: '/article/7/7-5',
        destination: '/site-development/corner-visibility',
        permanent: true,
      },
      {
        source: '/article/7/7-6',
        destination: '/site-development/site-impacts',
        permanent: true,
      },
      {
        source: '/article/8',
        destination: '/access-parking/pedestrian-access',
        permanent: true,
      },
      {
        source: '/article/8/8-1',
        destination: '/access-parking/pedestrian-access',
        permanent: true,
      },
      {
        source: '/article/8/8-2',
        destination: '/access-parking/bicycle-access-and-parking',
        permanent: true,
      },
      {
        source: '/article/8/8-3',
        destination: '/access-parking/vehicle-access-and-parking',
        permanent: true,
      },
      {
        source: '/article/8/8-4',
        destination: '/access-parking/transportation-demand-management',
        permanent: true,
      },
      {
        source: '/article/9',
        destination: '/signs/signs',
        permanent: true,
      },
      {
        source: '/article/9/9-1',
        destination: '/signs/signs',
        permanent: true,
      },
      {
        source: '/article/9/9-2',
        destination: '/signs/on-premise-signs',
        permanent: true,
      },
      {
        source: '/article/9/9-3',
        destination: '/signs/off-premise-signs',
        permanent: true,
      },
      {
        source: '/article/9/9-4',
        destination: '/signs/exempt-signs',
        permanent: true,
      },
      {
        source: '/article/10',
        destination: '/transportation-network/blocks',
        permanent: true,
      },
      {
        source: '/article/10/10-1',
        destination: '/transportation-network/blocks',
        permanent: true,
      },
      {
        source: '/article/10/10-2',
        destination: '/transportation-network/rights-of-way',
        permanent: true,
      },
      {
        source: '/article/11',
        destination: '/administration-approvals/review-bodies-and-administration',
        permanent: true,
      },
      {
        source: '/article/11/11-1',
        destination: '/administration-approvals/review-bodies-and-administration',
        permanent: true,
      },
      {
        source: '/article/11/11-2',
        destination: '/administration-approvals/common-procedures',
        permanent: true,
      },
      {
        source: '/article/11/11-3',
        destination: '/administration-approvals/zoning-approvals',
        permanent: true,
      },
      {
        source: '/article/11/11-4',
        destination: '/administration-approvals/right-of-way-approvals',
        permanent: true,
      },
      {
        source: '/article/11/11-5',
        destination: '/administration-approvals/subdivision-approvals',
        permanent: true,
      },
      {
        source: '/article/12',
        destination: '/nonconformities-enforcement/nonconformities',
        permanent: true,
      },
      {
        source: '/article/12/12-1',
        destination: '/nonconformities-enforcement/nonconformities',
        permanent: true,
      },
      {
        source: '/article/12/12-2',
        destination: '/nonconformities-enforcement/enforcement',
        permanent: true,
      },
      {
        source: '/article/13',
        destination: '/zoning-board-of-appeals/zoning-board-of-appeals',
        permanent: true,
      },
      {
        source: '/article/13/13-1',
        destination: '/zoning-board-of-appeals/zoning-board-of-appeals',
        permanent: true,
      },
      {
        source: '/article/14',
        destination: '/planned-unit-developments/planned-unit-developments-number-1-gates-circle-redevelopment',
        permanent: true,
      },
      {
        source: '/article/14/14-1',
        destination: '/planned-unit-developments/planned-unit-developments-number-1-gates-circle-redevelopment',
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withSentryConfig(withContentlayer(nextConfig), {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: true,

  org: 'jonathan-hutchison',
  project: 'bufgreencode',
}, {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: true,

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
})
