'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ExternalLink } from 'lucide-react'
import { animate, square } from 'styled-system/patterns'

import {
  Dialog,
  DialogBackdrop,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
} from '@ark-ui/react'
import ArticlesAccordion from './ArticlesAccordion'
import { HamburgerIcon } from './HamburgerIcon'

import { css, cx } from 'styled-system/css'

export default function MenuDrawerComponent() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Dialog
      modal={false}
      trapFocus={false}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    >
      {({ isOpen: _ }) => (
        <>
          <DialogTrigger
            className={cx(
              'group',
              css({
                h: '10',
                w: '10',
                borderWidth: '1px',
                borderColor: 'gray.200',
                bg: {
                  base: 'gray.50',
                  _hover: 'gray.100',
                },
                rounded: 'md',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color ease 0.2s',
                cursor: 'pointer',
              })
            )}
            aria-label="Menu"
          >
            <HamburgerIcon />
          </DialogTrigger>
          <Portal>
            <DialogBackdrop
              className={cx(
                css({
                  pos: 'fixed',
                  insetX: '0',
                  top: '14',
                  bottom: '0',
                  opacity: '0.4',
                  bg: 'black',
                  zIndex: '3',
                }),
                animate({
                  direction: 'enter',
                  opacity: '0',
                })
              )}
            />
            <DialogContainer
              className={css({
                pos: 'fixed',
                insetX: '0',
                top: '14',
                bottom: '0',
                zIndex: '3',
              })}
            >
              <DialogContent
                className={cx(
                  css({
                    pos: 'fixed',
                    bottom: '0',
                    top: '14',
                    right: '0',
                    bg: 'white',
                    maxWidth: 'sm',
                    w: 'full',
                    display: 'flex',
                    flexDirection: 'column',
                  }),
                  animate({
                    direction: 'enter',
                    duration: 'token(durations.fast)',
                    translateX: 'token(sizes.full)',
                  })
                )}
              >
                <DialogTitle
                  className={css({
                    py: '4',
                    px: '6',
                    fontSize: 'xl',
                    fontWeight: 'semibold',
                    borderBottomWidth: '1px',
                    borderBottomColor: 'slate.200',
                  })}
                >
                  Menu
                </DialogTitle>
                <div
                  className={css({
                    py: '2',
                    overflowY: 'auto',
                    flex: '1',
                  })}
                >
                  <ArticlesAccordion />
                </div>
                <div
                  className={css({
                    py: '3',
                    px: '6',
                    borderTopWidth: '1px',
                    borderTopColor: 'slate.200',
                  })}
                >
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mx: '-2',
                    })}
                  >
                    <div>
                      <Link
                        href="/disclaimer"
                        className={css({
                          px: '2',
                          py: '2',
                          color: {
                            base: 'gray.600',
                            _hover: 'gray.900',
                          },
                          fontWeight: 'medium',
                          fontSize: 'sm',
                        })}
                        // className="px-2 py-1 text-gray-700 hover:text-gray-900"
                      >
                        Disclaimer
                      </Link>
                    </div>
                    <div></div>
                    <div>
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
                          fontWeight: 'medium',
                          fontSize: 'sm',
                        })}
                        // className="flex items-center px-2 py-1 text-gray-700 hover:text-gray-900"
                        href="https://github.com/IHIutch/bufgreencode_v2/issues/new?assignees=&labels=&projects=&template=found-an-issue.yml"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span
                          className={css({
                            mr: '1',
                          })}
                          // className="mr-1"
                        >
                          Report an Issue
                        </span>
                        <span>
                          <ExternalLink
                            className={square({ size: '3' })}
                            // className="h-4 w-4"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </>
      )}
    </Dialog>
  )
}
