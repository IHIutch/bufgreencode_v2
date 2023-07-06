'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { animate } from 'styled-system/patterns'

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

export default function MobileMenuComponent() {
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
      {({ isOpen }) => (
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
                  })}
                >
                  Menu
                </DialogTitle>
                <DialogDescription
                  className={css({
                    py: '2',
                  })}
                >
                  <ArticlesAccordion />
                </DialogDescription>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </>
      )}
    </Dialog>
  )
}
