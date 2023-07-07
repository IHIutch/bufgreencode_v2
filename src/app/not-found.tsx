import Link from 'next/link'

import { prose } from 'styled-system/recipes'

import { css } from 'styled-system/css'

export default function NotFound() {
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
          404
        </h1>
        <div className={prose()}>
          <p
            className={css({
              mb: '8',
              fontSize: 'lg',
              color: 'gray.600',
            })}
            // className="mb-8 text-lg text-gray-700"
          >
            Looks like you found a page that doesn&apos;t exist.
          </p>
          <p>
            If you think this is a bug, please{' '}
            <a
              href="https://github.com/IHIutch/bufgreencode_v2/issues/new?assignees=&labels=&projects=&template=found-an-issue.yml"
              target="_blank"
              rel="noreferrer"
              className={css({
                color: 'green.700',
                textDecoration: 'underline',
              })}
            >
              report it
            </a>
            . Otherwise, return to the{' '}
            <Link
              href="/"
              className={css({
                color: 'green.700',
                textDecoration: 'underline',
              })}
            >
              home page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
