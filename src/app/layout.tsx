import type { ReactNode } from 'react'

import ArticlesAccordion from '@/components/ArticlesAccordion'
import NavbarComponent from '@/components/NavbarComponent'

import '../index.css'

import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import { css, cx } from 'styled-system/css'

export const runtime = 'edge'
export const preferredRegion = 'home'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata(): Metadata {
  const siteName = 'Buffalo Green Code'
  const siteUrl = 'https://bufgreencode.com'
  const description = 'Buffalo Green Code Unified Development Ordinance'
  const imageUrl = '/meta/meta-img.png'
  const imageAlt =
    'The city of buffalo overlayed with a semitransparent green background and the Buffalo Green Code logo in the middle'
  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: `%s · ${siteName}`,
      default: siteName,
    },
    description: description,
    openGraph: {
      siteName: siteName,
      title: {
        template: `%s · ${siteName}`,
        default: siteName,
      },
      description: description,
      url: '/',
      images: {
        url: imageUrl,
        alt: imageAlt,
      },
      type: 'website',
      locale: 'US_en',
    },
    twitter: {
      title: {
        template: `%s · ${siteName}`,
        default: siteName,
      },
      description: description,
      images: {
        url: imageUrl,
        alt: imageAlt,
      },
      card: 'summary_large_image',
    },
  }
}

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={css({ h: 'full' })}>
      <body
        className={cx(
          inter.className,
          css({
            // fontSmoothing: 'antialiased',
            h: 'full',
            pt: { base: '14', lg: '16' },
          })
        )}
        // className="antialiased"
      >
        <div
          className={css({
            pos: 'fixed',
            top: '0',
            zIndex: '4',
            w: 'full',
          })}
          // className="fixed top-0 z-10 w-full"
        >
          <NavbarComponent />
          {/* <SubnavComponent>
            <ArticlesAccordion />
          </SubnavComponent> */}
        </div>
        <div
          className={css({
            h: 'full',
            overflowY: 'auto',
          })}
        >
          <div
            className={css({
              maxWidth: 'breakpoint-2xl',
              mx: 'auto',
            })}
            // className="mx-auto flex max-w-screen-2xl"
          >
            <div
              className={css({
                pos: 'fixed',
                top: '0',
                display: {
                  base: 'none',
                  lg: 'block',
                },
                h: 'full',
                pt: '16',
                w: {
                  lg: '72',
                  '2xl': '80',
                },
              })}
              // className="fixed top-0 hidden h-full shrink-0 pt-16 md:block md:w-72 2xl:w-80"
            >
              <nav
                className={css({
                  pos: 'sticky',
                  h: 'full',
                  overflowY: 'auto',
                  borderRightColor: 'gray.200',
                  borderRightWidth: '1px',
                })}
                // className="sticky h-full overflow-y-auto border-r"
              >
                <div
                  className={css({
                    py: '8',
                  })}
                  // className="py-8"
                >
                  <ArticlesAccordion />
                </div>
              </nav>
            </div>
            <main
              className={css({
                // pos: 'fixed',
                pl: { lg: '72', '2xl': '80' },
              })}
              // className="w-full pt-20 md:ml-72 md:pt-16 2xl:ml-80"
            >
              {/* <div className={css({ h: 'full',  })}> */}
              {children}
              {/* </div> */}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
