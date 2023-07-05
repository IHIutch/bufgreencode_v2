'use client'

import React from 'react'

import clsx from 'clsx'

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

import { css } from 'styled-system/css'

export default function MobileMenuComponent() {
  return (
    <Dialog>
      <DialogTrigger
        className={clsx(
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
        <DialogBackdrop />
        <DialogContainer>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
            <DialogCloseTrigger>Close</DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  )
}
