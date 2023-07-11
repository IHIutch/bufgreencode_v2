import { type Metadata, type ResolvingMetadata } from 'next'

import { prose } from 'styled-system/recipes'

import { css } from 'styled-system/css'

export async function generateMetadata(
  _,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const pageName = 'Disclaimer'
  const parentMeta = await parent

  return {
    title: pageName,
    openGraph: {
      siteName: parentMeta?.openGraph?.siteName,
      title: {
        absolute: pageName,
      },
      description: parentMeta?.openGraph?.description,
      images: parentMeta?.openGraph?.images || [],
      url: '/disclaimer',
      locale: parentMeta?.openGraph?.locale,
    },
    twitter: {
      title: {
        absolute: pageName,
      },
      description: parentMeta?.twitter?.description || '',
      images: parentMeta?.twitter?.images || [],
      card: 'summary_large_image',
    },
  }
}

export default function Disclaimer() {
  return (
    <div
      className={css({
        my: '12',
        w: { base: 'full', xl: 'calc(100% - token(sizes.80))' },
        px: { base: '4', md: '8' },
      })}
      // className="my-12 w-full px-4 md:px-8 xl:w-[calc(100%-20rem)]"
    >
      <div
        className={css({
          maxW: 'prose',
          mx: { base: 'auto', md: '0', xl: 'auto' },
        })}
        // className="max-w-prose xl:mx-auto"
      >
        <h1
          className={css({
            mb: '6',
            fontSize: '5xl',
            fontWeight: 'medium',
            letterSpacing: 'tight',
          })}
          // className="mb-6 text-5xl font-medium leading-tight"
        >
          Disclaimer
        </h1>
        <div
          className={prose()}
          // className="prose"
        >
          <p
            className={css({
              fontSize: 'xl',
              lineHeight: 'relaxed',
              color: 'gray.600',
            })}
            // className="lead"
          >
            This site is an{' '}
            <span
              className={css({ fontWeight: 'semibold' })}
              // className="font-semibold"
            >
              unofficial
            </span>{' '}
            digitisation for the Buffalo Green Code. This is an open source
            project and is not affiliated with the City of Buffalo.
          </p>
          <p>
            The official Green Code can be found on the{' '}
            <a
              href="https://www.buffalony.gov/1224/Using-the-Unified-Development-Ordinance"
              target="_blank"
              rel="noreferrer"
              className={css({
                color: 'green.700',
                textDecoration: 'underline',
              })}
            >
              City of Buffalo&apos;s website.
            </a>
          </p>
          <p>
            We&apos;ve done our best to make this site as accurate as possible
            in order to make it easier to search and find important information.
            Any inaccurate or or out of date information is completely
            unintentional.
          </p>
          <p>
            If you find any errors or inaccuracies,{' '}
            <a
              href="https://github.com/IHIutch/bufgreencode_v2/issues/new?assignees=&labels=&projects=&template=found-an-issue.yml"
              target="_blank"
              rel="noreferrer"
              className={css({
                color: 'green.700',
                textDecoration: 'underline',
              })}
            >
              please let us know
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
