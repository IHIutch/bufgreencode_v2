import Image from 'next/image'
import Link from 'next/link'

import { ExternalLink } from 'lucide-react'
import { square } from 'styled-system/patterns'

import Icon from '../../public/meta/bufgreencode-icon.svg'
import Logo from '../../public/meta/bufgreencode-logo.svg'
import MobileMenuComponent from './MobileMenuComponent'
import SearchComponent from './SearchComponent'

import { css } from 'styled-system/css'

export default function NavbarComponent() {
  return (
    <nav
      className={css({
        pos: 'relative',
        insetX: '0',
        display: 'flex',
        h: { base: '14', lg: '16' },
        flexShrink: '0',
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.200',
        bg: 'white',
      })}
      // className="relative inset-x-0 z-20 flex h-16 shrink-0 border-b border-gray-200 bg-white"
    >
      <div
        className={css({
          pos: 'relative',
          mx: 'auto',
          w: 'full',
          maxW: 'breakpoint-2xl',
        })}
        // className="relative mx-auto w-full max-w-screen-2xl"
      >
        <div
          className={css({
            display: 'flex',
            h: 'full',
            alignItems: 'center',
          })}
          // className="flex h-full items-center"
        >
          <div
            className={css({
              h: 'full',
              flexShrink: '0',
              w: {
                base: '16',
                md: '40',
                lg: '72',
                '2xl': '80',
              },
              pl: '4',
            })}
            // className="h-full w-16 shrink-0 pl-4 md:w-40 lg:w-72 2xl:w-80"
          >
            <div
              className={css({
                display: 'flex',
                h: 'full',
                alignItems: 'center',
              })}
              // className="flex h-full items-center"
            >
              <Link
                href="/"
                className={css({
                  display: 'block',
                  h: 'full',
                  w: 'full',
                  py: '1',
                  lg: {
                    mr: '4',
                    py: '2',
                  },
                })}
                // className="block h-full w-full py-2 lg:mr-4"
              >
                <Image
                  src={Icon}
                  alt="Buffalo Green Code"
                  className={css({
                    h: 'full',
                    w: 'auto',
                    md: {
                      display: 'none',
                    },
                  })}
                  // className="h-full w-auto md:hidden"
                />
                <Image
                  src={Logo}
                  alt="Buffalo Green Code"
                  className={css({
                    display: {
                      base: 'none',
                      md: 'block',
                    },
                    h: 'full',
                    w: 'auto',
                  })}
                  // className="hidden h-full w-auto md:block"
                />
              </Link>
            </div>
          </div>
          <div
            className={css({
              h: 'full',
              flex: '1',
              px: '4',
              md: {
                display: 'block',
                px: '8',
              },
              w: { base: 'full', xl: 'calc(100% - token(sizes.80))' },
            })}
            // className="h-full w-full flex-1 px-4 md:block md:px-8 xl:w-3/4"
          >
            <div
              className={css({
                display: 'flex',
                h: 'full',
                alignItems: 'center',
                mx: 'auto',
                maxW: 'prose',
                w: 'full',
              })}
              // className="flex h-full w-full items-center py-2"
            >
              <SearchComponent />
            </div>
          </div>
          <div>
            {/* Mobile */}
            <div
              className={css({
                h: 'full',
                alignItems: 'center',
                pr: '4',
                display: {
                  base: 'flex',
                  lg: 'none',
                },
              })}
            >
              <MobileMenuComponent />
            </div>
            {/* Desktop */}
            <div
              className={css({
                display: {
                  base: 'none',
                  lg: 'flex',
                },
                flexShrink: '0',
                alignItems: 'center',
                fontSize: 'sm',
                fontWeight: 'semibold',
                pr: '4',
                w: { xl: '80' },
              })}
              // className="hidden h-full shrink-0 items-center pr-4 text-sm font-medium md:flex lg:w-72 2xl:w-80"
            >
              <Link
                href="/disclaimer"
                className={css({
                  ml: '-2',
                  px: '2',
                  py: '2',
                  color: {
                    base: 'gray.600',
                    _hover: 'gray.900',
                  },
                })}
                // className="px-2 py-1 text-gray-700 hover:text-gray-900"
              >
                Disclaimer
              </Link>
              <a
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  px: '2',
                  py: '2',
                  color: {
                    base: 'gray.600',
                    _hover: 'gray.900',
                  },
                })}
                // className="flex items-center px-2 py-1 text-gray-700 hover:text-gray-900"
                href="https://github.com/IHIutch/bufgreencode_v2"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className={css({
                    mr: '1',
                  })}
                  // className="mr-1"
                >
                  Source Code
                </span>
                <span>
                  <ExternalLink
                    className={square({ size: '4' })}
                    // className="h-4 w-4"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
