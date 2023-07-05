'use client'

import React from 'react'

import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
} from '@ark-ui/react'
import { HamburgerIcon } from './HamburgerIcon'

import { css, cx } from 'styled-system/css'

export default function MobileMenuComponent() {
  return (
    <Dialog>
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
          className={css({
            pos: 'fixed',
            inset: '0',
            opacity: '0.4',
            bg: 'black',
            zIndex: '3',
          })}
        />
        <DialogContainer
          className={css({
            pos: 'fixed',
            inset: '0',
            zIndex: '3',
          })}
        >
          <DialogContent
            className={css({
              minW: 'md',
              pos: 'relative',
              shadow: 'lg',
              bg: 'white',
              rounded: 'lg',
            })}
          >
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
            <DialogCloseTrigger>Close</DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  )
}
