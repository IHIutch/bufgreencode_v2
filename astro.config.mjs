import { defineConfig, envField } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://bufgreencode.com',
  integrations: [mdx(), react(), sitemap()],

  env: {
    schema: {
      PUBLIC_ALGOLIA_API_KEY: envField.string({
        context: 'client',
        access: 'public',
        default: '7925494f60a828f6fc5c4bf370b7649f',
      }),
      PUBLIC_ALGOLIA_APP_ID: envField.string({
        context: 'client',
        access: 'public',
        default: 'SJLG109BKU',
      }),
      PUBLIC_ALGOLIA_INDEX_NAME: envField.string({
        context: 'client',
        access: 'public',
        default: 'bufgreencode',
      }),
    },
  },

  redirects: {
    '/article/1': '/introductory-provisions/title-purpose-and-applicability',
    '/article/1/1-1':
      '/introductory-provisions/title-purpose-and-applicability',
    '/article/1/1-2': '/introductory-provisions/zoning-map',
    '/article/1/1-3':
      '/introductory-provisions/title-purpose-and-applicability',
    '/article/2': '/definitions-measurements/rules-of-interpretation',
    '/article/2/2-1': '/definitions-measurements/rules-of-interpretation',
    '/article/2/2-2': '/definitions-measurements/glossary-of-terms',
    '/article/2/2-3': '/definitions-measurements/measures-and-exceptions',
    '/article/3': '/neighborhood-zones/zone-descriptions',
    '/article/3/3-1': '/neighborhood-zones/zone-descriptions',
    '/article/3/3-2': '/neighborhood-zones/building-types',
    '/article/3/3-3': '/neighborhood-zones/frontage-elements',
    '/article/3/3-4': '/neighborhood-zones/overlays',
    '/article/4': '/district-zones/d-r-residential-campus',
    '/article/4/4-1': '/district-zones/d-r-residential-campus',
    '/article/4/4-2': '/district-zones/d-m-medical-campus',
    '/article/4/4-3': '/district-zones/d-e-educational-campus',
    '/article/4/4-4': '/district-zones/d-s-strip-retail',
    '/article/4/4-5': '/district-zones/d-c-flex-commercial',
    '/article/4/4-6': '/district-zones/d-il-light-industrial',
    '/article/4/4-7': '/district-zones/d-ih-heavy-industrial',
    '/article/4/4-8': '/district-zones/d-os-square',
    '/article/4/4-9': '/district-zones/d-og-green',
    '/article/4/4-10': '/district-zones/d-on-natural',
    '/article/5': '/corridor-zones/c-m-metro-rail',
    '/article/5/5-1': '/corridor-zones/c-m-metro-rail',
    '/article/5/5-2': '/corridor-zones/c-r-rail',
    '/article/5/5-3': '/corridor-zones/c-w-waterfront',
    '/article/6': '/uses/principal-uses',
    '/article/6/6-1': '/uses/principal-uses',
    '/article/6/6-2': '/uses/accessory-uses',
    '/article/6/6-3': '/uses/temporary-uses',
    '/article/7': '/site-development/landscape',
    '/article/7/7-1': '/site-development/landscape',
    '/article/7/7-2': '/site-development/fences-and-walls',
    '/article/7/7-3': '/site-development/stormwater',
    '/article/7/7-4': '/site-development/outdoor-lighting',
    '/article/7/7-5': '/site-development/corner-visibility',
    '/article/7/7-6': '/site-development/site-impacts',
    '/article/8': '/access-parking/pedestrian-access',
    '/article/8/8-1': '/access-parking/pedestrian-access',
    '/article/8/8-2': '/access-parking/bicycle-access-and-parking',
    '/article/8/8-3': '/access-parking/vehicle-access-and-parking',
    '/article/8/8-4': '/access-parking/transportation-demand-management',
    '/article/9': '/signs/signs',
    '/article/9/9-1': '/signs/signs',
    '/article/9/9-2': '/signs/on-premise-signs',
    '/article/9/9-3': '/signs/off-premise-signs',
    '/article/9/9-4': '/signs/exempt-signs',
    '/article/10': '/transportation-network/blocks',
    '/article/10/10-1': '/transportation-network/blocks',
    '/article/10/10-2': '/transportation-network/rights-of-way',
    '/article/11': '/administration-approvals/review-bodies-and-administration',
    '/article/11/11-1':
      '/administration-approvals/review-bodies-and-administration',
    '/article/11/11-2': '/administration-approvals/common-procedures',
    '/article/11/11-3': '/administration-approvals/zoning-approvals',
    '/article/11/11-4': '/administration-approvals/right-of-way-approvals',
    '/article/11/11-5': '/administration-approvals/subdivision-approvals',
    '/article/12': '/nonconformities-enforcement/nonconformities',
    '/article/12/12-1': '/nonconformities-enforcement/nonconformities',
    '/article/12/12-2': '/nonconformities-enforcement/enforcement',
    '/article/13': '/zoning-board-of-appeals/zoning-board-of-appeals',
    '/article/13/13-1': '/zoning-board-of-appeals/zoning-board-of-appeals',
    '/article/14':
      '/planned-unit-developments/planned-unit-developments-number-1-gates-circle-redevelopment',
    '/article/14/14-1':
      '/planned-unit-developments/planned-unit-developments-number-1-gates-circle-redevelopment',
  },
})
