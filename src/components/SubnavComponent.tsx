'use client'

import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import clsx from 'clsx'
import { ExternalLink } from 'lucide-react'
import { square } from 'styled-system/patterns'

import * as Collapsible from '@radix-ui/react-collapsible'

import { css } from 'styled-system/css'

export default function SubnavComponent({
  children,
  section,
}: {
  children: ReactNode
  section?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [section])

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial')
  }, [isOpen])

  return (
    <div
      className={css({
        position: 'fixed',
        insetX: '0',
        top: '0',
        pt: { base: '14', lg: '16' },
        display: {
          md: 'none',
        },
      })}
      // className="fixed inset-x-0 top-0 pt-16 md:hidden"
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          bg: 'gray.100',
        })}
        // className="flex flex-col bg-gray-100"
      >
        <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
          <div
            className={css({
              position: 'sticky',
              top: '0',
              zIndex: '1',
              display: 'flex',
              h: '10',
              justifyContent: 'space-between',
              borderBottomWidth: '1px',
              borderBottomColor: 'gray.200',
              bg: 'gray.100',
            })}
            // className="sticky top-0 z-10 flex h-10 justify-between border-b bg-gray-100"
          >
            <div
              className={css({
                ml: 'auto',
                color: 'gray.600',
              })}
              // className="ml-auto text-gray-700 focus:text-gray-700"
            >
              <Collapsible.Trigger asChild>
                <button
                  type="button"
                  aria-label="Menu Toggle"
                  className={clsx(
                    { 'is-active': isOpen },
                    'hamburger hamburger--squeeze',
                    css({ display: 'flex!', h: 'full', alignItems: 'center' })
                    // '!flex h-full items-center''
                  )}
                >
                  <div className="hamburger-box">
                    <span className="hamburger-inner" />
                  </div>
                </button>
              </Collapsible.Trigger>
            </div>
          </div>
          <Collapsible.Content
            className={css({
              overflow: 'hidden',
              transition: 'all ease 0.2s',
              // _closed: 'animate-collapsable-up',
              // _open: 'animate-collapsable-down',

              // TODO: animate this collapse
            })}
            // className="overflow-hidden transition-all data-[state=closed]:animate-collapsable-up data-[state=open]:animate-collapsable-down"
          >
            <nav
              className={css({
                zIndex: '0',
                display: 'flex',
                maxH: 'calc(100vh-6.5rem)',
                flexGrow: '1',
                flexDir: 'column',
                justifyContent: 'space-between',
              })}
              // className="z-0 flex h-full max-h-[calc(100vh-6.5rem)] grow flex-col justify-between"
            >
              <div
                className={css({
                  h: 'full',
                  overflowY: 'auto',
                })}
                // className="h-full overflow-y-auto"
              >
                <div
                  className={css({ py: '2' })}
                  // className="py-2"
                >
                  {children}
                </div>
              </div>
              <div
                className={css({
                  pos: 'sticky',
                  bottom: '0',
                  zIndex: '1',
                  justifyContent: 'space-between',
                  borderTopWidth: '1px',
                  borderTopColor: 'gray.200',
                  bg: 'gray.100',
                  px: '6',
                  pb: '4',
                  pt: '2',
                })}
                // className="sticky bottom-0 z-10 flex justify-between border-t bg-gray-100 px-6 pb-4 pt-2"
              >
                <Link
                  href="/disclaimer"
                  className={css({
                    p: '2',
                    color: {
                      base: 'gray.600',
                      _hover: 'gray.900',
                    },
                  })}
                  // className="p-2 text-gray-700 hover:text-gray-900"
                >
                  Disclaimer
                </Link>
                <a
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    p: '2',
                    color: {
                      base: 'gray.600',
                      _hover: 'gray.900',
                    },
                  })}
                  // className="flex items-center p-2 text-gray-700 hover:text-gray-900"
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
            </nav>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </div>
  )
}
