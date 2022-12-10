import fs from 'fs'
import Markdoc from '@markdoc/markdoc'
import yaml from 'js-yaml'
import { heading } from '~/markdoc/schema/heading.markdoc'

const getHeadings = (node, sections = []) => {
  if (node?.name) {
    // 'Heading' is defined in markdoc/schema/heading.markdoc.js
    if (node.name.match('Heading')) {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        })
      }
    }

    if (node.children) {
      for (const child of node.children) {
        getHeadings(child, sections)
      }
    }
  }

  return sections
}

export async function getArticles() {
  return [
    {
      frontmatter: {
        title: 'Bicycle Access and Parking',
        article: 'Access Parking',
        article_number: 8,
        section_number: 2,
      },
      slug: 'access-parking/bicycle-access-and-parking',
      articleSlug: 'access-parking',
    },
    {
      frontmatter: {
        title: 'Pedestrian Access',
        article: 'Access Parking',
        article_number: 8,
        section_number: 1,
      },
      slug: 'access-parking/pedestrian-access',
      articleSlug: 'access-parking',
    },
    {
      frontmatter: {
        title: 'Transportation Demand Management',
        article: 'Access Parking',
        article_number: 8,
        section_number: 4,
      },
      slug: 'access-parking/transportation-demand-management',
      articleSlug: 'access-parking',
    },
    {
      frontmatter: {
        title: 'Vehicle Access and Parking',
        article: 'Access Parking',
        article_number: 8,
        section_number: 3,
      },
      slug: 'access-parking/vehicle-access-and-parking',
      articleSlug: 'access-parking',
    },
    {
      frontmatter: {
        title: 'Common Procedures',
        article: 'Administration Approvals',
        article_number: 11,
        section_number: 2,
      },
      slug: 'administration-approvals/common-procedures',
      articleSlug: 'administration-approvals',
    },
    {
      frontmatter: {
        title: 'Review Bodies and Administration',
        article: 'Administration Approvals',
        article_number: 11,
        section_number: 1,
      },
      slug: 'administration-approvals/review-bodies-and-administration',
      articleSlug: 'administration-approvals',
    },
    {
      frontmatter: {
        title: 'Right-of-Way Approvals',
        article: 'Administration Approvals',
        article_number: 11,
        section_number: 4,
      },
      slug: 'administration-approvals/right-of-way-approvals',
      articleSlug: 'administration-approvals',
    },
    {
      frontmatter: {
        title: 'Subdivision Approvals',
        article: 'Administration Approvals',
        article_number: 11,
        section_number: 5,
      },
      slug: 'administration-approvals/subdivision-approvals',
      articleSlug: 'administration-approvals',
    },
    {
      frontmatter: {
        title: 'Zoning Approvals',
        article: 'Administration Approvals',
        article_number: 11,
        section_number: 3,
      },
      slug: 'administration-approvals/zoning-approvals',
      articleSlug: 'administration-approvals',
    },
    {
      frontmatter: {
        title: 'C-M Metro Rail',
        article: 'Corridor Zones',
        article_number: 5,
        section_number: 1,
      },
      slug: 'corridor-zones/c-m-metro-rail',
      articleSlug: 'corridor-zones',
    },
    {
      frontmatter: {
        title: 'C-R Rail',
        article: 'Corridor Zones',
        article_number: 5,
        section_number: 2,
      },
      slug: 'corridor-zones/c-r-rail',
      articleSlug: 'corridor-zones',
    },
    {
      frontmatter: {
        title: 'C-W Waterfront',
        article: 'Corridor Zones',
        article_number: 5,
        section_number: 3,
      },
      slug: 'corridor-zones/c-w-waterfront',
      articleSlug: 'corridor-zones',
    },
    {
      frontmatter: {
        title: 'Glossary of Terms',
        article: 'Definitions & Measurements',
        article_number: 2,
        section_number: 2,
        lead: 'For the purposes of this Ordinance, the following terms have the following meanings',
      },
      slug: 'definitions-measurements/glossary-of-terms',
      articleSlug: 'definitions-measurements',
    },
    {
      frontmatter: {
        title: 'Measures and Exceptions',
        article: 'Definitions & Measurements',
        article_number: 2,
        section_number: 3,
      },
      slug: 'definitions-measurements/measures-and-exceptions',
      articleSlug: 'definitions-measurements',
    },
    {
      frontmatter: {
        title: 'Rules of Interpretation',
        article: 'Definitions & Measurements',
        article_number: 2,
        section_number: 1,
      },
      slug: 'definitions-measurements/rules-of-interpretation',
      articleSlug: 'definitions-measurements',
    },
    {
      frontmatter: {
        title: 'D-C Flex Commercial',
        article: 'District Zones',
        article_number: 4,
        section_number: 5,
      },
      slug: 'district-zones/d-c-flex-commercial',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-E Educational Campus',
        article: 'District Zones',
        article_number: 4,
        section_number: 3,
      },
      slug: 'district-zones/d-e-educational-campus',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-IH Heavy Industrial',
        article: 'District Zones',
        article_number: 4,
        section_number: 7,
      },
      slug: 'district-zones/d-ih-heavy-industrial',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-IL Light Industrial',
        article: 'District Zones',
        article_number: 4,
        section_number: 6,
      },
      slug: 'district-zones/d-il-light-industrial',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-M Medical Campus',
        article: 'District Zones',
        article_number: 4,
        section_number: 2,
      },
      slug: 'district-zones/d-m-medical-campus',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-OG Green',
        article: 'District Zones',
        article_number: 4,
        section_number: 9,
      },
      slug: 'district-zones/d-og-green',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-ON Natural',
        article: 'District Zones',
        article_number: 4,
        section_number: 10,
      },
      slug: 'district-zones/d-on-natural',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-OS Square',
        article: 'District Zones',
        article_number: 4,
        section_number: 8,
      },
      slug: 'district-zones/d-os-square',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-R Residential Campus',
        article: 'District Zones',
        article_number: 4,
        section_number: 1,
      },
      slug: 'district-zones/d-r-residential-campus',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'D-S Strip Retail',
        article: 'District Zones',
        article_number: 4,
        section_number: 4,
      },
      slug: 'district-zones/d-s-strip-retail',
      articleSlug: 'district-zones',
    },
    {
      frontmatter: {
        title: 'Title, Purpose, and Applicability',
        article: 'Introductory Provisions',
        article_number: 1,
        section_number: 1,
      },
      slug: 'introductory-provisions/title-purpose-and-applicability',
      articleSlug: 'introductory-provisions',
    },
    {
      frontmatter: {
        title: 'Transition Rules',
        article: 'Introductory Provisions',
        article_number: 1,
        section_number: 3,
      },
      slug: 'introductory-provisions/transition-rules',
      articleSlug: 'introductory-provisions',
    },
    {
      frontmatter: {
        title: 'Zoning Map',
        article: 'Introductory Provisions',
        article_number: 1,
        section_number: 2,
      },
      slug: 'introductory-provisions/zoning-map',
      articleSlug: 'introductory-provisions',
    },
    {
      frontmatter: {
        title: 'Building Types',
        article: 'Neighborhood Zones',
        article_number: 3,
        section_number: 2,
      },
      slug: 'neighborhood-zones/building-types',
      articleSlug: 'neighborhood-zones',
    },
    {
      frontmatter: {
        title: 'Frontage Elements',
        article: 'Neighborhood Zones',
        article_number: 3,
        section_number: 3,
        slug: 'frontage-elements',
      },
      slug: 'neighborhood-zones/frontage-elements',
      articleSlug: 'neighborhood-zones',
    },
    {
      frontmatter: {
        title: 'Overlays',
        article: 'Neighborhood Zones',
        article_number: 3,
        section_number: 4,
        lead: 'Overlay zones are applied over one or more neighborhood zones, establishing additional or stricter standards and criteria for covered properties in addition to those of the underlying zone. These overlay zones are introduced to address special situations or achieve specific goals.',
      },
      slug: 'neighborhood-zones/overlays',
      articleSlug: 'neighborhood-zones',
    },
    {
      frontmatter: {
        title: 'Zone Descriptions',
        article: 'Neighborhood Zones',
        article_number: 3,
        section_number: 1,
      },
      slug: 'neighborhood-zones/zone-descriptions',
      articleSlug: 'neighborhood-zones',
    },
    {
      frontmatter: {
        title: 'Enforcement',
        article: 'Nonconformities Enforcement',
        article_number: 12,
        section_number: 2,
      },
      slug: 'nonconformities-enforcement/enforcement',
      articleSlug: 'nonconformities-enforcement',
    },
    {
      frontmatter: {
        title: 'Nonconformities',
        article: 'Nonconformities Enforcement',
        article_number: 12,
        section_number: 1,
      },
      slug: 'nonconformities-enforcement/nonconformities',
      articleSlug: 'nonconformities-enforcement',
    },
    {
      frontmatter: {
        title: 'Planned Unit Development Number & Gates Circle Redevelopment',
        article: 'Planned Unit Developments',
        article_number: 14,
        section_number: 1,
      },
      slug: 'planned-unit-developments/planned-unit-developments-number-1-gates-circle-redevelopment',
      articleSlug: 'planned-unit-developments',
    },
    {
      frontmatter: {
        title: 'Exempt Signs',
        article: 'Signs',
        article_number: 9,
        section_number: 4,
      },
      slug: 'signs/exempt-signs',
      articleSlug: 'signs',
    },
    {
      frontmatter: {
        title: 'Off-Premise Signs',
        article: 'Signs',
        article_number: 9,
        section_number: 3,
      },
      slug: 'signs/off-premise-signs',
      articleSlug: 'signs',
    },
    {
      frontmatter: {
        title: 'On-Premise Signs',
        article: 'Signs',
        article_number: 9,
        section_number: 2,
      },
      slug: 'signs/on-premise-signs',
      articleSlug: 'signs',
    },
    {
      frontmatter: {
        title: 'Signs',
        article: 'Signs',
        article_number: 9,
        section_number: 1,
      },
      slug: 'signs/signs',
      articleSlug: 'signs',
    },
    {
      frontmatter: {
        title: 'Corner Visibility',
        article: 'Site Development',
        article_number: 7,
        section_number: 5,
      },
      slug: 'site-development/corner-visibility',
      articleSlug: 'site-development',
    },
    {
      frontmatter: {
        title: 'Fences and Walls',
        article: 'Site Development',
        article_number: 7,
        section_number: 2,
      },
      slug: 'site-development/fences-and-walls',
      articleSlug: 'site-development',
    },
    {
      frontmatter: {
        title: 'Landscape',
        article: 'Site Development',
        article_number: 7,
        section_number: 1,
      },
      slug: 'site-development/landscape',
      articleSlug: 'site-development',
    },
    {
      frontmatter: {
        title: 'Outdoor Lighting',
        article: 'Site Development',
        article_number: 7,
        section_number: 4,
      },
      slug: 'site-development/outdoor-lighting',
      articleSlug: 'site-development',
    },
    {
      frontmatter: {
        title: 'Site Impacts',
        article: 'Site Development',
        article_number: 7,
        section_number: 6,
      },
      slug: 'site-development/site-impacts',
      articleSlug: 'site-development',
    },
    {
      frontmatter: {
        title: 'Stormwater',
        article: 'Site Development',
        article_number: 7,
        section_number: 3,
      },
      slug: 'site-development/stormwater',
      articleSlug: 'site-development',
    },
    {
      frontmatter: {
        title: 'Blocks',
        article: 'Transportation Network',
        article_number: 10,
        section_number: 1,
      },
      slug: 'transportation-network/blocks',
      articleSlug: 'transportation-network',
    },
    {
      frontmatter: {
        title: 'Rights-of-Way',
        article: 'Transportation Network',
        article_number: 10,
        section_number: 2,
      },
      slug: 'transportation-network/rights-of-way',
      articleSlug: 'transportation-network',
    },
    {
      frontmatter: {
        title: 'Accessory Uses',
        article: 'Uses',
        article_number: 6,
        section_number: 2,
      },
      slug: 'uses/accessory-uses',
      articleSlug: 'uses',
    },
    {
      frontmatter: {
        title: 'Principal Uses',
        article: 'Uses',
        article_number: 6,
        section_number: 1,
      },
      slug: 'uses/principal-uses',
      articleSlug: 'uses',
    },
    {
      frontmatter: {
        title: 'Temporary Uses',
        article: 'Uses',
        article_number: 6,
        section_number: 3,
      },
      slug: 'uses/temporary-uses',
      articleSlug: 'uses',
    },
    {
      frontmatter: {
        title: 'Zoning Board of Appeals',
        article: 'Zoning Board of Appeals',
        article_number: 13,
        section_number: 1,
      },
      slug: 'zoning-board-of-appeals/zoning-board-of-appeals',
      articleSlug: 'zoning-board-of-appeals',
    },
  ]
}

export async function getArticle({ article, section }) {
  try {
    const contentDir = `${__dirname}/articles`
    const source = fs.readFileSync(
      `${contentDir}/${article}/${section}.mdx`,
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        return data
      }
    )

    const ast = Markdoc.parse(source)
    const frontmatter = ast.attributes.frontmatter
      ? yaml.load(ast.attributes.frontmatter)
      : {}

    const content = Markdoc.transform(ast, {
      tags: {
        tableSmall: {
          render: 'TableSmall',
        },
        figureImg: {
          render: 'FigureImg',
          attributes: {
            caption: {
              type: 'String',
            },
          },
        },
        tableResponsive: {
          render: 'TableResponsive',
        },
        sup: {
          render: 'Sup',
        },
      },
      nodes: {
        heading,
      },
    })
    const headings = getHeadings(content)

    return { content, frontmatter, headings }
  } catch (error) {
    console.log(error)
    return null
  }
}
